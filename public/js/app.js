// Main Client Application Logic for d'María Bakery
let dessertsData = [];
let bakeryInfo = {
  name: "d'María",
  whatsapp: "15553827421",
  email: "pedidos@dmaria.com",
  minLeadDays: 3
};

document.addEventListener('DOMContentLoaded', async () => {
  // Initialize language
  const currentLang = getCurrentLang();
  setLanguage(currentLang);

  // Setup language toggle buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const chosenLang = btn.dataset.lang;
      setLanguage(chosenLang);
    });
  });

  // Listen for language changes to re-render desserts & dynamic form fields
  window.addEventListener('languageChanged', (e) => {
    const lang = e.detail.lang;
    renderDesserts(lang);
    updateFormSizesDropdown(lang);
    updateLivePreview();
  });

  // Setup lead time on the date input
  setupDatePicker();

  // Load backend data
  await loadBakeryInfo();
  await loadDesserts();

  // Setup Form Handlers & Live Preview
  setupFormListeners();

  // Setup Mobile Nav Toggle
  setupMobileNav();

  // Setup Modal close listeners
  setupModal();
});

// Configure minimum date (lead time)
function setupDatePicker() {
  const dateInput = document.getElementById('eventDate');
  if (!dateInput) return;

  const now = new Date();
  const minDays = bakeryInfo.minLeadDays || 3;
  now.setDate(now.getDate() + minDays);

  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const minDateStr = `${yyyy}-${mm}-${dd}`;

  dateInput.min = minDateStr;
  
  // Set default suggested date (min + 1)
  const defaultDate = new Date(now);
  defaultDate.setDate(defaultDate.getDate() + 1);
  const defY = defaultDate.getFullYear();
  const defM = String(defaultDate.getMonth() + 1).padStart(2, '0');
  const defD = String(defaultDate.getDate()).padStart(2, '0');
  dateInput.value = `${defY}-${defM}-${defD}`;
}

// Fetch Bakery general info
async function loadBakeryInfo() {
  try {
    const res = await fetch('/api/info');
    if (res.ok) {
      const data = await res.json();
      bakeryInfo = { ...bakeryInfo, ...data.data };
      updateContactInfoDOM();
    }
  } catch (err) {
    console.warn('Using default bakery info:', err);
  }
}

function updateContactInfoDOM() {
  const lang = getCurrentLang();
  document.querySelectorAll('.contact-phone-text').forEach((el) => {
    el.textContent = bakeryInfo.phone;
  });
  document.querySelectorAll('.contact-email-text').forEach((el) => {
    el.textContent = bakeryInfo.email;
    if (el.tagName === 'A') el.href = `mailto:${bakeryInfo.email}`;
  });
  document.querySelectorAll('.contact-address-text').forEach((el) => {
    el.textContent = lang === 'es' ? bakeryInfo.addressEs : bakeryInfo.address;
  });
  document.querySelectorAll('.contact-hours-text').forEach((el) => {
    el.textContent = lang === 'es' ? bakeryInfo.hoursEs : bakeryInfo.hoursEn;
  });
}

// Fetch Desserts
async function loadDesserts() {
  try {
    const res = await fetch('/api/desserts');
    if (res.ok) {
      const result = await res.json();
      dessertsData = result.data;
      const lang = getCurrentLang();
      renderDesserts(lang);
      updateFormSizesDropdown(lang);
      updateLivePreview();
    }
  } catch (err) {
    console.error('Error fetching desserts:', err);
  }
}

// Render the 3 showcase cards
function renderDesserts(lang) {
  const container = document.getElementById('dessertsGrid');
  if (!container || !dessertsData.length) return;

  const isEs = lang === 'es';
  container.innerHTML = '';

  dessertsData.forEach((item, index) => {
    const name = isEs ? item.nameEs : item.nameEn;
    const shortDesc = isEs ? item.shortDescEs : item.shortDescEn;
    const flavorNotes = isEs ? item.flavorNotesEs : item.flavorNotesEn;
    const customOptions = isEs ? item.customOptionsEs : item.customOptionsEn;

    const card = document.createElement('article');
    card.className = 'dessert-card';
    card.setAttribute('data-id', item.id);

    card.innerHTML = `
      <div class="card-media-wrapper" onclick="openDessertModal('${item.id}')">
        <img 
          src="${item.imageWeb}" 
          alt="${name}" 
          class="card-img" 
          loading="lazy" 
        />
        <div class="card-badge">
          <span>0${index + 1}</span>
          <span class="badge-dot">•</span>
          <span>${isEs ? 'Artesanal' : 'Handcrafted'}</span>
        </div>
        <button type="button" class="view-zoom-btn" title="${isEs ? 'Ampliar imagen' : 'Expand preview'}" aria-label="${isEs ? 'Ampliar imagen' : 'Expand preview'}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </button>
      </div>

      <div class="card-body">
        <h3 class="card-title">${name}</h3>
        <p class="card-desc">${shortDesc}</p>

        <div class="flavor-pills">
          ${flavorNotes.slice(0, 4).map(note => `<span class="flavor-pill">${note}</span>`).join('')}
        </div>

        <div class="card-actions">
          <button 
            type="button" 
            class="btn btn-outline card-details-btn" 
            onclick="openDessertModal('${item.id}')"
          >
            ${isEs ? 'Ver Notas & Detalles' : 'View Notes & Details'}
          </button>
          <button 
            type="button" 
            class="btn btn-primary card-order-btn" 
            onclick="selectDessertAndScroll('${item.id}')"
          >
            ${isEs ? 'Personalizar' : 'Commission'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Modal logic for in-depth dessert view with original image
function openDessertModal(dessertId) {
  const item = dessertsData.find(d => d.id === dessertId);
  if (!item) return;

  const lang = getCurrentLang();
  const isEs = lang === 'es';
  const name = isEs ? item.nameEs : item.nameEn;
  const fullDesc = isEs ? item.fullDescEs : item.fullDescEn;
  const flavorNotes = isEs ? item.flavorNotesEs : item.flavorNotesEn;
  const customOptions = isEs ? item.customOptionsEs : item.customOptionsEn;
  const sizes = isEs ? item.sizesEs : item.sizesEn;

  const modal = document.getElementById('dessertModal');
  const modalBody = document.getElementById('modalContent');

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-gallery">
        <div class="modal-image-container">
          <img src="${item.imageWeb}" alt="${name}" id="modalMainImg" class="modal-main-image" />
          <div class="modal-image-overlay">
            <a href="${item.image}" target="_blank" rel="noopener" class="btn btn-glass-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              ${isEs ? 'Ver Original en Alta Resolución' : 'View Full-Res Original'}
            </a>
          </div>
        </div>
      </div>

      <div class="modal-info">
        <span class="modal-eyebrow">${isEs ? 'Creación Artesanal' : 'Bespoke Creation'}</span>
        <h2 class="modal-title">${name}</h2>
        <p class="modal-desc">${fullDesc}</p>

        <div class="modal-section">
          <h4>${isEs ? 'Perfil Aromático e Ingredientes' : 'Flavor Profile & Ingredients'}</h4>
          <div class="flavor-pills">
            ${flavorNotes.map(n => `<span class="flavor-pill">${n}</span>`).join('')}
          </div>
        </div>

        <div class="modal-section">
          <h4>${isEs ? 'Opciones de Personalización' : 'Customization Possibilities'}</h4>
          <ul class="custom-list">
            ${customOptions.map(opt => `<li><span class="bullet">✦</span> ${opt}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-section">
          <h4>${isEs ? 'Formatos Disponibles' : 'Available Formats'}</h4>
          <div class="sizes-badges">
            ${sizes.map(s => `<span class="size-pill">${s.label}</span>`).join('')}
          </div>
        </div>

        <div class="modal-footer-cta">
          <button type="button" class="btn btn-primary btn-block" onclick="selectDessertFromModal('${item.id}')">
            ${isEs ? 'Personalizar Esta Creación' : 'Commission This Creation'}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('dessertModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function setupModal() {
  const modal = document.getElementById('dessertModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Success modal close
  const successModal = document.getElementById('successModal');
  const successCloseBtn = document.getElementById('successCloseBtn');
  if (successCloseBtn) {
    successCloseBtn.addEventListener('click', () => {
      successModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
}

function selectDessertFromModal(dessertId) {
  closeModal();
  selectDessertAndScroll(dessertId);
}

// Select dessert in form and scroll down smoothly
function selectDessertAndScroll(dessertId) {
  const dessertOption = document.querySelector(`input[name="dessertId"][value="${dessertId}"]`);
  if (dessertOption) {
    dessertOption.checked = true;
    updateDessertSelectionUI();
    const lang = getCurrentLang();
    updateFormSizesDropdown(lang);
    updateLivePreview();
  }

  const formSection = document.getElementById('requestSection');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Update the size dropdown options based on chosen dessert
function updateFormSizesDropdown(lang) {
  const sizeSelect = document.getElementById('dessertSize');
  if (!sizeSelect) return;

  const selectedRadio = document.querySelector('input[name="dessertId"]:checked');
  const dessertId = selectedRadio ? selectedRadio.value : 'apple-pie';
  const dessert = dessertsData.find(d => d.id === dessertId);

  const isEs = lang === 'es';
  sizeSelect.innerHTML = `<option value="">${isEs ? '— Selecciona un tamaño —' : '— Select a size —'}</option>`;

  if (dessert) {
    const sizes = isEs ? dessert.sizesEs : dessert.sizesEn;
    sizes.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = s.label;
      opt.dataset.label = s.label;
      sizeSelect.appendChild(opt);
    });
    // Auto-select first size
    if (sizes.length > 0) {
      sizeSelect.selectedIndex = 1;
    }
  } else {
    // Custom combo option
    const customOptions = isEs
      ? ['Celebración Íntima (6–10 personas)', 'Celebración Mediana (12–20 personas)', 'Banquete / Evento (25+ personas)']
      : ['Intimate Gathering (6–10 guests)', 'Medium Celebration (12–20 guests)', 'Grand Milestone (25+ guests)'];
    customOptions.forEach((label, idx) => {
      const opt = document.createElement('option');
      opt.value = `custom-${idx + 1}`;
      opt.textContent = label;
      opt.dataset.label = label;
      sizeSelect.appendChild(opt);
    });
    sizeSelect.selectedIndex = 1;
  }
}

function updateDessertSelectionUI() {
  document.querySelectorAll('.dessert-picker-card').forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    if (radio && radio.checked) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
}

// Form listeners & Real-time summary
function setupFormListeners() {
  const form = document.getElementById('customOrderForm');
  if (!form) return;

  // Dessert choice change
  form.querySelectorAll('input[name="dessertId"]').forEach(radio => {
    radio.addEventListener('change', () => {
      updateDessertSelectionUI();
      const lang = getCurrentLang();
      updateFormSizesDropdown(lang);
      updateLivePreview();
    });
  });

  // Inputs change for live preview
  const inputsToWatch = ['eventDate', 'guestCount', 'dessertSize', 'preferredContact', 'customerName'];
  inputsToWatch.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateLivePreview);
      el.addEventListener('change', updateLivePreview);
    }
  });

  // Form submit
  form.addEventListener('submit', handleFormSubmit);
}

function updateLivePreview() {
  const lang = getCurrentLang();
  const isEs = lang === 'es';

  // Selected dessert
  const selectedRadio = document.querySelector('input[name="dessertId"]:checked');
  const dessertId = selectedRadio ? selectedRadio.value : 'apple-pie';
  const dessert = dessertsData.find(d => d.id === dessertId);

  let dessertName = isEs ? 'Tarta de Manzana' : 'Artisanal Apple Pie';
  let dessertThumb = '/images/ApplePie-thumb.jpg';

  if (dessert) {
    dessertName = isEs ? itemShortName(dessert.nameEs) : itemShortName(dessert.nameEn);
    dessertThumb = dessert.imageThumb;
  } else if (dessertId === 'custom-combo') {
    dessertName = isEs ? 'Combinación Personalizada' : 'Custom Combo Request';
    dessertThumb = '/images/ChocolateCake-thumb.jpg';
  }

  const previewNameEl = document.getElementById('previewDessertName');
  const previewImgEl = document.getElementById('previewDessertImg');
  const hiddenDessertName = document.getElementById('dessertNameHidden');

  if (previewNameEl) previewNameEl.textContent = dessertName;
  if (previewImgEl) previewImgEl.src = dessertThumb;
  if (hiddenDessertName) hiddenDessertName.value = dessertName;

  // Date
  const dateInput = document.getElementById('eventDate');
  const previewDateEl = document.getElementById('previewDate');
  if (previewDateEl && dateInput && dateInput.value) {
    try {
      const parts = dateInput.value.split('-');
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      const dateFormatted = d.toLocaleDateString(isEs ? 'es-ES' : 'en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      previewDateEl.textContent = dateFormatted;
    } catch {
      previewDateEl.textContent = dateInput.value;
    }
  }

  // Size
  const sizeSelect = document.getElementById('dessertSize');
  const previewSizeEl = document.getElementById('previewSize');
  if (previewSizeEl && sizeSelect) {
    const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
    previewSizeEl.textContent = selectedOption && selectedOption.value ? selectedOption.text : (isEs ? 'Por definir' : 'To be tailored');
  }

  // Contact method
  const contactSelect = document.getElementById('preferredContact');
  const previewContactEl = document.getElementById('previewContact');
  if (previewContactEl && contactSelect) {
    const val = contactSelect.value;
    previewContactEl.textContent = val.toUpperCase();
  }
}

function itemShortName(fullName) {
  if (fullName.includes('Apple')) return 'Artisanal Apple Pie';
  if (fullName.includes('Manzana')) return 'Tarta de Manzana';
  if (fullName.includes('Chocolate')) return fullName.includes('Intenso') ? 'Pastel de Chocolate' : 'Dark Chocolate Cake';
  if (fullName.includes('Velvet')) return 'Ruby Red Velvet Cake';
  return fullName;
}

// Handle Form Submission
async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnHtml = submitBtn.innerHTML;
  const lang = getCurrentLang();
  const isEs = lang === 'es';

  // Clear previous inline errors
  document.querySelectorAll('.field-error').forEach(el => el.remove());
  document.querySelectorAll('.input-has-error').forEach(el => el.classList.remove('input-has-error'));

  // Collect values
  const dessertRadio = form.querySelector('input[name="dessertId"]:checked');
  const dessertId = dessertRadio ? dessertRadio.value : 'apple-pie';
  const sizeSelect = document.getElementById('dessertSize');
  const size = sizeSelect ? sizeSelect.value : '';
  const sizeLabel = sizeSelect && sizeSelect.selectedIndex > -1 ? sizeSelect.options[sizeSelect.selectedIndex].text : '';

  const customerName = (document.getElementById('customerName').value || '').trim();
  const customerEmail = (document.getElementById('customerEmail').value || '').trim();
  const customerPhone = (document.getElementById('customerPhone').value || '').trim();
  const eventDate = document.getElementById('eventDate').value;
  const guestCount = document.getElementById('guestCount').value;
  const occasion = document.getElementById('occasion').value;
  const occasionSelect = document.getElementById('occasion');
  const occasionLabel = occasionSelect ? occasionSelect.options[occasionSelect.selectedIndex].text : '';
  const fulfillmentRadio = form.querySelector('input[name="fulfillment"]:checked');
  const fulfillment = fulfillmentRadio ? fulfillmentRadio.value : 'pickup';
  const customNotes = document.getElementById('customNotes').value;
  const dietaryNotes = document.getElementById('dietaryNotes').value;
  const preferredContact = document.getElementById('preferredContact').value;

  // Validation
  let hasError = false;

  if (!customerName || customerName.length < 2) {
    showFieldError('customerName', isEs ? 'Por favor escribe tu nombre completo.' : 'Please enter your full name.');
    hasError = true;
  }

  if (!customerEmail || !customerEmail.includes('@')) {
    showFieldError('customerEmail', isEs ? 'Ingresa un correo electrónico válido.' : 'Please enter a valid email address.');
    hasError = true;
  }

  if (!customerPhone || customerPhone.length < 6) {
    showFieldError('customerPhone', isEs ? 'Ingresa un número de contacto válido.' : 'Please enter a valid phone/WhatsApp number.');
    hasError = true;
  }

  if (!eventDate) {
    showFieldError('eventDate', isEs ? 'Por favor selecciona la fecha de tu evento.' : 'Please select your celebration date.');
    hasError = true;
  }

  if (hasError) return;

  // Loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <span class="spinner"></span>
    ${isEs ? 'Enviando solicitud...' : 'Sending request...'}
  `;

  const payload = {
    customerName,
    customerEmail,
    customerPhone,
    preferredContact,
    dessertId,
    size,
    sizeLabel,
    guestCount,
    eventDate,
    occasion,
    occasionLabel,
    fulfillment,
    customNotes,
    dietaryNotes,
    lang
  };

  try {
    // 1. Web3Forms Integration: If access key is configured, post to Web3Forms
    const web3KeyInput = document.getElementById('web3formsAccessKey');
    const web3Key = web3KeyInput ? web3KeyInput.value.trim() : '';
    if (web3Key && web3Key !== 'YOUR_ACCESS_KEY_HERE') {
      try {
        const web3FormData = new FormData(form);
        web3FormData.set('dessert', dessertName);
        web3FormData.set('size', sizeLabel || size);
        web3FormData.set('occasion', occasionLabel || occasion);
        web3FormData.set('preferred_contact', preferredContact.toUpperCase());

        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: web3FormData
        });
      } catch (wErr) {
        console.warn('Web3Forms dispatch warning (will fallback to local):', wErr);
      }
    }

    // 2. Local Node.js API storage & reference code generation
    const res = await fetch('/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await res.json();

    if (res.ok && result.success) {
      showSuccessModal(result.data, lang);
      form.reset();
      setupDatePicker();
      updateDessertSelectionUI();
      updateFormSizesDropdown(lang);
      updateLivePreview();
    } else {
      alert(result.error || (isEs ? 'Hubo un inconveniente al enviar la solicitud.' : 'There was an issue submitting your request.'));
    }
  } catch (err) {
    console.error('Submission error:', err);
    alert(isEs ? 'Error de conexión. Por favor escríbenos directamente por WhatsApp.' : 'Connection error. Please message us directly via WhatsApp.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHtml;
  }
}

function showFieldError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  field.classList.add('input-has-error');

  const errorEl = document.createElement('span');
  errorEl.className = 'field-error';
  errorEl.textContent = msg;
  field.parentNode.appendChild(errorEl);
}

// Show friendly success confirmation dialog
function showSuccessModal(request, lang) {
  const isEs = lang === 'es';
  const modal = document.getElementById('successModal');
  const refCodeEl = document.getElementById('successRefCode');
  const detailsEl = document.getElementById('successSummaryDetails');
  const waBtn = document.getElementById('successWhatsAppBtn');

  if (refCodeEl) refCodeEl.textContent = request.refNumber;

  if (detailsEl) {
    detailsEl.innerHTML = `
      <div class="summary-line"><strong>${isEs ? 'Cliente' : 'Client'}:</strong> ${request.customerName}</div>
      <div class="summary-line"><strong>${isEs ? 'Postre' : 'Dessert'}:</strong> ${request.dessertName}</div>
      <div class="summary-line"><strong>${isEs ? 'Fecha de Entrega' : 'Event Date'}:</strong> ${request.eventDate}</div>
      <div class="summary-line"><strong>${isEs ? 'Formato' : 'Size'}:</strong> ${request.sizeLabel || 'Personalizado'}</div>
      <div class="summary-line"><strong>${isEs ? 'Contacto' : 'Contact'}:</strong> ${request.preferredContact.toUpperCase()} (${request.customerPhone})</div>
    `;
  }

  // Pre-fill WhatsApp message link
  if (waBtn) {
    const waNumber = bakeryInfo.whatsapp.replace(/\D/g, '');
    const prefilledText = isEs
      ? `¡Hola d'María! Acabo de enviar mi solicitud de pedido personalizado #${request.refNumber} para el postre "${request.dessertName}" para la fecha ${request.eventDate}. ¿Tienen disponibilidad? Muchas gracias.`
      : `Hello d'María! I just sent a custom order request #${request.refNumber} for "${request.dessertName}" on ${request.eventDate}. Looking forward to connecting with you!`;

    waBtn.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(prefilledText)}`;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Mobile Nav Menu Handler
function setupMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const backdrop = document.getElementById('navBackdrop');

  if (!toggle || !navMenu) return;

  function closeMenu() {
    navMenu.classList.remove('nav-open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.classList.remove('active');
    document.body.classList.remove('mobile-menu-locked');
  }

  function openMenu() {
    navMenu.classList.add('nav-open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    if (backdrop) backdrop.classList.add('active');
    document.body.classList.add('mobile-menu-locked');
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.contains('nav-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  // Close when clicking any menu link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('nav-open')) {
      closeMenu();
    }
  });
}

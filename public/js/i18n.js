// Comprehensive Bilingual Dictionary (English & Spanish)
const translations = {
  en: {
    // Nav
    nav_creations: "The Creations",
    nav_philosophy: "Our Philosophy",
    nav_process: "How It Works",
    nav_request: "Request a Custom Order",
    nav_contact: "Contact Studio",
    tagline: "Artisanal Pâtisserie & Bespoke Cakes",

    // Hero
    hero_badge: "Small Batch • Made to Order",
    hero_title_1: "Handcrafted.",
    hero_title_2: "Personalized.",
    hero_title_3: "Never Mass-Produced.",
    hero_desc: "We believe exceptional celebrations deserve a dessert baked specifically for you. No freezers, no production lines — only pure ingredients, unhurried passion, and bespoke recipes tailored to your taste.",
    hero_cta_request: "Request Your Custom Order",
    hero_cta_explore: "Explore the 3 Creations",
    hero_stat_batches: "100% Made to Order",
    hero_stat_craft: "All-Butter & Pure Cacao",
    hero_stat_lead: "48-72h Artisan Lead Time",

    // Philosophy
    philo_eyebrow: "Our Core Belief",
    philo_title: "Why We Choose Bespoke Over Mass Production",
    philo_subtitle: "In a world of factory cakes and frozen inventory, d'María exists as a sanctuary of mindful, artisanal baking.",
    philo_card1_title: "No Warehouses, No Freezers",
    philo_card1_desc: "Every single crust is rolled, every sponge is baked, and every ganache is whipped fresh within hours of your event. Never chilled from last week.",
    philo_card2_title: "Tailored to Your Celebration",
    philo_card2_desc: "Whether it’s a delicate dinner for six or a grand milestone, every order is customized: sweetness level, flavor profile, dietary care, and hand-finished styling.",
    philo_card3_title: "Pure & Honest Ingredients",
    philo_card3_desc: "Real European-style butter, farm-fresh eggs, pure Madagascar Bourbon vanilla, single-origin Belgian cacao, and seasonal heirloom fruit. Zero shortcuts.",
    philo_card4_title: "Direct Baker Dialogue",
    philo_card4_desc: "You speak directly with the artisan. We listen to your vision and handcraft a showpiece that honors your moment with warmth and elegance.",

    // Showcase
    showcase_eyebrow: "The Collection",
    showcase_title: "Our Three Signature Creations",
    showcase_subtitle: "We focus our dedication entirely on mastering three timeless dessert archetypes, customized to your exact desire.",
    showcase_filter_all: "All Creations",
    showcase_details_btn: "View Details & Tasting Notes",
    showcase_request_btn: "Request This Dessert",
    showcase_flavor_label: "Flavor Profile",
    showcase_custom_label: "Personalization Options",

    // Process
    process_eyebrow: "Simple & Personal",
    process_title: "How to Commission Your Dessert",
    process_step1_num: "01",
    process_step1_title: "Submit Your Vision",
    process_step1_desc: "Choose your dessert, event date, guest count, and personalized flavor or aesthetic requests through our online inquiry form.",
    process_step2_num: "02",
    process_step2_title: "Baker Consultation",
    process_step2_desc: "We review your request, confirm availability, and send a personalized quote and confirmation directly to your WhatsApp or Email.",
    process_step3_num: "03",
    process_step3_title: "Fresh Handcrafted Bake",
    process_step3_desc: "Your cake or pie is baked from scratch with meticulous care, ready for scheduled studio pickup or private local hand-delivery.",

    // Form
    form_eyebrow: "Bespoke Commission",
    form_title: "Request Your Custom Order",
    form_subtitle: "Tell us about your celebration. We will review availability and contact you personally within 24 hours.",
    form_notice_lead: "Lead time notice: Because all items are scratch-baked to order, please submit requests at least 3 days before your event.",
    
    form_sec_dessert: "1. Select Your Creation",
    form_dessert_apple: "Traditional Artisanal Apple Pie",
    form_dessert_apple_sub: "Spiced heirloom apples & golden butter lattice",
    form_dessert_choc: "Decadent Dark Chocolate Ganache Cake",
    form_dessert_choc_sub: "70% Belgian cacao & silky whipped truffle ganache",
    form_dessert_red: "Signature Ruby Red Velvet Cake",
    form_dessert_red_sub: "Velvety crimson buttermilk & Madagascar vanilla cream cheese",
    form_dessert_custom: "Special Combo / Custom Event Request",
    form_dessert_custom_sub: "Multiple desserts or specific bespoke vision",

    form_sec_details: "2. Event & Customization Details",
    form_label_date: "Event / Celebration Date",
    form_date_help: "Minimum 3 days advance notice for artisan prep",
    form_label_guests: "Estimated Guests / Servings",
    form_label_size: "Desired Size / Format",
    form_size_placeholder: "Select size preference...",
    form_label_occasion: "Occasion",
    form_occ_birthday: "Birthday Celebration",
    form_occ_anniversary: "Anniversary / Romantic Milestone",
    form_occ_gathering: "Family Gathering / Dinner Party",
    form_occ_wedding: "Wedding / Intimate Elopement",
    form_occ_holiday: "Holiday / Festive Table",
    form_occ_other: "Other Celebration",

    form_label_fulfillment: "Fulfillment Preference",
    form_opt_pickup: "Studio Pickup (Free by appointment)",
    form_opt_delivery: "Hand Delivery (Subject to local zone confirmation)",

    form_label_notes: "Personalization & Styling Notes",
    form_notes_placeholder: "Tell us about your vision: sweetness preference, custom message inscription (e.g. 'Happy 30th Sofia!'), finish style, or color accents...",

    form_label_dietary: "Dietary & Allergy Considerations",
    form_dietary_placeholder: "Nut allergies, reduced sugar, dairy sensitivities, etc...",

    form_sec_contact: "3. Your Contact Information",
    form_label_name: "Full Name",
    form_name_placeholder: "e.g. Sofia Martinez",
    form_label_email: "Email Address",
    form_email_placeholder: "sofia@example.com",
    form_label_phone: "Phone / WhatsApp Number",
    form_phone_placeholder: "+1 (555) 000-0000",
    form_label_preferred: "Preferred Contact Method",
    form_contact_wa: "WhatsApp (Fastest response)",
    form_contact_email: "Email",
    form_contact_phone: "Phone Call",

    form_submit_btn: "Send Custom Order Request",
    form_submitting: "Submitting Request...",

    // Live preview
    preview_title: "Request Summary",
    preview_dessert: "Creation:",
    preview_date: "Date:",
    preview_size: "Size:",
    preview_contact: "Contact via:",
    preview_badge_bespoke: "100% Handcrafted",

    // Success Modal
    success_title: "Request Received with Joy!",
    success_msg_p1: "Thank you for trusting d'María with your celebration. Your personalized commission inquiry has been safely received.",
    success_ref_label: "Your Request Reference Code:",
    success_msg_p2: "We will review our kitchen schedule and reach out to you within 24 hours to confirm details and finalize your custom quote.",
    success_btn_wa: "Chat with the Baker on WhatsApp",
    success_btn_close: "Close & Return to Home",

    // FAQ
    faq_eyebrow: "Questions & Answers",
    faq_title: "Frequently Asked Questions",
    faq_q1: "How far in advance should I place my request?",
    faq_a1: "Because we never mass-produce and only accept a limited number of orders per day, we recommend at least 3 to 7 days in advance. For large milestones or weddings, 2 to 4 weeks is advised.",
    faq_q2: "Can I customize the flavor, sweetness, or decoration?",
    faq_a2: "Absolutely. That is the soul of d'María. We can adjust the sweetness level, accommodate flavor twists (like adding sea salt caramel or espresso notes), and tailor custom inscriptions and hand-piped finishes.",
    faq_q3: "Do you accommodate food allergies?",
    faq_a3: "We take dietary restrictions very seriously. Please note all allergies in your request. While we can prepare nut-free and lower-sugar recipes, please be aware our boutique kitchen also handles dairy, wheat flour, and nuts.",
    faq_q4: "How does payment and confirmation work?",
    faq_a4: "After reviewing your request, we send you a clear quote via your preferred contact channel (WhatsApp or Email). A 50% deposit confirms your date on our baking schedule, with the balance settled upon pickup or delivery.",

    // Footer
    footer_story: "d'María is an artisanal pastry studio devoted to unhurried, personalized dessert craft. We do not mass-produce; each piece is individually baked for your milestone.",
    footer_hours_label: "Studio Schedule",
    footer_contact_label: "Inquiries & Studio",
    footer_rights: "All rights reserved. Handcrafted with love.",

    // Modal
    modal_close: "Close",
    modal_highres_btn: "View Original High-Res Image",
    modal_request_this: "Request This Custom Creation"
  },

  es: {
    // Nav
    nav_creations: "Las Creaciones",
    nav_philosophy: "Nuestra Filosofía",
    nav_process: "Cómo Funciona",
    nav_request: "Solicitar Pedido",
    nav_contact: "Contacto",
    tagline: "Pastelería Artesanal & Tortas Personalizadas",

    // Hero
    hero_badge: "Lotes Pequeños • Hecho Bajo Pedido",
    hero_title_1: "Elaboración Artesanal.",
    hero_title_2: "Piezas Personalizadas.",
    hero_title_3: "Jamás en Masa.",
    hero_desc: "Creemos que las celebraciones auténticas merecen un postre horneado exclusivamente para ti. Sin congeladores, sin líneas industriales: solo ingredientes puros, paciencia repostera y recetas diseñadas a tu medida.",
    hero_cta_request: "Solicita tu Pedido Personalizado",
    hero_cta_explore: "Descubre las 3 Creaciones",
    hero_stat_batches: "100% Bajo Pedido",
    hero_stat_craft: "Mantequilla Pura y Cacao Fino",
    hero_stat_lead: "48-72h de Anticipación",

    // Philosophy
    philo_eyebrow: "Nuestra Esencia",
    philo_title: "Por Qué Elegimos lo Personalizado Frente a la Masa",
    philo_subtitle: "En un mundo de pasteles de fábrica y vitrinas congeladas, d'María nace como un taller de repostería consciente y de autor.",
    philo_card1_title: "Sin Bodegas, Sin Congeladores",
    philo_card1_desc: "Cada masa se estira, cada bizcocho se hornea y cada ganache se bate pocas horas antes de tu evento. Nada proviene de la semana pasada.",
    philo_card2_title: "Diseñado para tu Celebración",
    philo_card2_desc: "Sea una cena íntima de seis personas o un gran aniversario, cada pedido se personaliza: dulzor, perfil de sabor, necesidades dietarias y diseño visual.",
    philo_card3_title: "Ingredientes Nobles y Reales",
    philo_card3_desc: "Mantequilla pura de estilo europeo, huevos de campo, vainilla bourbon de Madagascar, cacao belga de origen y fruta fresca de temporada. Cero atajos.",
    philo_card4_title: "Atención Directa con la Pastelera",
    philo_card4_desc: "Hablas directamente con quien elabora tu postre. Escuchamos tu idea y creamos una pieza central que honra tu momento con calidez y elegancia.",

    // Showcase
    showcase_eyebrow: "La Colección",
    showcase_title: "Nuestras Tres Creaciones de Autor",
    showcase_subtitle: "Dedicamos todo nuestro esmero a perfeccionar tres arquetipos de repostería clásica, personalizados según tu ocasión.",
    showcase_filter_all: "Todas las Creaciones",
    showcase_details_btn: "Ver Detalles y Notas de Sabor",
    showcase_request_btn: "Personalizar Este Postre",
    showcase_flavor_label: "Perfil de Sabor",
    showcase_custom_label: "Opciones de Personalización",

    // Process
    process_eyebrow: "Cercano y Simple",
    process_title: "Cómo Encargar tu Postre a Medida",
    process_step1_num: "01",
    process_step1_title: "Cuéntanos tu Idea",
    process_step1_desc: "Elige tu postre, fecha de la celebración, número de invitados y detalles especiales en nuestro formulario de solicitud.",
    process_step2_num: "02",
    process_step2_title: "Consulta y Cotización",
    process_step2_desc: "Revisamos disponibilidad en taller y te enviamos una cotización personalizada y confirmación directa por WhatsApp o correo.",
    process_step3_num: "03",
    process_step3_title: "Horneado Fresco y Entrega",
    process_step3_desc: "Tu pastel o tarta se hornea artesanalmente para el día de tu festejo, listo para retiro en taller o entrega cuidadosa a domicilio.",

    // Form
    form_eyebrow: "Encargo Personalizado",
    form_title: "Solicita tu Pedido Personalizado",
    form_subtitle: "Cuéntanos sobre tu festejo. Revisaremos agenda y te responderemos personalmente en menos de 24 horas.",
    form_notice_lead: "Aviso de anticipación: Como cada pieza se elabora a mano desde cero, solicitamos realizar pedidos con mínimo 3 días de anticipación.",

    form_sec_dessert: "1. Selecciona tu Creación",
    form_dessert_apple: "Tarta de Manzana Artesanal",
    form_dessert_apple_sub: "Manzanas maceradas con especias y enrejado hojaldrado de mantequilla",
    form_dessert_choc: "Pastel de Chocolate Intenso con Ganache",
    form_dessert_choc_sub: "Cacao belga al 70% y ganache sedosa de trufa batida",
    form_dessert_red: "Pastel Red Velvet de Autor",
    form_dessert_red_sub: "Bizcocho aterciopelado de buttermilk con frosting de queso crema y vainilla",
    form_dessert_custom: "Combinación Especial / Pedido a Medida",
    form_dessert_custom_sub: "Múltiples postres o una propuesta personalizada",

    form_sec_details: "2. Detalles del Evento y Personalización",
    form_label_date: "Fecha de la Celebración",
    form_date_help: "Mínimo 3 días de anticipación para preparación artesanal",
    form_label_guests: "Número de Invitados / Porciones",
    form_label_size: "Tamaño o Formato Deseado",
    form_size_placeholder: "Selecciona una opción de tamaño...",
    form_label_occasion: "Ocasión",
    form_occ_birthday: "Cumpleaños",
    form_occ_anniversary: "Aniversario / Momento Romántico",
    form_occ_gathering: "Reunión Familiar / Cena con Amigos",
    form_occ_wedding: "Boda / Celebración Íntima",
    form_occ_holiday: "Fiesta / Temporada Especial",
    form_occ_other: "Otra Ocasión Especial",

    form_label_fulfillment: "Modalidad de Entrega",
    form_opt_pickup: "Retiro en Taller (Sin costo, con cita previa)",
    form_opt_delivery: "Entrega a Domicilio (Sujeta a confirmación de zona)",

    form_label_notes: "Notas de Personalización y Diseño",
    form_notes_placeholder: "Cuéntanos tu visión: nivel de dulzor deseado, mensaje personalizado (ej. '¡Felices 30 Sofía!'), estilo de decoración, flores o colores...",

    form_label_dietary: "Consideraciones Dietarias o Alergias",
    form_dietary_placeholder: "Alergias a frutos secos, bajo en azúcar, intolerancias, etc...",

    form_sec_contact: "3. Tus Datos de Contacto",
    form_label_name: "Nombre Completo",
    form_name_placeholder: "ej. Sofía Martínez",
    form_label_email: "Correo Electrónico",
    form_email_placeholder: "sofia@ejemplo.com",
    form_label_phone: "Teléfono / WhatsApp",
    form_phone_placeholder: "+1 (555) 000-0000",
    form_label_preferred: "Medio de Contacto Preferido",
    form_contact_wa: "WhatsApp (Respuesta más rápida)",
    form_contact_email: "Correo Electrónico",
    form_contact_phone: "Llamada Telefónica",

    form_submit_btn: "Enviar Solicitud de Pedido",
    form_submitting: "Enviando Solicitud...",

    // Live preview
    preview_title: "Resumen de tu Solicitud",
    preview_dessert: "Creación:",
    preview_date: "Fecha:",
    preview_size: "Tamaño:",
    preview_contact: "Contacto por:",
    preview_badge_bespoke: "100% Artesanal",

    // Success Modal
    success_title: "¡Solicitud Recibida con Alegría!",
    success_msg_p1: "Gracias por confiar en d'María para tu celebración. Tu solicitud de postre personalizado ha quedado registrada con éxito.",
    success_ref_label: "Código de Referencia:",
    success_msg_p2: "Revisaremos la agenda del taller y te contactaremos en un plazo máximo de 24 horas para afinar detalles y enviarte tu cotización final.",
    success_btn_wa: "Hablar con la Pastelera por WhatsApp",
    success_btn_close: "Cerrar y Volver al Inicio",

    // FAQ
    faq_eyebrow: "Preguntas Frecuentes",
    faq_title: "Todo lo que Deseas Saber",
    faq_q1: "¿Con cuánta anticipación debo hacer mi pedido?",
    faq_a1: "Dado que no producimos en masa y aceptamos un número limitado de pedidos por día para asegurar máxima calidad, recomendamos al menos 3 a 7 días de anticipación. Para eventos grandes o bodas, sugerimos 2 a 4 semanas.",
    faq_q2: "¿Puedo personalizar el sabor, dulzor o decoración?",
    faq_a2: "Absolutamente. Esa es la esencia de d'María. Podemos ajustar el nivel de dulzor, añadir notas especiales (como caramelo a la sal marina o toques de café) y personalizar el estilo visual y letreros caligráficos.",
    faq_q3: "¿Tienen opciones para personas con alergias?",
    faq_a3: "Tomamos las restricciones con gran seriedad. Por favor indícalo en el formulario. Si bien podemos preparar recetas sin frutos secos o bajas en azúcar, ten presente que en nuestro taller también se procesa harina de trigo, lácteos y nueces.",
    faq_q4: "¿Cómo funciona el pago y la confirmación?",
    faq_a4: "Al recibir tu solicitud, te enviamos una cotización clara por WhatsApp o correo. Para agendar la fecha en nuestro horno solicitamos un anticipo del 50%, y el saldo se cancela contra retiro o entrega.",

    // Footer
    footer_story: "d'María es un taller de repostería fina dedicado a la elaboración artesanal y personalizada. No producimos en masa; cada pastel y tarta se hornea de manera exclusiva para tus momentos más memorables.",
    footer_hours_label: "Horario del Taller",
    footer_contact_label: "Consultas y Taller",
    footer_rights: "Todos los derechos reservados. Horneado con amor y dedicación.",

    // Modal
    modal_close: "Cerrar",
    modal_highres_btn: "Ver Imagen Original en Alta Resolución",
    modal_request_this: "Solicitar Esta Creación a Medida"
  }
};

// Helper function to get current language
function getCurrentLang() {
  const stored = localStorage.getItem('dmaria_lang');
  if (stored && (stored === 'en' || stored === 'es')) {
    return stored;
  }
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  if (paramLang && (paramLang === 'en' || paramLang === 'es')) {
    return paramLang;
  }
  // Default to English (or browser preference if starts with es)
  const navLang = (navigator.language || '').toLowerCase();
  return navLang.startsWith('es') ? 'es' : 'en';
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'es') lang = 'en';
  localStorage.setItem('dmaria_lang', lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);

  // Update active states on switcher buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Dispatch event for other scripts to re-render dynamic content
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  
  // Translate standard text content
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Translate titles / aria-labels
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.setAttribute('title', dict[key]);
      el.setAttribute('aria-label', dict[key]);
    }
  });
}

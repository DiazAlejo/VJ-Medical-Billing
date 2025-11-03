type TranslationKey = 
  | 'navInicio' | 'navServicios' | 'navNosotros' | 'navContacto'
  | 'heroTitle' | 'heroSubtitle' | 'ctaButton' | 'formEmail' | 'formPhone' | 'formMessage' | 'formSubmit'
  | 'formEmailRequired' | 'formEmailInvalid' | 'formPhoneInvalid' | 'formSuccess' | 'formError'
  | 'aboutTitle' | 'aboutText' | 'aboutOwner'
  | 'servicesTitle' | 'service1' | 'service2' | 'service3' | 'service4' | 'service2Detail'
  | 'medicalBillingTitle' | 'medicalBillingText'
  | 'specialtiesTitle' | 'specialtiesText' | 'specialtyCardiology' | 'specialtyPsychiatry' | 'specialtyOptometry' | 'specialtyPulmonology' | 'specialtyGynecology' | 'specialtyInternalMedicine' | 'specialtyEmergency' | 'specialtyPodiatry' | 'specialtyRheumatology' | 'specialtyGeriatrics' | 'specialtySpeech' | 'specialtyAndMore'
  | 'whatSetsUsApartTitle' | 'whatSetsUsApart1' | 'whatSetsUsApart2' | 'whatSetsUsApart3'
  | 'didYouKnowTitle' | 'didYouKnowText'
  | 'usefulData1Title' | 'usefulData1Text'
  | 'usefulData2Title' | 'usefulData2Text' | 'billingProcess1' | 'billingProcess2' | 'billingProcess3' | 'billingProcess4' | 'billingProcess5'
  | 'contactTitle' | 'contactSubtitle' | 'footerAddress' | 'footerPhone' | 'footerEmail' | 'footerFacebook' | 'footerCta' | 'footerCtaButton'

type Translations = {
  [K in TranslationKey]: string
}

export const translations: { en: Translations; es: Translations } = {
  en: {
    // Navigation
    navInicio: 'Home',
    navServicios: 'Our Services',
    navNosotros: 'About Us',
    navContacto: 'Contact Us',
    
    // Hero Section (Inicio)
    heroTitle: 'Your peace of mind is our responsibility!',
    heroSubtitle: 'We guarantee fewer denials and higher revenue.',
    ctaButton: 'Get a Free Consultation',
    formEmail: 'Email',
    formPhone: 'Phone',
    formMessage: 'Details / Message',
    formSubmit: 'Submit',
    formEmailRequired: 'Email is required',
    formEmailInvalid: 'Please enter a valid email',
    formPhoneInvalid: 'Please enter a valid phone number',
    formSuccess: 'Thank you! We\'ll contact you soon.',
    formError: 'Something went wrong. Please try again.',
    
    // About Us (Nosotros)
    aboutTitle: 'About Us',
    aboutOwner: 'VJ Medical Billing LLC - Vivianne Jove Frank',
    aboutText: 'We are a company dedicated to medical billing services. We offer a quality and transparent service, complying with all federal protocols. We guarantee fewer denials and higher revenue.',
    
    // Services
    servicesTitle: 'Our Services',
    service1: 'Personalized medical billing with a 99% acceptance rate.',
    service2: 'Complete revenue cycle management from patient check-in to payment.',
    service2Detail: 'Medical billing is the process in which a bill is recorded and issued as a result of a medical service provided. For this process to be truly effective, it is important that it be carried out with all the pertinent steps. Our Personalized Medical Billing Services have a 99% acceptance rate. From the moment your patient is admitted until you receive payment for services rendered, our VJ Medical Billing team supports your growth by focusing on your revenue cycle management areas.',
    service3: 'Payment reconciliation and claim follow-up.',
    service4: 'Accurate CPT/ICD coding and compliance.',
    
    // Medical Billing Info
    medicalBillingTitle: 'What is Medical Billing?',
    medicalBillingText: 'Medical billing is the process in which a bill is recorded and issued as a result of a medical service provided. For this process to be truly effective, it is important that it be carried out with all the pertinent steps.',
    
    // Specialties
    specialtiesTitle: 'Specialties',
    specialtiesText: 'Podiatry, Internal Medicine, Psychiatry, Cardiology, Gynecology, Optometry, Pulmonology, Emergency Medicine, Speech Pathology, Rheumatology, Geriatrics, Speech Therapy, and others.',
    specialtyPodiatry: 'Podiatry',
    specialtyInternalMedicine: 'Internal Medicine',
    specialtyPsychiatry: 'Psychiatry',
    specialtyCardiology: 'Cardiology',
    specialtyGynecology: 'Gynecology',
    specialtyOptometry: 'Optometry',
    specialtyPulmonology: 'Pulmonology',
    specialtyEmergency: 'Emergency Medicine',
    specialtySpeech: 'Speech Pathology & Therapy',
    specialtyRheumatology: 'Rheumatology',
    specialtyGeriatrics: 'Geriatrics',
    specialtyAndMore: 'And More',
    
    // What Sets Us Apart
    whatSetsUsApartTitle: 'What Sets Us Apart',
    whatSetsUsApart1: 'We comply with all federal protocols.',
    whatSetsUsApart2: 'Clean billing that stands out with fewer denials.',
    whatSetsUsApart3: 'Personalized attention. Transparency and quality in our service.',
    
    // Did You Know
    didYouKnowTitle: 'Did you know...? (Useful Data)',
    didYouKnowText: 'Efficient billing means fewer worries for the doctor and more confidence for the patient.',
    
    // Useful Data 1
    usefulData1Title: '',
    usefulData1Text: 'Payment reconciliation ensures that what the insurer pays matches what was billed, avoiding economic losses in the medical practice.',
    
    // Useful Data 2
    usefulData2Title: '',
    usefulData2Text: 'The medical billing process begins with patient eligibility verification and ends with insurer payment. Each stage must be completed correctly to avoid delays.',
    billingProcess1: 'Eligibility Verification',
    billingProcess2: 'Correct Coding (CPT/ICD)',
    billingProcess3: 'Claim Submission',
    billingProcess4: 'Follow-up and Payment',
    billingProcess5: 'Final Completion',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Ready to simplify your medical billing? Get in touch with us today.',
    footerAddress: 'Las Villas B-15 Guaynabo, PR 00969',
    footerPhone: '(787) 223-9801',
    footerEmail: 'vj0042@outlook.com',
    footerFacebook: 'vjmedicalbillingllc',
    footerCta: 'Ready to simplify your medical billing?',
    footerCtaButton: 'Contact Us Today!',
  },
  es: {
    // Navigation
    navInicio: 'Inicio',
    navServicios: 'Nuestros Servicios',
    navNosotros: 'Nosotros',
    navContacto: 'Contáctenos',
    
    // Hero Section (Inicio)
    heroTitle: '¡Su tranquilidad es nuestra responsabilidad!',
    heroSubtitle: 'Garantizamos menos denegaciones y mayores ingresos.',
    ctaButton: 'Solicite su consulta gratuita',
    formEmail: 'Correo electrónico',
    formPhone: 'Teléfono',
    formMessage: 'Detalles / Mensaje',
    formSubmit: 'Enviar',
    formEmailRequired: 'El correo electrónico es requerido',
    formEmailInvalid: 'Por favor ingrese un correo electrónico válido',
    formPhoneInvalid: 'Por favor ingrese un número de teléfono válido',
    formSuccess: '¡Gracias! Nos pondremos en contacto pronto.',
    formError: 'Algo salió mal. Por favor intente de nuevo.',
    
    // About Us (Nosotros)
    aboutTitle: 'Acerca de Nosotros',
    aboutOwner: 'VJ Medical Billing LLC - Vivianne Jove Frank',
    aboutText: 'Somos una compañía dedicada a la facturación de planes médicos. Ofrecemos un servicio de calidad y transparencia, cumpliendo con todos los protocolos federales. Garantizamos menos denegaciones y mayores ingresos.',
    
    // Services
    servicesTitle: 'Nuestros Servicios',
    service1: 'Facturación médica personalizada con una tasa de aceptación del 99%.',
    service2: 'Manejo completo del ciclo de ingresos desde la admisión del paciente hasta el pago.',
    service2Detail: 'La facturación médica es el proceso en el cual se registra y se emite una factura como resultado de un servicio médico prestado. Para que este proceso sea realmente efectivo es importante que se realice con todos los pasos pertinentes. Nuestros Servicios de Facturación Médica Personalizada cuentan con una tasa de aceptación del 99%. Desde el momento que ingresa su paciente hasta que recibe el pago por los servicios prestados, nuestro equipo de servicios de VJ Medical Billing respalda su crecimiento al enfocarse en las áreas de administración de su ciclo de ingreso.',
    service3: 'Reconciliación de pagos y seguimiento de reclamaciones.',
    service4: 'Codificación precisa (CPT/ICD) y cumplimiento normativo.',
    
    // Medical Billing Info
    medicalBillingTitle: '¿Qué es la Facturación Médica?',
    medicalBillingText: 'La facturación médica es el proceso en el cual se registra y se emite una factura como resultado de un servicio médico prestado. Para que este proceso sea realmente efectivo es importante que se realice con todos los pasos pertinentes.',
    
    // Specialties
    specialtiesTitle: 'Especialidades',
    specialtiesText: 'Podiatría, Medicina Interna, Psiquiatría, Cardiología, Ginecología, Optometría, Neumología, Emergenciología, Patología del Habla, Reumatología, Geriatría, Terapia del Habla y otros.',
    specialtyPodiatry: 'Podiatría',
    specialtyInternalMedicine: 'Internista',
    specialtyPsychiatry: 'Psiquiatría',
    specialtyCardiology: 'Cardiología',
    specialtyGynecology: 'Ginecología',
    specialtyOptometry: 'Optometría',
    specialtyPulmonology: 'Neumología',
    specialtyEmergency: 'Emergenciología',
    specialtySpeech: 'Patología y Terapia del Habla',
    specialtyRheumatology: 'Reumatología',
    specialtyGeriatrics: 'Geriatría',
    specialtyAndMore: 'Entre más',
    
    // What Sets Us Apart
    whatSetsUsApartTitle: 'Lo que nos distingue',
    whatSetsUsApart1: 'Cumplimos con todos los protocolos federales.',
    whatSetsUsApart2: 'Facturación limpia que resalta en menos denegaciones.',
    whatSetsUsApart3: 'Atención personalizada. Transparencia y calidad en nuestro servicio.',
    
    // Did You Know
    didYouKnowTitle: '¿Sabías que...? (Dato útil)',
    didYouKnowText: 'Una facturación eficiente significa menos preocupaciones para el médico y más confianza para el paciente.',
    
    // Useful Data 1
    usefulData1Title: '',
    usefulData1Text: 'La reconciliación de pagos asegura que lo que paga la aseguradora coincide con lo facturado, evitando pérdidas económicas en la práctica médica.',
    
    // Useful Data 2
    usefulData2Title: '',
    usefulData2Text: 'El proceso de facturación médica inicia con la verificación de elegibilidad del paciente y termina con el pago de la aseguradora. Cada etapa debe cumplirse correctamente para evitar retrasos.',
    billingProcess1: 'Verificación de elegibilidad',
    billingProcess2: 'Codificación correcta (CPT/ICD)',
    billingProcess3: 'Envío de reclamación',
    billingProcess4: 'Seguimiento y pago',
    billingProcess5: 'Finalización Completa',
    
    // Contact
    contactTitle: 'Contáctenos',
    contactSubtitle: '¿Listo para simplificar su facturación médica? Póngase en contacto con nosotros hoy.',
    footerAddress: 'Las Villas B-15 Guaynabo, PR 00969',
    footerPhone: '(787) 223-9801',
    footerEmail: 'vj0042@outlook.com',
    footerFacebook: 'vjmedicalbillingllc',
    footerCta: '¿Listo para simplificar su facturación médica?',
    footerCtaButton: '¡Contáctenos hoy!',
  },
}


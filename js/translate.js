// translate.js

const translations = {
    title: "Sidwick",
    description: "Sidwick - Soluciones integradas para servicios de salud",
    keywords: "Sidwick, Servicios de Salud, Soluciones, Farmacéuticos, Atención Médica",
    home: "Inicio",
    aboutUs: "Sobre nosotros",
    solutions: "Soluciones",
    certifications: "Certificaciones",
    contact: "Contacto",
    integratedSolutions: "Soluciones integradas para servicios de salud",
    companyDescription: "Somos una empresa farmacéutica con sede en Argentina con más de 20 años de experiencia, comprometidos a agregar valor al mercado de atención médica regional y global.",
    shapingFuture: "Dando forma al futuro de la atención médica",
    futureDescription: "Desde el concepto hasta la finalización, nos especializamos en ayudar a empresas locales e internacionales que buscan lanzar sus servicios en el mercado LATAM...",
    experience: "+20 años de experiencia y contando",
    experienceDescription: "Suministrando productos genéricos a los HHS y sindicatos...",
	
    sidwickInNumbers: "Sidwick en números",
    bidsWon: "38 licitaciones ganadas",
    bidsDescription: "8 años consecutivos de suministros exclusivos del 80%...",
    efficiency: "99%",
    efficiencyDescription: "Eficiencia de cobranza institucional y de HMOs.",
    involvement: "80%",
    involvementDescription: "Participación en el Programa de Salud Reproductiva...",
    clients: "Nuestros clientes",
    mission: "Misión y Valores Fundamentales",
    coreValues: "Compasión – Integridad – Experiencia – Conexiones – Compromiso – Excelencia",
    footerAddress: "Av. Corrientes 800, Piso 34, Monserrat...",
    footerContact: "Contacto: +54 11 2222 3333",
    footerEmail: "Email: business@sidwick.com",
    copyright: "© Sidwick 2025..."
};

const englishTexts = {
    title: "Sidwick",
    description: "Sidwick - Integrated healthcare service solutions",
    keywords: "Sidwick, Healthcare Services, Solutions, Pharmaceuticals, Medical Care",
    home: "Home",
    aboutUs: "About Us",
    solutions: "Solutions",
    certifications: "Certifications",
    contact: "Contact",
    integratedSolutions: "Integrated healthcare service solutions",
    companyDescription: "We are a pharmaceutical company based in Argentina with over 20 years of experience, committed to adding value to the regional and global healthcare market.",
    shapingFuture: "Shaping the future of healthcare",
    futureDescription: "From concept to completion, we specialize in assisting local and international companies seeking to launch their services in the LATAM market...",
    experience: "20+ years of experience and counting",
    experienceDescription: "Supplying generic products to HHS and unions in various programs...",
    sidwickInNumbers: "Sidwick in Numbers",
    bidsWon: "38 bids won",
    bidsDescription: "8 consecutive years of exclusive 80% supply to MoH Argentina under World Bank funding.",
    efficiency: "99%",
    efficiencyDescription: "Institutional and HMO collection efficiency.",
    involvement: "80%",
    involvementDescription: "Participation in the Reproductive Health Program...",
    clients: "Our Clients",
    mission: "Mission and Core Values",
    coreValues: "Compassion – Integrity – Expertise – Connections – Commitment – Excellence",
    footerAddress: "Av. Corrientes 800, Floor 34, Monserrat, C1043AAU, Buenos Aires, Argentina",
    footerContact: "Contact: +54 11 2222 3333",
    footerEmail: "Email: business@sidwick.com",
    copyright: "© Sidwick 2025. All rights reserved."
};

function applyTranslations() {
    updateContent(translations);
}

function resetToEnglish() {
    updateContent(englishTexts);
}

function updateContent(content) {
    document.title = content.title;
    document.querySelector('meta[name="description"]').setAttribute("content", content.description);
    document.querySelector('meta[name="keywords"]').setAttribute("content", content.keywords);

    document.querySelector('#nav .navbar-list li.active a').textContent = content.home;
    document.querySelector('#nav .navbar-list li:nth-child(2) a').textContent = content.aboutUs;
    document.querySelector('#nav .navbar-list li:nth-child(3) a').textContent = content.solutions;
    document.querySelector('#nav .navbar-list li:nth-child(4) a').textContent = content.certifications;
    document.querySelector('#nav .navbar-list li:nth-child(5) a').textContent = content.contact;

    document.querySelector('.home-1 h1').textContent = content.integratedSolutions;
    document.querySelector('.home-1 p').textContent = content.companyDescription;

    document.querySelector('.home-2 h2').textContent = content.shapingFuture;
    document.querySelector('.home-2 p').textContent = content.futureDescription;

    document.querySelector('.home-3 h2').textContent = content.experience;
    document.querySelector('.home-3 p').textContent = content.experienceDescription;

    document.querySelector('.home-4 h2').textContent = content.sidwickInNumbers;

    const cards = [
        { title: content.bidsWon, description: content.bidsDescription },
        { title: content.efficiency, description: content.efficiencyDescription },
        { title: content.involvement, description: content.involvementDescription }
    ];

    const cardElements = document.querySelectorAll('.carousel-item .card');
    cardElements.forEach((card, index) => {
        card.querySelector('h3').textContent = cards[index].title;
        card.querySelector('p').textContent = cards[index].description;
    });

    document.querySelector('.home-5 h2').innerHTML = `<span class="font-style">${content.clients}</span>`;
    document.querySelector('.about-us-header h2').innerHTML = content.aboutUs === "About Us"
        ? `About <span class="font-style">Us</span>` : `Sobre <span class="font-style">nosotros</span>`;

    document.querySelector('.about-us-header p').textContent = content.companyDescription;
    document.querySelector('.about-us-title').textContent = "SIDWICK";
    document.querySelector('.about-us-second-header h2').innerHTML = `<span class="font-style">${content.mission.split(' ')[0]}</span> ${content.mission.split(' ').slice(1).join(' ')}`;
    document.querySelector('.about-us-second-header .text-content p:nth-child(1)').textContent = content.missionDescription ?? content.companyDescription;
    document.querySelector('.about-us-second-header .text-content p:nth-child(2)').textContent = "All of this while ensuring milestones in successful and ongoing business.";
    document.querySelector('.about-us-second-header .text-content p:nth-child(3)').innerHTML = `<span class="negrito">Core values:</span>`;
    document.querySelector('.about-us-second-header .text-content p:nth-child(4)').textContent = content.coreValues;

    document.querySelector('.our-track-record h2').textContent = "Our Track Record";
    document.querySelector('.stats .stat-box:nth-child(1) span').textContent = content.bidsWon;
    document.querySelector('.stats .stat-box:nth-child(2) span').textContent = "20M+ clients";

    // O restante do conteúdo dinâmico pode seguir o mesmo padrão se necessário...
    document.querySelector('#footer .footer-info p:nth-child(1)').textContent = content.footerAddress;
    document.querySelector('#footer .footer-info p:nth-child(2)').textContent = content.footerContact;
    document.querySelector('#footer .footer-info p:nth-child(3)').textContent = content.footerEmail;
    document.querySelector('.copyright p').textContent = content.copyright;
}

// Export functions globally
window.applyTranslations = applyTranslations;
window.resetToEnglish = resetToEnglish;

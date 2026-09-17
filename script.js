document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const headerNav = document.getElementById('headerNav');

    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', () => {
            headerNav.classList.toggle('is-open');
        });

        // Close menu when clicking any nav link
        headerNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                headerNav.classList.remove('is-open');
            });
        });
    }

    // Header background opacity on scroll
    const mainHeader = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            mainHeader.style.background = 'rgba(12, 14, 18, 0.95)';
            mainHeader.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
        } else {
            mainHeader.style.background = 'rgba(12, 14, 18, 0.8)';
            mainHeader.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
        }
    });

    // Project Details Data
    const projectsData = {
        ambientalpro: {
            category: "Site Institucional",
            title: "Ambiental Pro — Site Institucional & Landing Page de Congresso",
            fullDesc: "Desenvolvimento de plataforma institucional e Landing Page de alta conversão para a Ambiental Pro focada no Workshop de Geoprocessamento e Perícia Ambiental. O projeto combina arquitetura persuasiva, autoridade técnica, formulários inteligentes com validação internacional de telefone, modais explicativos, cronograma de aulas e rastreamento completo de eventos via Meta Pixel e Google Tag Manager.",
            highlights: [
                "Arquitetura focada em autoridade técnica, clareza da oferta e máxima conversão",
                "Formulário inteligente com validação internacional de telefone (intl-tel-input)",
                "Integração analítica completa com Meta Pixel (Event ID), Google Analytics 4 e GTM",
                "Design moderno em dark mode com micro-interações, acordeões interativos e alta performance"
            ],
            tags: ["Site Institucional", "Ambiental Pro", "Landing Page", "UI/UX Design", "Copywriting", "Alta Conversão", "QGIS & Perícia"],
            previewUrl: "ambientalpro/index.html",
            previewDisplayUrl: "https://workshopgeopericia.ambientalpro.com.br"
        },
        bosscut: {
            category: "Presença Digital",
            title: "Google Meu Negócio & SEO Local — Barbearia Boss Cut",
            fullDesc: "Estratégia completa de posicionamento no Google Meu Negócio e Google Maps desenvolvida para a Barbearia Boss Cut, localizada em Suzano/SP. O projeto estruturou o perfil profissional com fotos de alta qualidade, otimização de categorias, palavras-chave locais de alta intenção, informações completas de localização e canais diretos para agendamento via WhatsApp e ligações.",
            highlights: [
                "98 interações diretas realizadas no Perfil da Empresa (solicitações de rotas, ligações e agendamentos)",
                "+250 visualizações orgânicas no Perfil da Empresa conquistadas na região",
                "65% dos acessos originados diretamente de smartphones (Pesquisa Google e Google Maps)"
            ],
            tags: ["Google Maps", "SEO Local", "Barbearia Boss Cut", "Conversão", "Suzano SP"],
            images: [
                { src: "/google/bosscut.jpeg", caption: "Perfil verificado e otimizado da Barbearia Boss Cut no Google Maps" },
                { src: "/google/dadosboss.jpeg", caption: "Métricas de alcance: visualizações e distribuição por dispositivos" }
            ]
        },
        newfields: {
            category: "Landing Page",
            title: "NewFields — Landing Page para Evento Corporativo & Captação",
            fullDesc: "Página de aterrissagem desenvolvida estrategicamente para o encontro corporativo de líderes e executivos NewFields Annual Strategy Summit. A estrutura foi desenhada para facilitar a captação de tomadores de decisão, oferecendo informações detalhadas sobre a agenda, palestrantes principais e formulário dinâmico de confirmação de presença integrado ao CRM.",
            highlights: [
                "Layout executivo de alto impacto visual com contraste refinado e tipografia corporativa",
                "Formulário de inscrição otimizado com validação de dados de contato corporativo",
                "Métricas analíticas para acompanhamento do custo por lead e taxa de conversão",
                "Experiência responsiva perfeita para navegação rápida em smartphones e laptops"
            ],
            tags: ["Landing Page", "NewFields", "Design Corporativo", "B2B", "Conversão de Leads", "UI/UX"],
            images: [
                { src: "/newfields-card.webp", caption: "Interface principal da Landing Page executiva NewFields" }
            ]
        },
        lucas: {
            category: "Portfólio",
            title: "Lucas Evangelista — Portfólio de Marketing & Estratégia de Conteúdo",
            fullDesc: "Desenvolvimento e concepção de website autoral de portfólio para Lucas Evangelista, especialista em marketing e estratégia de conteúdo com atuação em empresas como Ambiental Pro e QuironMed Soluções Hospitalares. O projeto conta com design dinâmico, hero imersivo com vídeo de background, efeito spotlight responsivo, tipografia personalizada (Geova), galerias horizontais de campanhas e produções audiovisuais com visualizador fullscreen.",
            highlights: [
                "Hero imersivo com vídeo em background responsivo e efeito spotlight no cursor",
                "Galerias de rolagem horizontal interativas para exibição de posts, eventos e vídeos",
                "Tipografia autoral personalizada e paleta cromática vibrante alinhada à comunicação",
                "Experiência mobile-first impecável com carregamento rápido e visualizador fullscreen de mídia"
            ],
            tags: ["Website Portfólio", "Lucas Evangelista", "Marketing Digital", "Estratégia de Conteúdo", "UI/UX", "Vídeo & Motion"],
            previewUrl: "sitelucas/index.html",
            previewDisplayUrl: "https://lucasevangelista.com.br"
        },
        variados: {
            category: "Portfólio",
            title: "Lucas Evangelista — Portfólio de Marketing & Estratégia de Conteúdo",
            fullDesc: "Desenvolvimento e concepção de website autoral de portfólio para Lucas Evangelista, especialista em marketing e estratégia de conteúdo com atuação em empresas como Ambiental Pro e QuironMed Soluções Hospitalares.",
            highlights: [
                "Hero imersivo com vídeo em background responsivo e efeito spotlight no cursor",
                "Galerias de rolagem horizontal interativas para exibição de posts, eventos e vídeos"
            ],
            tags: ["Website Portfólio", "Lucas Evangelista", "Marketing Digital"],
            previewUrl: "sitelucas/index.html",
            previewDisplayUrl: "https://lucasevangelista.com.br",
            images: [
                { src: "/lucas-card.webp", caption: "Interface do portfólio de Lucas Evangelista em laptop" }
            ]
        }
    };

    // Modal Elements
    const projectModal = document.getElementById('projectModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalPreview = document.getElementById('modalPreview');
    const modalGallery = document.getElementById('modalGallery');
    const modalFullDesc = document.getElementById('modalFullDesc');
    const modalHighlights = document.getElementById('modalHighlights');
    const modalTags = document.getElementById('modalTags');

    // Prevenção universal de palavras órfãs (evita uma palavra sozinha em uma linha)
    function preventOrphansInText(str) {
        if (!str || typeof str !== 'string') return str;
        return str.trim().replace(/\s+([^\s<]+)$/, '\u00A0$1');
    }

    function preventOrphansInElement(el) {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
        let lastTextNode = null;
        while (walker.nextNode()) {
            if (walker.currentNode.nodeValue.trim().length > 0) {
                lastTextNode = walker.currentNode;
            }
        }
        if (lastTextNode && lastTextNode.nodeValue) {
            lastTextNode.nodeValue = lastTextNode.nodeValue.replace(/ ([^ \n\r\t]+)$/, '\u00A0$1');
        }
    }

    function applyUniversalOrphanPrevention() {
        const selectors = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            '.section-heading', '.hero-heading', '.problem-heading', '.process-heading',
            '.about-heading', '.cta-banner-heading', '.step-title', '.service-card-title',
            '.project-card-title', '.checklist-title', '.btn-pill span',
            'p', 'li', '.hero-description', '.services-intro-text', '.service-card-desc',
            '.problem-desc', '.project-card-summary', '.step-desc', '.about-bio-text',
            '.script-quote', '.handwritten-quote', '.skill-text'
        ];
        document.querySelectorAll(selectors.join(', ')).forEach(el => {
            preventOrphansInElement(el);
        });
    }

    // Executa ao inicializar a página
    applyUniversalOrphanPrevention();

    function openProjectModal(projectId) {
        const data = projectsData[projectId];
        if (!data || !projectModal) return;

        modalCategory.textContent = preventOrphansInText(data.category);
        modalTitle.textContent = preventOrphansInText(data.title);
        modalFullDesc.textContent = preventOrphansInText(data.fullDesc);

        // Highlights
        modalHighlights.innerHTML = data.highlights.map(h => `<li>${preventOrphansInText(h)}</li>`).join('');

        // Tags
        modalTags.innerHTML = data.tags.map(t => `<span class="project-modal-tag">${t}</span>`).join('');

        // Live Site Preview (Browser Mockup com scaler interativo para o Ambiental Pro)
        if (modalPreview) {
            if (data.previewUrl) {
                modalPreview.innerHTML = `
                    <div class="browser-mockup">
                        <div class="browser-mockup-header">
                            <div class="browser-mockup-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div class="browser-mockup-url">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                <span>${data.previewDisplayUrl || data.previewUrl}</span>
                            </div>
                            <div class="browser-mockup-actions">
                                <a href="${data.previewUrl}" target="_blank" rel="noopener noreferrer" class="browser-mockup-btn" title="Abrir página completa">
                                    <span>Abrir</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="browser-mockup-body" id="mockupBody">
                            <div class="browser-mockup-scaler" id="mockupScaler">
                                <iframe src="${data.previewUrl}" title="Prévia do Site" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                `;
                modalPreview.style.display = 'block';

                const updateScale = () => {
                    const body = document.getElementById('mockupBody');
                    const scaler = document.getElementById('mockupScaler');
                    if (body && scaler) {
                        const width = body.clientWidth;
                        if (width > 0) {
                            const scale = width / 1280;
                            scaler.style.transform = `scale(${scale})`;
                            body.style.height = `${Math.round(820 * scale)}px`;
                        }
                    }
                };

                requestAnimationFrame(() => {
                    updateScale();
                    setTimeout(updateScale, 80);
                    setTimeout(updateScale, 250);
                });

                window.removeEventListener('resize', updateScale);
                window.addEventListener('resize', updateScale);
            } else {
                modalPreview.innerHTML = '';
                modalPreview.style.display = 'none';
            }
        }

        // Galeria de imagens
        if (data.images && data.images.length > 0) {
            modalGallery.innerHTML = data.images.map(img => `
                <div class="project-modal-image-item">
                    <img src="${img.src}" alt="${data.title}" loading="lazy">
                    ${img.caption ? `<span class="project-modal-caption">${img.caption}</span>` : ''}
                </div>
            `).join('');
            modalGallery.style.display = 'grid';
        } else {
            modalGallery.style.display = 'none';
        }

        projectModal.classList.add('is-active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('is-active');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (modalPreview) {
            modalPreview.innerHTML = '';
            modalPreview.style.display = 'none';
        }
    }

    // Attach click events to project cards
    document.querySelectorAll('.project-showcase-card').forEach(card => {
        const id = card.dataset.projectId;
        card.addEventListener('click', () => {
            openProjectModal(id);
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(id);
            }
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('is-active')) {
            closeProjectModal();
        }
    });
});

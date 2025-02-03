// Animation des chiffres dans le hero
function animateHeroNumbers() {
    const numbers = document.querySelectorAll('.hero .number');
    numbers.forEach(number => {
        const finalValue = parseInt(number.getAttribute('data-value'));
        gsap.to(number, {
            textContent: finalValue,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: number,
                start: "top 80%"
            }
        });
    });
}

// Gestion de la carte interactive
function initRegionalMap() {
    const svgEmbed = document.getElementById('france-map');
    
    // Table de correspondance entre les IDs du SVG et les IDs de data.js
    const regionMapping = {
        'FR-A': 'alsace',
        'FR-B': 'aquitaine',
        'FR-C': 'auvergne',
        'FR-D': 'bourgogne',
        'FR-E': 'bretagne',
        'FR-F': 'centre',
        'FR-G': 'champagne-ardenne',
        'FR-H': 'corse',
        'FR-I': 'franche-comte',
        'FR-J': 'ile-de-france',
        'FR-K': 'languedoc-roussillon',
        'FR-L': 'limousin',
        'FR-M': 'lorraine',
        'FR-N': 'midi-pyrenees',
        'FR-O': 'nord-pas-de-calais',
        'FR-P': 'basse-normandie',
        'FR-Q': 'haute-normandie',
        'FR-R': 'pays-de-la-loire',
        'FR-S': 'picardie',
        'FR-T': 'poitou-charentes',
        'FR-U': 'provence-alpes-cote-azur',
        'FR-V': 'rhone-alpes'
    };

    function initSVGInteractions(svgDoc) {
        const regions = svgDoc.getElementsByTagName('path');
        
        Array.from(regions).forEach(region => {
            const dataId = regionMapping[region.id];
            
            if (dataId && window.roadSecurityData.regionalData[dataId]) {
                // Style initial
                region.style.fill = '#800020';
                region.style.transition = 'all 0.3s ease';
                
                // Événements de la souris
                region.addEventListener('mouseenter', () => {
                    region.style.fill = '#a3324d';
                    region.style.cursor = 'pointer';
                });

                region.addEventListener('mouseleave', () => {
                    if (!region.classList.contains('selected')) {
                        region.style.fill = '#800020';
                    }
                });

                region.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Réinitialiser toutes les régions
                    Array.from(regions).forEach(r => {
                        r.style.fill = '#800020';
                        r.classList.remove('selected');
                    });
                    
                    // Mettre en évidence la région sélectionnée
                    region.style.fill = '#FFD700';
                    region.classList.add('selected');
                    
                    const regionData = window.roadSecurityData.regionalData[dataId];
                    if (regionData) {
                        displayRegionalData(regionData);
                    }
                });
            } else {
                console.log(`No mapping found for region ID: ${region.id}`);
                region.style.fill = '#333333';
            }
        });
    }

    // Attendre que le SVG soit chargé
    svgEmbed.addEventListener('load', function() {
        try {
            const svgDoc = svgEmbed.getSVGDocument();
            if (svgDoc) {
                console.log('SVG loaded successfully');
                initSVGInteractions(svgDoc);
            } else {
                console.error('SVG document not found');
            }
        } catch (error) {
            console.error('Error initializing SVG:', error);
        }
    });
}

function displayRegionalData(regionData) {
    const container = document.getElementById('region-details');
    if (!container) return;

    const evolutionClass = regionData.evolution >= 0 ? 'negative' : 'positive';
    const evolutionSymbol = regionData.evolution >= 0 ? '+' : '';

    const html = `
        <div class="region-header">
            <h2>${regionData.nom}</h2>
            <span class="evolution-badge ${evolutionClass}">
                ${evolutionSymbol}${regionData.evolution}% d'accidents par rapport à 2022
            </span>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">${regionData.statistiquesGenerales.accidents2023}</div>
                <div class="stat-label">Accidents en 2023</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${regionData.statistiquesGenerales.tuesSurPlace}</div>
                <div class="stat-label">Tués sur place</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${regionData.statistiquesGenerales.blessesHospitalises}</div>
                <div class="stat-label">Blessés hospitalisés</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${regionData.statistiquesGenerales.blessesLegers}</div>
                <div class="stat-label">Blessés légers</div>
            </div>
        </div>

        ${regionData.repartitionTemporelle && regionData.repartitionTemporelle.distribution && 
          regionData.repartitionTemporelle.distribution.jour && 
          regionData.repartitionTemporelle.distribution.nuit ? `
            <div class="temporal-section">
                <h3>Distribution temporelle</h3>
                <div class="day-night-distribution">
                    <div class="time-block">
                        <div class="time-header">
                            <h4>Jour (${regionData.repartitionTemporelle.distribution.jour.pourcentage}%)</h4>
                        </div>
                        <div class="peak-hours">
                            ${regionData.repartitionTemporelle.distribution.jour.heuresPic.map(peak => `
                                <div class="peak-hour-item">
                                    <div class="hour-range">${peak.creneau} (${peak.pourcentage}%)</div>
                                    <div class="accident-types">
                                        ${peak.typesAccidents.map(type => `
                                            <span class="accident-type">${type}</span>
                                        `).join('')}
                                    </div>
                                    <div class="factors">
                                        ${peak.facteurs.map(facteur => `
                                            <span class="factor">${facteur}</span>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="time-block">
                        <div class="time-header">
                            <h4>Nuit (${regionData.repartitionTemporelle.distribution.nuit.pourcentage}%)</h4>
                        </div>
                        <div class="peak-hours">
                            ${regionData.repartitionTemporelle.distribution.nuit.heuresCritiques.map(peak => `
                                <div class="peak-hour-item">
                                    <div class="hour-range">${peak.creneau} (${peak.pourcentage}%)</div>
                                    <div class="accident-types">
                                        ${peak.typesAccidents.map(type => `
                                            <span class="accident-type">${type}</span>
                                        `).join('')}
                                    </div>
                                    <div class="factors">
                                        ${peak.facteurs.map(facteur => `
                                            <span class="factor">${facteur}</span>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        ` : ''}
    `;

    container.innerHTML = html;
}

// Fonction utilitaire pour capitaliser la première lettre
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Menu mobile
function initMobileMenu() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}

// Variables de contrôle du loader
let loaderTimer;
let loaderReady = false;

// Fonction pour fermer le loader et démarrer les animations
function closeLoader() {
    const loader = document.querySelector('.loader');
    if (!loaderReady) return;
    
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 1s ease';
    document.body.style.overflow = '';
    
    setTimeout(() => {
        loader.style.display = 'none';
        // Démarrer toutes les animations GSAP ici
        gsap.globalTimeline.resume();
    }, 1000);
}

// Initialisation du loader
document.addEventListener('DOMContentLoaded', () => {
    // Mettre en pause toutes les animations GSAP
    gsap.globalTimeline.pause();
    
    const loader = document.querySelector('.loader');
    
    // Forcer l'affichage du loader
    loader.style.display = 'flex';
    loader.style.opacity = '1';
    document.body.style.overflow = 'hidden';
    
    // Désactiver toutes les animations GSAP existantes sur le loader
    if (typeof gsap !== 'undefined') {
        gsap.killTweensOf(loader);
    }
    
    // Timer strict de 5 secondes
    const startTime = Date.now();
    
    function checkTime() {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= 5000) {
            loaderReady = true;
            closeLoader();
        } else {
            requestAnimationFrame(checkTime);
        }
    }
    
    checkTime();
});

// Empêcher toute fermeture prématurée
window.addEventListener('load', () => {
    if (typeof gsap !== 'undefined') {
        gsap.killTweensOf('.loader');
    }
});

// Gestion des alertes météo et conseils de conduite
const preventionData = {
    conseils: [
        {
            titre: "Conduite de nuit",
            contenu: "Réduisez votre vitesse et augmentez les distances de sécurité. Vérifiez vos feux.",
            icon: "🌙"
        },
        {
            titre: "Conduite sous la pluie",
            contenu: "Pneus en bon état, distances doublées, feux allumés.",
            icon: "🌧"
        },
        // ... autres conseils
    ],
    meteo: {
        getAlerts: async () => {
            // Simulation d'appel API météo
            return [
                {
                    region: "Bretagne",
                    type: "Tempête",
                    niveau: "Orange",
                    description: "Vents violents prévus"
                },
                // ... autres alertes
            ];
        }
    },
    travaux: {
        getChantiers: async () => {
            // Simulation d'appel API travaux
            return [
                {
                    route: "A1",
                    localisation: "km 123",
                    type: "Réfection chaussée",
                    duree: "3 jours"
                },
                // ... autres chantiers
            ];
        }
    }
};

// Gestion de la comparaison des régions
class RegionComparator {
    constructor() {
        this.region1Select = document.getElementById('region1');
        this.region2Select = document.getElementById('region2');
        this.compareBtn = document.getElementById('compare-btn');
        this.resultDiv = document.getElementById('comparison-result');
        
        this.initSelects();
        this.bindEvents();
    }

    initSelects() {
        // Vider les selects avant d'ajouter les options
        this.region1Select.innerHTML = '';
        this.region2Select.innerHTML = '';
        
        const regions = Object.keys(window.roadSecurityData.regionalData);
        regions.forEach(region => {
            const regionData = window.roadSecurityData.regionalData[region];
            this.region1Select.add(new Option(regionData.nom, region));
            this.region2Select.add(new Option(regionData.nom, region));
        });
    }

    bindEvents() {
        this.compareBtn.addEventListener('click', () => {
            // Réinitialiser l'affichage précédent
            this.resultDiv.innerHTML = '';
            this.compareRegions();
        });
    }

    compareRegions() {
        const r1 = window.roadSecurityData.regionalData[this.region1Select.value];
        const r2 = window.roadSecurityData.regionalData[this.region2Select.value];

        if (!r1 || !r2) return;

        const html = `
            <div class="comparison-results">
                <div class="region-comparison">
                    <h3>${r1.nom}</h3>
                    <div class="stat-group">
                        <h4>Accidents en 2023</h4>
                        ${r1.statistiquesGenerales.accidents2023}
                    </div>
                    <div class="stat-group">
                        <h4>Décès</h4>
                        ${r1.statistiquesGenerales.tuesSurPlace}
                    </div>
                    <div class="stat-group">
                        <h4>Blessés</h4>
                        <div>Hospitalisés: ${r1.statistiquesGenerales.blessesHospitalises}</div>
                        <div>Légers: ${r1.statistiquesGenerales.blessesLegers}</div>
                    </div>
                    <div class="stat-group">
                        <h4>Évolution</h4>
                        <div class="evolution ${r1.evolution < 0 ? 'positive' : 'negative'}">
                            ${r1.evolution}% par rapport à 2022
                        </div>
                    </div>
                </div>
                <div class="region-comparison">
                    <h3>${r2.nom}</h3>
                    <div class="stat-group">
                        <h4>Accidents en 2023</h4>
                        ${r2.statistiquesGenerales.accidents2023}
                    </div>
                    <div class="stat-group">
                        <h4>Décès</h4>
                        ${r2.statistiquesGenerales.tuesSurPlace}
                    </div>
                    <div class="stat-group">
                        <h4>Blessés</h4>
                        <div>Hospitalisés: ${r2.statistiquesGenerales.blessesHospitalises}</div>
                        <div>Légers: ${r2.statistiquesGenerales.blessesLegers}</div>
                    </div>
                    <div class="stat-group">
                        <h4>Évolution</h4>
                        <div class="evolution ${r2.evolution < 0 ? 'positive' : 'negative'}">
                            ${r2.evolution}% par rapport à 2022
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.resultDiv.innerHTML = html;
        this.animateComparison();
    }

    animateComparison() {
        gsap.from('.region-comparison', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: "power2.out"
        });
    }
}

// S'assurer que l'instance est unique
if (window.regionComparator) {
    delete window.regionComparator;
}
window.regionComparator = new RegionComparator();

// Gestion de la carte interactive
class DangerMap {
    constructor() {
        this.map = null;
        this.markers = [];
        this.filters = document.querySelectorAll('.filter-btn');
        this.dangerZones = {
            accidents: [],
            travaux: [],
            bouchons: []
        };
        
        this.initMap();
        this.loadDangerZones();
        this.bindFilters();
    }

    initMap() {
        // Initialisation de la carte Leaflet centrée sur la France
        this.map = L.map('danger-map').setView([46.603354, 1.888334], 6);
        
        // Ajout du fond de carte
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(this.map);

        // Style personnalisé pour les marqueurs
        this.customIcon = {
            accident: L.divIcon({
                className: 'custom-marker accident',
                html: '<div class="marker-content">🚨</div>',
                iconSize: [30, 30]
            }),
            travaux: L.divIcon({
                className: 'custom-marker travaux',
                html: '<div class="marker-content">🚧</div>',
                iconSize: [30, 30]
            }),
            bouchon: L.divIcon({
                className: 'custom-marker bouchon',
                html: '<div class="marker-content">🚗</div>',
                iconSize: [30, 30]
            })
        };
    }

    async loadDangerZones() {
        try {
            this.dangerZones = {
                accidents: [
                    { lat: 48.8566, lng: 2.3522, type: 'accident', severity: 'high', description: 'Accident grave sur A1 - Multiple véhicules impliqués' },
                    { lat: 45.7578, lng: 4.8320, type: 'accident', severity: 'medium', description: 'Collision sur N7 - Circulation ralentie' },
                    { lat: 43.6047, lng: 1.4442, type: 'accident', severity: 'high', description: 'Carambolage sur périphérique - Intervention en cours' },
                    { lat: 47.4784, lng: -0.5632, type: 'accident', severity: 'low', description: 'Accrochage léger - Dégagement en cours' },
                    { lat: 48.5734, lng: 7.7521, type: 'accident', severity: 'medium', description: 'Accident sur A35 - 2 voies neutralisées' },
                    { lat: 43.7102, lng: 7.2620, type: 'accident', severity: 'high', description: 'Accident tunnel A8 - Circulation bloquée' },
                    { lat: 50.6292, lng: 3.0573, type: 'accident', severity: 'medium', description: 'Collision multiple A1 - Intervention SAMU' },
                    { lat: 44.8378, lng: -0.5792, type: 'accident', severity: 'high', description: 'Accident poids lourd - Rocade fermée' }
                ],
                travaux: [
                    { lat: 43.2965, lng: 5.3698, type: 'travaux', duration: '3 jours', description: 'Réfection de chaussée - A50' },
                    { lat: 47.2184, lng: -1.5536, type: 'travaux', duration: '1 semaine', description: 'Élargissement voie - Périphérique' },
                    { lat: 48.1147, lng: -1.6794, type: 'travaux', duration: '2 semaines', description: 'Construction rond-point - N137' },
                    { lat: 45.7640, lng: 4.8357, type: 'travaux', duration: '5 jours', description: 'Rénovation pont - A47' },
                    { lat: 49.4431, lng: 1.0993, type: 'travaux', duration: '10 jours', description: 'Modernisation éclairage - A13' },
                    { lat: 47.3215, lng: 5.0415, type: 'travaux', duration: '1 mois', description: 'Élargissement autoroute - A31' },
                    { lat: 44.3378, lng: 1.2092, type: 'travaux', duration: '2 semaines', description: 'Réfection tunnels - A20' },
                    { lat: 49.1734, lng: 6.9521, type: 'travaux', duration: '3 semaines', description: 'Installation murs anti-bruit - A4' },
                    { lat: 43.6107, lng: 3.8767, type: 'travaux', duration: '4 jours', description: 'Rénovation chaussée - A709' },
                    { lat: 46.1640, lng: 2.8357, type: 'travaux', duration: '1 semaine', description: 'Maintenance tunnel - A71' }
                ],
                bouchons: [
                    { lat: 48.9147, lng: 2.2794, type: 'bouchon', length: '5km', description: 'Bouchon A86 - Temps +25min' },
                    { lat: 43.3378, lng: -0.7792, type: 'bouchon', length: '3km', description: 'Ralentissement A64 - Temps +15min' },
                    { lat: 48.7566, lng: 2.4522, type: 'bouchon', length: '7km', description: 'Bouchon A6 - Temps +40min' },
                    { lat: 45.8578, lng: 4.7320, type: 'bouchon', length: '4km', description: 'Ralentissement A7 - Temps +20min' },
                    { lat: 43.4965, lng: 5.2698, type: 'bouchon', length: '6km', description: 'Bouchon A51 - Temps +30min' },
                    { lat: 48.8734, lng: 7.5521, type: 'bouchon', length: '3.5km', description: 'Ralentissement A4 - Temps +15min' },
                    { lat: 43.8047, lng: 1.2442, type: 'bouchon', length: '8km', description: 'Bouchon A62 - Temps +45min' },
                    { lat: 50.4292, lng: 2.8573, type: 'bouchon', length: '4.5km', description: 'Ralentissement A21 - Temps +25min' },
                    { lat: 47.4184, lng: -1.7536, type: 'bouchon', length: '2.5km', description: 'Bouchon N165 - Temps +10min' },
                    { lat: 49.2431, lng: 1.2993, type: 'bouchon', length: '5.5km', description: 'Ralentissement A13 - Temps +30min' },
                    { lat: 44.1102, lng: 6.9620, type: 'bouchon', length: '3km', description: 'Bouchon A51 - Temps +20min' },
                    { lat: 46.4397, lng: 4.1872, type: 'bouchon', length: '4km', description: 'Ralentissement N79 - Temps +15min' }
                ]
            };

            this.displayDangerZones();
        } catch (error) {
            console.error('Erreur lors du chargement des zones de danger:', error);
        }
    }

    displayDangerZones() {
        // Nettoyer les marqueurs existants
        this.clearMarkers();

        // Afficher les nouveaux marqueurs
        Object.entries(this.dangerZones).forEach(([category, zones]) => {
            zones.forEach(zone => {
                const marker = L.marker([zone.lat, zone.lng], {
                    icon: this.customIcon[zone.type]
                }).addTo(this.map);

                // Popup personnalisé
                const popupContent = `
                    <div class="danger-popup ${zone.type}">
                        <h3>${this.capitalizeFirstLetter(zone.type)}</h3>
                        <p>${zone.description}</p>
                        ${zone.severity ? `<span class="severity ${zone.severity}">Gravité: ${zone.severity}</span>` : ''}
                        ${zone.duration ? `<span class="duration">Durée: ${zone.duration}</span>` : ''}
                        ${zone.length ? `<span class="length">Longueur: ${zone.length}</span>` : ''}
                    </div>
                `;

                marker.bindPopup(popupContent);
                this.markers.push({ marker, category });
            });
        });
    }

    bindFilters() {
        this.filters.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterType = btn.dataset.type;
                
                // Toggle active class
                btn.classList.toggle('active');
                
                // Filtrer les marqueurs
                this.filterMarkers(filterType);
            });
        });
    }

    filterMarkers(type) {
        this.markers.forEach(({ marker, category }) => {
            if (type === 'all' || category === type) {
                marker.addTo(this.map);
            } else {
                marker.remove();
            }
        });
    }

    clearMarkers() {
        this.markers.forEach(({ marker }) => marker.remove());
        this.markers = [];
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// Gestion du tableau de bord national
class NationalDashboard {
    constructor() {
        this.container = document.querySelector('.stats-grid-national');
        this.initDashboard();
    }

    initDashboard() {
        const nationalStats = this.calculateNationalStats();
        this.displayStats(nationalStats);
    }

    calculateNationalStats() {
        // Calcul des statistiques nationales
        return {
            totalAccidents: Object.values(window.roadSecurityData.regionalData).reduce((acc, region) => 
                acc + region.statistiquesGenerales.accidents2023, 0),
            // ... autres calculs
        };
    }

    displayStats(stats) {
        // Affichage des statistiques avec des graphiques
        // ... code d'affichage
    }
}

// Gestion des actualités
class NewsManager {
    constructor() {
        this.container = document.querySelector('.news-container');
        this.loadNews();
    }

    async loadNews() {
        const news = await this.fetchNews();
        this.displayNews(news);
    }

    async fetchNews() {
        // Simulation d'appel API actualités
        return [
            {
                titre: "Nouvelle campagne de prévention",
                date: "2024-03-15",
                image: "path/to/image.jpg",
                contenu: "Description de la campagne..."
            },
            // ... autres actualités
        ];
    }

    displayNews(news) {
        // Affichage des actualités
        // ... code d'affichage
    }
}

// Système d'onglets pour la section prévention
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer la section de comparaison existante
    const existingCompareSection = document.querySelector('.compare-section');
    
    const preventionSection = document.querySelector('.prevention-section');
    
    // Créer la structure des onglets
    preventionSection.innerHTML = `
        <div class="tabs-container">
            <div class="tabs-header">
                <button class="tab-btn active" data-tab="comparison">Comparaison des Régions</button>
                <button class="tab-btn" data-tab="weather">Alertes Météo</button>
            </div>
            
            <div class="tab-content active" id="comparison-tab">
                ${existingCompareSection.innerHTML}
            </div>
            
            <div class="tab-content" id="weather-tab">
                <div class="weather-grid">
                    <div class="weather-card">
                        <h3>Conditions Actuelles</h3>
                        <div class="weather-stats">
                            <div class="weather-stat">
                                <span class="stat-label">Risque Routier Global</span>
                                <div class="risk-indicator high">
                                    Élevé ⚠️
                                </div>
                            </div>
                            <div class="weather-stat">
                                <span class="stat-label">Visibilité Routière</span>
                                <div class="risk-indicator moderate">
                                    Modérée 🌫️
                                </div>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 65%;"></div>
                                </div>
                            </div>
                            <div class="weather-stat">
                                <span class="stat-label">État des Routes</span>
                                <div class="risk-indicator high">
                                    Glissant 🌧️
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="weather-card">
                        <h3>Alertes en Cours</h3>
                        <div class="alert-list">
                            <div class="alert-item">
                                <span class="alert-icon">🌧️</span>
                                <div class="alert-details">
                                    <h4>Pluies Verglaçantes</h4>
                                    <p>Risque accru d'accidents sur les axes principaux. Réduisez votre vitesse de 20km/h.</p>
                                </div>
                            </div>
                            <div class="alert-item">
                                <span class="alert-icon">🌫️</span>
                                <div class="alert-details">
                                    <h4>Brouillard Dense</h4>
                                    <p>Visibilité réduite à 100m sur les routes départementales. Allumez vos feux de brouillard.</p>
                                </div>
                            </div>
                            <div class="alert-item">
                                <span class="alert-icon">❄️</span>
                                <div class="alert-details">
                                    <h4>Risque de Verglas</h4>
                                    <p>Formation possible de plaques de verglas en matinée. Soyez particulièrement vigilant.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Supprimer l'ancienne section de comparaison
    existingCompareSection.remove();

    // Gestionnaire des onglets
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const tabId = btn.dataset.tab + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Réinitialiser les gestionnaires d'événements pour la comparaison
    document.getElementById('compare-btn')?.addEventListener('click', compareRegions);
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing map...');
    initMobileMenu();
    initRegionalMap();
    animateHeroNumbers();
    new RegionComparator();
    new DangerMap();
    new NationalDashboard();
    new NewsManager();
}); 
// Données globales accessibles
window.roadSecurityData = {
    statistiquesNationales: {
        totalAccidents2023: 52957,
        totalTues: 3267,
        totalBlesses: 65738,
        coutSocialTotal: '39.7 milliards €',
        moyenneJournaliere: {
            accidents: 145,
            tues: 9,
            blessesGraves: 44
        },
        principalesCauses: [
            {
                cause: 'Vitesse excessive',
                pourcentage: 31,
                evolution: -2.1,
                detailsComportement: 'Dépassement de plus de 20km/h'
            },
            {
                cause: 'Alcool',
                pourcentage: 23,
                evolution: -1.5,
                detailsComportement: '29% des accidents mortels'
            },
            {
                cause: 'Stupéfiants',
                pourcentage: 13,
                evolution: +2.1,
                detailsComportement: '20% des accidents mortels'
            },
            {
                cause: 'Inattention/téléphone',
                pourcentage: 10,
                evolution: +3.2,
                detailsComportement: '1 accident sur 10'
            }
        ],
        repartitionUsagers: {
            automobilistes: 51,
            deuxRouesMotorises: 23,
            pietons: 15,
            cyclistes: 8,
            autres: 3
        }
    },
    regionalData: {
        'ile-de-france': {
            nom: 'Île-de-France',
            statistiquesGenerales: {
                accidents2023: 16507,
                tuesSurPlace: 235,
                blessesGraves: 1876,
                blessesLegers: 19245,
                tauxMortalite: 1.9,
                coutSocial: '2.7 milliards €',
                evolutionAnnuelle: -2.8,
                tempsMoyenIntervention: '13 minutes',
                interventionsUrgence: 21456,
                blessesHospitalises: 2876
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 71,
                        heuresPic: [
                            {
                                creneau: '7h-9h',
                                pourcentage: 22,
                                typesAccidents: ['Collisions arrière', 'Accidents deux-roues'],
                                facteurs: ['Trafic dense', 'Fatigue matinale']
                            },
                            {
                                creneau: '11h30-14h',
                                pourcentage: 15,
                                typesAccidents: ['Accidents piétons', 'Collisions urbaines'],
                                facteurs: ['Pause déjeuner', 'Précipitation']
                            },
                            {
                                creneau: '17h-19h30',
                                pourcentage: 28,
                                typesAccidents: ['Collisions multiples', 'Sorties de route'],
                                facteurs: ['Fatigue', 'Stress', 'Trafic dense']
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 29,
                        heuresCritiques: [
                            {
                                creneau: '22h-2h',
                                pourcentage: 45,
                                typesAccidents: ['Sorties de route', 'Collisions frontales'],
                                facteurs: ['Alcool', 'Fatigue', 'Visibilité réduite']
                            },
                            {
                                creneau: '2h-5h',
                                pourcentage: 35,
                                typesAccidents: ['Accidents graves', 'Véhicule seul'],
                                facteurs: ['Somnolence', 'Routes désertes']
                            }
                        ]
                    }
                },
                saisonnalite: {
                    ete: {
                        pourcentage: 35,
                        facteurs: ['Tourisme', 'Grands départs', 'Chaleur']
                    },
                    hiver: {
                        pourcentage: 25,
                        facteurs: ['Conditions météo', 'Visibilité réduite', 'Verglas']
                    },
                    printemps: {
                        pourcentage: 20,
                        facteurs: ['Pluie', 'Retour deux-roues', 'Week-ends prolongés']
                    },
                    automne: {
                        pourcentage: 20,
                        facteurs: ['Pluie', 'Feuilles mortes', 'Baisse luminosité']
                    }
                }
            },
            profilsAccidentes: {
                age: {
                    '18-24': 27,
                    '25-34': 25,
                    '35-44': 19,
                    '45-54': 16,
                    '55+': 13
                },
                typesUsagers: {
                    'Voitures': 45,
                    'Deux-roues': 30,
                    'Piétons': 15,
                    'Vélos': 8,
                    'Autres': 2
                }
            },
            zonesAccidentogenes: [
                {
                    nom: "Boulevard Périphérique",
                    accidents: 245,
                    gravite: "Élevée",
                    pointsNoirs: ["Porte de la Chapelle", "Porte d'Orléans"],
                    mesuresPrises: "Radars tronçon + Limitation 50km/h"
                },
                {
                    nom: "A86",
                    accidents: 189,
                    gravite: "Élevée",
                    pointsNoirs: ["Échangeur de Vélizy", "Créteil"],
                    mesuresPrises: "Renforcement signalisation"
                }
            ],
            mesuresSecurite: [
                {
                    type: "Radar",
                    nombre: 89,
                    efficacite: 68,
                    reduction: "22% des accidents graves"
                },
                {
                    type: "Zone 30",
                    nombre: 245,
                    efficacite: 75,
                    reduction: "45% des accidents piétons"
                }
            ],
            coutsMoyens: {
                accidentMortel: '3.2 millions €',
                blesseGrave: '450 000 €',
                blesseLeger: '35 000 €',
                degatsMateriels: '8 000 €'
            }
        },
        'corse': {
            nom: 'Corse',
            evolution: 1.1,
            statistiquesGenerales: {
                accidents2023: 1234,
                tuesSurPlace: 89,
                blessesGraves: 456,
                blessesLegers: 890,
                tauxMortalite: 4.8,
                coutSocial: '0.8 milliards €',
                evolutionAnnuelle: -3.9,
                interventionsUrgence: 987,
                tempsMoyenIntervention: '19 minutes',
                blessesHospitalises: 1876
            },
            repartitionAccidents: {
                autoroutes: 5,
                routesNationales: 35,
                routesDepartementales: 45,
                zonesUrbaines: 15
            },
            zonesAccidentogenes: [
                {
                    nom: "Route territoriale 20",
                    accidents: 34,
                    gravite: "Élevée",
                    mesuresPrises: "Sécurisation virages"
                }
            ],
            mesuresPreventives: {
                campagnesSensibilisation: [
                    {
                        nom: "Sécurité routes montagneuses",
                        impact: "+20% de prudence",
                        cout: "250K€",
                        duree: "6 mois"
                    }
                ]
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 75,
                        heuresPic: [
                            {
                                creneau: '8h-10h30',
                                pourcentage: 20,
                                typesAccidents: ['Routes côtières', 'Scooters'],
                                facteurs: ['Tourisme', 'Départs plages']
                            },
                            {
                                creneau: '12h-15h',
                                pourcentage: 25,
                                typesAccidents: ['Routes montagneuses', 'Motos'],
                                facteurs: ['Chaleur', 'Touristes']
                            },
                            {
                                creneau: '17h-20h',
                                pourcentage: 30,
                                typesAccidents: ['Urbains', 'Deux-roues'],
                                facteurs: ['Retours plages', 'Activités locales']
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 25,
                        heuresCritiques: [
                            {
                                creneau: '22h-2h',
                                pourcentage: 55,
                                typesAccidents: ['Routes littorales', 'Festifs'],
                                facteurs: ['Vie nocturne', 'Tourisme']
                            },
                            {
                                creneau: '2h-5h',
                                pourcentage: 25,
                                typesAccidents: ['Routes isolées', 'Sorties'],
                                facteurs: ['Fatigue', 'Routes sinueuses']
                            }
                        ]
                    }
                },
                saisonnalite: {
                    ete: {
                        pourcentage: 45,
                        facteurs: ['Pic touristique', 'Festivals', 'Chaleur']
                    },
                    hiver: {
                        pourcentage: 15,
                        facteurs: ['Pluie', 'Routes montagneuses', 'Vent']
                    },
                    printemps: {
                        pourcentage: 20,
                        facteurs: ['Début saison', 'Deux-roues', 'Randonnées']
                    },
                    automne: {
                        pourcentage: 20,
                        facteurs: ['Pluies', 'Fin saison', 'Routes glissantes']
                    }
                }
            }
        },
        'auvergne-rhone-alpes': {
            nom: 'Auvergne-Rhône-Alpes',
            statistiquesGenerales: {
                accidents2023: 9567,
                tuesSurPlace: 378,
                blessesGraves: 2234,
                blessesLegers: 5890,
                tauxMortalite: 4.7,
                coutSocial: '3.1 milliards €',
                evolutionAnnuelle: -5.6,
                interventionsUrgence: 5123,
                tempsMoyenIntervention: '13 minutes',
                blessesHospitalises: 2345
            },
            repartitionAccidents: {
                autoroutes: 22,
                routesNationales: 26,
                routesDepartementales: 37,
                zonesUrbaines: 15
            },
            repartitionTemporelle: {
                jour: 69,
                nuit: 31,
                heuresDePic: ['7h-9h30', '17h-19h30'],
                joursLePlusDangereux: ['Vendredi', 'Samedi'],
                saisonsPlusRisquees: ['Hiver', 'Été']
            },
            conditionsMeteo: {
                pluie: 28,
                sec: 52,
                neige: 12,
                brouillard: 8
            },
            facteurs: {
                vitesseExcessive: 32,
                alcool: 24,
                stupefiants: 16,
                fatigue: 15,
                inattention: 8,
                autres: 5
            },
            zonesAccidentogenes: [
                {
                    nom: "A43 Chambéry-Lyon",
                    accidents: 72,
                    gravite: "Élevée",
                    mesuresPrises: "Renforcement sécurité hivernale"
                },
                {
                    nom: "Périphérique Lyon",
                    accidents: 95,
                    gravite: "Modérée",
                    mesuresPrises: "Limitation vitesse variable"
                }
            ],
            mesuresPreventives: {
                campagnesSensibilisation: [
                    {
                        nom: "Conduite en montagne",
                        impact: "+22% de prudence",
                        cout: "520K€",
                        duree: "9 mois"
                    }
                ],
                infrastructures: [
                    {
                        type: "Équipements hivernaux",
                        nombre: 250,
                        efficacite: "Réduction de 35% des accidents hivernaux"
                    }
                ]
            }
        },
        'provence-alpes-cote-azur': {
            nom: 'Provence-Alpes-Côte d\'Azur',
            evolution: 2.3,
            statistiquesGenerales: {
                accidents2023: 8932,
                tuesSurPlace: 212,
                blessesHospitalises: 2145,
                blessesLegers: 5678
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 75,
                        heuresPic: [
                            {
                                creneau: "7h-9h",
                                pourcentage: 20,
                                typesAccidents: ["Collision urbaine", "Accident deux-roues"],
                                facteurs: ["Trafic dense", "Rush matinal"]
                            },
                            {
                                creneau: "17h-19h",
                                pourcentage: 28,
                                typesAccidents: ["Collision multiple", "Accrochage"],
                                facteurs: ["Retour travail", "Fatigue"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 25,
                        heuresCritiques: [
                            {
                                creneau: "23h-3h",
                                pourcentage: 15,
                                typesAccidents: ["Sortie de route", "Collision frontale"],
                                facteurs: ["Fatigue", "Vitesse excessive"]
                            }
                        ]
                    }
                }
            },
            zonesAccidentogenes: [
                {
                    nom: "A8 Nice-Cannes",
                    accidents: 156,
                    gravite: "Élevée",
                    mesuresPrises: "Surveillance vidéo renforcée"
                },
                {
                    nom: "Promenade des Anglais",
                    accidents: 45,
                    gravite: "Modérée",
                    mesuresPrises: "Réaménagement urbain"
                }
            ],
            mesuresPreventives: {
                campagnesSensibilisation: [
                    {
                        nom: "Sécurité deux-roues été",
                        impact: "+25% de vigilance",
                        cout: "600K€",
                        duree: "4 mois"
                    }
                ],
                infrastructures: [
                    {
                        type: "Voies cyclables",
                        kilometres: 180,
                        impact: "Réduction de 28% des accidents vélos"
                    }
                ]
            }
        },
        'grand-est': {
            nom: 'Grand Est',
            statistiquesGenerales: {
                accidents2023: 7234,
                tuesSurPlace: 298,
                blessesGraves: 1876,
                blessesLegers: 4567,
                tauxMortalite: 4.3,
                coutSocial: '2.5 milliards €',
                evolutionAnnuelle: -5.8,
                interventionsUrgence: 3987,
                tempsMoyenIntervention: '14 minutes',
                blessesHospitalises: 1432
            },
            repartitionAccidents: {
                autoroutes: 20,
                routesNationales: 28,
                routesDepartementales: 35,
                zonesUrbaines: 17
            },
            zonesAccidentogenes: [
                {
                    nom: "A4 Metz-Strasbourg",
                    accidents: 65,
                    gravite: "Élevée",
                    mesuresPrises: "Renforcement signalisation"
                }
            ],
            mesuresPreventives: {
                campagnesSensibilisation: [
                    {
                        nom: "Vigilance frontières",
                        impact: "+20% de prudence",
                        cout: "450K€",
                        duree: "6 mois"
                    }
                ]
            }
        },
        'bretagne': {
            nom: 'Bretagne',
            evolution: -0.5,
            statistiquesGenerales: {
                accidents2023: 5432,
                tuesSurPlace: 156,
                blessesGraves: 1234,
                blessesLegers: 6543,
                tauxMortalite: 3.9,
                coutSocial: '1.8 milliards €',
                evolutionAnnuelle: -2.7,
                tempsMoyenIntervention: '18 minutes',
                interventionsUrgence: 8901,
                blessesHospitalises: 1234
            },
            specificitesCotieres: {
                routesLittorales: {
                    accidents: 789,
                    causes: ["Tourisme", "Conditions météo", "Routes sinueuses"],
                    periodesCritiques: ["Juillet-Août", "Ponts fériés"]
                },
                zonesPortuaires: {
                    accidents: 123,
                    typesVehicules: ["Poids lourds", "Véhicules de service"],
                    mesuresSpecifiques: "Plan de circulation adapté"
                }
            },
            impactMeteo: {
                tempetes: {
                    nombreJours: 45,
                    accidentsLies: 234,
                    mesuresPreventives: ["Alertes SMS", "Fermetures préventives"]
                },
                pluie: {
                    nombreJours: 156,
                    accidentsLies: 567,
                    zonesArisque: ["RN12", "RN165"]
                }
            },
            comparaisonZones: {
                urbain: {
                    brest: {
                        accidents: 234,
                        evolution: "-4.5%",
                        pointsNoirs: ["Centre-ville", "Zone portuaire"]
                    },
                    rennes: {
                        accidents: 345,
                        evolution: "-3.2%",
                        pointsNoirs: ["Rocade", "Axes pénétrants"]
                    }
                },
                rural: {
                    accidents: 789,
                    causes: ["Routes étroites", "Vitesse excessive"],
                    tauxMortalite: "Plus élevé de 45%"
                }
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 69,
                        heuresPic: [
                            {
                                creneau: '7h30-9h30',
                                pourcentage: 23,
                                typesAccidents: ['Collisions', 'Aquaplanage'],
                                facteurs: ['Pluie', 'Trafic domicile-travail']
                            },
                            {
                                creneau: '12h-14h',
                                pourcentage: 16,
                                typesAccidents: ['Urbains', 'Piétons'],
                                facteurs: ['Centres-villes', 'Pause déjeuner']
                            },
                            {
                                creneau: '17h-19h30',
                                pourcentage: 28,
                                typesAccidents: ['Routes côtières', 'Deux-roues'],
                                facteurs: ['Retours travail', 'Luminosité variable']
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 31,
                        heuresCritiques: [
                            {
                                creneau: '21h-1h',
                                pourcentage: 45,
                                typesAccidents: ['Sorties de route', 'Pluie'],
                                facteurs: ['Visibilité réduite', 'Festifs']
                            },
                            {
                                creneau: '2h-5h',
                                pourcentage: 35,
                                typesAccidents: ['Routes départementales', 'Brouillard'],
                                facteurs: ['Fatigue', 'Conditions météo']
                            }
                        ]
                    }
                },
                saisonnalite: {
                    ete: {
                        pourcentage: 35,
                        facteurs: ['Tourisme côtier', 'Festivals', 'Vélos']
                    },
                    hiver: {
                        pourcentage: 25,
                        facteurs: ['Tempêtes', 'Pluie intense', 'Vents forts']
                    },
                    printemps: {
                        pourcentage: 20,
                        facteurs: ['Retour beau temps', 'Deux-roues', 'Week-ends']
                    },
                    automne: {
                        pourcentage: 20,
                        facteurs: ['Grandes marées', 'Pluie', 'Brouillard']
                    }
                }
            }
        },
        'alsace': {
            nom: 'Alsace',
            statistiquesGenerales: {
                accidents2023: 3567,
                tuesSurPlace: 123,
                blessesGraves: 890,
                blessesLegers: 2554,
                tauxMortalite: 3.4,
                coutSocial: '1.5 milliards €',
                evolutionAnnuelle: -3.8,
                tempsMoyenIntervention: '15 minutes',
                interventionsUrgence: 6543,
                blessesHospitalises: 1876
            },
            traficTransfrontalier: {
                pourcentageAccidents: 25,
                principauxPoints: ["Pont de l'Europe", "A35"],
                mesuresSpecifiques: ["Contrôles coordonnés", "Signalisation bilingue"]
            },
            marchesNoel: {
                periode: "Novembre-Décembre",
                suraccidentalite: "+40%",
                mesuresSpeciales: ["Navettes gratuites", "Zones piétonnes élargies"]
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 70,
                        heuresPic: [
                            {
                                creneau: '6h30-9h',
                                pourcentage: 25,
                                typesAccidents: ['Transfrontaliers', 'Urbains'],
                                facteurs: ['Trafic Allemagne/Suisse', 'Domicile-travail']
                            },
                            {
                                creneau: '12h-14h',
                                pourcentage: 15,
                                typesAccidents: ['Centre-ville', 'Piétons'],
                                facteurs: ['Tourisme', 'Pause déjeuner']
                            },
                            {
                                creneau: '16h30-19h',
                                pourcentage: 30,
                                typesAccidents: ['A35', 'Routes des vins'],
                                facteurs: ['Retours frontaliers', 'Trafic dense']
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 30,
                        heuresCritiques: [
                            {
                                creneau: '22h-2h',
                                pourcentage: 42,
                                typesAccidents: ['Périphérique', 'Jeunes'],
                                facteurs: ['Vie nocturne', 'Transfrontalier']
                            },
                            {
                                creneau: '3h-6h',
                                pourcentage: 38,
                                typesAccidents: ['Transport international', 'Routes nationales'],
                                facteurs: ['Fatigue', 'Brouillard rhénan']
                            }
                        ]
                    }
                },
                saisonnalite: {
                    ete: {
                        pourcentage: 28,
                        facteurs: ['Tourisme', 'Festivals', 'Vélos']
                    },
                    hiver: {
                        pourcentage: 32,
                        facteurs: ['Neige', 'Marchés de Noël', 'Verglas']
                    },
                    printemps: {
                        pourcentage: 20,
                        facteurs: ['Pluie', 'Route des vins', 'Deux-roues']
                    },
                    automne: {
                        pourcentage: 20,
                        facteurs: ['Vendanges', 'Brouillard', 'Foires']
                    }
                }
            }
        },
        'aquitaine': {
            nom: "Aquitaine",
            evolution: -1.4,
            statistiquesGenerales: {
                accidents2023: 5890,
                tuesSurPlace: 198,
                blessesGraves: 1456,
                blessesLegers: 4236,
                tauxMortalite: 3.4,
                coutSocial: '2.1 milliards €',
                evolutionAnnuelle: -3.1,
                interventionsUrgence: 3678,
                tempsMoyenIntervention: '16 minutes',
                blessesHospitalises: 1876
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 72,
                        heuresPic: [
                            {
                                creneau: "7h30-9h30",
                                pourcentage: 24,
                                typesAccidents: ["Collision urbaine", "Accident cycliste"],
                                facteurs: ["Trafic matinal", "Déplacements domicile-travail"]
                            },
                            {
                                creneau: "12h-14h",
                                pourcentage: 18,
                                typesAccidents: ["Accident piéton", "Collision en ville"],
                                facteurs: ["Pause déjeuner", "Zones commerciales"]
                            },
                            {
                                creneau: "17h-19h30",
                                pourcentage: 28,
                                typesAccidents: ["Collision multiple", "Accident deux-roues"],
                                facteurs: ["Retour travail", "Fatigue", "Trafic dense"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 28,
                        heuresCritiques: [
                            {
                                creneau: "22h-2h",
                                pourcentage: 16,
                                typesAccidents: ["Sortie de route", "Collision frontale"],
                                facteurs: ["Fatigue", "Visibilité réduite"]
                            },
                            {
                                creneau: "2h-5h",
                                pourcentage: 12,
                                typesAccidents: ["Accident isolé", "Collision avec obstacle"],
                                facteurs: ["Somnolence", "Routes désertes"]
                            }
                        ]
                    }
                },
                saisonnalite: {
                    ete: {
                        pourcentage: 35,
                        facteurs: ["Tourisme côtier", "Afflux estival", "Festivals"]
                    },
                    hiver: {
                        pourcentage: 20,
                        facteurs: ["Pluie", "Brouillard matinal", "Routes glissantes"]
                    },
                    printemps: {
                        pourcentage: 23,
                        facteurs: ["Retour deux-roues", "Trajets touristiques", "Week-ends"]
                    },
                    automne: {
                        pourcentage: 22,
                        facteurs: ["Pluie", "Feuilles mortes", "Visibilité réduite"]
                    }
                }
            }
        },
        'auvergne': {
            nom: 'Auvergne',
            statistiquesGenerales: {
                accidents2023: 2789,
                tuesSurPlace: 89,
                blessesGraves: 678,
                blessesLegers: 2022,
                tauxMortalite: 3.2,
                coutSocial: '1.1 milliards €',
                evolutionAnnuelle: -4.1,
                tempsMoyenIntervention: '22 minutes',
                interventionsUrgence: 5432,
                blessesHospitalises: 1876
            },
            conditionsMontagneuses: {
                hiver: {
                    accidents: 456,
                    causes: ["Neige", "Verglas", "Visibilité"],
                    mesures: ["Déneigement prioritaire", "Chaînes obligatoires"]
                },
                stations: {
                    accidents: 234,
                    typesUsagers: ["Touristes", "Locaux"],
                    periodesCritiques: ["Vacances scolaires"]
                }
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 68,
                        heuresPic: [
                            {
                                creneau: '7h30-9h30',
                                pourcentage: 23,
                                typesAccidents: ['Routes montagneuses', 'Urbains'],
                                facteurs: ['Conditions météo', 'Trajets travail']
                            },
                            {
                                creneau: '12h-14h',
                                pourcentage: 18,
                                typesAccidents: ['Centres-villes', 'Piétons'],
                                facteurs: ['Activité thermale', 'Tourisme']
                            },
                            {
                                creneau: '16h30-19h',
                                pourcentage: 27,
                                typesAccidents: ['A75', 'Routes départementales'],
                                facteurs: ['Retours travail', 'Conditions hivernales']
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 32,
                        heuresCritiques: [
                            {
                                creneau: '20h-0h',
                                pourcentage: 45,
                                typesAccidents: ['Routes rurales', 'Verglas'],
                                facteurs: ['Conditions nocturnes', 'Faune sauvage']
                            },
                            {
                                creneau: '2h-5h',
                                pourcentage: 35,
                                typesAccidents: ['Autoroutes', 'Poids lourds'],
                                facteurs: ['Fatigue', 'Météo montagne']
                            }
                        ]
                    }
                },
                saisonnalite: {
                    ete: {
                        pourcentage: 28,
                        facteurs: ['Tourisme vert', 'Randonnées', 'Festivals']
                    },
                    hiver: {
                        pourcentage: 32,
                        facteurs: ['Neige', 'Sports d\'hiver', 'Verglas']
                    },
                    printemps: {
                        pourcentage: 20,
                        facteurs: ['Thermalisme', 'Retour moto', 'Pluie']
                    },
                    automne: {
                        pourcentage: 20,
                        facteurs: ['Brouillard', 'Feuilles mortes', 'Premiers froids']
                    }
                }
            }
        },
        'centre': {
            nom: 'Centre',
            statistiquesGenerales: {
                accidents2023: 4123,
                tuesSurPlace: 156,
                blessesGraves: 987,
                blessesLegers: 2980,
                tauxMortalite: 3.8,
                coutSocial: '1.6 milliards €',
                evolutionAnnuelle: -3.5,
                tempsMoyenIntervention: '19 minutes',
                interventionsUrgence: 7654,
                blessesHospitalises: 1876
            },
            axesRoutiers: {
                autoroutes: {
                    accidents: 567,
                    principauxPoints: ["A10", "A71"],
                    mesures: "Renforcement surveillance"
                },
                nationales: {
                    accidents: 890,
                    pointsNoirs: ["RN20", "RN154"],
                    mesures: "Rénovation signalisation"
                }
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 69,
                        heuresPic: [
                            {
                                creneau: '7h-9h30',
                                pourcentage: 24,
                                typesAccidents: ['A10', 'Routes nationales'],
                                facteurs: ['Trafic Paris', 'Brouillard matinal']
                            },
                            {
                                creneau: '12h-14h',
                                pourcentage: 17,
                                typesAccidents: ['Zones urbaines', 'Piétons'],
                                facteurs: ['Centres commerciaux', 'Écoles']
                            },
                            {
                                creneau: '16h30-19h',
                                pourcentage: 28,
                                typesAccidents: ['Périphéries', 'Deux-roues'],
                                facteurs: ['Retours travail', 'Trafic dense']
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 31,
                        heuresCritiques: [
                            {
                                creneau: '21h-1h',
                                pourcentage: 43,
                                typesAccidents: ['Routes secondaires', 'Jeunes'],
                                facteurs: ['Sorties', 'Routes rurales']
                            },
                            {
                                creneau: '2h-5h',
                                pourcentage: 37,
                                typesAccidents: ['Autoroutes', 'Poids lourds'],
                                facteurs: ['Transit national', 'Fatigue']
                            }
                        ]
                    }
                },
                saisonnalite: {
                    ete: {
                        pourcentage: 30,
                        facteurs: ['Tourisme châteaux', 'Festivals', 'Transit vacances']
                    },
                    hiver: {
                        pourcentage: 23,
                        facteurs: ['Verglas', 'Brouillard', 'Pluie']
                    },
                    printemps: {
                        pourcentage: 24,
                        facteurs: ['Loire à vélo', 'Ponts fériés', 'Tourisme vert']
                    },
                    automne: {
                        pourcentage: 23,
                        facteurs: ['Vendanges', 'Brouillard', 'Pluie']
                    }
                }
            }
        },
        'lorraine': {
            nom: 'Lorraine',
            statistiquesGenerales: {
                accidents2023: 4567,
                tuesSurPlace: 167,
                blessesGraves: 1123,
                blessesLegers: 3277,
                tauxMortalite: 3.7,
                coutSocial: '1.7 milliards €',
                evolutionAnnuelle: -3.2,
                interventionsUrgence: 2890,
                tempsMoyenIntervention: '16 minutes',
                blessesHospitalises: 1876
            },
            repartitionAccidents: {
                autoroutes: 25,
                routesNationales: 30,
                routesDepartementales: 30,
                zonesUrbaines: 15
            },
            zonesAccidentogenes: [
                {
                    nom: "A31 Metz-Nancy",
                    accidents: 92,
                    gravite: "Élevée",
                    mesuresPrises: "Installation radars tronçon"
                }
            ]
        },
        'midi-pyrenees': {
            nom: "Midi-Pyrénées",
            evolution: -1.2,
            statistiquesGenerales: {
                accidents2023: 7654,
                tuesSurPlace: 189,
                blessesHospitalises: 1543,
                blessesLegers: 8234
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 68,
                        heuresPic: [
                            {
                                creneau: "8h-10h",
                                pourcentage: 22,
                                typesAccidents: ["Collision rurale", "Sortie de route"],
                                facteurs: ["Brouillard matinal", "Routes sinueuses"]
                            },
                            {
                                creneau: "16h-18h",
                                pourcentage: 25,
                                typesAccidents: ["Collision latérale", "Accident piéton"],
                                facteurs: ["Circulation dense", "Visibilité"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 32,
                        heuresCritiques: [
                            {
                                creneau: "21h-1h",
                                pourcentage: 18,
                                typesAccidents: ["Collision avec obstacle", "Dérapage"],
                                facteurs: ["Fatigue", "Conditions météo"]
                            }
                        ]
                    }
                }
            }
        },
        'picardie': {
            nom: "Picardie",
            evolution: -1.7,
            statistiquesGenerales: {
                accidents2023: 5432,
                tuesSurPlace: 156,
                blessesHospitalises: 1234,
                blessesLegers: 3456
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 69,
                        heuresPic: [
                            {
                                creneau: "8h-10h",
                                pourcentage: 21,
                                typesAccidents: ["Collision rurale", "Accident poids lourd"],
                                facteurs: ["Brouillard", "Routes départementales"]
                            },
                            {
                                creneau: "16h30-18h30",
                                pourcentage: 26,
                                typesAccidents: ["Collision latérale", "Sortie de route"],
                                facteurs: ["Trafic pendulaire", "Fatigue"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 31,
                        heuresCritiques: [
                            {
                                creneau: "21h-1h",
                                pourcentage: 16,
                                typesAccidents: ["Collision avec obstacle", "Dérapage"],
                                facteurs: ["Visibilité réduite", "Routes rurales"]
                            }
                        ]
                    }
                }
            }
        },
        'poitou-charentes': {
            nom: "Poitou-Charentes",
            evolution: -1.4,
            statistiquesGenerales: {
                accidents2023: 4567,
                tuesSurPlace: 145,
                blessesHospitalises: 987,
                blessesLegers: 2345
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 70,
                        heuresPic: [
                            {
                                creneau: "7h30-9h30",
                                pourcentage: 22,
                                typesAccidents: ["Collision urbaine", "Accident vélo"],
                                facteurs: ["Trafic matinal", "Conditions météo"]
                            },
                            {
                                creneau: "17h-19h",
                                pourcentage: 27,
                                typesAccidents: ["Collision multiple", "Accident deux-roues"],
                                facteurs: ["Retour domicile", "Fatigue"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 30,
                        heuresCritiques: [
                            {
                                creneau: "22h-2h",
                                pourcentage: 15,
                                typesAccidents: ["Sortie de route", "Collision frontale"],
                                facteurs: ["Fatigue", "Visibilité réduite"]
                            }
                        ]
                    }
                }
            }
        },
        'franche-comte': {
            nom: "Franche-Comté",
            evolution: -1.5,
            statistiquesGenerales: {
                accidents2023: 3654,
                tuesSurPlace: 112,
                blessesHospitalises: 876,
                blessesLegers: 2134
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 69,
                        heuresPic: [
                            {
                                creneau: "7h30-9h30",
                                pourcentage: 23,
                                typesAccidents: ["Collision montagne", "Accident hivernal"],
                                facteurs: ["Routes montagneuses", "Conditions hivernales"]
                            },
                            {
                                creneau: "16h30-18h30",
                                pourcentage: 26,
                                typesAccidents: ["Collision multiple", "Dérapage"],
                                facteurs: ["Retour travail", "Verglas"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 31,
                        heuresCritiques: [
                            {
                                creneau: "21h-1h",
                                pourcentage: 16,
                                typesAccidents: ["Sortie de route", "Collision frontale"],
                                facteurs: ["Neige", "Visibilité réduite"]
                            }
                        ]
                    }
                }
            }
        },
        'nord-pas-de-calais': {
            nom: "Nord-Pas-de-Calais",
            evolution: -1.5,
            statistiquesGenerales: {
                accidents2023: 6789,
                tuesSurPlace: 201,
                blessesHospitalises: 1876,
                blessesLegers: 4910
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 70,
                        heuresPic: [
                            {
                                creneau: "8h-10h",
                                pourcentage: 18,
                                typesAccidents: ["Collision frontale", "Accident en chaîne"],
                                facteurs: ["Trafic dense", "Fatigue"]
                            },
                            {
                                creneau: "16h-19h",
                                pourcentage: 25,
                                typesAccidents: ["Collision latérale", "Sortie de route"],
                                facteurs: ["Retour du travail", "Conditions météo"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 30,
                        heuresCritiques: [
                            {
                                creneau: "22h-2h",
                                pourcentage: 15,
                                typesAccidents: ["Sortie de route", "Collision avec obstacle fixe"],
                                facteurs: ["Fatigue", "Visibilité réduite"]
                            },
                            {
                                creneau: "2h-5h",
                                pourcentage: 10,
                                typesAccidents: ["Collision frontale", "Perte de contrôle"],
                                facteurs: ["Somnolence", "Vitesse excessive"]
                            }
                        ]
                    }
                },
                saisonnalite: {
                    ete: {
                        pourcentage: 28,
                        facteurs: ["Affluence touristique", "Orages"]
                    },
                    hiver: {
                        pourcentage: 27,
                        facteurs: ["Verglas", "Brouillard"]
                    },
                    printemps: {
                        pourcentage: 23,
                        facteurs: ["Pluie", "Vent"]
                    },
                    automne: {
                        pourcentage: 22,
                        facteurs: ["Feuilles mortes", "Visibilité réduite"]
                    }
                }
            }
        },
        'languedoc-roussillon': {
            nom: "Languedoc-Roussillon",
            evolution: -0.8,
            statistiquesGenerales: {
                accidents2023: 6543,
                tuesSurPlace: 167,
                blessesHospitalises: 1432,
                blessesLegers: 4567
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 72,
                        heuresPic: [
                            {
                                creneau: "9h-11h",
                                pourcentage: 19,
                                typesAccidents: ["Collision urbaine", "Accident cycliste"],
                                facteurs: ["Trafic urbain", "Tourisme"]
                            },
                            {
                                creneau: "15h-18h",
                                pourcentage: 26,
                                typesAccidents: ["Collision multiple", "Accident deux-roues"],
                                facteurs: ["Affluence", "Chaleur"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 28,
                        heuresCritiques: [
                            {
                                creneau: "22h-2h",
                                pourcentage: 16,
                                typesAccidents: ["Sortie de route", "Collision frontale"],
                                facteurs: ["Visibilité réduite", "Vitesse"]
                            }
                        ]
                    }
                }
            }
        },
        'limousin': {
            nom: "Limousin",
            evolution: -1.3,
            statistiquesGenerales: {
                accidents2023: 2876,
                tuesSurPlace: 98,
                blessesHospitalises: 654,
                blessesLegers: 1765
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 68,
                        heuresPic: [
                            {
                                creneau: "7h30-9h30",
                                pourcentage: 21,
                                typesAccidents: ["Collision rurale", "Accident forestier"],
                                facteurs: ["Routes sinueuses", "Brouillard"]
                            },
                            {
                                creneau: "16h30-18h30",
                                pourcentage: 25,
                                typesAccidents: ["Collision latérale", "Sortie de route"],
                                facteurs: ["Retour travail", "Conditions météo"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 32,
                        heuresCritiques: [
                            {
                                creneau: "20h-0h",
                                pourcentage: 17,
                                typesAccidents: ["Collision avec animal", "Dérapage"],
                                facteurs: ["Visibilité réduite", "Routes rurales"]
                            }
                        ]
                    }
                }
            }
        },
        'basse-normandie': {
            nom: "Basse-Normandie",
            evolution: -1.8,
            statistiquesGenerales: {
                accidents2023: 3987,
                tuesSurPlace: 123,
                blessesHospitalises: 876,
                blessesLegers: 2134
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 70,
                        heuresPic: [
                            {
                                creneau: "8h-10h",
                                pourcentage: 22,
                                typesAccidents: ["Collision rurale", "Accident agricole"],
                                facteurs: ["Brouillard côtier", "Routes départementales"]
                            },
                            {
                                creneau: "17h-19h",
                                pourcentage: 26,
                                typesAccidents: ["Collision latérale", "Accident deux-roues"],
                                facteurs: ["Retour travail", "Conditions météo"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 30,
                        heuresCritiques: [
                            {
                                creneau: "21h-1h",
                                pourcentage: 16,
                                typesAccidents: ["Sortie de route", "Collision obstacle"],
                                facteurs: ["Fatigue", "Routes rurales"]
                            }
                        ]
                    }
                }
            }
        },
        'haute-normandie': {
            nom: "Haute-Normandie",
            evolution: -1.6,
            statistiquesGenerales: {
                accidents2023: 4321,
                tuesSurPlace: 134,
                blessesHospitalises: 987,
                blessesLegers: 2345
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 69,
                        heuresPic: [
                            {
                                creneau: "7h-9h",
                                pourcentage: 24,
                                typesAccidents: ["Collision urbaine", "Accident industriel"],
                                facteurs: ["Trafic dense", "Brouillard"]
                            },
                            {
                                creneau: "16h30-18h30",
                                pourcentage: 27,
                                typesAccidents: ["Collision multiple", "Accident poids lourd"],
                                facteurs: ["Retour travail", "Pluie"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 31,
                        heuresCritiques: [
                            {
                                creneau: "22h-2h",
                                pourcentage: 15,
                                typesAccidents: ["Sortie de route", "Collision frontale"],
                                facteurs: ["Fatigue", "Visibilité réduite"]
                            }
                        ]
                    }
                }
            }
        },
        'rhone-alpes': {
            nom: "Rhône-Alpes",
            evolution: -2.1,
            statistiquesGenerales: {
                accidents2023: 8765,
                tuesSurPlace: 234,
                blessesHospitalises: 2345,
                blessesLegers: 6789
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 71,
                        heuresPic: [
                            {
                                creneau: "7h30-9h30",
                                pourcentage: 24,
                                typesAccidents: ["Collision urbaine", "Accident deux-roues"],
                                facteurs: ["Trafic dense", "Conditions hivernales"]
                            },
                            {
                                creneau: "17h-19h",
                                pourcentage: 29,
                                typesAccidents: ["Collision multiple", "Accident piéton"],
                                facteurs: ["Retour travail", "Visibilité"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 29,
                        heuresCritiques: [
                            {
                                creneau: "22h-2h",
                                pourcentage: 17,
                                typesAccidents: ["Sortie de route", "Collision frontale"],
                                facteurs: ["Fatigue", "Routes montagneuses"]
                            }
                        ]
                    }
                }
            }
        },
        'bourgogne': {
            nom: "Bourgogne",
            evolution: -1.6,
            statistiquesGenerales: {
                accidents2023: 4123,
                tuesSurPlace: 132,
                blessesHospitalises: 943,
                blessesLegers: 2567
            },
            repartitionAccidents: {
                autoroutes: 25,
                routesNationales: 30,
                routesDepartementales: 35,
                zonesUrbaines: 10
            },
            zonesAccidentogenes: [
                {
                    nom: "A6 Auxerre-Dijon",
                    accidents: 76,
                    gravite: "Élevée",
                    mesuresPrises: "Installation radar tronçon"
                }
            ],
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 71,
                        heuresPic: [
                            {
                                creneau: "7h30-9h30",
                                pourcentage: 23,
                                typesAccidents: ["Collision rurale", "Accident viticole"],
                                facteurs: ["Routes sinueuses", "Brouillard matinal"]
                            },
                            {
                                creneau: "16h30-18h30",
                                pourcentage: 28,
                                typesAccidents: ["Collision multiple", "Accident deux-roues"],
                                facteurs: ["Retour travail", "Conditions météo"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 29,
                        heuresCritiques: [
                            {
                                creneau: "21h-1h",
                                pourcentage: 16,
                                typesAccidents: ["Sortie de route", "Collision frontale"],
                                facteurs: ["Fatigue", "Routes départementales"]
                            }
                        ]
                    }
                }
            }
        },
        'champagne-ardenne': {
            nom: "Champagne-Ardenne",
            evolution: -1.7,
            statistiquesGenerales: {
                accidents2023: 3987,
                tuesSurPlace: 121,
                blessesHospitalises: 897,
                blessesLegers: 2345
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 70,
                        heuresPic: [
                            {
                                creneau: "8h-10h",
                                pourcentage: 22,
                                typesAccidents: ["Collision rurale", "Accident agricole"],
                                facteurs: ["Brouillard", "Routes viticoles"]
                            },
                            {
                                creneau: "17h-19h",
                                pourcentage: 27,
                                typesAccidents: ["Collision urbaine", "Accident piéton"],
                                facteurs: ["Retour travail", "Pluie"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 30,
                        heuresCritiques: [
                            {
                                creneau: "22h-2h",
                                pourcentage: 15,
                                typesAccidents: ["Sortie de route", "Collision obstacle"],
                                facteurs: ["Fatigue", "Routes rurales"]
                            }
                        ]
                    }
                }
            }
        },
        'pays-de-la-loire': {
            nom: "Pays de la Loire",
            evolution: -1.9,
            statistiquesGenerales: {
                accidents2023: 6789,
                tuesSurPlace: 178,
                blessesHospitalises: 1567,
                blessesLegers: 4567
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 72,
                        heuresPic: [
                            {
                                creneau: "8h-10h",
                                pourcentage: 23,
                                typesAccidents: ["Collision urbaine", "Accident cycliste"],
                                facteurs: ["Trafic dense", "Pluie"]
                            },
                            {
                                creneau: "16h30-18h30",
                                pourcentage: 28,
                                typesAccidents: ["Collision multiple", "Accident piéton"],
                                facteurs: ["Retour travail", "Conditions météo"]
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 28,
                        heuresCritiques: [
                            {
                                creneau: "21h-1h",
                                pourcentage: 16,
                                typesAccidents: ["Sortie de route", "Collision obstacle"],
                                facteurs: ["Fatigue", "Visibilité"]
                            }
                        ]
                    }
                }
            }
        },
        'centre-val-de-loire': {
            nom: 'Centre-Val de Loire',
            evolution: -0.4,
            statistiquesGenerales: {
                accidents2023: 4123,
                tuesSurPlace: 128,
                blessesGraves: 934,
                blessesLegers: 4876,
                tauxMortalite: 3.8,
                coutSocial: '1.6 milliards €',
                evolutionAnnuelle: -3.5,
                tempsMoyenIntervention: '19 minutes',
                interventionsUrgence: 7654,
                blessesHospitalises: 1876
            },
            axesRoutiers: {
                autoroutes: {
                    accidents: 567,
                    principauxPoints: ["A10", "A71"],
                    mesures: "Renforcement surveillance"
                },
                nationales: {
                    accidents: 890,
                    pointsNoirs: ["RN20", "RN154"],
                    mesures: "Rénovation signalisation"
                }
            },
            repartitionTemporelle: {
                distribution: {
                    jour: {
                        pourcentage: 69,
                        heuresPic: [
                            {
                                creneau: '7h-9h30',
                                pourcentage: 24,
                                typesAccidents: ['A10', 'Routes nationales'],
                                facteurs: ['Trafic Paris', 'Brouillard matinal']
                            },
                            {
                                creneau: '12h-14h',
                                pourcentage: 17,
                                typesAccidents: ['Zones urbaines', 'Piétons'],
                                facteurs: ['Centres commerciaux', 'Écoles']
                            },
                            {
                                creneau: '16h30-19h',
                                pourcentage: 28,
                                typesAccidents: ['Périphéries', 'Deux-roues'],
                                facteurs: ['Retours travail', 'Trafic dense']
                            }
                        ]
                    },
                    nuit: {
                        pourcentage: 31,
                        heuresCritiques: [
                            {
                                creneau: '21h-1h',
                                pourcentage: 43,
                                typesAccidents: ['Routes secondaires', 'Jeunes'],
                                facteurs: ['Sorties', 'Routes rurales']
                            },
                            {
                                creneau: '2h-5h',
                                pourcentage: 37,
                                typesAccidents: ['Autoroutes', 'Poids lourds'],
                                facteurs: ['Fatigue', 'Transit national']
                            }
                        ]
                    }
                },
                saisonnalite: {
                    ete: {
                        pourcentage: 30,
                        facteurs: ['Tourisme châteaux', 'Festivals', 'Transit vacances']
                    },
                    hiver: {
                        pourcentage: 23,
                        facteurs: ['Verglas', 'Brouillard', 'Pluie']
                    },
                    printemps: {
                        pourcentage: 24,
                        facteurs: ['Loire à vélo', 'Ponts fériés', 'Tourisme vert']
                    },
                    automne: {
                        pourcentage: 23,
                        facteurs: ['Vendanges', 'Brouillard', 'Pluie']
                    }
                }
            }
        }
    }
};
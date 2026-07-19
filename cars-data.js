const CARS_DATA = [
    {
        "id": "toyota",
        "brand": "Toyota",
        "categories": [
            "Sedans",
            "SUVs",
            "Trucks",
            "Hybrids"
        ],
        "cars": [
            {
                "model": "Camry 2022",
                "description": "Experience the perfect blend of performance and style with the legendary Toyota Camry.",
                "price": "$25,945",
                "image": "assets/cars/archive/Toyota/2022-camry-exterior-right-front-three-quarter.jpeg",
                "alt": "Toyota Camry"
            },
            {
                "model": "RAV4 2023",
                "description": "Ready for any adventure, the RAV4 delivers comfort, safety, and versatility.",
                "price": "$28,275",
                "image": "assets/cars/archive/Toyota/2023_toyota_rav4_angularfront.jpg",
                "alt": "Toyota RAV4"
            },
            {
                "model": "Crown 2023",
                "description": "A new era of luxury and innovation. The Toyota Crown redefines the premium sedan.",
                "price": "$39,950",
                "image": "assets/cars/archive/Toyota/2023_Crown_Limited_HeavyMetal_001-1500x900.jpg",
                "alt": "Toyota Crown"
            },
            {
                "model": "Hilux 2021",
                "description": "The unbreakable workhorse. Built to handle the toughest conditions on Earth.",
                "price": "$34,500",
                "image": "assets/cars/archive/Toyota/Hilux-2021-666x444-1.jpg",
                "alt": "Toyota Hilux"
            }
        ]
    },
    {
        "id": "ford",
        "brand": "Ford",
        "categories": [
            "Muscle Cars",
            "SUVs",
            "Trucks",
            "Electric"
        ],
        "cars": [
            {
                "model": "Mustang GT 2023",
                "description": "Feel the roar of the V8 engine in the iconic Ford Mustang GT. True American power.",
                "price": "$38,345",
                "image": "assets/cars/archive/Ford mustang/2023_Ford_Mustang_1.jpg",
                "alt": "Ford Mustang"
            },
            {
                "model": "Bronco 2023",
                "description": "Untamed and ready for the wild. The Ford Bronco is the ultimate off-road beast.",
                "price": "$34,890",
                "image": "assets/cars/archive/Ford/2023_Ford_Bronco_1.jpg",
                "alt": "Ford Bronco"
            },
            {
                "model": "F-150 Raptor 2017",
                "description": "The high-performance desert racer. Built to fly over dunes and crush obstacles.",
                "price": "$49,520",
                "image": "assets/cars/archive/Ford/ford-f-150-xl-raptor-2017-79799035.jpg",
                "alt": "Ford F-150 Raptor"
            },
            {
                "model": "Fiesta ST 2022",
                "description": "Compact, agile, and incredibly fun to drive. The Fiesta ST is a hot hatch legend.",
                "price": "$22,400",
                "image": "assets/cars/archive/Ford/2022-fiesta-st-line-thumb-ev.jpg",
                "alt": "Ford Fiesta ST"
            }
        ]
    },
    {
        "id": "bmw",
        "brand": "BMW",
        "categories": [
            "M Performance",
            "X Series",
            "i Electric",
            "Convertibles"
        ],
        "cars": [
            {
                "model": "M4 Competition 2023",
                "description": "Pure power meets precision. The M4 Competition is the ultimate driving machine.",
                "price": "$78,600",
                "image": "assets/cars/archive/Bmw/BMW-G82-M4-Sao-Paulo-Yellow-thumb.png",
                "alt": "BMW M4"
            },
            {
                "model": "X5 M 2023",
                "description": "The perfect combination of utility and sheer speed. The X5 M dominates every road.",
                "price": "$108,900",
                "image": "assets/cars/archive/Bmw/bmw-x5-min.png",
                "alt": "BMW X5"
            },
            {
                "model": "i7 M70 2024",
                "description": "Electric luxury redefined. The i7 M70 offers silent power and unparalleled comfort.",
                "price": "$168,500",
                "image": "assets/cars/archive/Bmw/2023-bmw-i7-front-three-quarters-2-1650375834.jpg",
                "alt": "BMW i7"
            },
            {
                "model": "Z4 Roadster 2023",
                "description": "Feel the wind and the adrenaline. The Z4 is the quintessence of open-top driving.",
                "price": "$52,800",
                "image": "assets/cars/archive/Bmw/BMW-Z4-Roadster-Right-Front-Three-Quarter-153914.jpg",
                "alt": "BMW Z4"
            }
        ]
    },
    {
        "id": "benz",
        "brand": "Mercedes-Benz",
        "categories": [
            "Luxury Sedans",
            "SUVs",
            "AMG Performance",
            "EQ Electric"
        ],
        "cars": [
            {
                "model": "C-Class 2023",
                "description": "Sophistication and intelligence. The C-Class is a masterpiece of modern luxury.",
                "price": "$44,850",
                "image": "assets/cars/archive/Benz/2023_Mercedes-Benz_C-Class_1.jpg",
                "alt": "Mercedes C-Class"
            },
            {
                "model": "G-Class 2022",
                "description": "The icon of off-road luxury. The G-Wagon remains the king of its class.",
                "price": "$139,900",
                "image": "assets/cars/archive/Benz/g-class-right-front-three-quarter.jpeg",
                "alt": "Mercedes G-Class"
            },
            {
                "model": "AMG GT 53",
                "description": "Driving performance at its finest. The AMG GT 53 is a four-door supercar.",
                "price": "$95,900",
                "image": "assets/cars/archive/Benz/2023_mercedes-benz_amg-gt_sedan_53_fq_oem_1_1600.jpg",
                "alt": "Mercedes AMG GT"
            },
            {
                "model": "EQS SUV 2023",
                "description": "The future of luxury mobility. The EQS SUV is pure electric elegance.",
                "price": "$104,400",
                "image": "assets/cars/archive/Benz/2023_MercedesEQSSUV_1.jpg",
                "alt": "Mercedes EQS"
            }
        ]
    },
    {
        "id": "audi",
        "brand": "Audi",
        "categories": [
            "RS High Performance",
            "Q Series SUVs",
            "e-tron Electric",
            "Luxury Sedans"
        ],
        "cars": [
            {
                "model": "RS6 Avant 2023",
                "description": "The ultimate daily driver. Supercar performance in a practical wagon body.",
                "price": "$121,900",
                "image": "assets/cars/archive/Audi/Audi/1-Audi-RS6.jpg",
                "alt": "Audi RS6"
            },
            {
                "model": "R8 Coupe V10",
                "description": "A masterpiece of engineering. The R8 is the pinnacle of Audi's racing heritage.",
                "price": "$158,600",
                "image": "assets/cars/archive/Audi/Audi/Audi20R82028129.jpg",
                "alt": "Audi R8"
            },
            {
                "model": "e-tron GT 2023",
                "description": "Electric performance with a soul. The e-tron GT is the future of Audi Sport.",
                "price": "$104,900",
                "image": "assets/cars/archive/Audi/Audi/Audi_e-tron_GT_RS-01.jpg",
                "alt": "Audi e-tron GT"
            },
            {
                "model": "Q8 SUV 2023",
                "description": "The luxury SUV that commands attention. Bold design meets versatile performance.",
                "price": "$72,800",
                "image": "assets/cars/archive/Audi/Audi/2023_audi_q8_angularfront.jpg",
                "alt": "Audi Q8"
            }
        ]
    },
    {
        "id": "ferrari",
        "brand": "Ferrari",
        "categories": [
            "Supercars",
            "Hypercars",
            "SUVs",
            "Classic"
        ],
        "cars": [
            {
                "model": "SF90 Stradale",
                "description": "A new era of performance. The SF90 Stradale is Ferrari's first plug-in hybrid supercar.",
                "price": "$524,815",
                "image": "assets/cars/archive/Ferrari/Ferrari20SF9020Stradale.jpg",
                "alt": "Ferrari SF90"
            },
            {
                "model": "Purosangue 2023",
                "description": "Pure blood, pure performance. Ferrari's first four-door, four-seater luxury SUV.",
                "price": "$398,350",
                "image": "assets/cars/archive/Ferrari/2023-Ferrari-Purosangue.jpg",
                "alt": "Ferrari Purosangue"
            },
            {
                "model": "F8 Tributo",
                "description": "A celebration of excellence. The F8 Tributo pays homage to the most powerful V8 ever.",
                "price": "$283,950",
                "image": "assets/cars/archive/Ferrari/2020-Ferrari-F8-Tributo.jpg",
                "alt": "Ferrari F8 Tributo"
            },
            {
                "model": "296 GTB 2022",
                "description": "Defining fun to drive. The 296 GTB brings hybrid V6 power to the heart of the range.",
                "price": "$322,986",
                "image": "assets/cars/archive/Ferrari/Ferrari2029620GTB.jpg",
                "alt": "Ferrari 296 GTB"
            }
        ]
    },
    {
        "id": "porsche",
        "brand": "Porsche",
        "categories": [
            "911 Heritage",
            "Taycan Electric",
            "718 Sports",
            "Panamera Luxury"
        ],
        "cars": [
            {
                "model": "911 Carrera 2023",
                "description": "The timeless sports car. The 911 Carrera continues to set the benchmark for handling and joy.",
                "price": "$114,400",
                "image": "assets/cars/archive/Porsche/porsche-911-carrera_100787037.jpg",
                "alt": "Porsche 911"
            },
            {
                "model": "Taycan Turbo S",
                "description": "Soul, electrified. The Taycan is the first all-electric sports car with the heart of a Porsche.",
                "price": "$194,900",
                "image": "assets/cars/archive/Porsche/TA21Q2DIX0018-taycan-turbo-s-side-view-white.png",
                "alt": "Porsche Taycan"
            },
            {
                "model": "Cayenne Turbo GT",
                "description": "High performance for four. The Cayenne Turbo GT is the SUV that thinks it's a supercar.",
                "price": "$196,300",
                "image": "assets/cars/archive/Porsche/Porsche_Cayenne_Turbo-GT_2022_Review-5-1.jpg",
                "alt": "Porsche Cayenne"
            },
            {
                "model": "718 Cayman GT4",
                "description": "The mid-engine predator. The 718 Cayman GT4 is built for the track and the open road.",
                "price": "$106,500",
                "image": "assets/cars/archive/Porsche/porsche-718-cayman-gt4-yellow-large.jpg",
                "alt": "Porsche 718"
            }
        ]
    },
    {
        "id": "lamborghini",
        "brand": "Lamborghini",
        "categories": [
            "V12 Legends",
            "V10 Precision",
            "Super SUV",
            "Concept / Rare"
        ],
        "cars": [
            {
                "model": "Aventador Ultimae 2022",
                "description": "The final, greatest expression of the legendary V12 Aventador. A masterpiece of engineering.",
                "price": "$498,258",
                "image": "assets/cars/archive/Lamborghini/1-lamborghini-aventador-ultimae-2022-first-drive-lead.jpg",
                "alt": "Lamborghini Aventador"
            },
            {
                "model": "Hurac\u00e1n Tecnica 2022",
                "description": "The perfect bridge between the track and the road. Pure driving emotion.",
                "price": "$239,000",
                "image": "assets/cars/archive/Lamborghini/2022-lamborghini-huracan-tecnica-101-1657303967.jpg",
                "alt": "Lamborghini Hurac\u00e1n"
            },
            {
                "model": "Revuelto 2024",
                "description": "The first super sports V12 hybrid plug-in. The future of Lamborghini performance.",
                "price": "$608,350",
                "image": "assets/cars/archive/Lamborghini/Lamborghini-Revuelto.jpg",
                "alt": "Lamborghini Revuelto"
            },
            {
                "model": "Terzo Millennio",
                "description": "The vision of the future. Electric energy meets radical design and self-healing carbon fiber.",
                "price": "Inquiry Only",
                "image": "assets/cars/archive/Lamborghini/Terzo-Millennio_01-overview.jpg",
                "alt": "Lamborghini Terzo Millennio"
            }
        ]
    },
    {
        "id": "tesla",
        "brand": "Tesla",
        "categories": [
            "Performance",
            "Utility",
            "Next Gen"
        ],
        "cars": [
            {
                "model": "Model S Plaid 2022",
                "description": "Beyond Ludicrous. 0-60 in 1.99s. The highest performing sedan ever built.",
                "price": "$108,490",
                "image": "assets/cars/archive/Tesla/2022_Tesla_Model_S_Review1.jpg",
                "alt": "Tesla Model S"
            },
            {
                "model": "Cybertruck 2023",
                "description": "Built for any planet. Exoskeleton utility with sports car performance.",
                "price": "$79,990",
                "image": "assets/cars/archive/Tesla/03tesla-cybertruck-01-vwzt-superJumbo.jpg",
                "alt": "Tesla Cybertruck"
            },
            {
                "model": "Model X Plaid 2023",
                "description": "The SUV that defies physics. Falcon wing doors and unparalleled acceleration.",
                "price": "$119,990",
                "image": "assets/cars/archive/Tesla/2023-tesla-model-x-101-1671475309.jpeg",
                "alt": "Tesla Model X"
            },
            {
                "model": "Next-Gen Roadster",
                "description": "The quickest car in the world, with record-setting performance, range and efficiency.",
                "price": "$250,000",
                "image": "assets/cars/archive/Tesla/2023-tesla-roadster-2023-tesla-roadster-side-perspective-driving-carbuzz-1023536.jpg",
                "alt": "Tesla Roadster"
            }
        ]
    },
    {
        "id": "rolls-royce",
        "brand": "Rolls Royce",
        "categories": [
            "The Pantheon",
            "Black Badge",
            "Electric Luxury",
            "Bespoke"
        ],
        "cars": [
            {
                "model": "Phantom Series II",
                "description": "The pinnacle of luxury. A sanctuary of peace and unparalleled craftsmanship.",
                "price": "$460,000",
                "image": "assets/cars/archive/Rolls royce/2023-Rolls-Royce-Phantom-Series-II-39-front.jpg",
                "alt": "Rolls Royce Phantom"
            },
            {
                "model": "Spectre 2024",
                "description": "The first fully electric Rolls-Royce. Ultra-luxury in complete silence.",
                "price": "$413,000",
                "image": "assets/cars/archive/Rolls royce/01-spectre-unveiled-the-first-fully-electric-rolls-royce-front-3-4-1666076191.jpg",
                "alt": "Rolls Royce Spectre"
            },
            {
                "model": "Ghost 2023",
                "description": "Minimalism and perfection. The most advanced Rolls-Royce ever created.",
                "price": "$340,500",
                "image": "assets/cars/archive/Rolls royce/rrmc-homepage-ghost-share-image.jpg",
                "alt": "Rolls Royce Ghost"
            },
            {
                "model": "Cullinan",
                "description": "Luxury is no longer confined to the road. The most capable Rolls-Royce ever.",
                "price": "$355,000",
                "image": "assets/cars/archive/Rolls royce/202202091711274071.jpg",
                "alt": "Rolls Royce Cullinan"
            }
        ]
    },
    {
        "id": "bentley",
        "brand": "Bentley",
        "categories": [
            "Grand Touring",
            "Luxury SUVs",
            "Mulliner",
            "Electric Future"
        ],
        "cars": [
            {
                "model": "Continental GT 2022",
                "description": "The definitive grand tourer. Exquisite luxury meets raw power and effortless performance.",
                "price": "$235,600",
                "image": "assets/cars/archive/Bentley/2022-Bentley-Continental-GT.jpg",
                "alt": "Bentley Continental GT"
            },
            {
                "model": "Bentayga Speed",
                "description": "The fastest SUV in the world. Unrivaled luxury with the heart of a supercar.",
                "price": "$263,000",
                "image": "assets/cars/archive/Bentley/bentayga_speed_100.jpg",
                "alt": "Bentley Bentayga"
            },
            {
                "model": "Flying Spur 2020",
                "description": "The world's finest luxury four-door grand tourer. A fusion of performance and comfort.",
                "price": "$198,700",
                "image": "assets/cars/archive/Bentley/2020-Bentley-Flying-Spur.jpg",
                "alt": "Bentley Flying Spur"
            },
            {
                "model": "Mulliner Batur 2023",
                "description": "An exclusive limited edition. Bentley's most powerful car yet, showcasing a new design DNA.",
                "price": "$1,950,000",
                "image": "assets/cars/archive/Bentley/Mulliner20Batur201920x1080.jpg",
                "alt": "Bentley Batur"
            }
        ]
    },
    {
        "id": "lexus",
        "brand": "Lexus",
        "categories": [
            "F Sport",
            "Luxury Sedans",
            "Crafted SUVs",
            "Electrified"
        ],
        "cars": [
            {
                "model": "LC 500h 2022",
                "description": "A masterpiece of design and engineering. The LC 500h redefines the luxury coupe.",
                "price": "$101,500",
                "image": "assets/cars/archive/Lexus/2022_Lexus_LC_1.jpg",
                "alt": "Lexus LC"
            },
            {
                "model": "RX 500h 2023",
                "description": "The iconic luxury SUV, evolved. Performance and sophistication in every detail.",
                "price": "$62,700",
                "image": "assets/cars/archive/Lexus/2023-Lexus-RX-GROUP-HERO-16x9-1.jpg",
                "alt": "Lexus RX"
            },
            {
                "model": "IS 350 F Sport",
                "description": "Thrill-seeking performance. The IS 350 is engineered to dominate the corners.",
                "price": "$44,900",
                "image": "assets/cars/archive/Lexus/03-2023-Lexus-IS-350-exterior.jpg",
                "alt": "Lexus IS"
            },
            {
                "model": "LX 600 Ultra Luxury",
                "description": "The flagship SUV. Unsurpassed capability and ultimate refinement on any terrain.",
                "price": "$127,300",
                "image": "assets/cars/archive/Lexus/ultra-luxury-manganese-luster-black-6623-1642798314.jpeg",
                "alt": "Lexus LX"
            }
        ]
    },
    {
        "id": "maserati",
        "brand": "Maserati",
        "categories": [
            "Super Sports",
            "Luxury Sedans",
            "The Levante",
            "Folgore Electric"
        ],
        "cars": [
            {
                "model": "MC20 Cielo 2023",
                "description": "Beyond the Sky. A unique spyder with a revolutionary glass roof and supercar soul.",
                "price": "$250,000",
                "image": "assets/cars/archive/Maserati/2023-maserati-mc20-cielo-spyder-108-1653401843.jpg",
                "alt": "Maserati MC20"
            },
            {
                "model": "GranTurismo Folgore",
                "description": "The first 100% electric Maserati. Zero emissions, infinite performance.",
                "price": "$215,000",
                "image": "assets/cars/archive/Maserati/2023MaseratiGrandTurismoFolgore_Featured.png",
                "alt": "Maserati GranTurismo"
            },
            {
                "model": "Quattroporte Trofeo",
                "description": "The race-bred luxury sedan. Elegance and extreme performance in one package.",
                "price": "$115,000",
                "image": "assets/cars/archive/Maserati/2022_maserati_quattroporte_sedan_trofeo_fq_oem_1_1280.jpg",
                "alt": "Maserati Quattroporte"
            },
            {
                "model": "Levante Modena 2022",
                "description": "The Maserati of SUVs. A unique combination of performance, style, and versatility.",
                "price": "$92,000",
                "image": "assets/cars/archive/Maserati/2023_maserati_levante_angularfront.jpg",
                "alt": "Maserati Levante"
            }
        ]
    },
    {
        "id": "dodge",
        "brand": "Dodge",
        "categories": [
            "Muscle Cars",
            "Supercharged",
            "SUVs",
            "The Last Call"
        ],
        "cars": [
            {
                "model": "Challenger SRT Hellcat",
                "description": "Pure American muscle. 700+ horsepower of supercharged adrenaline.",
                "price": "$72,290",
                "image": "assets/cars/archive/Dodge/2023_Dodge_Challenger_1.jpg",
                "alt": "Dodge Challenger"
            },
            {
                "model": "Charger SRT Hellcat",
                "description": "The world's only four-door muscle car. Speed and space without compromise.",
                "price": "$82,650",
                "image": "assets/cars/archive/Dodge/2022_Dodge_Charger_Review1.jpg",
                "alt": "Dodge Charger"
            },
            {
                "model": "Durango SRT Hellcat",
                "description": "The most powerful SUV on the planet. Three rows of seats, zero rivals.",
                "price": "$91,740",
                "image": "assets/cars/archive/Dodge/2023DurangoHellcat-MAIN_i.jpg",
                "alt": "Dodge Durango"
            },
            {
                "model": "Charger Daytona SRT",
                "description": "The future of muscle. 100% electric, 100% Dodge soul.",
                "price": "Coming Soon",
                "image": "assets/cars/archive/Dodge/2024-dodge-charger-srt-daytona-concept.jpg",
                "alt": "Dodge Charger Daytona"
            }
        ]
    },
    {
        "id": "cadillac",
        "brand": "Cadillac",
        "categories": [
            "V-Series",
            "Luxury SUVs",
            "Electric Luxury",
            "The Classics"
        ],
        "cars": [
            {
                "model": "CT5-V Blackwing",
                "description": "The ultimate performance sedan. A 6.2L Supercharged V8 monster with refined luxury.",
                "price": "$91,995",
                "image": "assets/cars/archive/Cadillac/2022_Cadillac_CT5VBlackwing_SEO.jpg",
                "alt": "Cadillac CT5-V"
            },
            {
                "model": "Escalade-V 2023",
                "description": "The industry's most powerful full-size SUV. Pure dominance on any road.",
                "price": "$149,990",
                "image": "assets/cars/archive/Cadillac/2023-cadillac-escalade-v-002-1642783557.jpg",
                "alt": "Cadillac Escalade-V"
            },
            {
                "model": "LYRIQ 2023",
                "description": "The dawn of a new era. Cadillac's first all-electric SUV, where tech meets soul.",
                "price": "$58,590",
                "image": "assets/cars/archive/Cadillac/LYRIQ-MAIN_i_5.jpg",
                "alt": "Cadillac LYRIQ"
            },
            {
                "model": "Celestiq",
                "description": "An custom-commissioned masterpiece. The ultimate expression of Cadillac luxury.",
                "price": "$340,000",
                "image": "assets/cars/archive/Cadillac/CadillacCelestiq_Main.png",
                "alt": "Cadillac Celestiq"
            }
        ]
    },
    {
        "id": "alfa-romeo",
        "brand": "Alfa Romeo",
        "categories": [
            "Quadrifoglio",
            "The Giulia",
            "The Stelvio",
            "Future / EV"
        ],
        "cars": [
            {
                "model": "Giulia GTA 2022",
                "description": "A legend reborn. The ultimate expression of Alfa Romeo performance and technical excellence.",
                "price": "$175,000",
                "image": "assets/cars/archive/alfa romeo/20220211050819_Alfa_Romeo_Giulia_GTA.jpg",
                "alt": "Alfa Romeo Giulia GTA"
            },
            {
                "model": "Stelvio Quadrifoglio",
                "description": "The high-performance SUV. Italian design meets extreme power and race-bred handling.",
                "price": "$86,850",
                "image": "assets/cars/archive/alfa romeo/Alfa-Romeo-Stelvio-Quadrifoglio.jpg",
                "alt": "Alfa Romeo Stelvio"
            },
            {
                "model": "Giulia 2023",
                "description": "Pure emotion in motion. The definitive Italian sports sedan with timeless style.",
                "price": "$44,220",
                "image": "assets/cars/archive/alfa romeo/2023-AlfaRomeo-LineUp-Giulia.png.image.500.png",
                "alt": "Alfa Romeo Giulia"
            },
            {
                "model": "Tonale 2023",
                "description": "The dawn of a new era. Alfa Romeo's first electrified compact SUV.",
                "price": "$42,995",
                "image": "assets/cars/archive/alfa romeo/Alfa20Romeo20Tonale20web.jpg",
                "alt": "Alfa Romeo Tonale"
            }
        ]
    },
    {
        "id": "hyundai",
        "brand": "Hyundai",
        "categories": [
            "N Performance",
            "SUVs",
            "Electric",
            "Sedans"
        ],
        "cars": [
            {
                "model": "Elantra N 2023",
                "description": "Track-ready performance for the every day. The Elantra N is a corner-carving machine.",
                "price": "$32,900",
                "image": "assets/cars/archive/hyundai/2023-Hyundai-Elantra-N-20-front-three-quarter-view.jpg",
                "alt": "Hyundai Elantra N"
            },
            {
                "model": "Tucson 2022",
                "description": "Bold design and advanced tech. The Tucson is the modern SUV for modern life.",
                "price": "$26,450",
                "image": "assets/cars/archive/hyundai/2022_hyundai_tucson-plug-in-hybrid_4dr-suv_limited_fq_oem_1_1280.jpg",
                "alt": "Hyundai Tucson"
            },
            {
                "model": "Kona Electric 2022",
                "description": "Go the distance with zero emissions. The Kona Electric is versatile and efficient.",
                "price": "$34,000",
                "image": "assets/cars/archive/hyundai/Hyundai-Kona-Electric-Right-Front-Three-Quarter-162185.jpg",
                "alt": "Hyundai Kona"
            },
            {
                "model": "Palisade 2023",
                "description": "The ultimate family SUV. Premium comfort and safety for everyone on board.",
                "price": "$35,900",
                "image": "assets/cars/archive/hyundai/2023_hyundai_palisade_4dr-suv_calligraphy_fq_oem_1_1280.jpg",
                "alt": "Hyundai Palisade"
            }
        ]
    },
    {
        "id": "kia",
        "brand": "Kia",
        "categories": [
            "Performance",
            "SUVs & Crossovers",
            "Electric & Hybrid",
            "Sedans"
        ],
        "cars": [
            {
                "model": "Stinger GT 2022",
                "description": "Gran tourer performance. The Kia Stinger GT is designed to cover long distances in style and speed.",
                "price": "$51,800",
                "image": "assets/cars/archive/Kia/performance-sports-cars-kia-stinger.webp",
                "alt": "Kia Stinger"
            },
            {
                "model": "EV6 2023",
                "description": "The future of Kia. The EV6 is a fully electric crossover with ultra-fast charging capabilities.",
                "price": "$48,700",
                "image": "assets/cars/archive/Kia/first-slider-mobile-ev6.jpg",
                "alt": "Kia EV6"
            },
            {
                "model": "Sportage 2023",
                "description": "Adventurous by nature. The all-new Sportage features a bold design and versatile interior.",
                "price": "$26,290",
                "image": "assets/cars/archive/Kia/kia_sportage_2023_large-middle.png",
                "alt": "Kia Sportage"
            },
            {
                "model": "Telluride 2022",
                "description": "Give it everything. The Telluride is the award-winning eight-passenger SUV from Kia.",
                "price": "$33,390",
                "image": "assets/cars/archive/Kia/220927135815-kia-telluride-2022-restricted.jpg",
                "alt": "Kia Telluride"
            }
        ]
    }
]
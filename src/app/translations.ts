export type Language = 'ca' | 'es' | 'en';

export interface Translations {
    nav: {
        features: string;
        howItWorks: string;
        download: string;
    };
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        cta: string;
        ctaSecondary: string;
    };
    features: {
        title: string;
        subtitle: string;
        items: {
            instant: {
                title: string;
                description: string;
            };
            details: {
                title: string;
                description: string;
            };
            multiAtm: {
                title: string;
                description: string;
            };
            privacy: {
                title: string;
                description: string;
            };
            modern: {
                title: string;
                description: string;
            };
            opensource: {
                title: string;
                description: string;
            };
        };
    };
    howItWorks: {
        title: string;
        subtitle: string;
        steps: {
            download: {
                title: string;
                description: string;
            };
            tap: {
                title: string;
                description: string;
            };
            view: {
                title: string;
                description: string;
            };
        };
    };
    motivation: {
        title: string;
        content: string;
    };
    download: {
        title: string;
        subtitle: string;
        github: string;
        googlePlay: string;
        comingSoon: string;
    };
    footer: {
        description: string;
        author: string;
        license: string;
        disclaimer: string;
    };
    atmRegions: {
        tarragona: string;
        girona: string;
        lleida: string;
    };
    privacy: {
        title: string;
        content: string;
        developer: string;
        noData: string;
        googlePlayCrashReport: string;
    };
}

export const translations: Record<Language, Translations> = {
    ca: {
        nav: {
            features: 'Característiques',
            howItWorks: 'Com funciona',
            download: 'Descarregar',
        },
        hero: {
            badge: '🚀 Codi obert i gratuït',
            title: 'Consulta la teva targeta de transport a l\'instant',
            subtitle: 'Llegeix les dades de la teva targeta ATM de Tarragona, Girona o Lleida directament des del teu telèfon. Sense connexió, sense registres, sense complicacions.',
            cta: 'Veure a GitHub',
            ctaSecondary: 'Com funciona',
        },
        features: {
            title: 'Característiques',
            subtitle: 'Tot el que necessites per gestionar la teva targeta de transport',
            items: {
                instant: {
                    title: 'Consulta instantània',
                    description: 'Només cal apropar la targeta al sensor NFC del telèfon per llegir les dades del xip.',
                },
                details: {
                    title: 'Detalls del títol',
                    description: 'Consulta els viatges restants, el tipus de bitllet i la data de caducitat exacta.',
                },
                multiAtm: {
                    title: 'Suport Multi-ATM',
                    description: 'Compatible amb ATM Camp de Tarragona, ATM Girona i ATM Lleida.',
                },
                privacy: {
                    title: 'Privacitat total',
                    description: 'Totes les dades es llegeixen localment. Cap informació personal es comparteix o s\'envia a cap servidor.',
                },
                modern: {
                    title: 'Interfície moderna',
                    description: 'Desenvolupada per ser intuïtiva, ràpida i accessible per a tots els usuaris.',
                },
                opensource: {
                    title: 'Codi obert',
                    description: 'El codi font està disponible a GitHub. Ets lliure d\'explorar, modificar i col·laborar.',
                },
            },
        },
        howItWorks: {
            title: 'Com funciona',
            subtitle: 'Tres passos senzills per consultar la teva targeta',
            steps: {
                download: {
                    title: 'Descarrega l\'app',
                    description: 'Instal·la Tiquetaire des de GitHub al teu dispositiu Android amb NFC.',
                },
                tap: {
                    title: 'Apropa la targeta',
                    description: 'Col·loca la teva targeta de transport al sensor NFC del teu telèfon.',
                },
                view: {
                    title: 'Consulta les dades',
                    description: 'Visualitza instantàniament els viatges restants, l\'historial i la caducitat.',
                },
            },
        },
        motivation: {
            title: 'Motivació del projecte',
            content: 'Aquest projecte neix d\'una necessitat personal i social. A les demarcacions de Tarragona, Girona i Lleida, els usuaris sovint ens trobem amb targetes oblidades en un calaix sense saber si encara són útils. Actualment, no disposem d\'aplicacions oficials ni d\'una xarxa de màquines d\'autovenda per fer aquestes consultes de forma autònoma, depenent sempre de l\'atenció humana en punts de venda i en horaris restringits. Com a estudiant d\'Enginyeria Informàtica, vaig crear aquesta eina per oferir una alternativa digital i accessible a tots els usuaris.',
        },
        download: {
            title: 'Comença ara',
            subtitle: 'Descarrega Tiquetaire i consulta la teva targeta en segons',
            github: 'Veure a GitHub',
            googlePlay: 'Descarregar a Google Play',
            comingSoon: 'Properament a Google Play',
        },
        footer: {
            description: 'Consulta la teva targeta de transport de forma instantània i privada.',
            author: 'Desenvolupat per Òscar Rovira',
            license: 'Llicència MIT - Codi obert',
            disclaimer: 'Aquesta aplicació no és oficial i no té cap vinculació amb les Autoritats Territorials de Mobilitat (ATM).',
        },
        atmRegions: {
            tarragona: 'ATM Camp de Tarragona',
            girona: 'ATM Girona',
            lleida: 'ATM Lleida',
        },
        privacy: {
            title: 'Política de privacitat',
            content: 'Tiquetaire prioritza la teva privacitat. L\'aplicació no recull, ni emmagatzema, ni envia cap dada a cap servidor extern. Tota la informació llegida de la targeta de transport es processa localment al teu dispositiu i desapareix en tancar l\'aplicació.',
            developer: 'Desenvolupador: Òscar Rovira',
            noData: 'Aquesta aplicació no recull cap dada! No hi ha anuncis ni mecanismes de seguiment.',
            googlePlayCrashReport: 'Si l\'aplicació s\'ha instal·lat mitjançant Google Play, el desenvolupador rep un informe genèric en cas que l\'aplicació falli. Les dades d\'aquest informe de fallades no es compartiran amb ningú i només s\'utilitzaran per millorar l\'aplicació.',
        },
    },
    es: {
        nav: {
            features: 'Características',
            howItWorks: 'Cómo funciona',
            download: 'Descargar',
        },
        hero: {
            badge: '🚀 Código abierto y gratuito',
            title: 'Consulta tu tarjeta de transporte al instante',
            subtitle: 'Lee los datos de tu tarjeta ATM de Tarragona, Girona o Lleida directamente desde tu teléfono. Sin conexión, sin registros, sin complicaciones.',
            cta: 'Ver en GitHub',
            ctaSecondary: 'Cómo funciona',
        },
        features: {
            title: 'Características',
            subtitle: 'Todo lo que necesitas para gestionar tu tarjeta de transporte',
            items: {
                instant: {
                    title: 'Consulta instantánea',
                    description: 'Solo tienes que acercar la tarjeta al sensor NFC del teléfono para leer los datos del chip.',
                },
                details: {
                    title: 'Detalles del título',
                    description: 'Consulta los viajes restantes, el tipo de billete y la fecha de caducidad exacta.',
                },
                multiAtm: {
                    title: 'Soporte Multi-ATM',
                    description: 'Compatible con ATM Camp de Tarragona, ATM Girona y ATM Lleida.',
                },
                privacy: {
                    title: 'Privacidad total',
                    description: 'Todos los datos se leen localmente. Ninguna información personal se comparte o se envía a ningún servidor.',
                },
                modern: {
                    title: 'Interfaz moderna',
                    description: 'Desarrollada para ser intuitiva, rápida y accesible para todos los usuarios.',
                },
                opensource: {
                    title: 'Código abierto',
                    description: 'El código fuente está disponible en GitHub. Eres libre de explorar, modificar y colaborar.',
                },
            },
        },
        howItWorks: {
            title: 'Cómo funciona',
            subtitle: 'Tres pasos sencillos para consultar tu tarjeta',
            steps: {
                download: {
                    title: 'Descarga la app',
                    description: 'Instala Tiquetaire desde GitHub en tu dispositivo Android con NFC.',
                },
                tap: {
                    title: 'Acerca la tarjeta',
                    description: 'Coloca tu tarjeta de transporte en el sensor NFC de tu teléfono.',
                },
                view: {
                    title: 'Consulta los datos',
                    description: 'Visualiza instantáneamente los viajes restantes, el historial y la caducidad.',
                },
            },
        },
        motivation: {
            title: 'Motivación del proyecto',
            content: 'Este proyecto nace de una necesidad personal y social. En las demarcaciones de Tarragona, Girona y Lleida, los usuarios a menudo nos encontramos con tarjetas olvidadas en un cajón sin saber si todavía son útiles. Actualmente, no disponemos de aplicaciones oficiales ni de una red de máquinas de autoventa para hacer estas consultas de forma autónoma, dependiendo siempre de la atención humana en puntos de venta y en horarios restringidos. Como estudiante de Ingeniería Informática, creé esta herramienta para ofrecer una alternativa digital y accesible a todos los usuarios.',
        },
        download: {
            title: 'Empieza ahora',
            subtitle: 'Descarga Tiquetaire y consulta tu tarjeta en segundos',
            github: 'Ver en GitHub',
            googlePlay: 'Descargar en Google Play',
            comingSoon: 'Próximamente en Google Play',
        },
        footer: {
            description: 'Consulta tu tarjeta de transporte de forma instantánea y privada.',
            author: 'Desarrollado por Òscar Rovira',
            license: 'Licencia MIT - Código abierto',
            disclaimer: 'Esta aplicación no es oficial y no tiene ninguna vinculación con las Autoridades Territoriales de Movilidad (ATM).',
        },
        atmRegions: {
            tarragona: 'ATM Camp de Tarragona',
            girona: 'ATM Girona',
            lleida: 'ATM Lleida',
        },
        privacy: {
            title: 'Política de privacidad',
            content: 'Tiquetaire prioriza tu privacidad. La aplicación no recoge, ni almacena, ni envía ningún dato a ningún servidor externo. Toda la información leída de la tarjeta de transporte se procesa localmente en tu dispositivo y desaparece al cerrar la aplicación.',
            developer: 'Desarrollador: Oscar Rovira',
            noData: '¡Esta aplicación no recoge ningún dato! No hay anuncios ni mecanismos de seguimiento.',
            googlePlayCrashReport: 'Si la aplicación se instaló mediante Google Play, el desarrollador recibe un informe genérico en caso de que la aplicación falle. Los datos de este informe de fallos no se compartirán con nadie y solo se utilizarán para mejorar la aplicación.',
        },
    },
    en: {
        nav: {
            features: 'Features',
            howItWorks: 'How it works',
            download: 'Download',
        },
        hero: {
            badge: '🚀 Open source & free',
            title: 'Check your transport card instantly',
            subtitle: 'Read your ATM card data from Tarragona, Girona or Lleida directly from your phone. No connection, no registration, no hassle.',
            cta: 'View on GitHub',
            ctaSecondary: 'How it works',
        },
        features: {
            title: 'Features',
            subtitle: 'Everything you need to manage your transport card',
            items: {
                instant: {
                    title: 'Instant query',
                    description: 'Simply bring your card close to your phone\'s NFC sensor to read the chip data.',
                },
                details: {
                    title: 'Ticket details',
                    description: 'Check remaining trips, ticket type and exact expiration date.',
                },
                multiAtm: {
                    title: 'Multi-ATM support',
                    description: 'Compatible with ATM Camp de Tarragona, ATM Girona and ATM Lleida.',
                },
                privacy: {
                    title: 'Total privacy',
                    description: 'All data is read locally. No personal information is shared or sent to any server.',
                },
                modern: {
                    title: 'Modern interface',
                    description: 'Designed to be intuitive, fast and accessible for all users.',
                },
                opensource: {
                    title: 'Open source',
                    description: 'Source code is available on GitHub. You are free to explore, modify and collaborate.',
                },
            },
        },
        howItWorks: {
            title: 'How it works',
            subtitle: 'Three simple steps to check your card',
            steps: {
                download: {
                    title: 'Download the app',
                    description: 'Install Tiquetaire from GitHub on your NFC-enabled Android device.',
                },
                tap: {
                    title: 'Tap your card',
                    description: 'Place your transport card on your phone\'s NFC sensor.',
                },
                view: {
                    title: 'View the data',
                    description: 'Instantly view remaining trips, history and expiration date.',
                },
            },
        },
        motivation: {
            title: 'Project motivation',
            content: 'This project was born from a personal and social need. In the regions of Tarragona, Girona and Lleida, users often find ourselves with forgotten cards in a drawer without knowing if they are still useful. Currently, we do not have official applications or a network of vending machines to make these queries autonomously, always depending on human attention at points of sale and during restricted hours. As a Computer Engineering student, I created this tool to offer a digital and accessible alternative to all users.',
        },
        download: {
            title: 'Get started',
            subtitle: 'Download Tiquetaire and check your card in seconds',
            github: 'View on GitHub',
            googlePlay: 'Download on Google Play',
            comingSoon: 'Coming soon to Google Play',
        },
        footer: {
            description: 'Check your transport card instantly and privately.',
            author: 'Developed by Òscar Rovira',
            license: 'MIT License - Open source',
            disclaimer: 'This application is not official and has no affiliation with the Territorial Mobility Authorities (ATM).',
        },
        atmRegions: {
            tarragona: 'ATM Camp de Tarragona',
            girona: 'ATM Girona',
            lleida: 'ATM Lleida',
        },
        privacy: {
            title: 'Privacy Policy',
            content: 'Tiquetaire prioritizes your privacy. The application does not collect, store, or send any data to any external server. All information read from the transport card is processed locally on your device and disappears when the application is closed.',
            developer: 'Developer: Oscar Rovira',
            noData: 'This app does not collect any data! There are no ads or tracking mechanisms.',
            googlePlayCrashReport: 'If the app was installed using Google Play the developer gets a generic report in case of an app crash. The data in this crash report will not be shared with anyone and only be used to improve the app.',
        },
    },
};

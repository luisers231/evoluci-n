import { Topic, TopicId, QuizQuestion, GalileanosQuestion } from './types';

export const TOPICS: Record<TopicId, Topic> = {
  evolucion: {
    id: 'evolucion',
    title: 'Evolución Biológica',
    description: 'El cambio en las características de las poblaciones biológicas a través de las generaciones.',
    icon: 'dna',
    content: [
      {
        id: 1,
        title: "Selección Natural",
        definition: "Proceso donde los organismos mejor adaptados a su entorno tienden a sobrevivir y reproducirse más.",
        interactiveData: "Simulación: Cambia el color del entorno y observa qué escarabajos sobreviven a los depredadores."
      },
      {
        id: 2,
        title: "Mutación Genética",
        definition: "Cambios aleatorios en la secuencia de ADN que introducen nueva variedad genética.",
        interactiveData: "Laboratorio: Modifica una cadena de ADN y observa el cambio físico en el organismo."
      },
      {
        id: 3,
        title: "Deriva Génica",
        definition: "Cambios en la frecuencia de alelos debido a eventos aleatorios, afectando más a poblaciones pequeñas.",
        interactiveData: "Minijuego: Elimina aleatoriamente individuos de una población pequeña y ve cómo cambia el color predominante."
      },
      {
        id: 4,
        title: "Flujo Génico",
        definition: "Transferencia de material genético entre poblaciones separadas (migración).",
        interactiveData: "Mapa: Mueve individuos de una isla a otra y observa la mezcla de rasgos."
      },
      {
        id: 5,
        title: "Adaptación",
        definition: "Rasgo que mejora la capacidad de un organismo para sobrevivir y reproducirse.",
        interactiveData: "Puzzle: Asigna el pico correcto al pinzón según el tipo de alimento disponible."
      },
      {
        id: 6,
        title: "Especiación",
        definition: "Proceso evolutivo por el cual surgen nuevas especies biológicas.",
        interactiveData: "Línea de tiempo: Separa una población con una montaña y observa cómo divergen en dos especies."
      },
      {
        id: 7,
        title: "Coevolución",
        definition: "Cuando dos o más especies influyen mutuamente en su evolución (ej. flores y polinizadores).",
        interactiveData: "Conexión: Empareja la forma de la flor con el pico del colibrí adecuado."
      },
      {
        id: 8,
        title: "Variabilidad Genética",
        definition: "La diversidad en las frecuencias de los genes, crucial para que actúe la selección natural.",
        interactiveData: "Gráfico: Aumenta la diversidad de una población y enfréntala a una enfermedad nueva."
      },
      {
        id: 9,
        title: "Extinción",
        definition: "Desaparición de todos los miembros de una especie o grupo taxonómico.",
        interactiveData: "Impacto: Simula un cambio climático drástico y observa qué especies no logran adaptarse."
      },
      {
        id: 10,
        title: "Ancestría Común",
        definition: "Teoría de que todos los organismos vivos descienden de un único ancestro común.",
        interactiveData: "Árbol Filogenético: Construye el árbol de la vida conectando organismos relacionados."
      }
    ]
  },
  evidencias: {
    id: 'evidencias',
    title: 'Evidencias de la Evolución',
    description: 'Pruebas científicas que respaldan la teoría de la evolución.',
    icon: 'search',
    content: [
      {
        id: 1,
        title: "Registro Fósil",
        definition: "Restos conservados que muestran la sucesión de formas de vida a través del tiempo geológico.",
        interactiveData: "Excavación: Ordena los estratos de tierra para ver la sucesión de fósiles desde lo antiguo a lo moderno."
      },
      {
        id: 2,
        title: "Anatomía Comparada",
        definition: "Estudio de similitudes y diferencias en la anatomía de diferentes especies.",
        interactiveData: "Rayos X: Superpón los esqueletos de un humano y un gato para ver similitudes."
      },
      {
        id: 3,
        title: "Embriología Comparada",
        definition: "Comparación de embriones que revela similitudes en etapas tempranas no visibles en adultos.",
        interactiveData: "Microscopio: Identifica las branquias y colas en embriones de peces, pollos y humanos."
      },
      {
        id: 4,
        title: "Biología Molecular (ADN)",
        definition: "Comparación de secuencias de ADN y proteínas para determinar parentesco.",
        interactiveData: "Secuenciador: Compara el % de similitud del ADN entre humanos, chimpancés y ratones."
      },
      {
        id: 5,
        title: "Biogeografía",
        definition: "Estudio de la distribución geográfica de las especies y cómo el aislamiento influye.",
        interactiveData: "Globo Terráqueo: Rastrea cómo los marsupiales quedaron aislados en Australia tras la ruptura de Pangea."
      },
      {
        id: 6,
        title: "Estructuras Vestigiales",
        definition: "Órganos que han perdido su función original a lo largo de la evolución.",
        interactiveData: "Escáner: Encuentra el apéndice en humanos y los restos de patas en ballenas."
      },
      {
        id: 7,
        title: "Observación Directa",
        definition: "Evolución en tiempo real, como la resistencia de bacterias a antibióticos.",
        interactiveData: "Placa Petri: Aplica antibiótico y observa cómo proliferan las bacterias resistentes."
      },
      {
        id: 8,
        title: "Homología Molecular",
        definition: "Código genético universal compartido por casi todos los organismos vivos.",
        interactiveData: "Traductor: Inserta un gen de medusa en una bacteria para ver si produce luz (transgénesis)."
      },
      {
        id: 9,
        title: "Series Filogenéticas",
        definition: "Series de fósiles que muestran cambios graduales (ej. evolución del caballo).",
        interactiveData: "Rompecabezas: Ordena las patas de los ancestros del caballo desde 4 dedos hasta la pezuña actual."
      },
      {
        id: 10,
        title: "Atavismos",
        definition: "Reaparición de un rasgo ancestral en un individuo que normalmente no lo tendría.",
        interactiveData: "Caso Clínico: Analiza casos raros como humanos con cola o gallinas con dientes."
      }
    ]
  },
  macrofosiles: {
    id: 'macrofosiles',
    title: 'Macrofósiles',
    description: 'Fósiles visibles a simple vista sin necesidad de microscopio.',
    icon: 'bone',
    content: [
      {
        id: 1,
        title: "Huesos Mineralizados",
        definition: "Tejido óseo donde la materia orgánica ha sido reemplazada por minerales.",
        interactiveData: "Restauración: Limpia y ensambla los huesos dispersos de un Tiranosaurio Rex."
      },
      {
        id: 2,
        title: "Dientes Fósiles",
        definition: "Debido a su esmalte duro, son los restos de vertebrados más comunes.",
        interactiveData: "Dieta: Deduce qué comía el animal basándote en la forma (plano vs afilado) del diente."
      },
      {
        id: 3,
        title: "Amonites",
        definition: "Cefalópodos extintos con conchas en espiral, muy comunes en el Mesozoico.",
        interactiveData: "Medición: Mide el diámetro y cuenta las cámaras de diferentes conchas de amonites."
      },
      {
        id: 4,
        title: "Troncos Petrificados",
        definition: "Madera fósil donde la estructura vegetal ha sido sustituida por sílice.",
        interactiveData: "Corte Transversal: Cuenta los anillos del árbol petrificado para determinar su edad y clima."
      },
      {
        id: 5,
        title: "Impresiones de Hojas",
        definition: "Huella carbonizada de hojas antiguas en rocas sedimentarias.",
        interactiveData: "Comparación: Empareja la hoja fósil con su descendiente moderno más cercano."
      },
      {
        id: 6,
        title: "Insectos en Ámbar",
        definition: "Organismos enteros atrapados y preservados en resina de árbol fosilizada.",
        interactiveData: "Lupa 3D: Rota la pieza de ámbar para examinar el mosquito atrapado desde todos los ángulos."
      },
      {
        id: 7,
        title: "Huevos Fosilizados",
        definition: "Restos de huevos, a veces con embriones, que revelan comportamientos reproductivos.",
        interactiveData: "Rayos X: Escanea el interior del huevo para descubrir qué especie de dinosaurio contiene."
      },
      {
        id: 8,
        title: "Exoesqueletos de Trilobites",
        definition: "Artrópodos marinos extintos con un caparazón duro segmentado.",
        interactiveData: "Clasificación: Organiza los trilobites según la complejidad de sus ojos y espinas."
      },
      {
        id: 9,
        title: "Moldes Internos",
        definition: "Relleno de sedimento endurecido dentro de una concha que luego se disuelve.",
        interactiveData: "Reconstrucción: Usa el molde interno para recrear la forma exterior original de la concha."
      },
      {
        id: 10,
        title: "Momificación Natural",
        definition: "Preservación de tejidos blandos (piel) por desecación rápida o congelación.",
        interactiveData: "Deshielo: Retira cuidadosamente el hielo para revelar la piel y pelo de un Mamut."
      }
    ]
  },
  microfosiles: {
    id: 'microfosiles',
    title: 'Microfósiles',
    description: 'Restos diminutos que requieren microscopía para su estudio.',
    icon: 'microscope',
    content: [
      {
        id: 1,
        title: "Foraminíferos",
        definition: "Protistas marinos con caparazones (testas) de carbonato de calcio.",
        interactiveData: "Microscopio: Enfoca y clasifica los foraminíferos según la forma de sus cámaras."
      },
      {
        id: 2,
        title: "Radiolarios",
        definition: "Protozoos que producen intrincados esqueletos minerales de sílice.",
        interactiveData: "Arte Geométrico: Dibuja la estructura simétrica de un radiolario conectando los puntos."
      },
      {
        id: 3,
        title: "Diatomeas",
        definition: "Algas unicelulares con paredes celulares de sílice (frústulas).",
        interactiveData: "Filtrado: Observa cómo las diatomeas forman tierra de diatomeas usada en filtros."
      },
      {
        id: 4,
        title: "Polen Fósil (Palinología)",
        definition: "Granos de polen preservados que indican la flora y clima del pasado.",
        interactiveData: "Clima: Reconstruye el paisaje antiguo contando los tipos de polen en una muestra de suelo."
      },
      {
        id: 5,
        title: "Ostrácodos",
        definition: "Pequeños crustáceos con un caparazón de dos valvas.",
        interactiveData: "Salinidad: Determina si el agua era dulce o salada según la especie de ostrácodo encontrada."
      },
      {
        id: 6,
        title: "Cocolitofóridos",
        definition: "Algas microscópicas con placas de caliza llamadas cocolitos.",
        interactiveData: "Acantilados: Observa cómo la acumulación de estos microfósiles formó los acantilados blancos de Dover."
      },
      {
        id: 7,
        title: "Conodontos",
        definition: "Piezas dentales microscópicas de organismos similares a anguilas.",
        interactiveData: "Termómetro: Usa el cambio de color del conodonto para saber a qué temperatura llegó la roca."
      },
      {
        id: 8,
        title: "Acritarcos",
        definition: "Microfósiles orgánicos de afinidad biológica incierta, muy antiguos.",
        interactiveData: "Datación: Usa acritarcos para determinar la edad de rocas del Precámbrico."
      },
      {
        id: 9,
        title: "Dinoflagelados",
        definition: "Protistas flagelados que pueden formar quistes fosilizables.",
        interactiveData: "Marea Roja: Simula un bloom de algas antiguas basándote en la concentración de quistes."
      },
      {
        id: 10,
        title: "Fitolitos",
        definition: "Partículas microscópicas de sílice formadas dentro de tejidos vegetales.",
        interactiveData: "Arqueología: Identifica qué cultivos comían los humanos antiguos analizando fitolitos en sus dientes."
      }
    ]
  },
  icnofosiles: {
    id: 'icnofosiles',
    title: 'Icnofósiles',
    description: 'Evidencias de la actividad biológica de organismos del pasado (huellas, rastros).',
    icon: 'footprints',
    content: [
      {
        id: 1,
        title: "Icnitas (Huellas)",
        definition: "Huellas de pisadas preservadas en sedimentos blandos que luego se endurecieron.",
        interactiveData: "Velocímetro: Calcula la velocidad del dinosaurio midiendo la distancia entre sus huellas."
      },
      {
        id: 2,
        title: "Coprolitos",
        definition: "Heces fosilizadas que proporcionan información sobre la dieta.",
        interactiveData: "Disección Virtual: Abre un coprolito para encontrar restos de huesos o plantas digeridas."
      },
      {
        id: 3,
        title: "Gastrolitos",
        definition: "Piedras tragadas por animales para ayudar a triturar comida en el estómago.",
        interactiveData: "Pulido: Distingue entre una piedra de río y un gastrolito por su nivel de pulido."
      },
      {
        id: 4,
        title: "Madrigueras (Burrows)",
        definition: "Túneles excavados por animales en el sedimento para vivienda o alimentación.",
        interactiveData: "Relleno: Vierte yeso virtual en el agujero para revelar la forma del túnel subterráneo."
      },
      {
        id: 5,
        title: "Perforaciones (Borings)",
        definition: "Agujeros hechos en sustratos duros como madera, roca o conchas (bioerosión).",
        interactiveData: "Predador: Identifica qué caracol carnívoro hizo el agujero perfecto en la almeja."
      },
      {
        id: 6,
        title: "Rastros de Arrastre",
        definition: "Marcas dejadas por colas o cuerpos arrastrándose por el fondo.",
        interactiveData: "Simulación: Arrastra diferentes colas y compara el rastro con el fósil."
      },
      {
        id: 7,
        title: "Nidos",
        definition: "Estructuras construidas para depositar huevos o criar.",
        interactiveData: "Incubación: Organiza los huevos en el nido según el patrón de puesta (circular o espiral)."
      },
      {
        id: 8,
        title: "Marcas de Mordeduras",
        definition: "Huellas de dientes dejadas en huesos de presas.",
        interactiveData: "Forense: Encaja los dientes del T-Rex en las marcas del hueso de Triceratops."
      },
      {
        id: 9,
        title: "Rizolitos",
        definition: "Moldes o petrificaciones de sistemas de raíces de plantas.",
        interactiveData: "Suelo: Reconstruye el tipo de suelo antiguo basándote en la profundidad de las raíces."
      },
      {
        id: 10,
        title: "Impresiones de Descanso",
        definition: "Marca dejada por un animal cuando se posa en el fondo sin moverse.",
        interactiveData: "Silueta: Encaja la estrella de mar en su impresión de descanso en la arena."
      }
    ]
  },
  homologos: {
    id: 'homologos',
    title: 'Órganos Homólogos',
    description: 'Estructuras con el mismo origen evolutivo pero funciones diferentes (Divergencia).',
    icon: 'git-merge',
    content: [
      {
        id: 1,
        title: "Extremidad Pentadáctila",
        definition: "Patrón de 5 dedos compartido por mamíferos, aves, reptiles y anfibios.",
        interactiveData: "Colorear: Pinta los huesos equivalentes (húmero, radio, cúbito) en un brazo humano y una aleta."
      },
      {
        id: 2,
        title: "Aleta de Ballena vs Brazo Humano",
        definition: "Misma estructura ósea interna, una usada para nadar y otra para manipular.",
        interactiveData: "Transformación: Observa la evolución paso a paso de una pata terrestre a una aleta."
      },
      {
        id: 3,
        title: "Ala de Murciélago vs Pata de Caballo",
        definition: "Dedos alargados para volar vs un solo dedo robusto para correr.",
        interactiveData: "Rayos X: Compara la longitud de las falanges en ambas estructuras."
      },
      {
        id: 4,
        title: "Hojas de Plantas vs Espinas de Cactus",
        definition: "Las espinas son hojas modificadas para protección y evitar pérdida de agua.",
        interactiveData: "Evolución Vegetal: Modifica una hoja ancha hasta convertirla en espina en un entorno seco."
      },
      {
        id: 5,
        title: "Vejiga Natatoria vs Pulmones",
        definition: "Ambos órganos derivan del tubo digestivo ancestral.",
        interactiveData: "Buceo: Controla la flotabilidad de un pez y compárala con la respiración humana."
      },
      {
        id: 6,
        title: "Huesecillos del Oído",
        definition: "El martillo y yunque de mamíferos son homólogos a huesos de la mandíbula de reptiles.",
        interactiveData: "Migración Ósea: Mueve los huesos desde la mandíbula reptiliana hasta el oído mamífero."
      },
      {
        id: 7,
        title: "Piezas Bucales de Insectos",
        definition: "Masticadores (escarabajo) y chupadores (mariposa) vienen de los mismos apéndices.",
        interactiveData: "Mecánica: Adapta las piezas bucales para comer hojas o beber néctar."
      },
      {
        id: 8,
        title: "Pelvis de Cetáceos",
        definition: "Huesos pélvicos reducidos en ballenas, homólogos a caderas de animales terrestres.",
        interactiveData: "Rompecabezas: Ubica los pequeños huesos pélvicos flotantes en el esqueleto de la ballena."
      },
      {
        id: 9,
        title: "Tentáculos de Cefalópodos vs Pie de Molusco",
        definition: "Los tentáculos son modificaciones del 'pie' muscular de los moluscos ancestrales.",
        interactiveData: "Morfología: Observa cómo el pie de un caracol se divide para formar tentáculos."
      },
      {
        id: 10,
        title: "Vértebras Cervicales",
        definition: "Casi todos los mamíferos (jirafa y humano) tienen 7 vértebras cervicales.",
        interactiveData: "Comparación: Cuenta las vértebras en el cuello largo de una jirafa y el corto de un ratón."
      }
    ]
  },
  analogos: {
    id: 'analogos',
    title: 'Órganos Análogos',
    description: 'Estructuras con distinta origen evolutivo pero misma función (Convergencia).',
    icon: 'copy',
    content: [
      {
        id: 1,
        title: "Ala de Ave vs Ala de Insecto",
        definition: "Ambas sirven para volar, pero una es hueso/plumas y la otra membrana quitinosa.",
        interactiveData: "Aerodinámica: Prueba el vuelo con estructuras óseas y luego con membranas sin huesos."
      },
      {
        id: 2,
        title: "Cuerpo Hidrodinámico",
        definition: "Forma de torpedo en Tiburones (pez) y Delfines (mamífero) para nadar rápido.",
        interactiveData: "Túnel de Viento: Prueba la resistencia al agua de diferentes formas corporales."
      },
      {
        id: 3,
        title: "Ojo de Pulpo vs Ojo Humano",
        definition: "Estructuras complejas muy similares que evolucionaron independientemente.",
        interactiveData: "Disección: Compara la posición del nervio óptico (punto ciego) en ambos ojos."
      },
      {
        id: 4,
        title: "Patas de Topo vs Grillo Topo",
        definition: "Patas delanteras adaptadas para cavar en un mamífero y un insecto.",
        interactiveData: "Excavación: Usa ambas herramientas biológicas para cavar un túnel y ver cuál es más rápida."
      },
      {
        id: 5,
        title: "Espinas de Cactus vs Euphorbia",
        definition: "Plantas de desiertos distintos (América vs África) que desarrollaron espinas similares.",
        interactiveData: "Defensa: Intenta comer ambas plantas siendo un herbívoro y ve el resultado."
      },
      {
        id: 6,
        title: "Alas de Murciélago vs Pterodáctilo",
        definition: "Ambos vuelan con piel estirada, pero usando dedos distintos como soporte.",
        interactiveData: "Estructura: Construye el ala estirando la piel desde el dedo índice o el meñique."
      },
      {
        id: 7,
        title: "Pico de Pato vs Ornitorrinco",
        definition: "Hocicos planos para buscar comida en el lodo, en un ave y un mamífero.",
        interactiveData: "Búsqueda: Usa sensores eléctricos (ornitorrinco) vs tacto (pato) para hallar presas."
      },
      {
        id: 8,
        title: "Tráqueas de Artrópodos vs Pulmones",
        definition: "Sistemas para intercambio de gases aire-sangre surgidos independientemente.",
        interactiveData: "Respiración: Sigue la molécula de oxígeno entrando por un espiráculo o una nariz."
      },
      {
        id: 9,
        title: "Patas de Saltamontes vs Canguro",
        definition: "Patas traseras largas y potentes desarrolladas para el salto.",
        interactiveData: "Competencia de Salto: Calcula la fuerza necesaria para saltar 10 veces tu altura."
      },
      {
        id: 10,
        title: "Caparazón de Tortuga vs Armadillo",
        definition: "Armaduras óseas para protección dorsal en reptiles y mamíferos.",
        interactiveData: "Ataque: Prueba la resistencia de ambos caparazones contra la mordida de un depredador."
      }
    ]
  }
};

// Initial Sample Data for Galileanos (Fallback)
export const GALILEANOS_DATA: GalileanosQuestion[] = [
  {
    question: "Menciona una evidencia de la evolución",
    answers: [
      { text: "Fósiles", points: 40, revealed: false },
      { text: "ADN / Genética", points: 25, revealed: false },
      { text: "Anatomía Comparada", points: 15, revealed: false },
      { text: "Embriología", points: 10, revealed: false },
      { text: "Biogeografía", points: 5, revealed: false },
    ]
  },
  {
    question: "Nombra un tipo de fósil famoso",
    answers: [
      { text: "Dinosaurio (T-Rex)", points: 50, revealed: false },
      { text: "Trilobite", points: 20, revealed: false },
      { text: "Amonite", points: 15, revealed: false },
      { text: "Mamut", points: 10, revealed: false },
      { text: "Ámbar (Mosquito)", points: 5, revealed: false },
    ]
  }
];

export const MOCK_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Qué es la evolución biológica?",
    options: ["Cambio en individuos", "Cambio en poblaciones", "Creación espontánea", "Ninguna"],
    correctAnswer: 1,
    explanation: "La evolución opera sobre poblaciones a lo largo de generaciones, no sobre individuos aislados."
  },
  {
    id: 2,
    question: "¿Cuál es un órgano homólogo?",
    options: ["Ala de mosca y ala de ave", "Brazo humano y aleta de ballena", "Ojo de pulpo y ojo humano", "Pata de perro y pata de mesa"],
    correctAnswer: 1,
    explanation: "Comparten un ancestro común y estructura ósea similar aunque tengan funciones distintas."
  },
];
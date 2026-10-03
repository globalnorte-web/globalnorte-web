export const catalog = [
  // ==========================================
  // GEOSINTÉTICOS
  // ==========================================
  {
    id: "geomembrana-hdpe-lisa-nominal",
    name: "Geomembrana HDPE Lisa Nominal",
    category: "Geosintéticos",
    image: "/products/geomembrana-hdpe-lisa-nominal.jpg",
    unit: "m²",
    description: "Impermeabilización eficiente y rentable. Ideal para proyectos agrícolas y de acuicultura que buscan un equilibrio perfecto entre calidad y presupuesto sin comprometer la contención de fluidos.",
    features: [
      "Espesores: 0.75, 0.8, 1.0, 1.5, 2.0, 2.5 y 3.0 mm",
      "Óptima resistencia química",
      "Excelente soldabilidad"
    ],
    uses: [
      "Reservorios agrícolas y canales",
      "Estanques de acuicultura"
    ],
    projects: ["Agro y Reservorios"]
  },
  {
    id: "geomembrana-hdpe-lisa-gm13",
    name: "Geomembrana HDPE Lisa GM13",
    category: "Geosintéticos",
    image: "/products/geomembrana-hdpe-lisa-gm13.jpg",
    unit: "m²",
    certification: { codigo: "GRI-GM13", ficha: "/fichas-tecnicas/gm13.pdf" },
    description: "Máximo rendimiento garantizado. Fabricada bajo norma internacional GRI-GM13, ofrece resistencia extrema a los rayos UV, químicos y agrietamiento (ESCR) para proyectos de alta criticidad.",
    features: [
      "Espesores: 0.75, 0.8, 1.0, 1.5, 2.0, 2.5 y 3.0 mm",
      "Cumple normativa GRI-GM13",
      "Alta resistencia a exposición prolongada"
    ],
    uses: [
      "Pads de lixiviación y relaves",
      "Rellenos sanitarios"
    ],
    projects: ["Minería", "Edificación e Infraestructura"]
  },
  {
    id: "geotextil-tejido",
    name: "Geotextil Tejido",
    category: "Geosintéticos",
    image: "/products/geotextil-tejido.jpg",
    unit: "m²",
    description: "Refuerzo estructural de alta tenacidad. Diseñado para soportar grandes cargas de tracción, es la solución definitiva para estabilizar suelos blandos y optimizar la cimentación de vías.",
    features: [
      "Material: Polipropileno / Poliéster",
      "Alta resistencia a la tensión",
      "Baja deformación bajo carga"
    ],
    uses: [
      "Estabilización de subrasantes",
      "Refuerzo de muros de contención"
    ],
    projects: ["Carreteras y Vías", "Edificación e Infraestructura"]
  },
  {
    id: "geotextil-no-tejido",
    name: "Geotextil No Tejido",
    category: "Geosintéticos",
    image: "/products/geotextil-no-tejido.jpg",
    unit: "m²",
    description: "Versatilidad en filtración y protección. Su estructura porosa tridimensional garantiza un excelente flujo de fluidos mientras actúa como un colchón anti-punzonante esencial para geomembranas.",
    features: [
      "Material: Polipropileno / Poliéster",
      "Alta capacidad de filtración",
      "Alta resistencia al punzonamiento"
    ],
    uses: [
      "Protección de geomembranas",
      "Sistemas de subdrenaje"
    ],
    projects: ["Minería", "Agro y Reservorios", "Carreteras y Vías"]
  },
  {
    id: "geomalla-uniaxial",
    name: "Geomalla Uniaxial",
    category: "Geosintéticos",
    image: "/products/geomalla-uniaxial.jpg",
    unit: "m²",
    description: "Soporte direccional para cargas pesadas. Especialmente desarrollada para trabajar bajo tensión longitudinal sostenida, ideal para la construcción segura de muros y taludes empinados.",
    features: [
      "Alta resistencia longitudinal",
      "Baja fluencia (creep)",
      "Resistencia a daños de instalación"
    ],
    uses: [
      "Muros de tierra mecánicamente estabilizados",
      "Refuerzo de taludes"
    ],
    projects: ["Carreteras y Vías", "Edificación e Infraestructura"]
  },
  {
    id: "geomalla-biaxial",
    name: "Geomalla Biaxial",
    category: "Geosintéticos",
    image: "/products/geomalla-biaxial.jpg",
    unit: "m²",
    description: "Confinamiento integral de agregados. Al distribuir las cargas en dos direcciones, reduce significativamente los espesores de las capas base, generando ahorros sustanciales en proyectos viales.",
    features: [
      "Resistencia bidireccional",
      "Óptima trabazón de agregados",
      "Reducción de espesores de pavimento"
    ],
    uses: [
      "Estabilización de bases de carreteras",
      "Plataformas sobre suelos blandos"
    ],
    projects: ["Carreteras y Vías", "Minería"]
  },
  {
    id: "geocelda-perforada",
    name: "Geocelda Perforada",
    category: "Geosintéticos",
    image: "/products/geocelda-perforada.jpg",
    unit: "m²",
    description: "Control de erosión con drenaje activo. Paneles tridimensionales que confinan el suelo y permiten el paso de agua y raíces, perfectos para estabilizar y revegetar taludes o canales.",
    features: [
      "Paredes texturizadas y perforadas",
      "Permite drenaje lateral",
      "Fácil transporte y expansión"
    ],
    uses: [
      "Control de erosión en taludes",
      "Revestimiento de canales"
    ],
    projects: ["Agro y Reservorios", "Carreteras y Vías"]
  },
  {
    id: "geocelda-sin-perforar",
    name: "Geocelda Sin Perforar",
    category: "Geosintéticos",
    image: "/products/geocelda-sin-perforar.jpg",
    unit: "m²",
    description: "Contención estructural hermética. Sistema celular de paredes continuas diseñado para retener rellenos finos o concretos sin filtraciones, asegurando máxima integridad estructural.",
    features: [
      "Paredes sólidas y continuas",
      "Aislamiento de fluidos entre celdas",
      "Alta rigidez estructural"
    ],
    uses: [
      "Muros de retención",
      "Protección costera"
    ],
    projects: ["Edificación e Infraestructura", "Carreteras y Vías"]
  },

  // ==========================================
  // TUBERÍA HDPE
  // ==========================================
  {
    id: "tuberia-hdpe-iso4427",
    name: "Tubería HDPE NTP ISO 4427-2",
    category: "Tubería HDPE",
    image: "/products/tuberia-hdpe-iso4427.jpg",
    unit: "m",
    certification: { codigo: "NTP ISO 4427-2", ficha: "/fichas-tecnicas/ntp-iso-4427-2.pdf" },
    description: "Conducción segura y estandarizada. Fabricada bajo norma ISO para garantizar flexibilidad, larga vida útil y nula pérdida de carga en redes de agua potable, saneamiento e industria.",
    features: [
      "Resina: PE 80 / PE 100",
      "Norma: NTP ISO 4427-2",
      "Superficie interior ultra lisa"
    ],
    uses: [
      "Redes de agua potable",
      "Sistemas contra incendios"
    ],
    projects: ["Edificación e Infraestructura", "Minería", "Agro y Reservorios"]
  },
  {
    id: "tuberia-hdpe-astm-f714",
    name: "Tubería HDPE ASTM F714",
    category: "Tubería HDPE",
    image: "/products/tuberia-hdpe-astm-f714.jpg",
    unit: "m",
    certification: { codigo: "ASTM F714", ficha: "/fichas-tecnicas/astm-f714.pdf" },
    description: "Rendimiento superior para trabajos pesados. Cumple con estrictos estándares americanos (ASTM), ofreciendo resistencia inigualable a la abrasión y químicos, ideal para aplicaciones mineras agresivas.",
    features: [
      "Resina: PE 3608 / PE 4710",
      "Norma dimensional: ASTM F714",
      "Alta resistencia a la abrasión"
    ],
    uses: [
      "Conducción de relaves y pulpas",
      "Emisarios submarinos y dragado"
    ],
    projects: ["Minería", "Edificación e Infraestructura"]
  },

  // ==========================================
  // TUBERÍA PVC
  // ==========================================
  {
    id: "tuberia-pvc-agua",
    name: "Tubería PVC para Agua",
    category: "Tubería PVC",
    image: "/products/tuberia-pvc-agua.jpg",
    unit: "m",
    description: "La solución tradicional y confiable para transporte de agua a presión. Totalmente inmune a la corrosión galvánica, preserva la calidad y el sabor del agua potable a lo largo de décadas.",
    features: [
      "Libre de incrustaciones",
      "Inmune a la corrosión",
      "Vida útil prolongada"
    ],
    uses: [
      "Distribución urbana de agua",
      "Redes de riego"
    ],
    projects: ["Edificación e Infraestructura", "Agro y Reservorios"]
  },
  {
    id: "tuberia-pvc-desague",
    name: "Tubería PVC para Desagüe",
    category: "Tubería PVC",
    image: "/products/tuberia-pvc-desague.jpg",
    unit: "m",
    description: "Eficiencia en saneamiento por gravedad. Diseñada para resistir el ataque de gases de alcantarilla y sulfuros, su bajo coeficiente de rugosidad previene la acumulación de sólidos y atascos.",
    features: [
      "Alta rigidez anular",
      "Resistencia química a gases",
      "Unión campana-espiga segura"
    ],
    uses: [
      "Redes de alcantarillado",
      "Drenaje pluvial"
    ],
    projects: ["Edificación e Infraestructura"]
  },

  // ==========================================
  // EQUIPOS DE TERMOFUSIÓN
  // ==========================================
  {
    id: "equipo-cuna",
    name: "Máquina Cuña Caliente",
    category: "Equipos",
    image: "/products/equipo-cuna.jpg",
    unit: "unidad",
    description: "Automatización y precisión en soldadura. Equipo de termofusión diseñado para unir geomembranas a alta velocidad con control digital, garantizando costuras dobles con canal de prueba.",
    features: [
      "Soldadura rápida y uniforme",
      "Costura doble con canal de prueba (Test channel)",
      "Control digital de parámetros"
    ],
    uses: [
      "Instalación de grandes paños de geomembrana",
      "Proyectos de impermeabilización"
    ],
    projects: ["Minería", "Agro y Reservorios"]
  },
  {
    id: "equipo-pistola",
    name: "Pistola de Calor Industrial",
    category: "Equipos",
    image: "/products/equipo-pistola.jpg",
    unit: "unidad",
    description: "Control absoluto para trabajos de detalle. Pistola de aire caliente de grado industrial, indispensable para reparaciones rápidas, parches y soldaduras minuciosas en sistemas plásticos.",
    features: [
      "Control electrónico de temperatura",
      "Diseño ergonómico y ligero",
      "Flujo de aire regulable"
    ],
    uses: [
      "Soldadura de detalles y perfiles",
      "Colocación de parches en geomembranas"
    ],
    projects: ["Minería", "Agro y Reservorios", "Edificación e Infraestructura"]
  },
  {
    id: "equipo-extrusora",
    name: "Soldadora Extrusora Manual",
    category: "Equipos",
    image: "/products/equipo-extrusora.jpg",
    unit: "unidad",
    description: "Robustez para uniones complejas. Aporta material continuo (cordón) para soldar áreas difíciles, botas de tubería y remates, asegurando estanqueidad total en puntos críticos.",
    features: [
      "Inyección continua de aporte",
      "Zapata moldeable de teflón",
      "Pre-calentamiento integrado"
    ],
    uses: [
      "Soldadura de botas de tuberías",
      "Remates y reparaciones complejas"
    ],
    projects: ["Minería", "Agro y Reservorios"]
  }
];

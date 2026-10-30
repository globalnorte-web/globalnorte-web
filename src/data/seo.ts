// SEO por producto: título y descripción para Google, y contenido propio de cada ficha.
// Títulos de hasta ~60 caracteres y descripciones de hasta ~160.
// La clave de cada bloque es el "id" del producto en products.ts.

export const seoPorProducto: Record<string, { title: string; description: string }> = {
  "geomembrana-hdpe-lisa-nominal": {
    title: "Geomembrana HDPE Lisa en Perú | Grupo Globalnorte",
    description: "Venta de geomembrana HDPE lisa de 0.75 a 3.0 mm para reservorios, canales y acuicultura. Envíos a todo el Perú. Cotiza por m² con Grupo Globalnorte.",
  },
  "geomembrana-hdpe-lisa-gm13": {
    title: "Geomembrana HDPE GM13 en Perú | Grupo Globalnorte",
    description: "Venta de geomembrana HDPE GM13 (norma GRI-GM13) de 0.75 a 3.0 mm para minería y rellenos sanitarios. Envíos a todo el Perú. Ficha técnica y cotización.",
  },
  "geotextil-tejido": {
    title: "Geotextil Tejido en Perú | Grupo Globalnorte",
    description: "Venta de geotextil tejido de alta resistencia para estabilizar subrasantes y reforzar muros de contención. Envíos a todo el Perú. Cotiza por m².",
  },
  "geotextil-no-tejido": {
    title: "Geotextil No Tejido en Perú | Grupo Globalnorte",
    description: "Venta de geotextil no tejido para filtración, subdrenaje y protección de geomembranas. Envíos a todo el Perú. Cotiza por m² con Grupo Globalnorte.",
  },
  "geomalla-uniaxial": {
    title: "Geomalla Uniaxial en Perú | Grupo Globalnorte",
    description: "Venta de geomalla uniaxial para muros de tierra estabilizados y refuerzo de taludes, con alta resistencia longitudinal. Envíos a todo el Perú. Cotiza.",
  },
  "geomalla-biaxial": {
    title: "Geomalla Biaxial en Perú | Grupo Globalnorte",
    description: "Venta de geomalla biaxial para estabilizar bases de carreteras y plataformas sobre suelos blandos. Envíos a todo el Perú. Cotiza con Grupo Globalnorte.",
  },
  "geocelda-perforada": {
    title: "Geocelda Perforada en Perú | Grupo Globalnorte",
    description: "Venta de geocelda perforada para control de erosión en taludes y revestimiento de canales, con drenaje lateral. Envíos a todo el Perú. Cotiza por m².",
  },
  "geocelda-sin-perforar": {
    title: "Geocelda Sin Perforar en Perú | Grupo Globalnorte",
    description: "Venta de geocelda sin perforar, de paredes continuas, para muros de retención y protección costera. Envíos a todo el Perú. Cotiza por m².",
  },
  "tuberia-hdpe-iso4427": {
    title: "Tubería HDPE NTP ISO 4427 en Perú | Grupo Globalnorte",
    description: "Venta de tubería HDPE NTP ISO 4427-2 en PE 80 y PE 100, de 16 a 1000 mm, para agua potable y redes contra incendios. Envíos a todo el Perú. Cotiza.",
  },
  "tuberia-hdpe-astm-f714": {
    title: "Tubería HDPE ASTM F714 en Perú | Grupo Globalnorte",
    description: "Venta de tubería HDPE ASTM F714 en PE 3608 y PE 4710, de 4 a 36 pulgadas, para relaves, pulpas y minería. Envíos a todo el Perú. Cotiza por metro.",
  },
  "tuberia-pvc-agua": {
    title: "Tubería PVC para Agua en Perú | Grupo Globalnorte",
    description: "Venta de tubería PVC para agua a presión, inmune a la corrosión, para distribución urbana y riego. Envíos a todo el Perú. Cotiza por metro.",
  },
  "tuberia-pvc-desague": {
    title: "Tubería PVC para Desagüe en Perú | Grupo Globalnorte",
    description: "Venta de tubería PVC para desagüe y alcantarillado, resistente a gases y sulfuros, con unión campana-espiga. Envíos a todo el Perú. Cotiza por metro.",
  },
  "equipo-cuna": {
    title: "Máquina Cuña Caliente en Perú | Grupo Globalnorte",
    description: "Venta de máquina de cuña caliente para soldar geomembranas con costura doble y canal de prueba. Envíos a todo el Perú. Cotiza con Grupo Globalnorte.",
  },
  "equipo-pistola": {
    title: "Pistola de Calor Industrial en Perú | Grupo Globalnorte",
    description: "Venta de pistola de calor industrial con control electrónico de temperatura para parches y reparaciones de geomembrana. Envíos a todo el Perú. Cotiza.",
  },
  "equipo-extrusora": {
    title: "Soldadora Extrusora Manual en Perú | Grupo Globalnorte",
    description: "Venta de soldadora extrusora manual para botas de tubería, remates y reparaciones de geomembrana. Envíos a todo el Perú. Cotiza con Grupo Globalnorte.",
  },
};

// Contenido propio (texto, enlaces y preguntas) para las fichas más importantes.
// Se muestra además del contenido que ya tiene cada ficha.
export const contenidoPorProducto: Record<
  string,
  {
    intro: string[];
    enlaces?: { href: string; texto: string }[];
    faqs?: { q: string; a: string }[];
  }
> = {
  "geomembrana-hdpe-lisa-gm13": {
    intro: [
      "La Geomembrana HDPE Lisa GM13 de Grupo Globalnorte se fabrica bajo la norma GRI-GM13, la especificación que fija las propiedades mínimas de las geomembranas lisas de polietileno de alta densidad. Está pensada para obras donde una falla de impermeabilización sería costosa, como pads de lixiviación, relaves y rellenos sanitarios.",
      "Se suministra en espesores de 0.75 a 3.0 mm, con rollos de 7 a 8 m de ancho. El espesor adecuado depende del diseño de cada obra y lo define el ingeniero proyectista; si tienes dudas, nuestro asesor te orienta por WhatsApp.",
      "Atendemos desde Cajamarca y hacemos envíos a todo el Perú. Agrega la geomembrana a tu cotización por m² o descarga la ficha técnica GRI-GM13 en PDF desde esta misma página.",
    ],
    enlaces: [
      { href: "/producto/geotextil-no-tejido/", texto: "Geotextil No Tejido: protección contra punzonamiento bajo la geomembrana" },
      { href: "/producto/equipo-cuna/", texto: "Máquina Cuña Caliente: soldadura de paños con costura doble y canal de prueba" },
      { href: "/producto/equipo-extrusora/", texto: "Soldadora Extrusora Manual: remates, botas de tubería y reparaciones" },
      { href: "/guias/cuantos-rollos-de-geomembrana-necesito/", texto: "Guía: ¿cuántos rollos de geomembrana necesito?" },
    ],
    faqs: [
      {
        q: "¿Qué significa GRI-GM13?",
        a: "Es la especificación del Geosynthetic Research Institute para geomembranas lisas de polietileno de alta densidad (HDPE). Define propiedades mínimas como densidad, resistencia al agrietamiento y contenido de negro de humo. La Geomembrana GM13 de Grupo Globalnorte cumple esta norma.",
      },
      {
        q: "¿Qué espesores de geomembrana GM13 hay?",
        a: "0.75, 0.8, 1.0, 1.5, 2.0, 2.5 y 3.0 mm. El espesor adecuado depende del diseño de tu obra; consúltalo con tu ingeniero proyectista o con nuestro asesor.",
      },
      {
        q: "¿Para qué obras se usa la geomembrana GM13?",
        a: "Para pads de lixiviación y relaves, rellenos sanitarios y otros proyectos de alta criticidad en minería e infraestructura.",
      },
      {
        q: "¿Qué necesito para instalar la geomembrana?",
        a: "Los paños de geomembrana se unen por termofusión. Para paños grandes se usa la máquina de cuña caliente, y para remates, botas de tubería y reparaciones, la soldadora extrusora. Además, suele colocarse un geotextil no tejido como capa de protección contra punzonamiento.",
      },
      {
        q: "¿Dónde comprar geomembrana HDPE en Perú?",
        a: "En Grupo Globalnorte, con sede en Cajamarca y envíos a todo el Perú. Agrega el producto a tu cotización o escríbenos por WhatsApp y te respondemos con el precio actualizado.",
      },
    ],
  },
  "geomembrana-hdpe-lisa-nominal": {
    intro: [
      "La Geomembrana HDPE Lisa Nominal es la opción de Grupo Globalnorte para impermeabilizar reservorios agrícolas, canales y estanques de acuicultura cuando se busca un buen equilibrio entre calidad y presupuesto. Ofrece buena resistencia química y excelente soldabilidad.",
      "Está disponible en espesores de 0.75 a 3.0 mm. Si tu proyecto es de minería, relleno sanitario u otra obra de alta criticidad, revisa la Geomembrana HDPE Lisa GM13, que cumple la norma GRI-GM13.",
      "El espesor adecuado depende del diseño de tu obra. Usa la guía de rollos para estimar cuántos necesitas y agrega el producto a tu cotización por m².",
    ],
    enlaces: [
      { href: "/producto/geomembrana-hdpe-lisa-gm13/", texto: "Geomembrana HDPE Lisa GM13: norma GRI-GM13 para proyectos de alta criticidad" },
      { href: "/producto/geotextil-no-tejido/", texto: "Geotextil No Tejido: protección contra punzonamiento bajo la geomembrana" },
      { href: "/producto/equipo-cuna/", texto: "Máquina Cuña Caliente: soldadura de paños con costura doble y canal de prueba" },
      { href: "/guias/cuantos-rollos-de-geomembrana-necesito/", texto: "Guía: ¿cuántos rollos de geomembrana necesito?" },
    ],
    faqs: [
      {
        q: "¿Para qué se usa la geomembrana HDPE lisa nominal?",
        a: "Para impermeabilizar reservorios agrícolas, canales y estanques de acuicultura, donde se busca un buen equilibrio entre calidad y presupuesto.",
      },
      {
        q: "¿Cuál es la diferencia con la geomembrana GM13?",
        a: "La GM13 se fabrica bajo la norma GRI-GM13 y está pensada para proyectos de alta criticidad, como minería y rellenos sanitarios. La nominal se orienta a proyectos agrícolas y de acuicultura. Si tienes dudas sobre cuál elegir, consúltalo con nuestro asesor.",
      },
      {
        q: "¿Qué espesores de geomembrana HDPE lisa hay?",
        a: "0.75, 0.8, 1.0, 1.5, 2.0, 2.5 y 3.0 mm. El espesor adecuado depende del diseño de tu obra.",
      },
      {
        q: "¿Cómo se unen los paños de geomembrana?",
        a: "Por termofusión. Para paños grandes se usa la máquina de cuña caliente, y para remates y reparaciones, la soldadora extrusora.",
      },
      {
        q: "¿Dónde comprar geomembrana para reservorio en Perú?",
        a: "En Grupo Globalnorte, con sede en Cajamarca y envíos a todo el Perú. Agrega el producto a tu cotización o escríbenos por WhatsApp y te respondemos con el precio actualizado.",
      },
    ],
  },
};

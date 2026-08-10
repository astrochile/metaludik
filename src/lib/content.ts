// Contenido real de Metaludik, confirmado por Samik Garrido (dueño) y Francisco.
// Todo dato numérico o técnico aquí ha sido validado — no inventar cifras nuevas
// sin pasar antes por el mismo proceso de confirmación.

export const brand = {
  name: "Metaludik",
  legalName: "Metalmecánica Tecnológica S.G.A.",
  rut: "77.776.288-5",
  tagline: "Ideas que toman forma en metal",
  owner: "Samik Garrido",
  phone: "+56 9 9318 2994",
  phoneHref: "56993182994",
  email: "garridosamik@gmail.com",
  instagram: "https://instagram.com/metaludik",
  instagramHandle: "@metaludik",
  city: "Rancagua",
  region: "Región de O'Higgins",
  hours: "Lunes a sábado, 9:00 a 18:00 hrs",
};

export const stats = [
  { value: "15", suffix: "+", label: "años de oficio de Samik en soldadura" },
  { value: "3", suffix: "", label: "años de Metaludik como empresa" },
  { value: "100", suffix: "+", label: "proyectos realizados" },
  { value: "35", suffix: "mm", label: "espesor máx. en acero al carbono" },
];

export const services = [
  {
    slug: "corte-plasma-cnc",
    title: "Corte Plasma CNC",
    short: "Piezas, logos, letras y diseños cortados desde archivo con máquina Forsun industrial.",
    items: [
      "Corte de piezas y logos",
      "Letras corporativas",
      "Paneles decorativos",
      "Escudos e insignias institucionales",
      "Producción desde archivos DXF/DWG o diseño propio",
    ],
  },
  {
    slug: "estructuras-fabricacion-metalica",
    title: "Estructuras y fabricación metálica",
    short: "Bastidores, soportes, portones y rejas fabricados a medida.",
    items: [
      "Estructuras metálicas",
      "Bastidores y soportes",
      "Cajones metálicos",
      "Portones y rejas",
      "Cierres perimetrales",
      "Proyectos estructurales a medida",
    ],
  },
  {
    slug: "soldadura-montajes",
    title: "Soldadura y montajes",
    short: "Soldadura calificada, armado y trabajo en terreno cuando el proyecto lo requiere.",
    items: [
      "Soldadura calificada",
      "Armado y uniones",
      "Refuerzos",
      "Instalaciones",
      "Montaje y trabajo en terreno",
    ],
  },
  {
    slug: "letreros-soluciones-comerciales",
    title: "Letreros y soluciones comerciales",
    short: "Letreros metálicos e iluminados, y estructuras para gráfica publicitaria.",
    items: [
      "Letreros metálicos y logos corporativos",
      "Letreros luminosos",
      "Estructuras y bastidores para gráficas",
      "Instalación y montaje",
      "Soluciones para fachadas y comercios",
    ],
  },
  {
    slug: "proyectos-personalizados-decoracion",
    title: "Proyectos personalizados y decoración",
    short: "Braseros, parrillas, pasamanos y objetos con nombre — ideas hechas a medida.",
    items: [
      "Braseros y fogones",
      "Parrillas y asadores",
      "Pasamanos y terminaciones",
      "Piezas decorativas iluminadas",
      "Objetos con nombres o logotipos",
      "Regalos corporativos y familiares",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  location: string;
  cover: string;
  gallery: string[];
  /** Fotos adicionales para el case study — usar null donde aún no hay foto (se muestra placeholder). */
  images: (string | null)[];
  problem: string;
  process: string;
  result: string;
  material: string;
};

export const projects: Project[] = [
  {
    slug: "la-masa-madre",
    title: "Letrero iluminado La Masa Madre",
    client: "La Masa Madre",
    category: "Letreros y soluciones comerciales",
    location: "Rancagua",
    cover: "/images/proyectos/la-masa-madre-01.jpg",
    gallery: [
      "/images/proyectos/la-masa-madre-01.jpg",
      "/images/proyectos/la-masa-madre-02.jpg",
    ],
    images: ["/images/proyectos/la-masa-madre-02.jpg", null, null],
    problem:
      "La panadería necesitaba un letrero circular retroiluminado que replicara con exactitud su tipografía manuscrita, visible tanto de día como de noche.",
    process:
      "Corte plasma CNC de la tipografía sobre plancha metálica, montaje sobre estructura circular con iluminación integrada e instalación en punto de venta.",
    result:
      "Letrero circular iluminado instalado, con una segunda versión colgante para el ingreso del local.",
    material: "Acero al carbono, corte CNC, iluminación LED integrada",
  },
  {
    slug: "clinica-dental-omnia",
    title: "Letrero corporativo Clínica Dental Omnia",
    client: "Clínica Dental Omnia",
    category: "Letreros y soluciones comerciales",
    location: "Rancagua",
    cover: "/images/proyectos/clinica-omnia.jpg",
    gallery: ["/images/proyectos/clinica-omnia.jpg"],
    images: [null, null, null],
    problem:
      "La clínica necesitaba un letrero de fachada de gran formato, retroiluminado, con la identidad completa de marca (isotipo + wordmark + slogan).",
    process:
      "Corte plasma CNC de las tres piezas del logo, estructura de montaje e instalación en fachada con iluminación.",
    result: "Letrero de fachada instalado y operativo, visible desde la vía pública.",
    material: "Acero al carbono, corte CNC, iluminación integrada",
  },
  {
    slug: "licoreria-iturriaga",
    title: "Logo corporativo Licorería Iturriaga",
    client: "Licorería Iturriaga",
    category: "Letreros y soluciones comerciales",
    location: "Rancagua",
    cover: "/images/proyectos/licoreria-iturriaga.jpg",
    gallery: ["/images/proyectos/licoreria-iturriaga.jpg"],
    images: [null, null, null],
    problem:
      "El local buscaba un logo de marca cortado en metal para instalar sobre un revestimiento de madera, como pieza central de la ambientación interior.",
    process:
      "Corte plasma CNC del isotipo y la tipografía de marca, terminación en negro mate y montaje sobre soporte de madera.",
    result: "Pieza instalada como elemento central de la decoración interior del local.",
    material: "Acero al carbono, terminación negro mate",
  },
  {
    slug: "liceo-bicentenario-oscar-castro",
    title: "Escudo institucional Liceo Bicentenario Oscar Castro Z.",
    client: "Liceo Bicentenario Oscar Castro Z.",
    category: "Corte Plasma CNC",
    location: "Rancagua",
    cover: "/images/proyectos/liceo-bicentenario.jpg",
    gallery: ["/images/proyectos/liceo-bicentenario.jpg"],
    images: [null, null, null],
    problem:
      "El colegio necesitaba su escudo institucional completo —tipografía, globo terráqueo, figuras y orla— reproducido con precisión en una sola pieza metálica.",
    process:
      "Corte plasma CNC de precisión sobre plancha de acero, respetando el detalle fino del diseño heráldico original.",
    result: "Escudo institucional cortado en metal, listo para montaje.",
    material: "Acero al carbono",
  },
  {
    slug: "almacen-la-familia",
    title: "Estructura y bastidor publicitario Almacén La Familia",
    client: "Almacén La Familia",
    category: "Estructuras y fabricación metálica",
    location: "Rancagua",
    cover: "/images/proyectos/almacen-la-familia.jpg",
    gallery: ["/images/proyectos/almacen-la-familia.jpg"],
    images: [null, null, null],
    problem:
      "El almacén necesitaba un soporte estructural resistente para instalar un letrero de gran formato con gráfica impresa en su fachada.",
    process:
      "Fabricación de la estructura, cajón metálico y bastidor de soporte, preparación para la instalación de la tela gráfica, e instalación y montaje final en terreno.",
    result:
      "Estructura y bastidor instalados en fachada, listos para la gráfica publicitaria del negocio.",
    material: "Estructura de acero al carbono, bastidor a medida",
  },
  {
    slug: "jardin-infantil-bucalemu",
    title: "Rejas galvanizadas — Jardín Infantil de Bucalemu",
    client: "Jardín infantil, Bucalemu",
    category: "Estructuras y fabricación metálica",
    location: "Bucalemu, zona costera",
    cover: "/images/proyectos/porton-galvanizado.jpg",
    gallery: ["/images/proyectos/porton-galvanizado.jpg"],
    images: [null, null, null],
    problem:
      "Un jardín infantil en la localidad costera de Bucalemu necesitaba rejas resistentes a la corrosión provocada por el ambiente salino de la zona.",
    process:
      "Fabricación de rejas en material galvanizado, elegido específicamente por su resistencia a la corrosión costera, e instalación en terreno.",
    result: "Rejas galvanizadas instaladas, preparadas para el ambiente salino de la costa.",
    material: "Acero galvanizado (protección anticorrosiva)",
  },
  {
    slug: "brasero-somos-corraleros",
    title: "Brasero personalizado \"Somos Corraleros\"",
    client: "Proyecto familiar",
    category: "Proyectos personalizados y decoración",
    location: "Rancagua",
    cover: "/images/proyectos/brasero-corraleros.jpg",
    gallery: ["/images/proyectos/brasero-corraleros.jpg"],
    images: [null, null, null],
    problem:
      "Encargo personalizado de un brasero/fogón exterior con un diseño propio: herradura, jinete y texto de marca familiar.",
    process:
      "Fabricación de la estructura piramidal del brasero y corte plasma CNC del diseño personalizado en sus caras.",
    result: "Brasero funcional con diseño cortado, entregado para uso en espacio exterior.",
    material: "Acero al carbono",
  },
  {
    slug: "porton-residencial",
    title: "Portón corredizo de listones",
    client: "Proyecto residencial",
    category: "Estructuras y fabricación metálica",
    location: "Rancagua",
    cover: "/images/proyectos/porton-listones.jpg",
    gallery: ["/images/proyectos/porton-listones.jpg"],
    images: [null, null, null],
    problem:
      "Acceso vehicular que necesitaba un portón corredizo resistente, con buena ventilación visual hacia el exterior.",
    process:
      "Fabricación de la estructura en base a listones metálicos, con riel corredizo para apertura motorizada o manual.",
    result: "Portón corredizo instalado, funcional para uso vehicular diario.",
    material: "Acero al carbono",
  },
  {
    slug: "parrilla-familia-contreras",
    title: "Parrilla personalizada Familia Contreras Rey",
    client: "Proyecto familiar",
    category: "Proyectos personalizados y decoración",
    location: "Rancagua",
    cover: "/images/proyectos/parrilla-contreras.jpg",
    gallery: ["/images/proyectos/parrilla-contreras.jpg"],
    images: [null, null, null],
    problem: "Encargo de una parrilla/asador a medida, personalizada con el apellido de la familia cortado en el cuerpo del equipo.",
    process:
      "Fabricación completa de la parrilla con cajón, parrilla regulable y corte plasma CNC del texto personalizado.",
    result: "Parrilla a medida entregada, con terminación funcional y personalización familiar.",
    material: "Acero al carbono",
  },
];

export const process_steps = [
  {
    title: "Cuéntanos la idea",
    text: "Puede ser una fotografía, un dibujo, una referencia, medidas o simplemente una idea que tienes en la cabeza. No necesitas llegar con un plano técnico.",
  },
  {
    title: "La diseñamos",
    text: "Revisamos medidas, materiales y detalles para encontrar una solución que funcione bien y se pueda fabricar correctamente.",
  },
  {
    title: "La fabricamos",
    text: "Cortamos, soldamos, armamos y damos terminación a cada pieza en nuestro taller.",
  },
  {
    title: "La hacemos realidad",
    text: "Entregamos el proyecto terminado y, cuando corresponde, también realizamos su instalación.",
  },
];

export const faqs = [
  {
    q: "¿Metaludik hace todo el proceso, desde el diseño hasta la instalación?",
    a: "Sí. Podemos acompañar el proyecto completo: interpretar la idea, adaptar el diseño, cortar las piezas, soldar, armar, hacer las terminaciones e instalar en terreno.",
  },
  {
    q: "¿Con qué materiales trabajan?",
    a: "Principalmente acero al carbono, y también acero inoxidable según el proyecto. La máquina de corte plasma CNC corta hasta 35 mm en acero al carbono y hasta 10 mm en acero inoxidable.",
  },
  {
    q: "¿Cuánto se demora un proyecto?",
    a: "Depende del proyecto. Para trabajos simples, el plazo habitual es desde 5 días hábiles. Para proyectos más grandes, el plazo se define al cotizar.",
  },
  {
    q: "¿Trabajan solo en Rancagua?",
    a: "Atendemos principalmente Rancagua. Fuera de la ciudad también es posible, coordinando la logística e instalación con anticipación.",
  },
  {
    q: "¿Puedo enviar mi propio diseño o logo?",
    a: "Sí. Puedes enviarnos un archivo (PDF, DXF, DWG, o incluso una imagen) y evaluamos cómo llevarlo a metal con la mayor fidelidad posible al diseño original.",
  },
  {
    q: "¿Hacen proyectos para empresas y también para personas particulares?",
    a: "Sí, ambos. Trabajamos con comercios, instituciones y empresas, y también con personas que buscan un proyecto personalizado — un regalo, un brasero, una parrilla con nombre, un pasamanos.",
  },
  {
    q: "¿Metaludik puede evaluar un proyecto industrial más grande?",
    a: "Contamos con la experiencia técnica, el equipamiento y colaboradores para evaluar proyectos de distinta escala. Cada proyecto estructural, comercial o industrial se evalúa según sus requerimientos técnicos específicos.",
  },
];

export const testimonials: { quote: string; author: string; role: string }[] = [
  // Pendiente: recopilar testimonios reales de clientes antes de publicar el sitio.
];

export const BRAND_INFO = {
  name: "FORTALEZA SIN FRONTERAS",
  tagline: "You don't have to be fit to belong here.",
  whatsappNumber: "5215512345678", // Clean default number
  whatsappMessageDefault: "Hola, quisiera información sobre las clases gratuitas de prueba en Fortaleza Sin Fronteras.",
  whatsappBookingMessage: (name: string, day: string, time: string) => 
    `Hola! Mi nombre es ${name}. Me gustaría reservar mi clase gratis de prueba para el día ${day} de ${time} en Parque Medalla de Honor.`,
  whatsappGroupLink: "https://chat.whatsapp.com/demo-fortaleza-sin-fronteras",
};

export const HERO_CONTENT = {
  headline: "Nadie nace fuerte.",
  subheadline: "Aquí todos comienzan.",
  description: "Entrena sin presión, sin comparaciones y rodeado de personas que quieren mejorar igual que tú.",
  primaryCTA: "Reservar Clase Gratis",
  secondaryCTA: "Ver Horarios",
  // Video and high-res visual assets for cinematic background
  videoSourcePc: "/video/hero_pc.mp4",
  videoSourceCell: "/video/hero_cell.mp4",
  posterImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop",
};

export const GLASS_CARDS = [
  {
    title: "Sin Juicios",
    description: "Entrena a tu ritmo.",
    tag: "FILOSOFÍA",
    accent: "01",
  },
  {
    title: "Comunidad",
    description: "Nunca entrenarás solo.",
    tag: "CONEXIÓN",
    accent: "02",
  },
  {
    title: "Resultados",
    description: "Más energía. Más confianza. Más salud.",
    tag: "TRANSFORMACIÓN",
    accent: "03",
  },
];

export const FOUNDER_CONTENT = {
  headline: "Del ring a la comunidad.",
  body: "Durante años el boxeo fue mi vida. Hoy mi misión es ayudar a otras personas a descubrir que el ejercicio puede transformar su cuerpo, su mente y su confianza.",
  name: "Irais Hernández",
  role: "Fundador & Entrenador Principal",
  quote: "El gimnasio no es para demostrar nada a nadie. Es para reconectar contigo mismo.",
  imageSource: "/fundador.png",
};

export const WHO_IS_THIS_FOR = [
  {
    id: 1,
    title: "Nunca has entrenado.",
    detail: "Empezamos desde cero absoluto. Sin posturas complejas ni exigencias irrealistas.",
  },
  {
    id: 2,
    title: "Quieres bajar de peso.",
    detail: "Movimiento constante y funcional adaptado a tu capacidad actual.",
  },
  {
    id: 3,
    title: "Buscas motivación.",
    detail: "La energía del grupo y la buena vibra te levantarán los días difíciles.",
  },
  {
    id: 4,
    title: "Quieres sentirte mejor.",
    detail: "Aumenta tus niveles de energía, reduce el estrés diario y fortalece tu mente.",
  },
  {
    id: 5,
    title: "Quieres conocer nuevas personas.",
    detail: "Un ambiente cercano, acogedor y libre de egos donde crear amistades reales.",
  },
];

export const SCHEDULE_LOCATION = {
  locationTitle: "Parque Medalla de Honor",
  locationSubtitle: "Aire libre · Zona verde arbolada · Pista natural",
  locationAddress: "Av. de la Libertad s/n, Entrada Principal",
  days: "Sábado · Domingo",
  time: "8:00 AM – 9:00 AM · 10:00 AM – 11:00 AM",
  dayList: ["Sábado", "Domingo"],
  timeSlots: ["8:00 AM – 9:00 AM", "10:00 AM – 11:00 AM"],
  whatsappCTA: "Consultar por WhatsApp",
  mapImage: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=1200&auto=format&fit=crop",
};

export const FINAL_CTA = {
  headline: "El mejor momento para empezar... es hoy.",
  subtext: "Únete a nuestro grupo oficial de WhatsApp para enterarte de convocatorias, puntos de encuentro y eventos especiales.",
  buttonText: "Únete al Grupo",
};

export interface Testimonial {
  id: string;
  quote: string;
  business: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "welcome-home",
    quote:
      "Necesitábamos una web donde nuestros clientes pudieran ver las propiedades sin depender de publicaciones sueltas en redes. Yoan nos construyó el sitio completo con panel de administración: subimos y editamos las propiedades nosotros mismos, sin depender de nadie. La comunicación fue rápida y clara en todo el proceso, y el resultado se ve profesional. Recomiendo su trabajo sin dudarlo.",
    business: "Welcome Home Inmobiliaria",
    context: "Real estate platform · Cuba",
  },
  {
    id: "reikos-llc",
    quote:
      "Yoan built the website for our logistics company and handled everything end to end: design, content structure, and getting the contact form working so quote requests actually reach us. He's fast, communicates clearly, and delivers what he promises. I'd recommend him to any business that needs a professional web presence without the hassle.",
    business: "REIKO'S LLC",
    context: "Logistics company website · USA",
  },
];

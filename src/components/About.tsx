import { Goal } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const About = () => {
  // Datos proporcionados por el usuario
  const objetivo =
    "Desarrollar un equipo de fútbol competitivo y disciplinado, mejorando el rendimiento técnico, táctico y físico de los jugadores mediante entrenamientos estructurados 3 a 4 veces por semana, fortaleciendo el respeto grupal y la comunicación en el campo, para alcanzar un estilo de juego efectivo y obtener resultados positivos en torneos locales durante los próximos meses.";
  // ---

  return (
    <section className="py-20 bg-muted text-foreground relative">
      <ScrollAnimation delay="100ms">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4 shadow-xl">
                <Goal className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
              Objetivo de nuestro equipo
            </h2>
            
            <div className="bg-primary/5 p-6 md:p-8 rounded-xl border border-primary/20 shadow-lg">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium italic">
                {objetivo}
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
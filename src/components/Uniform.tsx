import { ScrollAnimation } from "./ScrollAnimation";
import uniformeImg from "@/assets/uniforme.svg";
import personaUniformeImg from "@/assets/personauniforme.svg";
import { Shirt } from "lucide-react";

const Uniform = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
            <Shirt className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Viste Nuestros Colores
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un uniforme diseñado para el rendimiento y el orgullo de ser un Titán.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          <ScrollAnimation>
            <img 
              src={uniformeImg} 
              alt="Uniforme de Titanes FC - Playera y short" 
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </ScrollAnimation>
          <ScrollAnimation delay="100ms">
            <img 
              src={personaUniformeImg} 
              alt="Jugador portando el uniforme de Titanes FC" 
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Uniform;
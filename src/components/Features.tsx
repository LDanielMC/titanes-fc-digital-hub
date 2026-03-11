import { Check, Award, Activity, Shield, BarChart, Star } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const features = [
  {
    icon: Award,
    title: "Formación Profesional",
    description: "Entrenamientos estructurados con metodología deportiva",
  },
  {
    icon: Activity,
    title: "Desarrollo Físico",
    description: "Mejora de condición física y hábitos saludables",
  },
  {
    icon: Shield,
    title: "Prevención de Lesiones",
    description: "Técnicas especializadas para cuidado del deportista",
  },
  {
    icon: BarChart,
    title: "Mejora del Rendimiento",
    description: "Seguimiento y evaluaciones mensuales",
  },
];

const advantages = [
  "Entrenamientos personalizados por posición",
  "Seguimiento del progreso individual",
  "Evaluaciones físicas mensuales",
  "Ambiente profesional y competitivo",
  "Resultados reales, no solo recreativos",
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Enfoque del Club */}
        <div className="mb-20">
          <ScrollAnimation className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              Enfoque del club
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Cada sesión está pensada para que el jugador mejore, no solo se canse.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <ScrollAnimation
                  key={index}
                  delay={`${index * 100}ms`}
                  className="h-full"
                >
                  <div className="bg-card p-6 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg text-primary mb-2">✔ {feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>

        {/* Ventaja Competitiva */}
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
                ¿Qué nos hace diferentes?
              </h2>
            </div>

            <div className="bg-card p-8 rounded-2xl border-2 border-accent/20 shadow-xl">
              <ul className="space-y-4 mb-6">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-base text-foreground font-medium leading-relaxed">{advantage}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center text-lg font-bold text-primary pt-4 border-t-2 border-accent/20">
                Aquí no solo juegas: creces como futbolista y como persona.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Features;

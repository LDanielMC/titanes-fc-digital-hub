import { Check, Award, Activity, Shield, BarChart, Star } from "lucide-react";

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
          <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-16">
            Nuestro Enfoque
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ventaja Competitiva */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Star className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary">
              ¿Qué nos hace diferentes?
            </h2>
          </div>

          <div className="bg-card p-8 rounded-2xl border-2 border-accent/20 shadow-lg">
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg text-foreground font-medium">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

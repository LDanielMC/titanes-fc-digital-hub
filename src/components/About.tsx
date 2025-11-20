import { Target, Heart, TrendingUp, Shield } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Formación integral",
    description: "Desarrollamos técnica, táctica, físico y mente competitiva.",
  },
  {
    icon: Heart,
    title: "Valores en la cancha",
    description: "Disciplina, respeto y trabajo en equipo en cada entrenamiento.",
  },
  {
    icon: TrendingUp,
    title: "Rendimiento real",
    description: "Sesiones exigentes, enfocadas en mejorar rendimiento, no solo jugar por jugar.",
  },
  {
    icon: Shield,
    title: "Ambiente seguro",
    description: "Espacio cuidado y acompañado, pensado para niños y jóvenes.",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-4">
          ¿Por qué Titanes?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          No somos un club más. Somos un equipo que transforma jugadores.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-primary mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

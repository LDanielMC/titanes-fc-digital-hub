import { ClipboardCheck, Users, Dumbbell, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Evaluación inicial",
    description: "Conocemos el nivel del jugador y sus objetivos.",
  },
  {
    icon: Users,
    title: "Plan por categoría y posición",
    description: "Infantil, juvenil, libre y femenil con ejercicios adaptados y entrenamientos por posición.",
  },
  {
    icon: Dumbbell,
    title: "Entrenamiento completo",
    description: "Control de balón, definición, fuerza, velocidad, lectura de juego.",
  },
  {
    icon: TrendingUp,
    title: "Seguimiento y mejoras",
    description: "Medimos avances y reforzamos áreas a mejorar.",
  },
];

const TrainingProcess = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden lg:block"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-4">
          Cómo entrenamos
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Un proceso diseñado para resultados reales
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card p-6 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-black text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mt-4">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="font-bold text-lg text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connection line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 z-0"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingProcess;

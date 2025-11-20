import { Users, Trophy, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Niños y jóvenes de 6 a 18 años",
    description: "Para quienes buscan desarrollar su talento futbolístico desde temprana edad",
  },
  {
    icon: TrendingUp,
    title: "Jugadores que quieren mejorar",
    description: "Para deportistas que buscan mejorar su técnica individual y condición física",
  },
  {
    icon: Trophy,
    title: "Amantes del Fútbol Asociación",
    description: "Para quienes buscan entrenar en serio y crecer en el deporte",
  },
];

const TargetAudience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-4">
            ¿Para quién es Titanes?
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Si tu pasión es el fútbol, este es tu lugar
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-2">{audience.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

import { Users, Trophy, TrendingUp } from "lucide-react";

const TargetAudience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-16">
          ¿A Quién Nos Dirigimos?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 p-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Niños y Jóvenes</h3>
            <p className="text-muted-foreground">De 6 a 18 años que buscan desarrollar su talento</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 p-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Mejora Continua</h3>
            <p className="text-muted-foreground">Deportistas que buscan mejorar técnica y condición física</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 p-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Fútbol Asociación</h3>
            <p className="text-muted-foreground">Formación profesional en el deporte rey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

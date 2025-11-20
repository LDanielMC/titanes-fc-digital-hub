import { Card } from "@/components/ui/card";
import { Users, Dumbbell, ClipboardCheck, Calendar } from "lucide-react";

const staffMembers = [
  {
    name: "Emanuel Moctezuma Campuzano",
    role: "Director Técnico",
    description: "Especialista en metodologías de entrenamiento",
    icon: Users,
  },
  {
    name: "Ángel Hurtado Rendón",
    role: "Preparador Físico",
    description: "Experto en fuerza, velocidad y prevención de lesiones",
    icon: Dumbbell,
  },
  {
    name: "Alejandro Saraho Cortez",
    role: "Auxiliar Técnico",
    description: "Apoyo en sesiones técnicas y tácticas",
    icon: ClipboardCheck,
  },
  {
    name: "Yered Carbajal Sadkiel",
    role: "Coordinador Deportivo",
    description: "Encargado de organización de horarios, logística y torneos",
    icon: Calendar,
  },
];

const Staff = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-4">
          Nuestro equipo
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Profesionales comprometidos con tu desarrollo
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {staffMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent bg-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-primary mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">"{member.description}"</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Staff;

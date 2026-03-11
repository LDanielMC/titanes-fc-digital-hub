import { Card } from "@/components/ui/card";
import { ScrollAnimation } from "./ScrollAnimation";

// 📌 Importación de fotos del equipo
import foto1 from "@/assets/equipo/1.svg";
import foto2 from "@/assets/equipo/2.svg";
import foto3 from "@/assets/equipo/3.svg";
import foto4 from "@/assets/equipo/4.svg";

const staffMembers = [
  {
    name: "Emanuel Moctezuma Campuzuma",
    role: "Director Técnico",
    description: "Especialista en metodologías de entrenamiento",
    photo: foto2,
  },
  {
    name: "Ángel Hurtado Rendón",
    role: "Preparador Físico",
    description: "Experto en fuerza, velocidad y prevención de lesiones",
    photo: foto1,
  },
  {
    name: "Alejandro Saraho Cortez",
    role: "Auxiliar Técnico",
    description: "Apoyo en sesiones técnicas y tácticas",
    photo: foto4,
  },
  {
    name: "Yered Carbajal Salatiel",
    role: "Coordinador Deportivo",
    description: "Encargado de organización de horarios, logística y torneos",
    photo: foto3,
  },
];

const Staff = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Nuestro equipo
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Profesionales comprometidos con tu desarrollo
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {staffMembers.map((member, index) => (
            <ScrollAnimation
              key={index}
              delay={`${index * 100}ms`}
              className="h-full"
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent bg-card group h-full">
                <div className="flex flex-col items-center text-center space-y-4">

                  {/* Foto del integrante */}
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Texto */}
                  <div>
                    <h3 className="font-bold text-base text-primary mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "{member.description}"
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;

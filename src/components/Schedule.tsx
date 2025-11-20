import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const schedules = [
  {
    days: "Lunes, Miércoles y Viernes",
    sessions: [
      {
        time: "5:00 pm – 6:30 pm",
        category: "Infantil",
        ages: "6-12 años",
      },
      {
        time: "6:30 pm – 8:00 pm",
        category: "Juvenil",
        ages: "13-18 años",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
            <Calendar className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary">
            Horarios de Entrenamiento
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {schedules.map((schedule, index) => (
            <Card key={index} className="p-8 border-2 hover:border-accent transition-all duration-300">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">{schedule.days}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {schedule.sessions.map((session, sessionIndex) => (
                    <div 
                      key={sessionIndex}
                      className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-xl border-2 border-accent/20 hover:border-accent transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary">
                          <Clock className="w-5 h-5 text-accent" />
                          <span className="font-bold text-lg">{session.time}</span>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-primary">{session.category}</p>
                          <p className="text-muted-foreground font-medium">{session.ages}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;

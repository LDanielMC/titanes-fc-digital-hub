import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Costos
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a ti
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Sesión Individual */}
          <ScrollAnimation>
            <Card className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
              <div className="text-center space-y-6 flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Plan por sesión</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-black text-primary">$50</span>
                    <span className="text-muted-foreground font-medium">por clase</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ideal para quienes quieren probar o tienen horarios variables.
                </p>
                <ul className="text-left space-y-3 text-muted-foreground flex-grow">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Entrenamiento completo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> 1.5 horas de práctica
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Flexibilidad de pago
                  </li>
                </ul>
                <a
                  href="https://wa.me/7771208631?text=Hola%20quiero%20apartar%20mi%20lugar%20en%20Titanes%20FC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold rounded-full transition-all duration-300"
                  >
                    Apartar lugar
                  </Button>
                </a>

              </div>
            </Card>
          </ScrollAnimation>

          {/* Mensualidad */}
          <ScrollAnimation delay="100ms">
            <Card className="p-8 border-2 border-accent bg-gradient-to-br from-accent/5 to-accent/10 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                LA MEJOR OPCIÓN
              </div>
              <div className="text-center space-y-6 flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Plan mensual</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-black text-primary">$350</span>
                    <span className="text-muted-foreground font-medium">al mes</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-primary">
                  La mejor opción para ver resultados reales.
                </p>
                <ul className="text-left space-y-3 text-muted-foreground flex-grow">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> 12 sesiones mensuales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> 3 entrenamientos por semana
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Evaluación mensual incluida
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent font-bold">✓</span> <span className="font-semibold">Ahorro de $250</span>
                  </li>
                </ul>
                <a
                  href="https://wa.me/7771208631?text=Hola%20quiero%20apartar%20mi%20lugar%20en%20Titanes%20FC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-bold rounded-full shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                  >
                    Apartar lugar
                  </Button>
                </a>

              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

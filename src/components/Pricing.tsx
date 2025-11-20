import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-16">
          Inversión en tu Futuro
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Sesión Individual */}
          <Card className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-muted-foreground mb-2">Sesión Individual</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black text-primary">$50</span>
                  <span className="text-muted-foreground">por sesión</span>
                </div>
              </div>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>✓ Entrenamiento completo</li>
                <li>✓ 1.5 horas de práctica</li>
                <li>✓ Flexibilidad de pago</li>
              </ul>
            </div>
          </Card>

          {/* Mensualidad */}
          <Card className="p-8 border-2 border-accent bg-gradient-to-br from-accent/5 to-accent/10 relative overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-muted-foreground mb-2">Mensualidad</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black text-primary">$350</span>
                  <span className="text-muted-foreground">al mes</span>
                </div>
              </div>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>✓ 12 sesiones mensuales</li>
                <li>✓ 3 entrenamientos por semana</li>
                <li>✓ Evaluación mensual incluida</li>
                <li>✓ Ahorro de $250</li>
              </ul>
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-primary font-bold rounded-full"
              >
                Inscribirse Ahora
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

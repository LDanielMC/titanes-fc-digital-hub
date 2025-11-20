import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import titanesLogo from "@/assets/titanes-logo.png";
import { Award, Users, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-30 bg-accent rounded-full"></div>
            <img 
              src={titanesLogo} 
              alt="Titanes FC Logo" 
              className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl relative z-10 animate-scale-in"
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-3 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-accent tracking-tight leading-tight">
              TITANES FC
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-accent/95 leading-tight">
              Formando Titanes dentro y fuera de la cancha
            </p>
            <p className="text-base md:text-lg text-accent/80 max-w-3xl mx-auto mt-4 font-medium leading-relaxed">
              Entrenamientos profesionales para categorías infantil, juvenil, libre y femenil en un ambiente seguro, disciplinado y motivador.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-4 py-2 text-sm font-semibold hover:bg-accent/30 transition-colors">
              <Users className="w-4 h-4 mr-2" />
              6 a 18 años
            </Badge>
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-4 py-2 text-sm font-semibold hover:bg-accent/30 transition-colors">
              <Award className="w-4 h-4 mr-2" />
              Entrenadores certificados
            </Badge>
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-4 py-2 text-sm font-semibold hover:bg-accent/30 transition-colors">
              <Calendar className="w-4 h-4 mr-2" />
              3 veces por semana
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary font-bold text-base md:text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              Inscríbete ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold text-base md:text-lg px-10 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              Quiero más información
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

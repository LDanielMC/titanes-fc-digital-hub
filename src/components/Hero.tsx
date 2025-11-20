import { Button } from "@/components/ui/button";
import titanesLogo from "@/assets/titanes-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-30 bg-accent rounded-full"></div>
            <img 
              src={titanesLogo} 
              alt="Titanes FC Logo" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl relative z-10 animate-scale-in"
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-accent tracking-tight">
              TITANES FC
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-accent/90">
              Formando Titanes dentro y fuera de la cancha
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
          >
            Inscripciones Abiertas
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-black text-accent">4+</p>
              <p className="text-sm md:text-base text-accent/80 font-medium">Categorías</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-black text-accent">6-18</p>
              <p className="text-sm md:text-base text-accent/80 font-medium">Años</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-black text-accent">$350</p>
              <p className="text-sm md:text-base text-accent/80 font-medium">Mensual</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-black text-accent">3x</p>
              <p className="text-sm md:text-base text-accent/80 font-medium">Por semana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

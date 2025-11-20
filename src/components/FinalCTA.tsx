import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-accent leading-tight">
            ¿Listo para convertirte en Titán?
          </h2>
          
          <p className="text-xl md:text-2xl text-accent/90 font-medium max-w-3xl mx-auto leading-relaxed">
            Inscribe a tu hijo hoy y dale la oportunidad de entrenar como un profesional.
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg md:text-xl px-12 py-7 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
            >
              Quiero entrenar en Titanes
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="text-accent/70 text-sm pt-4">
            ¡Las inscripciones están abiertas! Contacta ahora por WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

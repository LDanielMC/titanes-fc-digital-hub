import { Target } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const Mission = () => {
  // Datos proporcionados por el usuario
  const vision =
    "Convertirnos en un equipo reconocido por su formación integral, su estilo de juego moderno y su capacidad para desarrollar jugadores disciplinados, competitivos y técnicamente sobresalientes.";
  // ---

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Background decoration (Ligero y dinámico) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      </div>
      
      <ScrollAnimation delay="100ms">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4 shadow-xl">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-accent mb-6">
              Misión y Visión
            </h2>
            
            <div className="bg-accent/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-2 border-accent/30 shadow-2xl space-y-8">
              
              {/* Misión Original */}
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-accent mb-3 uppercase tracking-wider">
                  Nuestra Misión
                </h3>
                <p className="text-lg md:text-xl text-accent/90 leading-relaxed font-semibold">
                  Formar futbolistas con bases sólidas mediante entrenamientos estructurados,
                  promoviendo su desarrollo deportivo, físico y personal, en un espacio seguro,
                  competitivo y motivador.
                </p>
              </div>

              <hr className="my-6 border-accent/30" />

              {/* Visión Agregada (Instrucción: La visión lo pones junto con la Misión) */}
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-accent mb-3 uppercase tracking-wider">
                  Nuestra Visión
                </h3>
                <p className="text-lg md:text-xl text-accent/90 leading-relaxed font-semibold">
                  {vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Mission;
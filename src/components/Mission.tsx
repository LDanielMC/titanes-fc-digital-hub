import { Target } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-primary text-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
              <Target className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8">
            Nuestra Misión
          </h2>
          <p className="text-xl text-center leading-relaxed text-accent/90">
            Formar futbolistas con bases sólidas mediante entrenamientos estructurados, 
            promoviendo el desarrollo deportivo, físico y personal. Creamos un espacio 
            <span className="font-bold"> seguro, competitivo y motivador</span> para cada jugador.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;

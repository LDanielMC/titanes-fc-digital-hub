const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">
            ¿Quiénes Somos?
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Somos un club deportivo dedicado a la <span className="font-bold text-primary">formación integral de futbolistas</span> en categorías infantil, juvenil, libre y femenil.
            </p>
            <p>
              Nos enfocamos en desarrollar <span className="font-bold text-accent">habilidades técnicas, físicas y tácticas</span>, promoviendo valores como disciplina, respeto y trabajo en equipo.
            </p>
            <p>
              Nuestro objetivo principal es <span className="font-bold text-primary">formar jugadores completos</span>, mejorar su rendimiento y fomentar hábitos saludables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

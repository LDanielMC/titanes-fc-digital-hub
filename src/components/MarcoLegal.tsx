import titanLogo from "@/assets/titanes-logo.png";

const MarcoLegal = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Encabezado institucional */}
      <header className="border-b border-border bg-card/60 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-3">
            <img
              src={titanLogo}
              alt="Titanes Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Centro de Formación Deportiva
              </span>
              <span className="text-lg font-semibold text-navy">
                Titanes
              </span>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end text-xs text-muted-foreground">
            <span className="uppercase tracking-[0.18em]">
              Documento Institucional
            </span>
            <span>Marco Legal</span>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          {/* Título y descripción */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-navy mb-3">
              Marco Legal
            </h1>
            <div className="h-1 w-16 bg-gold rounded-full mb-4" />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              El presente marco legal establece los principales ordenamientos
              jurídicos que rigen la operación de nuestras actividades físicas
              y deportivas, así como las relaciones laborales vinculadas al
              proyecto. Su finalidad es garantizar que la formación deportiva
              se lleve a cabo con apego a la normatividad mexicana vigente.
            </p>
          </div>

          {/* Tarjeta principal */}
          <div className="rounded-3xl border border-border bg-card/80 shadow-sm">
            <div className="border-b border-border px-6 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h2 className="text-lg md:text-xl font-semibold text-foreground">
                Fundamento normativo
              </h2>
              <span className="inline-flex items-center rounded-full border border-gold/60 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-gold">
                Referencias legales
              </span>
            </div>

            <div className="px-6 md:px-8 py-6 md:py-8 space-y-6">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Las actividades de Titanes se desarrollan conforme a las
                siguientes disposiciones legales de carácter nacional:
              </p>

              <div className="space-y-5">
                {/* 1. Constitución */}
                <div className="border-l-4 border-navy/80 pl-4 md:pl-5">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    Constitución Política de los Estados Unidos Mexicanos
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Establece los derechos fundamentales de las personas,
                    incluyendo el acceso a la educación, la salud y el
                    desarrollo integral. Sirve como base para promover la
                    práctica de la actividad física y el deporte en un entorno
                    de respeto y protección a la dignidad humana.
                  </p>
                </div>

                {/* 2. Ley General de Cultura Física y Deporte */}
                <div className="border-l-4 border-primary pl-4 md:pl-5">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    Ley General de Cultura Física y Deporte
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Regula la organización, promoción y desarrollo de la
                    cultura física y el deporte en México. Define principios,
                    lineamientos y responsabilidades para instituciones,
                    entrenadores y participantes, asegurando que la actividad
                    deportiva contribuya a la salud y formación integral.
                  </p>
                </div>

                {/* 3. Reglamento LGCFD */}
                <div className="border-l-4 border-accent pl-4 md:pl-5">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    Reglamento de la Ley General de Cultura Física y Deporte
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Detalla los procedimientos y disposiciones específicas para
                    la aplicación de la Ley General de Cultura Física y
                    Deporte. Establece criterios operativos para la
                    planeación, seguridad, evaluación y supervisión de
                    actividades y programas deportivos.
                  </p>
                </div>

                {/* 4. Ley Federal del Trabajo */}
                <div className="border-l-4 border-gold pl-4 md:pl-5">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    Ley Federal del Trabajo
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Regula las relaciones laborales entre el personal
                    colaborador y la institución, garantizando derechos como
                    condiciones dignas de trabajo, seguridad social, jornadas
                    adecuadas y ambientes seguros, en apego a la normatividad
                    laboral vigente.
                  </p>
                </div>
              </div>

              {/* Nota final */}
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  La observancia de este marco legal guía la elaboración de
                  políticas internas, reglamentos y protocolos de actuación, con
                  el objetivo de brindar un entorno seguro, ordenado y
                  responsable para todas las personas que forman parte de
                  Titanes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MarcoLegal;

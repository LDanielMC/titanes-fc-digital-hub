import {
  Handshake,
  Users,
  Heart,
  ShieldCheck,
  Zap,
  Brain,
  Activity,
  Target,
  Check,
} from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const ValuesAndCommitments = () => {
  // === DATOS (puedes seguir cambiando textos aquí) ===
  const valores = [
    {
      label: "Honestidad",
      icon: Handshake,
      badge:
        "bg-emerald-500/10 border-emerald-400/60 text-emerald-400",
    },
    {
      label: "Trabajo en equipo",
      icon: Users,
      badge:
        "bg-sky-500/10 border-sky-400/60 text-sky-400",
    },
    {
      label: "Compromiso",
      icon: Heart,
      badge:
        "bg-rose-500/10 border-rose-400/60 text-rose-400",
    },
    {
      label: "Responsabilidad",
      icon: ShieldCheck,
      badge:
        "bg-amber-500/10 border-amber-400/60 text-amber-400",
    },
  ];

  const problemasResueltos = [
    {
      text: "El sedentarismo",
      icon: Zap,
      badge:
        "bg-yellow-500/10 border-yellow-400/60 text-yellow-400",
    },
    {
      text: "Obesidad o sobrepeso",
      icon: Activity,
      badge:
        "bg-orange-500/10 border-orange-400/60 text-orange-400",
    },
    {
      text: "Salud mental",
      icon: Brain,
      badge:
        "bg-indigo-500/10 border-indigo-400/60 text-indigo-400",
    },
    {
      text: "Disciplina",
      icon: Target,
      badge:
        "bg-teal-500/10 border-teal-400/60 text-teal-400",
    },
  ];

  const compromisos = [
    "Divertirse",
    "Confianza y autoestima",
    "Habilidades sociales",
    "Coordinación",
  ];

  return (
    <section className="py-20 bg-background text-foreground relative overflow-hidden">
      {/* Fondo suave decorativo */}
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.12),_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10 space-y-20">

        {/* === VALORES === */}
        <ScrollAnimation delay="300ms">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-accent">
              Nuestros Valores
            </h2>
            <p className="max-w-3xl mx-auto text-sm md:text-base text-foreground/70">
              La base de todo lo que hacemos. Estos valores guían cada
              entrenamiento y cada decisión dentro del proyecto.
            </p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              {valores.map((valor, index) => (
                <div
                  key={index}
                  className="group relative p-5 rounded-2xl bg-card/90 border border-border/60 shadow-sm
                             hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center rounded-full px-3 py-2 border text-xs font-semibold mb-4
                                ${valor.badge}`}
                  >
                    <valor.icon className="w-4 h-4 mr-2" />
                    <span>Valor clave</span>
                  </div>
                  <p className="font-bold text-lg tracking-tight">
                    {valor.label}
                  </p>
                  <div className="mt-2 h-1 w-10 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-gold opacity-70 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* === PROBLEMAS QUE RESOLVEMOS === */}
        <ScrollAnimation delay="500ms">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary">
              Problemas que resolvemos
            </h2>
            <p className="max-w-3xl mx-auto text-sm md:text-base text-foreground/70">
              No solo entrenamos; trabajamos directamente sobre los
              retos más comunes que afectan la salud y el bienestar.
            </p>

            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {problemasResueltos.map((p, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 rounded-2xl bg-card/95 border border-border/70
                             hover:border-primary/70 hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className={`mb-4 inline-flex items-center justify-center rounded-full p-3 border ${p.badge}`}
                  >
                    <p.icon className="w-7 h-7" />
                  </div>
                  <p className="text-base font-semibold text-foreground text-center">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* === COMPROMISOS === */}
        <ScrollAnimation delay="700ms">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-accent">
              Nuestros Compromisos
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-foreground/70">
              Lo que prometemos a cada niño, niña o adulto que
              entrena con nosotros, dentro y fuera de la cancha.
            </p>

            <div className="bg-secondary/10 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-secondary/40 shadow-xl">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left text-lg md:text-xl text-foreground list-none">
                {compromisos.map((c, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="inline-flex items-center justify-center rounded-full bg-gold/15 border border-gold/60 w-7 h-7 flex-shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </span>
                    <span className="font-medium">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ValuesAndCommitments;

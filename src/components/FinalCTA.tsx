import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "./ScrollAnimation";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="text-primary"
  >
    <path d="M16.003 2.003c-7.732 0-14 6.268-14 14 0 2.475.646 4.886 1.875 7.015L2 30l7.223-1.84A13.93 13.93 0 0 0 16.003 30c7.732 0 14-6.268 14-14s-6.268-14-14-14zm8.093 19.651c-.337.944-1.971 1.868-2.717 1.989-.696.111-1.587.158-2.568-.162-.591-.187-1.349-.44-2.323-.857-4.087-1.77-6.733-5.922-6.938-6.2-.204-.278-1.658-2.205-1.658-4.208 0-2.002 1.053-2.986 1.427-3.393.374-.407.817-.509 1.09-.509.273 0 .545.003.783.014.252.012.589-.095.923.705.337.816 1.143 2.815 1.243 3.017.099.202.165.437.033.715-.131.278-.198.437-.39.674-.192.237-.408.53-.581.712-.194.194-.397.406-.171.797.226.391 1.002 1.651 2.153 2.677 1.48 1.322 2.727 1.734 3.119 1.928.392.194.622.163.854-.098.232-.261.987-1.151 1.251-1.548.263-.397.526-.331.883-.198.357.132 2.251 1.061 2.637 1.254.389.194.646.289.742.452.095.164.095.95-.243 1.895z" />
  </svg>
);

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary via-primary/90 to-[#0b0f19] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <ScrollAnimation>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Título blanco */}
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
              ¡Da el siguiente paso y entra a Titanes FC!
            </h2>

            <p className="text-base md:text-lg text-accent/80">
              Entrena con metodología profesional, mejora tu rendimiento y forma parte
              de una comunidad que vive el fútbol al máximo.
            </p>

            {/* BOTÓN WHATSAPP */}
            <div className="flex justify-center pt-2">
              <a
                href="https://wa.me/7771208631?text=Hola%2C%20quiero%20información%20para%20unirme%20a%20Titanes%20FC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="pulse-animation px-10 py-6 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-300 flex items-center gap-3"
                >
                  <WhatsAppIcon />
                  Contactar por WhatsApp
                </Button>
              </a>
            </div>

            <p className="text-accent/70 text-xs md:text-sm pt-2">
              Resolvemos tus dudas sobre horarios, categorías, costos y más.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* 🔥 Animación Pulse */}
      <style>{`
        .pulse-animation {
          animation: pulse 1.8s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(245, 194, 66, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 15px 8px rgba(245, 194, 66, 0.25); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(245, 194, 66, 0.4); }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import titanesLogo from "@/assets/titanes-logo.png";

const Contact = () => {
  const whatsappNumber = "7771208631";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información sobre TITANES FC");

  return (
    <section className="py-20 bg-primary text-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src={titanesLogo} 
              alt="Titanes FC" 
              className="w-32 h-32 object-contain opacity-90"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ¡Únete a los Titanes!
            </h2>
            <p className="text-xl text-accent/80 mb-8">
              Contáctanos hoy mismo y comienza tu camino al éxito deportivo
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="w-6 h-6" />
              Contáctanos por WhatsApp
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex justify-center items-center gap-2 text-accent/90">
            <Phone className="w-5 h-5" />
            <a 
              href={`tel:${whatsappNumber}`}
              className="text-lg font-semibold hover:text-accent transition-colors"
            >
              777 120 8631
            </a>
          </div>

          {/* Social Media */}
          <div>
            <p className="text-lg font-semibold mb-6">Síguenos en redes sociales</p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61569941297858" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Facebook className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/titanes.fc01/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-accent/70 text-sm">Facebook: Titanes FC</p>
              <p className="text-accent/70 text-sm">Instagram: @titanes.fc01</p>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-accent/20">
            <p className="text-accent/60 text-sm">
              © 2025 Titanes FC. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

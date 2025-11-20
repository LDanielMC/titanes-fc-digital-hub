import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Redes sociales y contacto
          </h2>
          <p className="text-muted-foreground mb-12">
            Síguenos y contáctanos por tu medio favorito
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61569941297858" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group bg-card"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <Facebook className="w-10 h-10 text-accent" />
              </div>
              <div>
                <p className="font-bold text-lg text-primary mb-1">Facebook</p>
                <p className="text-sm text-muted-foreground">Titanes FC</p>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/titanes.fc01/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group bg-card"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <Instagram className="w-10 h-10 text-accent" />
              </div>
              <div>
                <p className="font-bold text-lg text-primary mb-1">Instagram</p>
                <p className="text-sm text-muted-foreground">@titanes.fc01</p>
              </div>
            </a>

            <a 
              href="https://wa.me/5217771208631" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-accent bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg text-primary mb-1">WhatsApp</p>
                <p className="text-base text-accent font-bold">777 120 8631</p>
                <p className="text-xs text-muted-foreground mt-1">Enviar mensaje</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

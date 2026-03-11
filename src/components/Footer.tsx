import { Link } from "react-router-dom";
import titanLogo from "@/assets/titanes-logo.png";


const Footer = () => {
  return (
<footer className="bg-[#0b0f19] text-muted-foreground border-t border-white/10 py-10">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

        {/* LOGO + NOMBRE */}
        <div className="flex items-center gap-4">
          <img src={titanLogo} alt="Titanes Logo" className="h-12 w-auto" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-navy">Titanes FC</h3>
            <p className="text-xs text-muted-foreground tracking-wide">
              Centro de Formación Deportiva
            </p>
          </div>
        </div>

        {/* ENLACES */}
        <div className="flex flex-col gap-2 text-sm">
          <Link
            to="/marco-legal"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Marco Legal
          </Link>

          <a
            href="https://wa.me/7771208631"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* DERECHOS RESERVADOS */}
        <div className="text-xs text-muted-foreground md:text-right">
          <p>© {new Date().getFullYear()} Titanes FC. Todos los derechos reservados.</p>
          <p className="mt-1">Desarrollado con pasión por el deporte.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

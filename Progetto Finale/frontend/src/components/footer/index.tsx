import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import GymSystemLogo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo e Descrizione */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={GymSystemLogo} alt="GymSystem Logo" className="w-3xs" />
            </div>
            <p className="text-base mb-6 max-w-md">
              Il nostro obiettivo è accompagnarti nel tuo percorso di benessere
              con competenza, passione e dedizione. Ogni dettaglio del nostro
              ambiente, dei programmi di allenamento e dei servizi offerti è
              studiato con cura per offrirti un'esperienza coinvolgente,
              completa e su misura.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Utili */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-primary-200 pb-2">
              Link Utili
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Servizi e corsi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contatti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Orari
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-primary-200 pb-2">
              Contattaci
            </h4>
            <p className="mb-6">
              Siamo a tua disposizione per qualsiasi informazione o supporto.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>(333) 123-45678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@gymsystem.it</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Via Roma 123, Milano</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} GymSystem - Tutti i diritti riservati.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Termini e Condizioni
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

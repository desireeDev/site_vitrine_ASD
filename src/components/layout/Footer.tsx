import { Link } from "react-router-dom";
import { Triangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-corporate-gray-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et informations sur l'entreprise */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Triangle className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ASD Solutions</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Nous proposons des technologies de pointe et des conseils
              stratégiques pour stimuler la croissance et améliorer
              l’efficacité de votre entreprise.
            </p>
            <div className="text-sm text-gray-400">
              © 2025 ASD Solutions. Tous droits réservés.Do with Love
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mentions légales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mentions légales</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Conditions d’utilisation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

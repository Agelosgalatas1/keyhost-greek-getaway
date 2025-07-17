import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/4fd096f0-e2d9-4c14-b82c-bdd90b12c71d.png" 
                alt="Key-Host Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Αρχική
            </Link>
            <Link 
              to="/properties" 
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Πελατολόγιο
            </Link>
            <a 
              href="#contact" 
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Επικοινωνία
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-primary hover:text-accent">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
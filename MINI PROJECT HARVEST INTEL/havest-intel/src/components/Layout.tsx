
import { useState } from "react";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  FileText, 
  Users, 
  HelpCircle, 
  BarChart,
  LogIn,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";

const services = [
  { title: "Crop Analysis", path: "/services#crop" },
  { title: "Soil Analysis", path: "/services#soil" },
  { title: "Weather Forecasting", path: "/services#weather" },
  { title: "Irrigation Management", path: "/services#irrigation" },
  { title: "Pest Control", path: "/services#pest" },
  { title: "Market Analysis", path: "/services#market" },
];

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-eco-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/2fc1e3d2-711f-4093-86f6-45fdbf03c17d.png" 
                  alt="Harvest Intel Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold eco-serif text-eco-800">Harvest Intel</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  isActive 
                    ? "text-eco-600 font-medium flex items-center space-x-1"
                    : "text-gray-600 hover:text-eco-500 flex items-center space-x-1"
                }
              >
                <Home size={18} />
                <span>Home</span>
              </NavLink>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1 -ml-4 h-16">
                    <FileText size={18} />
                    <span>Services</span>
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.title} asChild>
                      <Link to={service.path} className="w-full">
                        {service.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  isActive 
                    ? "text-eco-600 font-medium flex items-center space-x-1" 
                    : "text-gray-600 hover:text-eco-500 flex items-center space-x-1"
                }
              >
                <Users size={18} />
                <span>About</span>
              </NavLink>

              <NavLink 
                to="/help" 
                className={({isActive}) => 
                  isActive 
                    ? "text-eco-600 font-medium flex items-center space-x-1" 
                    : "text-gray-600 hover:text-eco-500 flex items-center space-x-1"
                }
              >
                <HelpCircle size={18} />
                <span>Help Center</span>
              </NavLink>

              <NavLink 
                to="/reports" 
                className={({isActive}) => 
                  isActive 
                    ? "text-eco-600 font-medium flex items-center space-x-1" 
                    : "text-gray-600 hover:text-eco-500 flex items-center space-x-1"
                }
              >
                <BarChart size={18} />
                <span>Reports</span>
              </NavLink>

              {isAuthenticated ? (
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className="flex items-center space-x-1"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </Button>
              ) : (
                <NavLink 
                  to="/login" 
                  className={({isActive}) => 
                    isActive 
                      ? "text-eco-600 font-medium flex items-center space-x-1" 
                      : "text-gray-600 hover:text-eco-500 flex items-center space-x-1"
                  }
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </NavLink>
              )}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-eco-500 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-eco-100 py-2 px-4">
            <div className="space-y-1">
              <Link 
                to="/" 
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-eco-50 hover:text-eco-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>

              <div className="relative">
                <div className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700">
                  <FileText size={18} />
                  <span>Services</span>
                </div>
                <div className="pl-8 space-y-1">
                  {services.map((service) => (
                    <Link 
                      key={service.title} 
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-eco-50 hover:text-eco-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/about" 
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-eco-50 hover:text-eco-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users size={18} />
                <span>About</span>
              </Link>

              <Link 
                to="/help"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-eco-50 hover:text-eco-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HelpCircle size={18} />
                <span>Help Center</span>
              </Link>

              <Link 
                to="/reports" 
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-eco-50 hover:text-eco-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BarChart size={18} />
                <span>Reports</span>
              </Link>
              
              {isAuthenticated ? (
                <button 
                  className="flex w-full items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-eco-50 hover:text-eco-600"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              ) : (
                <Link 
                  to="/login" 
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-eco-50 hover:text-eco-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-eco-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/2fc1e3d2-711f-4093-86f6-45fdbf03c17d.png" 
                alt="Harvest Intel Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold eco-serif text-eco-800">Harvest Intel</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">© 2025 Harvest Intel. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

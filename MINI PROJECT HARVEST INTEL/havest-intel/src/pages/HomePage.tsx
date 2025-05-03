
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  Leaf, 
  CloudRain, 
  Thermometer, 
  BarChart3, 
  Bug, 
  LineChart 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Crop Analysis",
    description: "Get detailed insights about your crops' health and growth patterns.",
    icon: Leaf,
    path: "/services#crop"
  },
  {
    title: "Soil Analysis",
    description: "Understand soil composition and nutrient levels for optimal farming.",
    icon: Thermometer,
    path: "/services#soil"
  },
  {
    title: "Weather Forecasting",
    description: "Access accurate weather predictions to plan your agricultural activities.",
    icon: CloudRain,
    path: "/services#weather"
  },
  {
    title: "Irrigation Management",
    description: "Optimize water usage with smart irrigation recommendations.",
    icon: BarChart3,
    path: "/services#irrigation"
  },
  {
    title: "Pest Control",
    description: "Identify and manage pests effectively with our guidance.",
    icon: Bug,
    path: "/services#pest"
  },
  {
    title: "Market Analysis",
    description: "Stay updated on market trends and prices for your agricultural products.",
    icon: LineChart,
    path: "/services#market"
  }
];

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Welcome Message */}
      <section className="flex justify-center items-center py-12">
        <h1 className="eco-serif text-4xl font-bold text-eco-800 text-center">
          Welcome to Harvest Intel
        </h1>
      </section>
      
      {/* Hero Section */}
      <section className="text-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-eco-50 to-white rounded-2xl border border-eco-100">
        <h2 className="eco-serif text-3xl font-bold text-eco-800 sm:text-4xl mb-6">
          Smart Agriculture Analytics
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
          Empowering farmers with data-driven insights for sustainable agriculture.
          Our technology helps you maximize yields while minimizing environmental impact.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-eco-500 hover:bg-eco-600">
            <Link to="/services">Explore Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/help">Get Help</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <div className="text-center mb-10">
          <h2 className="eco-serif text-3xl font-bold text-eco-800">Our Services</h2>
          <p className="text-gray-600 mt-2">Comprehensive agricultural solutions to optimize your farming</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-eco-100 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 bg-eco-100 rounded-full flex items-center justify-center text-eco-600 mb-3">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-eco-700">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link 
                  to={service.path} 
                  className="text-eco-600 hover:text-eco-700 inline-flex items-center space-x-1 text-sm font-medium"
                >
                  <span>Learn more</span>
                  <ChevronRight size={16} />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Reports Highlight */}
      <section className="bg-gradient-to-r from-eco-500 to-eco-600 text-white rounded-2xl overflow-hidden">
        <div className="md:flex items-center">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Make Data-Driven Decisions</h2>
            <p className="mb-6 text-eco-50">
              Get comprehensive reports based on real-time data analysis. Our platform generates 
              personalized insights to help you optimize your agricultural practices.
            </p>
            <Button asChild variant="secondary" className="text-eco-800">
              <Link to="/reports">View Reports</Link>
            </Button>
          </div>
          <div className="md:w-1/2 bg-eco-100/30 backdrop-blur-sm h-full p-8">
            <div className="aspect-video bg-white/90 rounded-lg shadow-lg p-4">
              <div className="h-4 w-1/3 bg-eco-100 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-2 bg-eco-100 rounded w-full"></div>
                <div className="h-2 bg-eco-100 rounded w-5/6"></div>
                <div className="h-2 bg-eco-100 rounded w-4/5"></div>
              </div>
              <div className="mt-6 h-32 bg-eco-100/50 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  Leaf, 
  CloudRain, 
  Thermometer, 
  BarChart3, 
  Bug, 
  LineChart 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CropAnalysis from "@/components/services/CropAnalysis";

const services = [
  {
    id: "crop",
    title: "Crop Analysis",
    description: "Our crop analysis service uses advanced imaging technology and machine learning algorithms to assess crop health, identify growth patterns, and detect early signs of diseases or nutrient deficiencies. We provide detailed reports with actionable recommendations for optimal crop management.",
    icon: Leaf,
    features: [
      "Plant health assessment",
      "Growth stage monitoring",
      "Disease identification",
      "Yield prediction",
      "Nutrient deficiency detection"
    ]
  },
  {
    id: "soil",
    title: "Soil Analysis",
    description: "Understanding your soil is fundamental to successful farming. Our soil analysis service evaluates soil composition, structure, pH levels, organic matter content, and nutrient availability. Get comprehensive insights and personalized recommendations for soil improvement and fertilization strategies.",
    icon: Thermometer,
    features: [
      "Soil composition testing",
      "pH level assessment",
      "Nutrient content analysis",
      "Organic matter evaluation",
      "Fertilizer recommendations"
    ]
  },
  {
    id: "weather",
    title: "Weather Forecasting",
    description: "Make informed decisions with our accurate agricultural weather forecasting service. We provide localized weather predictions, seasonal forecasts, and climate trend analysis specifically tailored for agricultural purposes. Plan your farming activities with confidence based on reliable weather data.",
    icon: CloudRain,
    features: [
      "7-day detailed forecasts",
      "Precipitation predictions",
      "Temperature trends",
      "Seasonal outlook",
      "Extreme weather alerts"
    ]
  },
  {
    id: "irrigation",
    title: "Irrigation Management",
    description: "Optimize water usage with our smart irrigation management service. Using soil moisture data, weather forecasts, and crop water requirements, we help you implement efficient irrigation schedules. Reduce water waste while ensuring your crops receive the right amount of water at the right time.",
    icon: BarChart3,
    features: [
      "Soil moisture monitoring",
      "Water requirement calculation",
      "Irrigation scheduling",
      "Water conservation strategies",
      "Drought management planning"
    ]
  },
  {
    id: "pest",
    title: "Pest Control",
    description: "Protect your crops with our integrated pest management solutions. We help identify pest threats, monitor infestations, and recommend targeted control measures. Our approach focuses on sustainable methods that minimize chemical usage while effectively managing pest populations.",
    icon: Bug,
    features: [
      "Pest identification",
      "Infestation risk assessment",
      "Biological control options",
      "Chemical treatment recommendations",
      "Prevention strategies"
    ]
  },
  {
    id: "market",
    title: "Market Analysis",
    description: "Stay ahead with our agricultural market analysis service. We provide up-to-date information on crop prices, market trends, demand forecasts, and supply chain insights. Make informed decisions about what to grow, when to harvest, and where to sell for maximum profitability.",
    icon: LineChart,
    features: [
      "Price trend analysis",
      "Demand forecasting",
      "Supply chain insights",
      "Market opportunity identification",
      "Commodity price alerts"
    ]
  }
];

const ServicesPage = () => {
  const location = useLocation();
  const refs = useRef<{[key: string]: HTMLDivElement | null}>({});
  const [selectedTab, setSelectedTab] = useState<string>("overview");
  
  useEffect(() => {
    // Scroll to the section specified in the hash, if any
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = refs.current[id];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // If it's the crop service, switch to the analyze tab
        if (id === 'crop') {
          setSelectedTab('analyze');
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="eco-serif text-4xl font-bold text-eco-800">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive agricultural solutions designed to optimize your farming operations
          and increase productivity sustainably.
        </p>
      </div>
      
      <div className="space-y-16">
        {services.map((service) => (
          <div 
            key={service.id} 
            id={service.id} 
            ref={el => refs.current[service.id] = el}
            className="scroll-mt-20"
          >
            <Card className="border-eco-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-eco-100 rounded-full flex items-center justify-center text-eco-600">
                    <service.icon size={28} />
                  </div>
                  <CardTitle className="text-2xl text-eco-700">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {service.id === 'crop' ? (
                  <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="analyze">Analyze Crops</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-6">
                      <p className="text-gray-700">{service.description}</p>
                      
                      <div>
                        <h3 className="font-semibold text-eco-700 mb-3">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                              <div className="h-2 w-2 bg-eco-500 rounded-full"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="analyze">
                      <CropAnalysis />
                    </TabsContent>
                  </Tabs>
                ) : (
                  <>
                    <p className="text-gray-700">{service.description}</p>
                    
                    <div>
                      <h3 className="font-semibold text-eco-700 mb-3">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-eco-500 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
            <Separator className="my-16 border-eco-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

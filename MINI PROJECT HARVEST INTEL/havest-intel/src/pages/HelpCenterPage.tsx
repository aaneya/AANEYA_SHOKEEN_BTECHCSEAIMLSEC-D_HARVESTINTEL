
import { useState } from "react";
import { Search, HelpCircle } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger, 
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const faqs = [
  {
    question: "How does the Crop Analysis service work?",
    answer: "Our Crop Analysis service uses a combination of satellite imagery, ground sensors, and AI-powered image recognition. You upload photos of your crops through our app, and our system analyzes them for signs of disease, nutrient deficiencies, or growth abnormalities. For more extensive analysis, our field technicians can visit your farm to collect soil and plant samples for laboratory testing."
  },
  {
    question: "How accurate is your Weather Forecasting?",
    answer: "Our Weather Forecasting service combines data from multiple meteorological sources, including national weather services and local weather stations. We achieve approximately 85-90% accuracy for 3-day forecasts and 70-75% accuracy for 7-day forecasts. We continuously improve our prediction models based on historical data comparison and machine learning algorithms."
  },
  {
    question: "Can I access the platform on mobile devices?",
    answer: "Yes, Eco-Agri-Hub is fully responsive and works on all devices. You can access our platform through any modern web browser on your smartphone, tablet, or desktop computer. We also offer dedicated mobile apps for iOS and Android that provide enhanced features like offline access to reports and camera integration for crop analysis."
  },
  {
    question: "How often is market data updated?",
    answer: "Our Market Analysis data is updated daily during weekdays and once on weekends. Price information is sourced from major agricultural exchanges, government databases, and our network of market reporters. Premium subscribers receive real-time updates and alerts for significant price movements."
  },
  {
    question: "Do you provide customized recommendations?",
    answer: "Yes, our platform generates customized recommendations based on your specific farm data, location, crop types, and goals. The more information you provide about your agricultural practices, the more tailored our recommendations will be. Premium users can also schedule personalized consultations with our agricultural experts."
  },
  {
    question: "How can I export reports to share with others?",
    answer: "All reports in our platform can be exported in multiple formats including PDF, Excel, and CSV. You can also share reports directly through the platform by entering email addresses of recipients. For enterprise users, we offer integration with popular farm management systems through our API."
  },
];

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const filteredFaqs = faqs.filter(
    (faq) => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the data to a backend
    console.log({ name, email, message });
    
    // Show success message
    toast({
      title: "Support request submitted",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };
  
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="eco-serif text-4xl font-bold text-eco-800">Help Center</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to commonly asked questions or reach out to our support team
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Search for answers..."
          className="pl-10 border-eco-200 focus:border-eco-500 focus:ring-eco-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="knowledge" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          <TabsTrigger value="support">Live Support</TabsTrigger>
        </TabsList>
        
        <TabsContent value="knowledge" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HelpCircle className="h-5 w-5 text-eco-500" />
                <span>Frequently Asked Questions</span>
              </CardTitle>
              <CardDescription>
                Browse our comprehensive knowledge base to find answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No results found for "{searchQuery}"</p>
                  <p className="text-sm mt-2">Try searching with different keywords or contact our support team</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="support" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>
                Fill out the form below to get in touch with our customer support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      placeholder="Describe your issue or question in detail"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-eco-500 hover:bg-eco-600">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpCenterPage;

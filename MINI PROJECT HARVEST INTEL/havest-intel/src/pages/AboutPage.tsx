
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Aaneya Shokeen",
    role: "Team Leader & Front-End Expert",
    description: "Leads project coordination and specializes in creating intuitive, user-friendly interfaces that enhance the user experience."
  },
  {
    name: "Rashi Bhardwaj",
    role: "Agriculture Expert",
    description: "Brings extensive knowledge of agricultural practices and translates complex farming concepts into practical digital solutions."
  },
  {
    name: "Hem Prakash",
    role: "Back-End Expert",
    description: "Develops robust server-side architecture and ensures seamless data processing and management for all platform services."
  },
  {
    name: "Suhani Sahu",
    role: "Research Analyst",
    description: "Conducts market research and analyzes agricultural data trends to guide product development and enhancement strategies."
  }
];

const technologies = [
  {
    name: "Machine Learning (ML)",
    description: "Used for image-based crop analysis and data predictions"
  },
  {
    name: "Artificial Intelligence (AI)",
    description: "Employed for decision support and analytics across agricultural services"
  }
];

const AboutPage = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="eco-serif text-4xl font-bold text-eco-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We are a dedicated team of experts committed to transforming agriculture through 
          technology and data-driven insights.
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-eco-50 to-white p-6 sm:p-8 rounded-xl border border-eco-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="eco-serif text-2xl font-bold text-eco-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At Harvest Intel, we are dedicated to revolutionizing agricultural practices through innovative technology solutions. 
            Our mission is to empower farmers with data-driven insights that enable sustainable farming while maximizing productivity and profitability.
          </p>
          
          <h2 className="eco-serif text-2xl font-bold text-eco-700 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We envision a future where agriculture harmoniously blends traditional wisdom with cutting-edge technology. 
            By bridging this gap, we aim to create a more sustainable and efficient farming ecosystem that benefits 
            both producers and consumers while preserving our natural resources for generations to come.
          </p>
        </div>
      </div>
      
      <div>
        <h2 className="eco-serif text-3xl font-bold text-eco-800 mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border-eco-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-eco-700">{member.name}</h3>
                <p className="text-eco-600 font-medium mt-1">
                  {member.role}
                </p>
                <p className="mt-4 text-gray-700">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* New Technologies Section */}
      <div>
        <h2 className="eco-serif text-3xl font-bold text-eco-800 mb-6 text-center">
          Technologies We Use
        </h2>
        <div className="bg-gradient-to-br from-eco-50 to-white p-6 sm:p-8 rounded-xl border border-eco-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              Harvest Intel is powered by advanced technologies including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech) => (
                <Card key={tech.name} className="border-eco-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-eco-700">{tech.name}</h3>
                    <p className="mt-4 text-gray-700">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

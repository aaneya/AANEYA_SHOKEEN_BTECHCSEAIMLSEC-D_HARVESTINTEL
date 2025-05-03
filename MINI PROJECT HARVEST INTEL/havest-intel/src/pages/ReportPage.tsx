
import { useState } from "react";
import { 
  Filter, 
  FileText,
  DownloadCloud,
  Calendar,
  LineChart,
  BarChart,
  PieChart,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample report data
const reports = [
  {
    id: "REP-001",
    title: "Crop Health Assessment - May 2025",
    category: "crop",
    date: "2025-05-01",
    status: "complete",
    summary: "Overall crop health is excellent with minimal pest presence detected. Nitrogen levels are optimal, and growth patterns align with expectations for this growth stage.",
    keyFindings: [
      "Wheat crops showing 95% health index",
      "No significant pest activity detected",
      "Optimal nitrogen and phosphorus levels",
      "Estimated yield: 4.8 tons per acre"
    ]
  },
  {
    id: "REP-002",
    title: "Soil Nutrient Analysis - April 2025",
    category: "soil",
    date: "2025-04-15",
    status: "complete",
    summary: "Soil analysis shows good overall fertility with adequate organic matter. Phosphorus levels are slightly below optimal range, suggesting supplemental application may be beneficial.",
    keyFindings: [
      "pH: 6.8 (optimal range)",
      "Organic matter: 3.2% (good)",
      "Phosphorus: 12 ppm (slightly low)",
      "Potassium: 180 ppm (optimal)"
    ]
  },
  {
    id: "REP-003",
    title: "Seasonal Weather Forecast - Summer 2025",
    category: "weather",
    date: "2025-04-20",
    status: "complete",
    summary: "Summer 2025 is predicted to be slightly warmer than average with near-normal precipitation. July is expected to have the highest rainfall, which may benefit late-season crops.",
    keyFindings: [
      "Average temperatures 2°C above normal",
      "Precipitation within 5% of historical average",
      "Potential for short dry spell in early August",
      "Low risk of severe weather events"
    ]
  },
  {
    id: "REP-004",
    title: "Irrigation Efficiency Analysis",
    category: "irrigation",
    date: "2025-03-25",
    status: "complete",
    summary: "Current irrigation practices are operating at 78% efficiency. Adjustments to irrigation scheduling and equipment maintenance could increase efficiency and reduce water usage.",
    keyFindings: [
      "Water usage 22% above optimal levels",
      "Eastern fields showing signs of overwatering",
      "Drip system in southern quadrant needs maintenance",
      "Potential water savings of 15-20% identified"
    ]
  },
  {
    id: "REP-005",
    title: "Pest Risk Assessment - Spring 2025",
    category: "pest",
    date: "2025-03-10",
    status: "complete",
    summary: "Low to moderate pest risk predicted for the coming growing season. Early monitoring and preventative measures are recommended, especially for aphids and corn borers.",
    keyFindings: [
      "Aphid population expected to increase in June",
      "Corn borer risk above 5-year average",
      "Beneficial insect population healthy",
      "Recommended integrated pest management plan attached"
    ]
  },
  {
    id: "REP-006",
    title: "Q2 Crop Price Forecast",
    category: "market",
    date: "2025-04-01",
    status: "complete",
    summary: "Wheat and soybean prices expected to remain stable with slight upward trend. Corn prices may experience volatility due to export market uncertainties.",
    keyFindings: [
      "Wheat: $7.20-7.60 per bushel (↑3%)",
      "Corn: $4.80-5.40 per bushel (↕8%)",
      "Soybeans: $12.80-13.20 per bushel (↑2%)",
      "Best selling window: Mid-June to early July"
    ]
  },
  {
    id: "REP-007",
    title: "Monthly Crop Analysis - April 2025",
    category: "crop",
    date: "2025-05-01",
    status: "pending",
    summary: "Analysis in progress. Report will include growth stage assessment, health indicators, and yield projections.",
    keyFindings: [
      "Report generation in progress",
      "Expected completion: May 5, 2025"
    ]
  }
];

const ReportPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [expandedReport, setExpandedReport] = useState<string | null>(null);
  
  const filteredReports = reports.filter(report => {
    if (selectedCategory !== "all" && report.category !== selectedCategory) return false;
    if (selectedStatus !== "all" && report.status !== selectedStatus) return false;
    return true;
  });
  
  const toggleExpand = (id: string) => {
    setExpandedReport(expandedReport === id ? null : id);
  };
  
  const downloadReport = (id: string) => {
    // In a real app, this would download the report
    console.log(`Downloading report ${id}`);
    // Show feedback to user
    alert(`Report ${id} download started`);
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="eco-serif text-3xl font-bold text-eco-800">Reports</h1>
          <p className="text-gray-600 mt-1">
            View and analyze your agricultural reports
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                <span>Service Type</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="crop">Crop Analysis</SelectItem>
              <SelectItem value="soil">Soil Analysis</SelectItem>
              <SelectItem value="weather">Weather Forecast</SelectItem>
              <SelectItem value="irrigation">Irrigation</SelectItem>
              <SelectItem value="pest">Pest Control</SelectItem>
              <SelectItem value="market">Market Analysis</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Status</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="complete">Complete</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="list">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="table">Table View</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="list" className="space-y-4">
          {filteredReports.length > 0 ? (
            filteredReports.map((report) => (
              <Card key={report.id} className="border-eco-100">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`h-3 w-3 rounded-full ${
                        report.status === "complete" ? "bg-green-500" : "bg-amber-500"
                      }`}></div>
                      <CardTitle className="text-xl">{report.title}</CardTitle>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleExpand(report.id)}
                      >
                        {expandedReport === report.id ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                        <span className="sr-only">Toggle</span>
                      </Button>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <span className="sr-only">Actions</span>
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => downloadReport(report.id)}>
                            <DownloadCloud className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <LineChart className="mr-2 h-4 w-4" />
                            View Charts
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <CardDescription>
                    <div className="flex items-center space-x-4 text-sm">
                      <span>{new Date(report.date).toLocaleDateString()}</span>
                      <span className="capitalize">Type: {report.category}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                
                {expandedReport === report.id && (
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-eco-700">Summary</h4>
                        <p className="text-gray-700 mt-1">{report.summary}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-eco-700">Key Findings</h4>
                        <ul className="mt-1 list-disc pl-5 text-gray-700">
                          {report.keyFindings.map((finding, index) => (
                            <li key={index}>{finding}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadReport(report.id)}
                          className="text-eco-600 border-eco-200"
                        >
                          <DownloadCloud className="mr-2 h-4 w-4" />
                          Download Full Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))
          ) : (
            <div className="text-center py-12 border border-dashed border-gray-300 rounded-lg">
              <FileText className="h-12 w-12 text-gray-400 mx-auto" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No reports found</h3>
              <p className="mt-1 text-gray-500">
                No reports match your current filter criteria.
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="table">
          {filteredReports.length > 0 ? (
            <div className="border border-eco-100 rounded-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-eco-50">
                    <TableHead>Report ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.id}</TableCell>
                      <TableCell>{report.title}</TableCell>
                      <TableCell className="capitalize">{report.category}</TableCell>
                      <TableCell>{new Date(report.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          report.status === "complete" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-amber-100 text-amber-800"
                        }`}>
                          {report.status === "complete" ? "Complete" : "Pending"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => downloadReport(report.id)}
                          className="h-8 w-8 p-0"
                        >
                          <span className="sr-only">Download</span>
                          <DownloadCloud className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-gray-300 rounded-lg">
              <FileText className="h-12 w-12 text-gray-400 mx-auto" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No reports found</h3>
              <p className="mt-1 text-gray-500">
                No reports match your current filter criteria.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportPage;

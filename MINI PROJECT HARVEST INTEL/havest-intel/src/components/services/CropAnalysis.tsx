
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Upload, Check } from "lucide-react";

const CropAnalysis = () => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [progressValue, setProgressValue] = useState<number>(0);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setAnalysisResults(null); // Reset results when new image is uploaded
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxSize: 5242880, // 5MB
  });

  const simulateAnalysis = () => {
    setAnalyzing(true);
    setProgressValue(0);
    
    // Simulate progress
    const interval = setInterval(() => {
      setProgressValue((prev) => {
        const newValue = prev + 10;
        if (newValue >= 100) {
          clearInterval(interval);
          
          // Simulate API response after completion
          setTimeout(() => {
            const mockResults = {
              cropHealth: "Good",
              diseaseDetection: "No diseases detected",
              growthStage: "Mature",
              recommendations: [
                "Consider harvesting within the next 5-7 days",
                "Soil moisture is optimal",
                "Apply nitrogen-rich fertilizer for better yield"
              ],
              confidence: 92
            };
            setAnalysisResults(mockResults);
            setAnalyzing(false);
            
            toast({
              title: "Analysis Complete",
              description: "Your crop has been analyzed successfully",
            });
          }, 500);
        }
        return newValue;
      });
    }, 300);
  };

  const resetUpload = () => {
    setImage(null);
    setFileName("");
    setAnalysisResults(null);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-eco-100">
          <CardHeader>
            <CardTitle className="text-eco-700">Upload Crop Image</CardTitle>
          </CardHeader>
          <CardContent>
            {!image ? (
              <div 
                {...getRootProps()} 
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive ? 'border-eco-500 bg-eco-50' : 'border-eco-200 hover:border-eco-300'
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-eco-400" />
                <p className="mt-4 text-eco-600">
                  {isDragActive
                    ? "Drop the image here..."
                    : "Drag and drop your crop image here, or click to select file"}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Supports: JPG, JPEG, PNG (Max: 5MB)
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-eco-100">
                  <img 
                    src={image} 
                    alt="Crop preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate max-w-[200px]">{fileName}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={resetUpload}
                  >
                    Change
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-eco-500 hover:bg-eco-600"
              disabled={!image || analyzing}
              onClick={simulateAnalysis}
            >
              {analyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Crop Image'
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-eco-100">
          <CardHeader>
            <CardTitle className="text-eco-700">Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            {analyzing ? (
              <div className="space-y-4 py-8">
                <Progress value={progressValue} className="h-2" />
                <p className="text-center text-eco-600">
                  Processing image... {progressValue}%
                </p>
              </div>
            ) : analysisResults ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-eco-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Crop Health</p>
                    <p className="text-lg font-medium text-eco-700">{analysisResults.cropHealth}</p>
                  </div>
                  <div className="bg-eco-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Disease Detection</p>
                    <p className="text-lg font-medium text-eco-700">{analysisResults.diseaseDetection}</p>
                  </div>
                  <div className="bg-eco-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Growth Stage</p>
                    <p className="text-lg font-medium text-eco-700">{analysisResults.growthStage}</p>
                  </div>
                  <div className="bg-eco-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Confidence Score</p>
                    <p className="text-lg font-medium text-eco-700">{analysisResults.confidence}%</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-md font-medium text-eco-700 mb-2">Recommendations</h4>
                  <ul className="space-y-2">
                    {analysisResults.recommendations.map((rec: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <Check size={16} className="mr-2 text-eco-500 mt-1 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>Upload and analyze an image to see results</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CropAnalysis;

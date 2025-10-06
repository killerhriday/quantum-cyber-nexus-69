import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, FileText, Award } from "lucide-react";

const ResearchSection = () => {
  return (
    <section id="research" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight">
              Research Publications
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Advancing the frontiers cybersecurity through rigorous academic research and innovation.
          </p>
        </div>

        {/* Research Paper Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              
              {/* Paper Preview */}
              <div className="lg:col-span-1 bg-muted/50 p-4 sm:p-6 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer group w-full max-w-[280px]">
                      <div className="bg-white dark:bg-gray-50 rounded-lg shadow-lg p-4 sm:p-6 transform group-hover:scale-105 transition-transform duration-200">
                        <div className="aspect-[3/4] bg-white dark:bg-gray-50 rounded border-2 border-gray-200 p-3 sm:p-4 text-black">
                          {/* Paper Title Area */}
                          <div className="text-center mb-3 sm:mb-4">
                            <div className="text-xs font-bold uppercase tracking-wide mb-1 sm:mb-2">
                              Research Paper
                            </div>
                            <h3 className="text-xs sm:text-sm font-bold leading-tight mb-1 sm:mb-2 break-words">
                              CrypTech: A Quantum-Resistant Cryptographic Framework for Software Research
                            </h3>
                            <div className="text-xs text-gray-600 mb-2 sm:mb-4">
                              Hriday H. Patel<br/>
                              2025
                            </div>
                          </div>
                          
                          {/* Abstract Preview */}
                          <div className="text-xs leading-relaxed">
                            <div className="font-semibold mb-1">Abstract</div>
                            <div className="text-gray-700 space-y-1">
                              <div className="h-1 bg-gray-300 rounded w-full"></div>
                              <div className="h-1 bg-gray-300 rounded w-5/6"></div>
                              <div className="h-1 bg-gray-300 rounded w-full"></div>
                              <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                              <div className="h-1 bg-gray-300 rounded w-full"></div>
                              <div className="h-1 bg-gray-300 rounded w-4/5"></div>
                            </div>
                            
                            <div className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
                              <div className="font-semibold text-xs">1. Introduction</div>
                              <div className="space-y-1">
                                <div className="h-1 bg-gray-300 rounded w-full"></div>
                                <div className="h-1 bg-gray-300 rounded w-4/5"></div>
                                <div className="h-1 bg-gray-300 rounded w-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-3 text-center">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            Click to Open
                          </span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-[95vw] sm:max-w-6xl max-h-[90vh] overflow-hidden">
                    <div className="w-full h-[70vh] sm:h-[80vh]">
                      <iframe
                        src="/cryptech.pdf"
                        className="w-full h-full border rounded-lg"
                        title="CrypTech Research Paper"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-2 sm:gap-0">
                      <span className="text-xs sm:text-sm text-muted-foreground break-words">
                        CrypTech: A Quantum-Resistant Cryptographic Framework for Software Research
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open('/cryptech.pdf', '_blank')}
                        className="w-full sm:w-auto"
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Open Full Paper
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Paper Details */}
              <div className="lg:col-span-2">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary w-fit">
                          Research Paper
                        </span>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/20 dark:text-green-400 w-fit">
                          Published
                        </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl md:text-2xl leading-tight break-words">
                        CrypTech: A Quantum-Resistant Cryptographic Framework for Software Research
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base">
                        By Hriday H. Patel • 2024
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                     This research presents CrypTech, cybersecurity platform developed by me.
                     this protects large number of devcies from virus and hacker all run by AI made by me
                     The framework is designed to address the emerging security challenges posed by advances in quantum computing.
                         My work integrates rigorous mathematical foundations with practical implementation strategies.
                    CrypTech provides robust, real-world solutions for modern cybersecurity applications.
                    </p>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm sm:text-base">Key Contributions</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 ml-3 sm:ml-4">
                          <li>• Quantum-resistant encryption algorithms</li>
                          <li>• Practical implementation framework for enterprise security</li>
                          <li>• Performance analysis against classical cryptographic methods</li>
                          <li>• Future-proof security architecture design</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-sm sm:text-base">Research Impact</h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                            Quantum Computing
                          </span>
                          <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/20 dark:text-purple-400">
                            Cryptography
                          </span>
                          <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/20 dark:text-orange-400">
                            Cybersecurity
                          </span>
                          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/20 dark:text-green-400">
                            Algorithm Design
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="default" className="w-full sm:w-auto">
                            <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            View Paper
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] sm:max-w-6xl max-h-[90vh] overflow-hidden">
                          <div className="w-full h-[70vh] sm:h-[80vh]">
                            <iframe
                              src="/cryptech.pdf"
                              className="w-full h-full border rounded-lg"
                              title="CrypTech Research Paper"
                            />
                          </div>
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-2 sm:gap-0">
                            <span className="text-xs sm:text-sm text-muted-foreground break-words">
                              CrypTech: A Quantum-Resistant Cryptographic Framework for Software devlopment
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open('/cryptech.pdf', '_blank')}
                              className="w-full sm:w-auto"
                            >
                              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                              Open Full Paper
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button
                        variant="outline"
                        onClick={() => window.open('/cryptech.pdf', '_blank')}
                        className="w-full sm:w-auto"
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

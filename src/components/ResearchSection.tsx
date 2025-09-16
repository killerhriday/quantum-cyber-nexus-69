import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, FileText, Award } from "lucide-react";

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Research Publications
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advancing the frontiers of quantum computing and cybersecurity through rigorous academic research and innovation.
          </p>
        </div>

        {/* Research Paper Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              
              {/* Paper Preview */}
              <div className="lg:col-span-1 bg-muted/50 p-6 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer group">
                      <div className="bg-white rounded-lg shadow-md p-4 transform group-hover:scale-105 transition-transform duration-200">
                        <div className="aspect-[3/4] bg-gradient-to-b from-background to-muted/30 rounded border flex flex-col items-center justify-center">
                          <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                          <div className="text-xs text-center text-muted-foreground font-mono">
                            CRYPTECH:<br/>
                            A Novel Quantum-Resistant<br/>
                            Cryptographic Framework
                          </div>
                        </div>
                        <div className="mt-3 text-center">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            Click to Preview
                          </span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
                    <div className="w-full h-[80vh]">
                      <iframe
                        src="/cryptech.pdf"
                        className="w-full h-full border rounded-lg"
                        title="CrypTech Research Paper"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-muted-foreground">
                        CrypTech: A Novel Quantum-Resistant Cryptographic Framework
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open('/cryptech.pdf', '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open Full Paper
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Paper Details */}
              <div className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          Research Paper
                        </span>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/20 dark:text-green-400">
                          Published
                        </span>
                      </div>
                      <CardTitle className="text-xl md:text-2xl leading-tight">
                        CrypTech: A Novel Quantum-Resistant Cryptographic Framework
                      </CardTitle>
                      <CardDescription className="text-base">
                        By Hriday H. Patel • 2024
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      This research introduces CrypTech, an innovative quantum-resistant cryptographic framework 
                      designed to address the emerging security challenges posed by quantum computing advances. 
                      The framework integrates novel mathematical foundations with practical implementation strategies 
                      for next-generation cybersecurity applications.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Contributions</h4>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li>• Novel quantum-resistant encryption algorithms</li>
                          <li>• Practical implementation framework for enterprise security</li>
                          <li>• Performance analysis against classical cryptographic methods</li>
                          <li>• Future-proof security architecture design</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Research Impact</h4>
                        <div className="flex flex-wrap gap-2">
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

                    <div className="flex gap-3 pt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="default">
                            <FileText className="h-4 w-4 mr-2" />
                            View Paper
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
                          <div className="w-full h-[80vh]">
                            <iframe
                              src="/cryptech.pdf"
                              className="w-full h-full border rounded-lg"
                              title="CrypTech Research Paper"
                            />
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-muted-foreground">
                              CrypTech: A Novel Quantum-Resistant Cryptographic Framework
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open('/cryptech.pdf', '_blank')}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Open Full Paper
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button
                        variant="outline"
                        onClick={() => window.open('/cryptech.pdf', '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
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
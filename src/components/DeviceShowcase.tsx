import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DeviceShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // MacBook animations
  const macbookRotate = useTransform(scrollYProgress, [0, 0.3], [-90, 0]);
  const macbookOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const screenBrightness = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const terminalOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  
  // Code animations - different stages
  const code1Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const code2Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const code3Opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  // Right devices animations
  const device1Y = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);
  const device2Y = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);
  const device3Y = useTransform(scrollYProgress, [0.6, 0.8], [100, 0]);

  const codeStages = [
    {
      title: "Network Scanning",
      lines: [
        "$ nmap -sS -O 192.168.1.0/24",
        "Starting Nmap scan...",
        "Host is up (0.0023s latency)",
        "PORT     STATE SERVICE",
        "22/tcp   open  ssh",
        "80/tcp   open  http",
        "443/tcp  open  https"
      ]
    },
    {
      title: "Penetration Testing",
      lines: [
        "$ python3 exploit.py --target https://target.com",
        "Initializing CRYPTECH framework...",
        "Testing SQL injection vectors...",
        "Testing XSS vulnerabilities...",
        "[+] Found potential vulnerability",
        "[+] Payload executed successfully",
        "Creating detailed report..."
      ]
    },
    {
      title: "AI-Powered Defense",
      lines: [
        "$ cryptech --mode defense --ai-enabled",
        "Loading AI threat detection model...",
        "Analyzing network traffic patterns...",
        "Anomaly detected: Suspicious outbound connection",
        "Threat Level: HIGH | Confidence: 94%",
        "[AI] Deploying countermeasures...",
        "[AI] Threat neutralized successfully"
      ]
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[300vh] bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="max-w-7xl w-full mx-auto flex gap-4">
          
          {/* Left Side - MacBook Pro (80%) */}
          <motion.div 
            className="w-[80%] flex items-center justify-center"
            style={{ opacity: macbookOpacity }}
          >
            <div className="relative w-full max-w-4xl">
              {/* MacBook */}
              <motion.div
                className="relative"
                style={{ 
                  rotateX: macbookRotate,
                  transformPerspective: 1200
                }}
              >
                {/* Screen */}
                <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-t-2xl border-4 border-zinc-700 shadow-2xl overflow-hidden">
                  <div className="aspect-[16/10] p-4 sm:p-6 md:p-8">
                    {/* Boot Screen */}
                    <motion.div
                      className="absolute inset-0 bg-black flex items-center justify-center"
                      style={{ opacity: screenBrightness }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 mx-auto">
                          <svg viewBox="0 0 24 24" fill="white">
                            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                          </svg>
                        </div>
                        <div className="h-1 w-32 sm:w-48 bg-zinc-700 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-white"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Terminal */}
                    <motion.div
                      className="absolute inset-0 bg-black p-4 sm:p-6 md:p-8 font-mono text-green-400"
                      style={{ opacity: terminalOpacity }}
                    >
                      {/* Terminal Header */}
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-700">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-xs sm:text-sm text-zinc-400">Terminal — cybersecurity@cryptech</span>
                      </div>

                      {/* Code Stages */}
                      <div className="text-xs sm:text-sm space-y-6 overflow-auto max-h-[calc(100%-3rem)]">
                        {codeStages.map((stage, idx) => (
                          <motion.div
                            key={idx}
                            style={{ 
                              opacity: idx === 0 ? code1Opacity : idx === 1 ? code2Opacity : code3Opacity 
                            }}
                          >
                            <div className="text-cyan-400 font-bold mb-2">
                              # {stage.title}
                            </div>
                            {stage.lines.map((line, lineIdx) => (
                              <motion.div
                                key={lineIdx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: lineIdx * 0.1 }}
                                className="mb-1"
                              >
                                {line}
                              </motion.div>
                            ))}
                            <div className="mt-2 mb-4 h-px bg-zinc-800" />
                          </motion.div>
                        ))}
                        <div className="flex items-center gap-2 animate-pulse">
                          <span>$</span>
                          <span className="w-2 h-4 bg-green-400" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-7 bg-zinc-900 rounded-b-2xl" />
                </div>

                {/* Keyboard Base */}
                <div className="h-3 sm:h-4 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-b-2xl shadow-xl" />
              </motion.div>

              {/* MacBook Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/30 blur-xl rounded-full" />
            </div>
          </motion.div>

          {/* Right Side - Device Stack (20%) */}
          <div className="w-[20%] flex flex-col justify-center gap-6 sm:gap-8">
            
            {/* Device 1 - iPhone */}
            <motion.div
              style={{ y: device1Y }}
              className="relative"
            >
              <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-3xl border-4 border-zinc-700 shadow-xl p-2">
                <div className="aspect-[9/19.5] bg-black rounded-2xl overflow-hidden">
                  <div className="h-full flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div className="text-[8px] text-green-400 font-mono">
                        <div>HP19 Mobile</div>
                        <div className="text-zinc-500 mt-1">Secure Access</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-zinc-900 rounded-b-2xl" />
              </div>
            </motion.div>

            {/* Device 2 - iPad */}
            <motion.div
              style={{ y: device2Y }}
              className="relative"
            >
              <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl border-4 border-zinc-700 shadow-xl p-2">
                <div className="aspect-[4/3] bg-black rounded-xl overflow-hidden">
                  <div className="h-full flex items-center justify-center p-3">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-[7px] text-cyan-400 font-mono">
                        <div>Patel AI</div>
                        <div className="text-zinc-500 mt-1">Dashboard</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Device 3 - Smart Watch */}
            <motion.div
              style={{ y: device3Y }}
              className="relative"
            >
              <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl border-4 border-zinc-700 shadow-xl p-2">
                <div className="aspect-square bg-black rounded-xl overflow-hidden">
                  <div className="h-full flex items-center justify-center p-2">
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-[6px] text-green-400 font-mono">
                        <div>CRYPTECH</div>
                        <div className="text-zinc-500">Monitor</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;

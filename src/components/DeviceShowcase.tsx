import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Terminal, Smartphone, Tablet, Watch } from "lucide-react";

const DeviceShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // MacBook animations
  const macbookLidRotation = useTransform(scrollYProgress, [0, 0.2], [-90, 0]);
  const terminalOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const codeStage = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 2]);

  // Right devices animations
  const phone1Y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const phone1Rotate = useTransform(scrollYProgress, [0.3, 0.6], [0, 360]);
  
  const tablet1Scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const tablet1Y = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);
  
  const watch1Y = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const watch1Pulse = useTransform(scrollYProgress, [0.5, 1], [1, 1.1]);

  const getCodeContent = (stage: number) => {
    if (stage < 0.5) {
      return `$ nmap -sV 192.168.1.0/24
Starting Nmap scan...
Scanning for vulnerabilities...
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql`;
    } else if (stage < 1.5) {
      return `$ python pentest.py --target web
Initializing penetration test...
Testing SQL injection vectors...
Testing XSS vulnerabilities...
[!] Found 3 critical vulnerabilities
[*] Generating security report...
Status: ANALYZING THREATS`;
    } else {
      return `$ ./ai-defense --mode active
AI Defense System Online
Real-time threat detection: ACTIVE
Neural network analyzing patterns...
Blocked 247 intrusion attempts
System integrity: 100%
[✓] All systems secured`;
    }
  };

  return (
    <section ref={containerRef} className="min-h-[200vh] py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Security in <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our cybersecurity solutions come to life across all devices
          </p>
        </motion.div>

        <div className="flex gap-8 sticky top-32">
          {/* Left side - MacBook Pro */}
          <motion.div 
            className="w-[75%] flex items-center justify-center"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
          >
            <div className="relative w-full max-w-4xl">
              {/* MacBook Base */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-2xl">
                {/* Screen */}
                <div className="bg-black rounded-lg overflow-hidden aspect-[16/10] relative border-4 border-gray-700">
                  {/* Boot screen */}
                  <motion.div
                    style={{ opacity: terminalOpacity }}
                    className="absolute inset-0 bg-black flex flex-col items-center justify-center p-8"
                  >
                    <Shield className="w-16 h-16 text-primary mb-4 animate-pulse" />
                    <div className="text-green-400 font-mono text-sm text-left w-full max-w-2xl">
                      <motion.pre className="whitespace-pre-wrap">
                        {getCodeContent(Math.round(codeStage.get() * 10) / 10)}
                      </motion.pre>
                    </div>
                  </motion.div>
                  
                  {/* Reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                </div>

                {/* Keyboard */}
                <div className="mt-2 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg" />
              </div>

              {/* MacBook Lid */}
              <motion.div
                style={{ 
                  rotateX: macbookLidRotation,
                  transformOrigin: "bottom"
                }}
                className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl shadow-2xl"
              >
                <div className="absolute inset-4 bg-black rounded-lg flex items-center justify-center">
                  <Lock className="w-12 h-12 text-gray-600" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - 3 Devices */}
          <div className="w-[25%] flex flex-col gap-8 justify-center">
            {/* Device 1 - Smartphone with rotating animation */}
            <motion.div
              style={{ y: phone1Y, rotate: phone1Rotate }}
              className="bg-gradient-to-br from-primary/20 to-quantum/20 backdrop-blur-sm rounded-3xl p-6 border border-primary/20"
            >
              <Smartphone className="w-12 h-12 text-primary mb-3 mx-auto" />
              <div className="text-center">
                <p className="text-sm font-semibold mb-2">Mobile Security</p>
                <div className="space-y-1">
                  <div className="h-2 bg-primary/30 rounded-full animate-pulse" />
                  <div className="h-2 bg-primary/20 rounded-full w-3/4 mx-auto" />
                  <div className="h-2 bg-primary/10 rounded-full w-1/2 mx-auto" />
                </div>
              </div>
            </motion.div>

            {/* Device 2 - Tablet with scale animation */}
            <motion.div
              style={{ y: tablet1Y, scale: tablet1Scale }}
              className="bg-gradient-to-br from-cyber/20 to-primary/20 backdrop-blur-sm rounded-3xl p-6 border border-cyber/20"
            >
              <Tablet className="w-12 h-12 text-cyber mb-3 mx-auto" />
              <div className="text-center">
                <p className="text-sm font-semibold mb-2">Dashboard</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-8 bg-cyber/30 rounded animate-pulse" />
                  <div className="h-8 bg-cyber/20 rounded" />
                  <div className="h-8 bg-cyber/20 rounded" />
                  <div className="h-8 bg-cyber/30 rounded animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Device 3 - Smart Watch with pulse animation */}
            <motion.div
              style={{ y: watch1Y, scale: watch1Pulse }}
              className="bg-gradient-to-br from-quantum/20 to-cyber/20 backdrop-blur-sm rounded-3xl p-6 border border-quantum/20"
            >
              <Watch className="w-12 h-12 text-quantum mb-3 mx-auto" />
              <div className="text-center">
                <p className="text-sm font-semibold mb-2">Real-time Alerts</p>
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-full border-4 border-quantum/30 flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-quantum animate-pulse" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-2 border-quantum"
                  />
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
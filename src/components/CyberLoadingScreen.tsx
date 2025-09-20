import { useState, useEffect } from 'react';
import './cyber-loading.css';

interface CyberLoadingScreenProps {
  onComplete: () => void;
}

const CyberLoadingScreen = ({ onComplete }: CyberLoadingScreenProps) => {
  const [stage, setStage] = useState<'firewall' | 'macbook' | 'attack' | 'breach' | 'complete'>('firewall');
  const [showMacbook, setShowMacbook] = useState(false);
  const [showAttack, setShowAttack] = useState(false);
  const [showBreach, setShowBreach] = useState(false);

  useEffect(() => {
    const timeline = [
      { delay: 1000, action: () => setShowMacbook(true) },
      { delay: 3000, action: () => setStage('macbook') },
      { delay: 5000, action: () => { setStage('attack'); setShowAttack(true); } },
      { delay: 7000, action: () => { setStage('breach'); setShowBreach(true); } },
      { delay: 9000, action: () => { setStage('complete'); onComplete(); } }
    ];

    const timeouts = timeline.map(({ delay, action }) => 
      setTimeout(action, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Firewall Defender - Flying Orb with Binary Particles */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
        <div className={`firewall-core ${stage === 'breach' ? 'breach' : ''}`}>
          <div className="firewall-orb"></div>
          {/* Binary particles orbiting the firewall */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`binary-particle ${stage === 'attack' ? 'defending' : ''}`}
              style={{
                '--angle': `${(i * 7.2)}deg`,
                '--distance': `${80 + (i % 3) * 20}px`,
                '--speed': `${2 + (i % 3)}s`,
                animationDelay: `${i * 0.1}s`
              } as React.CSSProperties}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      {/* MacBook Hacker */}
      <div className={`macbook-container ${showMacbook ? 'show' : ''}`}>
        <div className="macbook">
          <div className="macbook-screen">
            <div className="macbook-bezel">
              <div className="terminal-content">
                <div className="terminal-line">$ sudo kali-linux</div>
                <div className="terminal-line typing">root@kali:~# nmap -sS -O target</div>
                <div className="terminal-line">Starting Nmap scan...</div>
                <div className="terminal-line">Vulnerability detected</div>
                <div className="terminal-line blinking">Launching payload...</div>
              </div>
            </div>
          </div>
          <div className="macbook-base"></div>
        </div>
      </div>

      {/* Attack Payloads */}
      {showAttack && (
        <div className="attack-payloads">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="payload"
              style={{
                '--delay': `${i * 0.2}s`,
                '--target-x': '25vw',
                '--target-y': '50vh'
              } as React.CSSProperties}
            >
              {['0x1337', '0xFF00', '0xDEAD', 'NULL', 'DROP', 'EXEC'][i % 6]}
            </div>
          ))}
        </div>
      )}

      {/* Breach Effect */}
      {showBreach && (
        <div className="breach-effect">
          <div className="shockwave"></div>
          <div className="data-fragments">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="data-fragment"
                style={{
                  '--angle': `${i * 3.6}deg`,
                  '--distance': `${200 + Math.random() * 300}px`,
                  '--delay': `${i * 0.01}s`
                } as React.CSSProperties}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Loading Status */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <div className="status-text">
          {stage === 'firewall' && 'INITIALIZING FIREWALL DEFENSE SYSTEM...'}
          {stage === 'macbook' && 'UNAUTHORIZED ACCESS DETECTED...'}
          {stage === 'attack' && 'PAYLOAD INJECTION IN PROGRESS...'}
          {stage === 'breach' && 'FIREWALL BREACHED - DATA EXTRACTING...'}
          {stage === 'complete' && 'SYSTEM COMPROMISED - ACCESS GRANTED'}
        </div>
        <div className="loading-bar">
          <div className={`loading-progress stage-${stage}`}></div>
        </div>
      </div>

    </div>
  );
};

export default CyberLoadingScreen;
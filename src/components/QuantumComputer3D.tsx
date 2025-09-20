import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

interface QuantumComputer3DProps {
  stage: string;
  onBlast?: () => void;
}

const QuantumComputer3D: React.FC<QuantumComputer3DProps> = ({ stage, onBlast }) => {
  const groupRef = useRef<Group>(null);
  const qubitRefs = useRef<(Mesh | null)[]>([]);
  const coolingRefs = useRef<(Mesh | null)[]>([]);
  const coreRef = useRef<Mesh>(null);

  // Create qubit array positions
  const qubitPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        positions.push([
          (i - 3.5) * 0.3,
          (j - 3.5) * 0.3,
          0.5
        ]);
      }
    }
    return positions;
  }, []);

  // Animation loop
  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Rotate the entire quantum computer slowly
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
    }

    // Animate qubits - pulsing and slight rotation
    qubitRefs.current.forEach((qubit, i) => {
      if (qubit) {
        // Pulsing effect
        const pulseIntensity = stage === 'computer' ? 1 + Math.sin(time * 3 + i * 0.2) * 0.2 : 1;
        qubit.scale.setScalar(pulseIntensity);
        
        // Superposition effect - slight rotation
        qubit.rotation.z = Math.sin(time * 2 + i * 0.5) * 0.3;
        
        // Blast effect - rapid pulsing before explosion
        if (stage === 'blast') {
          const blastIntensity = 1 + Math.sin(time * 20) * 0.5;
          qubit.scale.setScalar(blastIntensity);
          
          // Trigger blast callback after buildup
          if (time > 1 && onBlast) {
            onBlast();
          }
        }
      }
    });

    // Animate cooling pipes - flowing effect
    coolingRefs.current.forEach((pipe, i) => {
      if (pipe) {
        const flow = Math.sin(time * 4 + i * Math.PI) * 0.1;
        pipe.position.y = -1 + flow;
      }
    });

    // Core energy buildup
    if (coreRef.current && stage === 'blast') {
      const intensity = 1 + Math.sin(time * 15) * 0.3;
      coreRef.current.scale.setScalar(intensity);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Quantum Computer Base */}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[4, 0.5, 3]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>

      {/* Control Unit Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.5, 2, 2.5]} />
        <meshPhongMaterial 
          color="#2a2a2a" 
          transparent 
          opacity={0.3}
          wireframe
        />
      </mesh>

      {/* Qubit Array */}
      {qubitPositions.map((pos, i) => (
        <mesh
          key={i}
          ref={(ref) => qubitRefs.current[i] = ref}
          position={pos as [number, number, number]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshPhongMaterial 
            color={i % 2 === 0 ? "#4f46e5" : "#06b6d4"}
            emissive={i % 2 === 0 ? "#4f46e5" : "#06b6d4"}
            emissiveIntensity={stage === 'computer' || stage === 'blast' ? 0.3 : 0}
          />
        </mesh>
      ))}

      {/* Quantum Core - Energy Center */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshPhongMaterial 
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={stage === 'computer' || stage === 'blast' ? 0.5 : 0}
        />
      </mesh>

      {/* Cryogenic Cooling Pipes */}
      {[...Array(4)].map((_, i) => (
        <mesh
          key={`cooling-${i}`}
          ref={(ref) => coolingRefs.current[i] = ref}
          position={[
            Math.cos(i * Math.PI * 0.5) * 1.5,
            -1,
            Math.sin(i * Math.PI * 0.5) * 1.5
          ]}
        >
          <cylinderGeometry args={[0.1, 0.1, 2]} />
          <meshPhongMaterial 
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={stage === 'computer' || stage === 'blast' ? 0.2 : 0}
          />
        </mesh>
      ))}

      {/* Control Lasers */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={`laser-${i}`}
          position={[
            Math.cos(i * Math.PI * 0.25) * 2,
            0.5,
            Math.sin(i * Math.PI * 0.25) * 2
          ]}
          rotation={[0, -i * Math.PI * 0.25, 0]}
        >
          <cylinderGeometry args={[0.05, 0.05, 0.5]} />
          <meshPhongMaterial 
            color="#ff4444"
            emissive="#ff4444"
            emissiveIntensity={stage === 'computer' || stage === 'blast' ? 0.4 : 0}
          />
        </mesh>
      ))}

      {/* Wiring Connections */}
      {qubitPositions.slice(0, 20).map((pos, i) => (
        <mesh
          key={`wire-${i}`}
          position={[(pos[0] + qubitPositions[(i + 1) % 20][0]) / 2, pos[1], pos[2] - 0.1]}
        >
          <cylinderGeometry args={[0.02, 0.02, 0.2]} />
          <meshPhongMaterial color="#666666" />
        </mesh>
      ))}
    </group>
  );
};

export default QuantumComputer3D;
import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { InstancedMesh, Object3D, Color } from 'three';
import * as THREE from 'three';

interface BinaryParticle {
  id: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  target: THREE.Vector3;
  char: string;
  phase: 'blast' | 'orbit' | 'homing' | 'morphing';
  life: number;
  size: number;
  color: THREE.Color;
}

interface BinaryParticleSystemProps {
  stage: string;
  particleCount: number;
  onMorphComplete?: () => void;
}

const BinaryParticleSystem: React.FC<BinaryParticleSystemProps> = ({ 
  stage, 
  particleCount, 
  onMorphComplete 
}) => {
  const meshRef = useRef<InstancedMesh>(null);
  const particlesRef = useRef<BinaryParticle[]>([]);
  const dummy = useMemo(() => new Object3D(), []);

  // Website layout target positions
  const websiteTargets = useMemo(() => {
    const targets = [];
    const sections = [
      { name: 'header', y: 0.8, density: 20 },
      { name: 'hero', y: 0.4, density: 40 },
      { name: 'about', y: 0.1, density: 30 },
      { name: 'projects', y: -0.2, density: 35 },
      { name: 'research', y: -0.5, density: 25 },
      { name: 'skills', y: -0.8, density: 30 },
      { name: 'contact', y: -1.1, density: 20 }
    ];

    sections.forEach(section => {
      for (let i = 0; i < section.density; i++) {
        targets.push(new THREE.Vector3(
          (Math.random() - 0.5) * 8, // Spread across screen width
          section.y + (Math.random() - 0.5) * 0.3, // Section height with variance
          (Math.random() - 0.5) * 2 // Slight depth variance
        ));
      }
    });

    return targets;
  }, []);

  // Initialize particles when blast stage begins
  useEffect(() => {
    if (stage === 'blast' && particlesRef.current.length === 0) {
      const particles: BinaryParticle[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        // Random explosion direction
        const angle = (Math.PI * 2 * i) / particleCount;
        const radius = 0.5 + Math.random() * 2;
        const elevation = (Math.random() - 0.5) * Math.PI * 0.5;
        
        const velocity = new THREE.Vector3(
          Math.cos(angle) * Math.cos(elevation) * radius,
          Math.sin(elevation) * radius,
          Math.sin(angle) * Math.cos(elevation) * radius
        );

        particles.push({
          id: i,
          position: new THREE.Vector3(0, 0, 0), // Start at quantum computer core
          velocity: velocity,
          target: websiteTargets[i % websiteTargets.length],
          char: Math.random() > 0.5 ? '1' : '0',
          phase: 'blast',
          life: 1.0,
          size: 0.05 + Math.random() * 0.05,
          color: new Color(Math.random() > 0.5 ? '#4f46e5' : '#06b6d4')
        });
      }
      
      particlesRef.current = particles;
    }
  }, [stage, particleCount, websiteTargets]);

  // Animation loop
  useFrame((state) => {
    if (!meshRef.current || particlesRef.current.length === 0) return;

    const time = state.clock.elapsedTime;
    let morphingComplete = true;

    particlesRef.current.forEach((particle, i) => {
      // Phase transitions based on stage and time
      if (stage === 'binary' && particle.phase === 'blast') {
        particle.phase = 'orbit';
      } else if (stage === 'align' && particle.phase === 'orbit') {
        particle.phase = 'homing';
      } else if (stage === 'fade' && particle.phase === 'homing') {
        particle.phase = 'morphing';
      }

      // Particle behavior based on phase
      switch (particle.phase) {
        case 'blast':
          // Explosive movement with quantum uncertainty
          particle.velocity.multiplyScalar(0.98); // Slow down
          particle.position.add(particle.velocity.clone().multiplyScalar(0.016));
          
          // Add quantum jitter
          particle.position.x += (Math.random() - 0.5) * 0.01;
          particle.position.y += (Math.random() - 0.5) * 0.01;
          particle.position.z += (Math.random() - 0.5) * 0.01;
          break;

        case 'orbit':
          // Orbiting motion while maintaining superposition
          const orbitRadius = 2 + Math.sin(time + i) * 0.5;
          const orbitSpeed = 0.5 + Math.sin(i * 0.1) * 0.2;
          
          particle.position.x = Math.cos(time * orbitSpeed + i) * orbitRadius;
          particle.position.y = Math.sin(time * orbitSpeed * 0.7 + i) * orbitRadius * 0.5;
          particle.position.z = Math.sin(time * orbitSpeed + i) * orbitRadius;
          
          // Quantum superposition oscillation
          particle.size = 0.05 + Math.sin(time * 10 + i) * 0.02;
          break;

        case 'homing':
          // Intelligent movement toward target positions
          const direction = particle.target.clone().sub(particle.position);
          const distance = direction.length();
          
          if (distance > 0.01) {
            // Magnetic-like attraction with curved paths
            direction.normalize();
            const attractionForce = Math.min(distance * 0.1, 0.05);
            particle.velocity.lerp(direction.multiplyScalar(attractionForce), 0.1);
            particle.position.add(particle.velocity);
            
            // Add graceful curves
            particle.position.x += Math.sin(time * 3 + i * 0.1) * 0.01;
            particle.position.z += Math.cos(time * 3 + i * 0.1) * 0.01;
            
            morphingComplete = false;
          }
          break;

        case 'morphing':
          // Final transformation - particles fade as they become website elements
          particle.life -= 0.02;
          particle.size *= 0.98;
          
          if (particle.life > 0) {
            morphingComplete = false;
          }
          break;
      }

      // Update instance matrix
      dummy.position.copy(particle.position);
      dummy.scale.setScalar(particle.size);
      dummy.rotation.z = time + i * 0.1; // Spinning binary digits
      dummy.updateMatrix();
      
      meshRef.current!.setMatrixAt(i, dummy.matrix);
      
      // Color based on character and phase
      const color = particle.char === '1' ? 
        new Color('#4f46e5').lerp(new Color('#ffffff'), particle.life * 0.3) :
        new Color('#06b6d4').lerp(new Color('#ffffff'), particle.life * 0.3);
      
      meshRef.current!.setColorAt(i, color);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }

    // Trigger morph complete callback
    if (morphingComplete && stage === 'fade' && onMorphComplete) {
      onMorphComplete();
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
      <planeGeometry args={[0.1, 0.1]} />
      <meshBasicMaterial transparent />
    </instancedMesh>
  );
};

export default BinaryParticleSystem;
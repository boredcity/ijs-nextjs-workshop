import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh } from 'three';

export const Figure = () => {
    const meshRef = useRef<Mesh>(null);
    const rotationValueRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
            const x = clientX / window.innerWidth - 0.5;
            const y = clientY / window.innerHeight - 0.5;
            rotationValueRef.current = {
                x: y * Math.PI * 0.2,
                y: x * Math.PI * 0.2
            };
        };
        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    useFrame((st, delta) => {
        if (!meshRef.current || !rotationValueRef.current) return;
        const { x, y } = rotationValueRef.current;
        if (x) {
            meshRef.current.rotation.x += x * delta;
        }
        if (y) {
            meshRef.current.rotation.y += y * delta;
        }
        // const dampingFactor = 0.005;
        // meshRef.current.rotation.x +=
        //     (x - meshRef.current.rotation.x) * dampingFactor;
        // meshRef.current.rotation.y +=
        //     (y - meshRef.current.rotation.y) * dampingFactor;
        // meshRef.current.rotation.z += 0.001;
    });

    return (
        <mesh ref={meshRef} position-z={0.5} castShadow>
            <torusKnotGeometry args={[1, 0.4, 300, 100, 2, 3]} />
            <meshStandardMaterial color="white" />
        </mesh>
    );
};

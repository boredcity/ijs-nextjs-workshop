'use client';
import { Canvas } from '@react-three/fiber';
import { Figure } from './Figure';

export default function Background3D() {
    return (
        <div className="!fixed left-0 top-0 !w-screen !h-screen -z-10 opacity-5 blur-sm">
            <Canvas shadows>
                <pointLight
                    castShadow
                    position={[0, 0, 1]}
                    intensity={700}
                    shadow-mapSize={[1024, 1024]}
                    shadow-camera-near={0.1}
                    shadow-camera-far={1}
                    shadow-camera-top={5}
                    shadow-camera-bottom={-5}
                    shadow-camera-left={-5}
                    shadow-camera-right={5}
                    shadow-normalBias={0.1} // choose the smallest ok value if shadow acne appears
                />

                <mesh receiveShadow>
                    <planeGeometry args={[5, 5]} />
                    <meshStandardMaterial color="white" />
                </mesh>

                <Figure />
            </Canvas>
        </div>
    );
}

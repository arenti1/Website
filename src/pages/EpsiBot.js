import React, { useState , Suspense } from "react";
import "../styles/EpsiBot.css";

// Importing example images
import headShape1 from '../img/headShape1.jpg';
import headShape2 from '../img/headShape2.png';
import headShape3 from '../img/headShape3.png';
import headShape4 from '../img/headShape4.jpg';

import hair1 from '../img/hair1.png';
import hair2 from '../img/hair2.jpeg';
import hair3 from '../img/hair3.png';
import hair4 from '../img/hair4.png';

import eyes1 from '../img/eyes1.png';
import eyes2 from '../img/eyes2.png';
import eyes3 from '../img/eyes3.jpeg';
import eyes4 from '../img/eyes4.png';


import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";



const Model = () => {
    const { nodes, materials } = useGLTF("/RobotHead.glb");
    const scaleValue = 4;
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.z += 0.01;
        }
    });

    return (
        <group ref={modelRef} scale={[scaleValue, scaleValue, scaleValue]} rotation={[-1.5, 0, 0]}>
            {Object.values(nodes).map((node, index) =>
                node.isMesh ?
                    <mesh key={index} geometry={node.geometry} material={node.material} />
                    : null
            )}
        </group>
    );
};


function Epsibot() {
    const [selectedPart, setSelectedPart] = useState(null);

    const handleSelect = (part) => {
        setSelectedPart(part);
    };

    return (
        <div className="epsibot-container">
            <div className="model-container">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                    <OrbitControls />
                </Canvas>
            </div>
            <div className="specs-container">

                <section>
                    <h2>Head Shape</h2>
                    <div className="image-options">
                        <div className="image-pair">
                            <img 
                                src={headShape1} 
                                alt="Head Shape 1" 
                                onClick={() => handleSelect('headShape1')} 
                                className={selectedPart === 'headShape1' ? 'selected' : ''}
                            />
                            <img 
                                src={headShape2} 
                                alt="Head Shape 2" 
                                onClick={() => handleSelect('headShape2')} 
                                className={selectedPart === 'headShape2' ? 'selected' : ''}
                            />
                        </div>
                        <div className="image-pair">
                            <img 
                                src={headShape3} 
                                alt="HeadShape 3" 
                                onClick={() => handleSelect('headShape3')} 
                                className={selectedPart === 'headShape3' ? 'selected' : ''}
                            />
                            <img 
                                src={headShape4} 
                                alt="Face 4" 
                                onClick={() => handleSelect('headShape4')} 
                                className={selectedPart === 'headShape4' ? 'selected' : ''}
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Hair</h2>
                    <div className="image-options">
                        <div className="image-pair">
                            <img 
                                src={hair1} 
                                alt="Hair 1" 
                                onClick={() => handleSelect('hair1')} 
                                className={selectedPart === 'hair1' ? 'selected' : ''}
                            />
                            <img 
                                src={hair2} 
                                alt="Hair 2" 
                                onClick={() => handleSelect('hair')} 
                                className={selectedPart === 'hair2' ? 'selected' : ''}
                            />
                        </div>
                        <div className="image-pair">
                            <img 
                                src={hair3} 
                                alt="Hair 3" 
                                onClick={() => handleSelect('Hair3')} 
                                className={selectedPart === 'Hair3' ? 'selected' : ''}
                            />
                            <img 
                                src={hair4} 
                                alt="Face 4" 
                                onClick={() => handleSelect('hair4')} 
                                className={selectedPart === 'hair4' ? 'selected' : ''}
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Eyes</h2>
                    <div className="image-options">
                        <div className="image-pair">
                            <img 
                                src={eyes1} 
                                alt="eyes 1" 
                                onClick={() => handleSelect('eyes1')} 
                                className={selectedPart === 'eyes1' ? 'selected' : ''}
                            />
                            <img 
                                src={eyes2} 
                                alt="eyes 2" 
                                onClick={() => handleSelect('eyes')} 
                                className={selectedPart === 'eyes2' ? 'selected' : ''}
                            />
                        </div>
                        <div className="image-pair">
                            <img 
                                src={eyes3} 
                                alt="eyes 3" 
                                onClick={() => handleSelect('eyes3')} 
                                className={selectedPart === 'eyes3' ? 'selected' : ''}
                            />
                            <img 
                                src={eyes4} 
                                alt="Face 4" 
                                onClick={() => handleSelect('eyes4')} 
                                className={selectedPart === 'eyes4' ? 'selected' : ''}
                            />
                        </div>
                    </div>
                </section>
                {/* ... Add more sections for mouth, nose, body, etc. following the pattern above */}
                
            </div>
        </div>
    );
}

export default Epsibot;

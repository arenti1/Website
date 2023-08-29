import React, { useState, Suspense } from "react";
import "../styles/Accessories.css";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";



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

function Accessories() {
    const specsWithPrice = {
        "Memory": {
            "8GB Unified Memory": 100,
            "16GB Unified Memory": 200,
            "24GB Unified Memory": 300,
        },
        "Storage": {
            "512GB SSD Storage": 150,
            "1TB SSD Storage": 300,
            "2TB SSD Storage": 600,
        },
        "Processor": {
            "Standard Processor": 200,
            "Advanced Processor": 400,
            "Ultra Processor": 800,
        },
        "Vision System": {
            "Standard Vision": 50,
            "Night Vision": 150,
            "Advanced Face Recognition": 300,
        },
        "Audio System": {
            "Standard Audio": 50,
            "Noise-Cancellation Microphones": 100,
            "High-Resolution Speakers": 200,
        },
        "Battery Life": {
            "10 Hours": 100,
            "24 Hours": 200,
            "48 Hours": 400,
        },
        "Connectivity": {
            "Wi-Fi": 50,
            "5G": 150,
            "Satellite": 400,
        },
        "Special Features": {
            "Waterproofing": 100,
            "Extended Warranty": 150,
            "24h Tech Support": 300,
        },
    };

    const [selectedSpecs, setSelectedSpecs] = useState([]);

    const handleSelect = (spec) => {
        if (selectedSpecs.includes(spec)) {
            setSelectedSpecs(prevSpecs => prevSpecs.filter(s => s !== spec));
        } else {
            setSelectedSpecs(prevSpecs => [...prevSpecs, spec]);
        }
    };

    const totalPrice = selectedSpecs.reduce((total, spec) => {
        for (let category in specsWithPrice) {
            if (specsWithPrice[category][spec]) {
                return total + specsWithPrice[category][spec];
            }
        }
        return total;
    }, 0);

    return (
        <div className="accessories-container">
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
                {Object.entries(specsWithPrice).map(([category, specs]) => (
                    <section key={category}>
                        <h2>{category}</h2>
                        {Object.keys(specs).map((spec) => (
                            <div
                                key={spec}
                                className={`spec-option ${selectedSpecs.includes(spec) ? 'selected' : ''}`}
                                onClick={() => handleSelect(spec)}
                            >
                                {spec} <span style={{ color: 'red' }}>+{specsWithPrice[category][spec]}€</span>
                            </div>
                        ))}
                    </section>
                ))}
                <div>
                    <strong>Total Price: </strong> {totalPrice}€
                </div>
            </div>
        </div>
    );
}

export default Accessories;

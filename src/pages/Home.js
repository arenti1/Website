import React, { Suspense } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";


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


function Home() {
  return (
    <div className="background">
      <div className="home">
        <div className="title">
          <h1 className="MainText">
            What happens when you combine<br/>
            Luxury Ai and Robotics
          </h1>

          <h4>
            Find the perfect Assistant / Companion to your<br/>
            home or office
          </h4>

          <Link className="exploreButton" to="/about"> Explore Now </Link>
        </div>

        <div className="interactiveModel">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Home;

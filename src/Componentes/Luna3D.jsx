import { useEffect, useRef } from "react";
import * as THREE from "three";
import "../Style/Luna3D.css";

const Luna3D = () => {
  const containerRef = useRef();

  useEffect(() => {
    let scene, camera, renderer, sphere, frameId;

    const initScene = () => {
      const container = containerRef.current;
      if (!container) return;

      const size = container.clientWidth;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(size, size);
      renderer.setClearColor(0x000000, 0);
      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      const texture = new THREE.TextureLoader().load(
        `${process.env.PUBLIC_URL}/Imagenes/luna.svg`
      );

      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });

      sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      camera.position.z = 3;
      sphere.position.set(0, -0.5, 0);

      const animate = () => {
        sphere.rotation.y += 0.005;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };

      animate();
    };

    initScene();
    window.addEventListener("resize", initScene);

    return () => {
      cancelAnimationFrame(frameId);
      if (renderer) renderer.dispose();
      window.removeEventListener("resize", initScene);
    };
  }, []);

  return <div id="luna-container" className="luna" ref={containerRef}></div>;
};

export default Luna3D;

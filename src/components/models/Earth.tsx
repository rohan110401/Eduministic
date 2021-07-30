import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.017} />
        </>
    );
};

export default function Earth() {

    return (
        <>
            <div className="py-8">

                <div className="md:grid md:grid-cols-3 lg:mx-20 sm:mx-4">

                    <div className="h-full w-full px-4 md:col-span-1 lg:block outline-none cursor-pointer">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <Suspense fallback={null}>
                                <Model />
                                <OrbitControls autoRotate />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, 1.8, 0]} opacity={0.25} width={50} height={50} blur={1} far={0.8} />
                                <Environment preset="sunset" />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="font-fontVollkorn mx-8 self-center text-black text-5xl font-medium mb-4 tracking-wide">Earth</h2>

                            <p className="font-fontVollkorn mx-8 self-center font-medium text-black text-xl text-justify tracking-wide">Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics.
                            </p>

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

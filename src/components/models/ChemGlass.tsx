import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/chemistry_glassware/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.3} />
        </>
    );
};

export default function ChemGlass() {

    return (
        <>
            <div className="py-8">

                <div className="md:grid md:grid-cols-3 lg:mx-20 sm:mx-4">

                    <div className="h-full w-full px-4 md:col-span-1 lg:block outline-none cursor-pointer">
                        <Canvas shadows dpr={[1, 2]} >
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="font-fontVollkorn mx-8 self-center text-black text-5xl font-medium mb-4 tracking-wide">Chemistry Lab Equipments</h2>

                            <p className="font-fontVollkorn mx-8 self-center text-black font-medium text-xl text-justify tracking-wide">A test tube, also known as a culture tube or sample tube, is a common piece of laboratory glassware consisting of a finger-like length of glass or clear plastic tubing, open at the top and closed at the bottom. Test tubes are usually placed in special-purpose racks. In laboratory equipment, a beaker is generally a cylindrical container with a flat bottom. Most also have a small spout (or beak) to aid pouring, as shown in the picture. Beakers are available in a wide range of sizes, from one milliliter up to several liters. An Erlenmeyer flask, also known as a conical flask (British English) or a titration flask, is a type of laboratory flask which features a flat bottom, a conical body, and a cylindrical neck. It is named after the German chemist Emil Erlenmeyer (1825–1909), who created it in 1860. Erlenmeyer flasks have wide bases, with sides that taper upward to a short vertical neck. They may be graduated, and often spots of ground glass or enamel are used where they can be labeled with a pencil. It differs from the beaker in its tapered body and narrow neck. Depending on the application, they may be constructed from glass or plastic, in a wide range of volumes. This work is based on "Chemistry Glassware" (https://sketchfab.com/3d-models/chemistry-glassware-b8594f7dc7e8442dbaaae7a11da4a962) by maxdragonn (https://sketchfab.com/maxdragon) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
                            </p>

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

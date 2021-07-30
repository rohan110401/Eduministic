import React from 'react'
import Earth from '../components/models/Earth'
import SolarSystem from "../components/models/SolarSystem"
import Water from "../components/models/Water"
import ChemGlass from '../components/models/ChemGlass'

export default function Study() {
    return (
        <div className="bg-homeImg">
            <div className="grid place-items-center pt-4">
                <h1 className="font-dancingScript pb-2 font-semibold tracking-wide text-5xl lg:text-6xl">
                    Study
                </h1>
                <div className="w-72 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>

            <Earth />
            <SolarSystem />
            <Water />
            <ChemGlass />
        </div>
    )
}

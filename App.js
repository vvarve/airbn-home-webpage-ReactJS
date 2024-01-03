import React from "react"
import { Navbar } from "./utils/Navbar"
import { Bodyhead } from "./utils/Bodyhead"
import { Bodybuttom } from "./utils/Bodybuttom"


export default function App() {
    return (
        <div>
            <Navbar />
            <Bodyhead />
            <Bodybuttom />
        </div>
    )
}
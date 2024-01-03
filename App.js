import React from "react"
import { Navbar } from "./utils/Navbar"
import { Bodyhead } from "./utils/Bodyhead"
import { Bodybuttom } from "./utils/Bodybuttom"


export default function App() {
    return (
        <div>
            <Navbar />
            <Bodyhead />
            <div  className="div-Bodybuttom-principal">
                <Bodybuttom 
                image={"./images/1.png"}
                stock={"sold out"}
                star={"./images/star.png"} 
                rating={"5.0"} 
                ubication={"(06) • USA"}
                textOne={"Life lessons with Katie Zaferes"}
                textTwo={"From $50"}
                textPerson={"/ person"}
                />
                <Bodybuttom 
                image={"./images/2.png"}
                stock={"online"}
                star={"./images/star.png"} 
                rating={"5.0"} 
                ubication={"(06) • USA"}
                textOne={"Life lessons with Katie Zaferes"}
                textTwo={"From $50"}
                textPerson={"/ person"}
                />
                <Bodybuttom 
                image={"./images/3.png"}
                star={"./images/star.png"} 
                rating={"5.0"} 
                ubication={"(06) • USA"}
                textOne={"Life lessons with Katie Zaferes"}
                textTwo={"From $50"}
                textPerson={"/ person"}
                />
            </div>
        </div>
    )
}
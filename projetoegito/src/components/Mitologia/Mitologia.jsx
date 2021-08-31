import React from "react"
import horus from "./myth.jpg"
import './Mitologia.css'

export default function Mitologia() {
    return (
        <div className="container">
            <section id="mitobody">
            <h2>As Contendas de Horus e Seth</h2>
            <img src={horus} alt="Horus vs Seth" className="imamito"/>
            <h2>Sobre o Mito:</h2>
                Bem-vindo a Segredos Milenares! Um canto da internet dedicado a tudo sobre o Egito Antigo.
            </section>
        </div>
    )
}
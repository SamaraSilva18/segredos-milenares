import React from "react"
import './Cadastro.css'

export default function Cadastro() {
    return (
        <div id="container">
            <div class="cadasbody">
            <h2>Cadastre-se para receber atualizaçoes e noticias sobre descobertas do Egito Antigo!</h2>
            <form>
                <fieldset>
                    <legend>Seus dados:</legend>
                    <div class="input-block">
                        <label for="name">Nome completo:</label>
                        <input name="name" id="name" required/>
                    </div>

                    <div class="input-block">
                        <label for="avatar">E-mail:</label>
                        <input name="avatar" id="avatar" required/>
                    </div>

                    <div class="input-block">
                        <label for="whatsapp">Telefone: <small>(Somente números):</small></label>
                        <input name="whatsapp" id="whatsapp" type="number" required/>
                    </div>
                </fieldset>
            </form>
            </div>
    </div>
    )
}
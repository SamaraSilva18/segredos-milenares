import React from "react"
import './Cadastro.css'

export default function Cadastro() {
    return (
        <div id="container">
            <form>
                <fieldset>
                    <legend>Seus dados:</legend>
                    <div class="input-block">
                        <label for="name">Nome completo:</label>
                        <input name="name" id="name" required/>
                    </div>

                    <div class="input-block">
                        <label for="avatar">Link da sua foto <small> (Comece com https://):</small></label>
                        <input name="avatar" id="avatar" type="url" required/>
                    </div>

                    <div class="input-block">
                        <label for="whatsapp">Whatsapp <small>(Somente números):</small></label>
                        <input name="whatsapp" id="whatsapp" type="number" required/>
                    </div>
                </fieldset>
            </form>
    </div>
    )
}
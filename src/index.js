import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
        return ( 
                <div style={{margin: "auto", width: 768, backgroundColor: "#D3D3D3", 
                padding: 12, borderRadius: 8}}> 
                        <label htmlFor="nome" style={{display: "block", marginBottom: 4}}>
                                Nome:
                        </label>
                        <input id="nome" type="text" style={{paddingTop: 8, paddingBottom: 8,
                        borderStyle: "hidden", outline: "nome", width: "100%", boxSizing: "border-box"}}/>   
                        <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8,
                        backgroundColor: "blueviolet", color: "white", border: "nome",
                        borderRadius: 8, width: "100%"}}>Enviar</button> 
                </div>
                )
        }

ReactDOM.render( <App/> ,
        document.querySelector("#root")
)
import React from "react";
import "../Cria_Tarefa/Cria_Tarefa.css"
import { useState } from "react";


function Cria_Tarefa(){

    // Lógica
    // É o useState da lista de tarefas
    const [tarefas, setTarefas] = useState([])
    // É o useState do CAMPO tarefa
    const [novaTarefa, setNovaTarefa] = useState("")  
    // Controla o estado
    const [temItem, setTemItem] = useState(false)

    console.log(novaTarefa)

    function Adiciona(){
        if(novaTarefa === ""){
            alert("Insira uma tarefa !")
        }else {
            tarefas.push(novaTarefa)
            setTarefas(tarefas)
            setNovaTarefa("")
            setTemItem(true)
        }

    }

    function ApagaItem(item){
        // os " ... " da linha abaixo, criará uma cópia de tarefas
        var lista_temp = [...tarefas]
        
        var indice = lista_temp.indexOf(item)

        lista_temp.splice(indice, 1)

        setTarefas(lista_temp)

        alert("Tarefa " + item + " Apagada")

        if(tarefas.length <1){
            setTemItem(false)
        }

    }

    function ApagaTudo(){
        setTarefas([])
        setTemItem(false)
    }
  

    return (
        <div className="ReactContainer">
            <div className="CriaTarefa">
                <h2>Insira sua tarefa</h2>
                <input type="text"
                        placeholder="Insira uma tarefa"
                        value={novaTarefa}
                        onChange={(e) => {setNovaTarefa(e.target.value)}}
                        />
                        

                <input type="Submit"
                        value="Criar Tarefa"
                        onClick={Adiciona}
                        />
            </div>

            
            {temItem && 
                <div className="TarefasCriadas">
                <h4>Você tem {tarefas.length} tarefas criadas</h4>
                {/* // Método MAP passa um por um  */}
                {tarefas.map((tarefa, index)=>{
                    return(
                        <div>
                            <li key={index}
                                onClick={(e) =>{ApagaItem(e.target.innerText)}}>{tarefa}</li>
                        </div>

                    )
                })}

                <button onClick={ApagaTudo}> Apagar Tudo</button>

            </div>
            }
        </div>
    )

}



export default Cria_Tarefa
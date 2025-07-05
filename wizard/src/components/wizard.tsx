import { useState } from "react"
import Step1 from "./step1"

export default function Wizard (){

    const [avancar , setAvancar] = useState(1);
    const [dadosFormulario , setDadosFormulario] =useState({
        nome: '',
        email: '',
        cpf: '',
    })
    const [respostaModal , setRespostaModal] = useState('');
    

    function handleDados (){
        setDadosFormulario(prevData => ({...prevData , ...dadosFormulario}))
    }

    function handleAvancar () {
        setAvancar(() => avancar + 1)
    }
    switch (avancar){
        case 1: 
            return ( <Step1 dadosFormulario={dadosFormulario} 
                atualizarDados={handleDados} 
                proximaStep={handleAvancar}  
                respostaModal={setRespostaModal} 
            />)
    }
}
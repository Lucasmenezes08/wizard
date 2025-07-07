import { useState } from "react"
import Step1 from "./step1"
import Step2 from "./step2";

export default function Wizard (){

    const [avancar , setAvancar] = useState(1);
    const [dadosFormulario , setDadosFormulario] = useState({
        nome: '',
        email: '',
        cpf: '',
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
    })
    const [respostaModal , setRespostaModal] = useState('');
    

    function handleDados (novosDados: Partial<typeof dadosFormulario>){
        setDadosFormulario(prevData => ({...prevData , ...novosDados}))
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
        
        case 2: 
            return ( <Step2 dadosFormulario={dadosFormulario} 
                atualizarDados={handleDados}
                proximaStep={handleAvancar}
                respostaModal={setRespostaModal}
            />)

        default:
            return (
                <div>
                    <h1>Formulário Enviado com Sucesso! ✅</h1>
                    <p>Obrigado, {dadosFormulario.nome}!</p>
                </div>
            );
    }
}
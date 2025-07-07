import React from "react";
 
function validarCep (cep:string):boolean{
        if (cep.trim().length === 8){
            return true;
        }
        else {
            return false;
        }
    }


    interface FormData {
        cep: string;
        rua: string;
        numero: string;
        complemento: string;
    }

    interface Step2Props {
        dadosFormulario: FormData;
        atualizarDados: (data: Partial<FormData>) => void; 
        proximaStep: () => void; 
        respostaModal: (message: string) => void; 
    }



export default function Step2 ({dadosFormulario ,atualizarDados, proximaStep , respostaModal}:Step2Props){

    function handleChange (e:React.ChangeEvent<HTMLInputElement>){
        atualizarDados({[e.target.name]:e.target.name})
    }

    function handleSubmit (){
        if (!validarCep){
            respostaModal('O campo de preenchimento está com padrão incorreto.');
            return;
        }

        if (dadosFormulario.rua.trim().length < 6){
            respostaModal('Rua está no padrão incorreto.');
            return;
        }

        if (dadosFormulario.numero.length > 4){
            respostaModal('Número não existe');
            return;
        }

        if (!dadosFormulario.complemento){
            respostaModal('Por favor insira o complemento');
            return;
        }


        respostaModal ('Formulario enviado corretamente.');


        proximaStep ();
        
    }

    return (
        <>
             <section>
                <label htmlFor="cep">Cep</label>
                <input 
                type="text"
                name="cep"
                value={dadosFormulario.cep}
                onChange={handleChange}
                />
            

            </section>

             <section>
                <label htmlFor="rua">Rua</label>
                <input 
                type="text" 
                name="rua"
                value={dadosFormulario.rua}
                onChange={handleChange}
                />
            </section>

             <section>
                <label htmlFor="numero">numero</label>
                <input 
                type="text" 
                name="numero"
                value={dadosFormulario.numero}
                onChange={handleChange}
                />
            </section>

            <section>
                <label htmlFor="complemento">complemento</label>
                <input 
                type="text" 
                name="complemento"
                value={dadosFormulario.complemento}
                onChange={handleChange}
                />
            </section>

            <button onClick={handleSubmit}>Avançar</button>
        </>
    )
}
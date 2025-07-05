import React from "react";


 function validarEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);  // Preencher com modal
        }

    function validarCpf (cpf:string):boolean {
        if (cpf.length === 11){
            return true;
        }
        else {
            return false //preencher com modal.
        }
    }


    interface FormData {
        nome: string;
        email: string;
        cpf: string;
    }

    interface Step1Props {
        dadosFormulario: FormData;
        atualizarDados: (data: Partial<FormData>) => void; 
        proximaStep: () => void; 
        respostaModal: (message: string) => void; 
    }

export default function Step1 ({dadosFormulario , atualizarDados, proximaStep , respostaModal}:Step1Props){

    function handleSubmit (){
        if (dadosFormulario.nome.trim().length < 3){
            respostaModal('O nome inserido precisa ter mais de 3 dígitos.'); // exibir modal
            return;
        }

        if (!validarEmail(dadosFormulario.email)){
            respostaModal('O email está no padrão incorreto.');   // exibir modal
            return;
        }

        if (!validarCpf(dadosFormulario.cpf)){
            respostaModal('o cpf está no padrão incorreto.');  // exibir modal
            return;
        }

        respostaModal('Formulário enviado corretamente!');

        proximaStep();
    
        
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
            atualizarDados({ [e.target.name]: e.target.value });
    };

    return (    
        <>

            <section>
                <label htmlFor="name">Nome Completo</label>
                <input 
                type="text"
                name="name"
                value={dadosFormulario.nome}
                onChange={handleChange}
                />
            

            </section>

             <section>
                <label htmlFor="email">Email</label>
                <input 
                type="text" 
                name="email"
                value={dadosFormulario.email}
                onChange={handleChange}
                />
            </section>

             <section>
                <label htmlFor="cpf">Cpf</label>
                <input 
                type="text" 
                name="cpf"
                value={dadosFormulario.cpf}
                onChange={handleChange}
                />
            </section>

            <button onClick={handleSubmit}>Avançar</button>
        
        </>
    )
}
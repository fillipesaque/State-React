import { useState } from 'react'
import ButtonStyle from './Button.module.css'

function Button () {
/*  state(estado) Esse recurso nos permite ter informações na tela que são renderizadas e atualizadas dinamicamente de acordo com a mudança dos nossos valores no JavaScript. */

    /* [Valor , FunçaoModificadora] */
    const [Contador , setContador] = useState(0);
    /* 1-FollowText variavel de valor inicial
       2-setFollowText e a funçao que ira alterar o valor da variavel inicial
       3-useState gancho ou Hook permite adicionar estado a componentes 
   */

    function ResetarContador (){
        setContador(0);
    }

    function AumentarContador (ev){
        console.log(ev)
        setContador(Contador + 1)
    }

    return(
        <div className={ButtonStyle.ContainerBtn}>
            <p> Contagem : {Contador}</p>
            <button
                className={ButtonStyle.btn}
                onClick={AumentarContador}
            >
                Aumentar
            </button>

            <button
                onClick={ResetarContador}
            >
                Resetar
            </button>
        </div>
    )
}

export default Button
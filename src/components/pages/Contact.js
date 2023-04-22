import React, { useEffect, useState } from "react"

// Importação do componente de Loading 
import Loading from "../layout/Loading"

function Contact() {
    // Variável para exiber ou não o Loading, inicia true para ir carregando
    const [loading, setLoading] = useState(true)

    // Foi criado esse useEffect para ser utilizado somente uma única vez 
    useEffect(() => {

        // Foi criado essa função setTimeout para desativar a variável de loading após 2000 milisegundos = 2 segundo 
        setTimeout(function () {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {/* Foi criado um ternário para exibir o loadin ou o restante da páinga, funciona com if else  */}

            {/* Se a variável loading for true, então exibe o loading  */}
            {loading ? (
                <Loading />
            ) :
            // Se a varia´vel loading for false então exibe essa parte 
                <h1>Contact</h1>

            }



        </>
    )
}
export default Contact

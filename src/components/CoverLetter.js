import { useEffect } from "react"

const CoverLetter = ({content}) => {

    useEffect(() => document.querySelector(".contentLetter").innerHTML+=content, [content])

    return(
        <article>
            <h2>Madame, Monsieur</h2>
            <p className="contentLetter"></p>
            <p>Je vous prie d'agréer, madame, monsieur, mes salutations distinguées</p>
        </article>
    )
}

export default CoverLetter
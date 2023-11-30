// import Note from "./Note/Note"
// import useFetchNote from "../../hooks/useFetchNote"
// import NavBar from "../../components/NavBar/NavBarBoostrap"
// import ButtonBar from "../../components/ButtonBar/ButtonBar";

// const ListNotes = (codigo: any) => {

//     const { notes, isLoading } = useFetchNote()

//     if (isLoading) return <h1>Cargando....</h1>

//     return (
//         <div>
//             {
//                 notes && notes.map(note => (
//                     <>

//                         <Note
//                             note={note}
//                         />


//                     </>


//                 ))
//             }

//         </div>
//     )
// }

// export default ListNotes

import Note from "./Note/Note"
import useFetchNote from "../../hooks/useFetchNote"
import React, { useState } from 'react';
import NavBarBoostrap from "../../components/NavBar/NavBarBoostrap"
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap"
import "./listNotes.css"
const ListNotes = (codigo: any) => {

    const { notes, isLoading } = useFetchNote()
    const [historiaActual, setHistoriaActual] = useState(0);
    const [buttonBack, setButtonBack] = useState(false)
    const [buttonNext, setButtonNext] = useState(true)

    if (isLoading) return <h1>Cargando....</h1>

    function mergeCamps(notes: any): string[] {
        console.log(notes[0])
        const arrayCamps: any[] = []

        for (let camp in notes) {
            const noteKeys = Object.keys(camp)
            console.log(noteKeys)
            //arrayCamps.push(noteKeys)
        }
        return arrayCamps
    }
    if (notes) {
        console.log(mergeCamps(notes))

    }
    function clasifiedParagraph(value: string) {
        value = value.slice(0, -1)
        if (value === "paragraph") {
            return true
        } else {
            value = value.slice(0, -2)
            if (value === "paragraph") {
                return true
            } else return false
        }
    }
    // function clasifiedTitle(value: string) {
    //     value = value.slice(0, -1)
    //     if (value === "title") {
    //         return true
    //     } else {
    //         value = value.slice(0, -2)
    //         if (value === "title") {
    //             return true
    //         } else return false
    //     }
    // }
    // function clasifiedImg(value: string) {
    //     value = value.slice(0, -1)
    //     if (value === "img") {
    //         return true
    //     } else {
    //         value = value.slice(0, -2)
    //         if (value === "img") {
    //             return true
    //         } else return false
    //     }
    // }

    const siguienteHistoria = () => {

        setHistoriaActual(historiaActual + 1);
        if (historiaActual - 1 !== 0) {
            setButtonBack(true)
        }
        if (historiaActual + 1 >= notes.length - 1) {
            setButtonNext(false)
        }
    };

    const anteriorHistoria = () => {
        setHistoriaActual(historiaActual - 1);
        if (historiaActual - 1 <= 0) {
            setButtonBack(false)
        }
        if (historiaActual + 1 !== 0) {
            setButtonNext(true)
        }
    };

    return (
        <>
            <NavBarBoostrap />
            <div className="containerListNotes">
                <div className="contenedor">
                    {notes ? notes.map(note => (
                        <div className="elemento">
                            <h6>{note.title1}</h6>
                        </div>
                    )) : null}
                </div>

                <Note
                    note={notes[historiaActual]}
                    siguiente={siguienteHistoria}
                    anterior={anteriorHistoria}
                    buttonBack={buttonBack}
                    buttonNext={buttonNext}
                />
            </div>
            <ButtonBarBoostrap />
        </>
    )

}

export default ListNotes
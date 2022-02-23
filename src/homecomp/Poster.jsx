import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Poster = ({ addposter, tittle }) => {
    return (<>
        <h1 className="font-bold text-xl text-white mt-7 mx-3">{tittle}</h1>
        <div className=" w-full bg-[#0F171E] p-3 flex  space-x-3 flex-row  overflow-x-scroll row_posters">
            {addposter.map((element, index) => {
                return <img key={index} className="object-contain h-fit w-1/3" src={element.posterurl} alt=".." />
            })}

        </div>
    </>
    )
}

export default Poster
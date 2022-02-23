import React, { useEffect, useState } from 'react'
import axios from "../axios"
import 'react-slideshow-image/dist/styles.css'

const Row = ({ fetchNetfilxOriginals, tittle, istrue, addposter }) => {
    const [movies, setmovies] = useState([])
    const baseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchNetfilxOriginals);
            setmovies(request.data.results)

            return request;
        }
        fetchData();
    }, [fetchNetfilxOriginals]);
    return (<>
        <div className="flex text-center justify-start">
            <h1 className="font-bold  text-white mt-7 mx-3 md:text-lg  text-md">{tittle} </h1>
            <h2 className="bg-[#00A8E1] mt-7 px-4 py-1 rounded-md  font-semibold">Prime</h2>
        </div>

        {istrue ?

            <div className=" w-full bg-[#0F171E] p-3 flex  space-x-3 flex-row  overflow-x-scroll row_posters">
                {addposter.map((element) => {
                    return <img key={element.id} className="object-contain h-36 w-56" src={element.url} alt=".." />
                })}

            </div> :



            // 
            <div className=" w-full bg-[#0F171E] p-3 flex  space-x-3 flex-row  overflow-x-scroll row_posters">
                {movies.map(movie => {
                    return (
                        <>
                            < img
                                className=" object-contain w-60 h-60 "
                                key={movie.id}
                                src={`${baseURL}${movie.poster_path}`}
                                alt={movie.name} />

                        </>)
                })}
            </div>}
    </>
    )
}

export default Row



import React, { useEffect, useState } from 'react'
import axios from "../axios"

const Row = ({ fetchNetfilxOriginals, tittle, istrue }) => {
    const [movies, setmovies] = useState([])
    const baseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchNetfilxOriginals);
            setmovies(request.data.results)
            console.log(request.data.results[0]);

            return request;
        }
        fetchData();
    }, [fetchNetfilxOriginals]);
    return (<>
        <h1 className="font-bold text-xl text-white mt-7 mx-3">{tittle}</h1>

        {istrue ?

            <div className=" w-full bg-[#0F171E] p-3 flex  space-x-3 flex-row  overflow-x-scroll row_posters">
                <img className="object-contain h-36 w-36" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_HinDecRev/ac9ec8b4-a274-4250-9cdf-d5eb36801c6a._UR200,200_SX400_FMwebp_.jpg" alt="" />
                <img className="object-contain h-36 w-36" src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WatchInYourLanguageEnglishBoxartV2/15cfbfa1-3772-4c04-a87c-a31aab146ee5._UR200,200_SX200_FMwebp_.jpg" alt="" />
                <img className="object-contain h-36 w-36" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TelDec/930aa201-7920-419a-be3b-19f851d66aae._UR200,200_SX200_FMwebp_.jpg" alt="" />
                <img className="object-contain h-36 w-36" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TamDec/fd303a3a-d4e9-4ff7-9437-d2fdc0736b8d._UR200,200_SX200_FMwebp_.jpg" alt="" />
                <img className="object-contain h-36 w-36" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_MalDec/3eff5a15-78c8-4906-a233-aa050c4c2a72._UR200,200_SX200_FMwebp_.jpg" alt="" />
                <img className="object-contain h-36 w-36" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_KanDec/872afeb6-6e3c-4238-8425-0fbed8a98d18._UR200,200_SX200_FMwebp_.jpg" alt="" />
                <img className="object-contain h-36 w-36" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_MarDec/e813e13e-a867-4e5d-989f-c82e3c5be3da._UR200,200_SX200_FMwebp_.jpg" alt="" />
                <img className="object-contain h-36 w-36" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_PunjDec/3b313164-339a-4cb0-9435-ea335f995632._UR200,200_SX200_FMwebp_.jpg" alt="" />
                <img className="object-contain h-36 w-36" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_BengDec/12b33034-9d91-4e43-b829-9af63bc7757b._UR200,200_SX200_FMwebp_.jpg" alt="" />
                <img className="object-contain h-36 w-36" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_GujDec/b93c0e6d-5652-4043-a7a7-9d74e4556fd2._UR200,200_SX200_FMwebp_.jpg" alt="" />
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



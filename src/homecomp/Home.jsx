import React from 'react'
import Navbar from './Navbar'
import Row from './Row'
import Slider from './Slider'
import request from "../request"


const Home = () => {
    return (
        <div className="bg-[#0F171E]  h-fit">
            <Navbar />
            <Slider />
            <Row fetchNetfilxOriginals={request.fetchNetfilxOriginals} tittle="Continue watching" />
            <Row tittle="Feel-good movies" fetchNetfilxOriginals={request.fetchTopRated} />

            <Row istrue={true} />
            <Row tittle="Amazon Original series" fetchNetfilxOriginals={request.fetchTrending} />





        </div>
    )
}

export default Home
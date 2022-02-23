import React from 'react'
import Navbar from './Navbar'
import Row from './Row'
import Slider from './Slider'
import request from "../request"
import Poster from './Poster'


const Home = () => {
    const addposter = [
        {
            id: 1,
            url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_HinDecRev/ac9ec8b4-a274-4250-9cdf-d5eb36801c6a._UR200,200_SX400_FMwebp_.jpg",
            posterurl: "https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/mubiin/heroes/web_featured-offer-tile_920x400._CB641089425_UR920,400_SX920_FMwebp_.jpg"
        },
        {
            id: 2,
            url: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WatchInYourLanguageEnglishBoxartV2/15cfbfa1-3772-4c04-a87c-a31aab146ee5._UR200,200_SX200_FMwebp_.jpg"
            , posterurl: "https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/g-l/hayuin/heroes/web_featured-offer-tile_920x400._CB628261886_UR920,400_SX920_FMwebp_.jpg"
        },
        {
            id: 3,
            url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TelDec/930aa201-7920-419a-be3b-19f851d66aae._UR200,200_SX200_FMwebp_.jpg",
            posterurl: "https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/g-l/lionsgateplayin/heroes/web_featured-offer-tile_920x400._CB646609076_UR920,400_SX920_FMwebp_.jpg"

        },
        {

            id: 4,
            url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_TamDec/fd303a3a-d4e9-4ff7-9437-d2fdc0736b8d._UR200,200_SX200_FMwebp_.jpg",
            posterurl: "https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/a-f/discoveryplusin/heroes/web_featured-offer-tile_920x400._CB646603807_UR920,400_SX920_FMwebp_.jpg"
        },
        {
            id: 5,
            url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_MalDec/3eff5a15-78c8-4906-a233-aa050c4c2a72._UR200,200_SX200_FMwebp_.jpg",
            posterurl: "https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/a-f/erosnowin/heroes/web_featured-offer-tile_920x400._CB646604158_UR920,400_SX920_FMwebp_.jpg"
        },
        {

            id: 6,
            url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_KanDec/872afeb6-6e3c-4238-8425-0fbed8a98d18._UR200,200_SX200_FMwebp_.jpg",
            posterurl: "https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/a-f/docubayin/heroes/web_featured-offer-tile_920x400._CB642085313_UR920,400_SX920_FMwebp_.jpg"
        },
        {
            id: 7,
            url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_MarDec/e813e13e-a867-4e5d-989f-c82e3c5be3da._UR200,200_SX200_FMwebp_.jpg",
            posterurl: "https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/g-l/hoichoiin/heroes/web_featured-offer-tile_920x400._CB646609827_UR920,400_SX920_FMwebp_.jpg"
        },
        {

            id: 8,
            url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_PunjDec/3b313164-339a-4cb0-9435-ea335f995632._UR200,200_SX200_FMwebp_.jpg",
            posterurl: "https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/manoramamaxin/heroes/web_featured-offer-tile_920x400._CB642498929_UR920,400_SX920_FMwebp_.jpg"
        },
        {
            id: 9,
            url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_BengDec/12b33034-9d91-4e43-b829-9af63bc7757b._UR200,200_SX200_FMwebp_.jpg",
            posterurl: "https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/mubiin/heroes/web_featured-offer-tile_920x400._CB641089425_UR920,400_SX920_FMwebp_.jpg"
        },
        {
            id: 10,
            url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_GujDec/b93c0e6d-5652-4043-a7a7-9d74e4556fd2._UR200,200_SX200_FMwebp_.jpg",
            posterurl: "https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/s-z/shortstvin/heroes/web_featured-offer-tile_920x400._CB646609183_UR920,400_SX920_FMwebp_.jpg"
        }
    ];
    return (
        <div className="bg-[#0F171E]  h-fit">
            <Navbar />
            <Slider />
            <Row fetchNetfilxOriginals={request.fetchNetfilxOriginals} tittle="Continue watching" />
            <Row tittle="Feel-good movies" fetchNetfilxOriginals={request.fetchTopRated} />

            <Row istrue={true} addposter={addposter} tittle="Watch in Your Language" />
            <Row tittle="Amazon Original series" fetchNetfilxOriginals={request.fetchTrending} />
            <Row tittle="Amazon Original series" fetchNetfilxOriginals={request.fetchActionMovies} />
            <Poster tittle="Subscribe to Channels" addposter={addposter} />
            <Row tittle="Amazon Original Horror-series" fetchNetfilxOriginals={request.fetchHorrorMovies} />
            <Row tittle="Amazon Original Romance-series" fetchNetfilxOriginals={request.fetchRomanceMovies} />
            <Row tittle="Amazon Original Documentaries-series" fetchNetfilxOriginals={request.fetchDocumentaries} />
            <footer className="h-32 w-full bg-[#202020] flex justify-center">
                <img className="object-contain  w-40 h-20" src='https://logos-world.net/wp-content/uploads/2020/11/Google-Play-Logo-2015-2016.png' />
            </footer>
        </div>
    )
}

export default Home
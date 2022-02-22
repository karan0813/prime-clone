import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Office/8ebc702d-8bc2-4a72-a77b-dbd9caae97be._UR3000,600_SX3000_FMwebp_.jpg',
        caption: 'Slide 1'
    },
    {
        url: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_MahaanTamil_Review/db2c02a1-525a-4d32-b45e-d8d275d9c369._UR3000,600_SX3000_FMwebp_.jpeg',
        caption: 'Slide 2'
    },
    {
        url: 'https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_AEWDynamite_DP_V2/a57c4563-73cf-4806-bd21-d83cdc798c20._UR3000,600_SX3000_FMwebp_.jpeg',
        caption: 'Slide 3'
    },
];

const Slider = () => {
    return (
        <div className="slide-container ">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide -z-10 " key={index}>
                        <div style={{ 'backgroundImage': `url(${slideImage.url}) `, backgroundSize: "cover", height: 300, zIndex: "-1" }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
export default Slider
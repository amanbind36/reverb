import React from 'react'
import './HomeCart1.css';
import { FaStarHalfAlt, FaStar,FaLongArrowAltRight } from 'react-icons/fa';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Navigation } from "swiper";











import card1 from '../../img/cards Img/card1.png';
import card2 from '../../img/cards Img/card2.png';
import card3 from '../../img/cards Img/card3.png';
import card4 from '../../img/cards Img/card4.jpg';
import card5 from '../../img/cards Img/card5.png';
import card6 from '../../img/cards Img/card6.png';
import card7 from '../../img/cards Img/card7.png';
import card8 from '../../img/cards Img/card8.jpg';
import card9 from '../../img/cards Img/card9.jpg';
import card10 from '../../img/cards Img/card10.jpg';
import card11 from '../../img/cards Img/card11.jpg';
import card12 from '../../img/cards Img/card12.jpg';

import Accessories from '../../img/Instrumental/Accessories.jpg';
import Amps from '../../img/Instrumental/Amps.jpg';
import Acoustic from '../../img/Instrumental/Acoustic.jpg';
import Bass from '../../img/Instrumental/Bass.jpg';
import blup from '../../img/Instrumental/blup.jpg';
import Drums from '../../img/Instrumental/Drums.jpg';
import Effects from '../../img/Instrumental/Effects.jpg';
import ElectricGuitars from '../../img/Instrumental/ElectricGuitars.jpg';
import Folk from '../../img/Instrumental/Folk.jpg';
import HomeAudio from '../../img/Instrumental/HomeAudio.jpg';
import Parts from '../../img/Instrumental/Parts.jpg';
import RecordingGear from '../../img/Instrumental/RecordingGear.jpg';
import Software from '../../img/Instrumental/Software.jpg';
import Synths from '../../img/Instrumental/Synths.jpg';
import BO from '../../img/Instrumental/BO.jpg';
import Email from '../../img/Email.jpg';
import ReverbSell from '../../img/ReverbSell.jpg';

import explore1 from '../../img/explore1.webp';
import explore2 from '../../img/explore2.webp';
import explore3 from '../../img/explore3.webp';


import car1pic from '../../img/scroll carousel image/car1pic.jpg';
import car1pic2 from '../../img/scroll carousel image/car1pic2.jpg';
import car2pic1 from '../../img/scroll carousel image/car2pic1.jpg';
import car2pic2 from '../../img/scroll carousel image/car2pic2.jpg';
import car2pic3 from '../../img/scroll carousel image/car2pic3.jpg';
import car3pic1 from '../../img/scroll carousel image/car3pic1.jpg';
import car3pic2 from '../../img/scroll carousel image/car3pic2.jpg';
import car3pic3 from '../../img/scroll carousel image/car3pic3.jpg';
import car4pic1 from '../../img/scroll carousel image/car4pic1.jpg';
import car4pic2 from '../../img/scroll carousel image/car4pic2.jpg';
import car5pic1 from '../../img/scroll carousel image/car5pic1.webp';
import car5pic2 from '../../img/scroll carousel image/car5pic2.webp';
import car5pic3 from '../../img/scroll carousel image/car5pic3.webp';
import car6pic1 from '../../img/scroll carousel image/car6pic1.jpg';
import car6pic2 from '../../img/scroll carousel image/car6pic2.jpg';
import car6pic3 from '../../img/scroll carousel image/car6pic3.jpg';
import car7pic1 from '../../img/scroll carousel image/car7pic1.jpg';
import car7pic2 from '../../img/scroll carousel image/car7pic2.jpg';
import car7pic3 from '../../img/scroll carousel image/car7pic3.jpg';
import car8pic1 from '../../img/scroll carousel image/car8pic1.jpg';
import car8pic2 from '../../img/scroll carousel image/car8pic2.jpg';
import car8pic3 from '../../img/scroll carousel image/car8pic3.jpg';
import car9pic1 from '../../img/scroll carousel image/car9pic1.jpg';
import car9pic2 from '../../img/scroll carousel image/car9pic2.jpg';
import car9pic3 from '../../img/scroll carousel image/car9pic3.jpg';
import car10pic1 from '../../img/scroll carousel image/car10pic1.jpg';
import car10pic2 from '../../img/scroll carousel image/car10pic2.jpg';
import car10pic3 from '../../img/scroll carousel image/car10pic3.jpg';
import car11pic1 from '../../img/scroll carousel image/car11pic1.jpg';
import car11pic2 from '../../img/scroll carousel image/car11pic2.jpg';
import car11pic3 from '../../img/scroll carousel image/car11pic3.jpg';
import car12pic1 from '../../img/scroll carousel image/car12pic1.jpg';
import car12pic2 from '../../img/scroll carousel image/car12pic2.jpg';


import FlagIndia from '../../img/FlagIndia.svg';



const HomeCart1 = () => {

    const cards = [
        {
            name: 'Cloudburst Ambient Reverb', category: 'Strymon', catType: `Effects and Pedals > Reverb`, image: card1,
        },

        {
            name: 'Life Pedal Octave Distortion + Booster V3', category: 'EarthQuaker Devices', catType: `Effects and Pedals > Distortion
            ` , image: card2
        },

        {
            category: 'Meris', name: 'LVX', catType: `Effects and Pedals > Delay
            `, image: card3
        },


        {
            category: 'Red Panda', name: 'Particle 2 Granular Delay / Pitch Shifter', catType: `Effects and Pedals > Delay`, image: card4
        },


        {
            category: 'Hologram Electronics', name: 'Microcosm', catType: `Effects and Pedals Loop > Pedals and Samplers`, image: card5
        },


        {
            category: 'Fender', name: 'Wildwood Coronado II (1968 - 1969)', catType: `Electric Guitars > Hollow Body`, image: card6
        },


        {
            category: 'Buchla', name: 'Music Easel', catType: `Keyboards and ynths > Modular Synths`, image: card7
        },


        {
            category: 'Neural DSP', name: 'Quad Cortex', catType: `Effects and Pedals > Multi`, image: card8
        },


        {
            category: 'Fender', name: 'Telecaster Bass 1971 - 1979', catType: `Bass Guitars > 4 String`, image: card9
        },


        {
            category: 'Polyend', name: 'Play Sample-Based MIDI Groovebox', catType: `Keyboards and Synths > Digital Synths`, image: card10
        },
        {
            category: 'Universal Audio', name: 'Volt 276 USB-C Audio Interface', catType: `Pro Audio > Interfaces`, image: card11
        },
        {
            category: 'Ludwig', name: 'LS401TDPWB Anderson Signature 5x14” Snare Drum', catType: `Drums and Percussion > Snare`, image: card12
        },


    ]



    // --------------- next scroll cards-------------



    const InstruDetails = [
        {
            name: "Accessories", Images: Accessories
        },
        {
            name: "BO", Images: BO
        },
        {
            name: "Amps", Images: Amps
        },
        {
            name: "Acoustic", Images: Acoustic
        },
        {
            name: "Bass", Images: Bass
        },
        {
            name: "blup", Images: blup
        },
        {
            name: "Drums", Images: Drums
        },
        {
            name: "Effects", Images: Effects
        },
        {
            name: "Electric Guitars", Images: ElectricGuitars
        },
        {
            name: "Folk", Images: Folk
        },
        {
            name: "Home Audio", Images: HomeAudio
        },
        {
            name: "Parts", Images: Parts
        },
        {
            name: "Recording Gear", Images: RecordingGear
        },
        {
            name: "Software", Images: Software
        },
        {
            name: "Synths", Images: Synths
        },
    ]


    // --------------- last scroll cards-------------

    const LastScrollCard = [
        {
            id: 1,
            name: "ModAudio Mod duo Fx Black",
            price: "$220",
            reviewText: "Mint",

            image: [car1pic, car1pic2],
            country: "India"
        },

        {
            id: 2,
            name: " Vintage Tanpura ( Naskar's & Sons) 65 years old, sweet sound, amazing rare piece, handmade",
            price: "$1,450",
            reviewText: "Very Good",
            image: [car2pic1, car2pic2, car2pic3],
            country: "India"

        },

        {
            id: 3,
            name: "PreSonus Eureka Channel Strip ",
            price: "$450",
            reviewText: "Mint",
            image: [car3pic1, car3pic2, car3pic3],
            country: "India"
        },

        {
            id: 4,
            name: "Kingsley Jester Custom V2 Overdrive Pedal w/ Sizzle Control & Preamp Mode ",
            price: "$1,099",
            reviewText: "Very Good",
            image: [car4pic1, car4pic2],

            country: "India"
        },

        {
            id: 5,
            name: "Moog MF-102 Moogerfooger Ring Modulator White ",
            price: "$950",
            reviewText: "Very Good",
            image: [car5pic1, car5pic2, car5pic3],
            country: "India"
        },

        {
            id: 6,
            name: " Naskar vintage Tanpura 65 years old, sweet sound, amazing rare piece, handmade",
            price: "$1,450",
            reviewText: "Very Good",
            image: [car6pic1, car6pic2, car6pic3],

            country: "India"
        },

        {
            id: 7,
            name: " Korg Stage Echo SE-300 (vintage tape echo + reverb)",
            price: "$1,220",
            reviewText: "Very Good",
            image: [car7pic1, car7pic2, car7pic3],

            country: "India"
        },

        {
            id: 8,
            name: " Universal computer computone vintage organ 1978 - Red",
            price: "$250",
            reviewText: "Good",
            image: [car8pic1, car8pic2, car8pic3],
            country: "India"
        },

        {
            id: 9,
            name: "Vintage Dilruba amazing rare piece, 75 yrs.old with head, single piece neck w.bo ",
            price: "$1,500",
            reviewText: "Very Good",
            image: [car9pic1, car9pic2, car9pic3],
            country: "India"
        },

        {
            id: 10,
            name: "Rare Vintage Professional Sarod, 65 yrs. amazing Unique Art Works , Handmade. ",
            price: "$2,500",
            reviewText: "Excellent",
            image: [car10pic1, car10pic2, car10pic3],
            country: "India"
        },

        {
            id: 11,
            name: " 6 Maxell XLII 60 (Made in Japan) Blank Audio Cassette Tapes- Sealed",
            price: "$34.99",
            reviewText: "Excellent",
            image: [car11pic1, car11pic2, car11pic3],
            country: "India"
        },

        {
            id: 12,
            name: " 5 BASF CR-S II 90 Blank Audio Cassette Tapes- Sealed",
            price: "$74.99",
            reviewText: "Excellent",
            image: [car12pic1, car12pic2],
            country: "India"
        },




    ]

    const Card = ({ name, category, image, catType }) => {
        return (
            <div className='scrollCardsContainer'>
                <div className="card">
                    <img src={image} alt={name} className="scrollcardImage" />
                    <div className="scrollCard1Text">
                        <span>{category}</span><br />
                        <span>{name}</span><br />
                        <span>{catType}</span><br />
                        <p><FaStar className='star'/><FaStar className='star' /><FaStar className='star'/><FaStar className='star' /><FaStarHalfAlt className='star' /></p>

                    </div>
                </div>
            </div>
        );
    };


    const InstruCards = ({ name, Images }) => {
        return (
            <div className='intruCardsDiv'>
                <img src={Images} className="InstruImage" />
                <div className='instruText'>
                    <span>{name}</span>
                </div>
            </div>
        );
    };


    const ScrollCarouselCard = ({ name, reviewText, price, country, image }) => {
        return (
            <div className='ScrollCarouselConatiner'>
                <div className='scrollCardslast'>

                    <span>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                            {image.map((image, index) => (
                                <SwiperSlide>
                                    <img key={index} src={image} alt={`Image ${index + 1}`} className="imgScrollCarousel" />
                                </SwiperSlide>

                            ))}

                        </Swiper>


                    </span>
                    <span className='carouselTextName'>{name}</span><br />
                    <span className='carouselTextPrice'>{price}</span><br />
                    <span className='carouselTextReview'>Used:&nbsp;{reviewText}</span><br />
                    <img src={FlagIndia} className="FlagIndia" />&nbsp;<span className='carouselTextCountry'>{country}</span><br />


                </div>
            </div>
        )
    }




    return (
        <>
            <div className='scrollDiv1'>
                <div id='reverbStaffPicks'>
                    <span>Reverb Staff Picks</span>
                </div>

                <div className='HomeCartSeries1'>
                    {cards.map(card => (
                        <Card key={card.name} {...card} />

                    ))}
                </div>

            </div>

            <div className='scrollDiv2'>
                <div id='instruTitle'>
                    <span >Shop By Instrument</span>
                </div>
                <div className='InstrumentCard'>
                    {InstruDetails.map(cardx => (
                        <InstruCards key={cardx.name} {...cardx} />
                    ))};

                </div>
            </div>

            <div className='ExploreDiv'>
                <p style={{ fontSize: 35, textAlign: 'center', margin: 30 }}>Explore the latest news, gear demos, how-tos, and more</p>
                <div className='ExploreContainer'>
                    <div className='ExploreCard'>
                        <img src={explore1} className='ExploreCardImage' />
                        <p className='exploreCardText'>Josh Scott Pours Gas on His Bad Monkey Scandal</p>
                        <p className='ReviewText'>NEWS AND REVIEWS</p>
                    </div>

                    <div className='ExploreCard'>
                        <img src={explore2} className='ExploreCardImage' />
                        <p className='exploreCardText'>A Rare White Yamaha CS01 | Fess' Find</p>
                        <p className='ReviewText'>NEWS AND REVIEWS</p>
                    </div>

                    <div className='ExploreCard'>
                        <img src={explore3} className='ExploreCardImage' />
                        <p className='exploreCardText'>Video: Jimi Hendrix Experience Tape-Flanged Drums</p>
                        <p className='ReviewText'>TIPS AND HOW-TO'S</p>
                    </div>
                </div>
            </div>


            <div className='banner2'>
                <img src={Email} id="textureImg" />
                <div id='bannerBackGround'>
                    <div className='banner2Card'>
                        <p id="banner2pDiv">Get the Best of Reverb in Your Inbox</p>
                        <input type='text' placeholder='Your Email' id='Banner2Input' />       <button id='banner2btn' >Subscribe</button><br />
                        <p id='smallBanner2'>By clicking Subscribe, I agree to receive exclusive offers & promotions, news & reviews, and personalized tips for buying and selling on Reverb.</p>
                    </div>
                </div>

            </div>


            {/* --------------third scroll cards-------------- */}


            <div>
                <div className='scrollHeading3'>
                    <span>New gear added every minute. What will you find?</span>
                </div>
                <div id='scroll3BtnDiv' >
                    <span id='scroll3Btn'>Sell More <FaLongArrowAltRight id='arrowicon'/></span>
                </div>
                <div className='lastScrollcard'>
                    {LastScrollCard.map(cardx => (
                       
                        <ScrollCarouselCard key={cardx.name} {...cardx} />
                    ))};

                </div>
            </div>




            <div className='banner3'>
                <p id='banner3Label'>Blink-and-you’ll-miss-it deals. This gear won’t last long.</p>
                <div className='banner3Card'>
                    <img src={ReverbSell} id="textureImg" />

                    <div id='banner3background'>
                        <div id='textureTexts'>
                            <strong>Sell Your Gear on Reverb</strong>
                            <ul>
                                <li className='banner3li'>&#10003; &nbsp;Secure Transactions & Safe Shipping </li>
                                <li className='banner3li'>&#10003; &nbsp;List for Free in Minutes</li>
                                <li className='banner3li'>&#10003; &nbsp;Extensive Buyer Community</li>
                            </ul>
                            <button id='banner3btn'>Sell Your Gear</button>
                        </div></div>
                </div>
            </div>


        

        </>
    )
}

export default HomeCart1
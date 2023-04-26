import React from 'react';
import Styles from "./dropdown.module.css"
import { useState } from 'react';
import Navbar from '../Nav/Navbar';
import { Container } from '@mui/system';

const Dropdown = () => {
    const [state, setState]= useState(false);
    
    

    const showdropdown=()=>{
   setState(true);
    }

    const hiddropdown=()=>{
        setState(false);
    }
  return (
    <div>
         <div onClick={showdropdown} onMouseLeave={hiddropdown}>
   <p >Guiters</p>
    {state ?(  <div className={Styles.buy} onMouseEnter={showdropdown}>
    
    <div><Navbar/></div>
    <div className={Styles.container}>
  <div className={Styles.contain}>
    <div className={Styles.close}>
      <h1>Guitars</h1>
      <h1>Close</h1>
    </div>
    <div className={Styles.electric}>
    <div>
      <h3>Electric Guitars</h3>
      <hr/>
      <p>Solid Body</p>
      <p>Left-Handed</p>
      <p>Semi-Heollow</p>
      <p>Hollow Body</p>
      <p>12-String</p>
      <p>Archtop</p>
      <p>Baritone</p>
      <p>pedal Steel</p>
      <p>Tenor</p>
      <p>Lap Steel</p>
      <p>Mini/Travel</p>
      <p>Vintage Electric Guitars</p>
    </div>
    <div>
      <h3>Acoustic Guitars</h3>
      <hr/>
      <p>Dradnought</p>
      <p>Classical</p>
      <p>Om and Auditirium</p>
      <p>Parlor</p>
      <p>12-String</p>
      <p>Left-Handed</p>
      <p>Resonator</p>
      <p>Archtop</p>
      <p>Jumbo</p>
      <p>Concert</p>
      <p>Tenor</p>
      <p>Baritone</p>
      <p>Mini/Travel</p>
      <p>Vintage Acoustic Guitars</p>
    </div>
    <div>
      <h3>Guitar Parts and Accessories</h3>
      <hr/>
      <p>Accessories</p>
      <p>Guitar Pickups</p>
      <p>Guitar Necks</p>
      <p>Guitar Bridges</p>
      <p>Pickguards</p>
      <p>Tuning Heads</p>
      <p>Knobs</p>
      <p>Bass Guitar Parts</p>
      <p>Bass Pickups</p>
      <p>Acoustic Pickups</p>
      <p>Bridge Pins</p>
     
    </div>
    <div>
      <h3>Popular Products</h3>
      <hr/>
      <p>Fender Stratocaster</p>
      <p>Fender Telecaster</p>
      <p>Gibson Les Paul</p>
      <p>Epiphone Les Paul</p>
      <p>Gibson SG</p>
      <p>Fender Mustang</p>
      <p>Fender Jaguar</p>
      <p>Fender Jazzmaster</p>
      <p>Paul Reed Smith Sliver Sky</p>
    </div>
    
    </div>
    <div className={Styles.bass}>
      <h3>Bass Guitars</h3>
      <hr/>
      <p>4-String</p>
      <p>5-String or More</p>
      <p>Short Scale</p>
      <p>Left-Handed</p>
      <p>Fretless</p>
      <p>Acoustic Bass Guitars</p>
    </div>
    
  </div>
  <div className={Styles.guiter}>
  <div className={Styles.left}>
  <div>
      <img width={300} src='https://reverb-res.cloudinary.com/image/upload/v1590188040/1-Guitars---Player-Grade-Vintage_lwco1o.jpg'/>
    </div>
    <div>
      <h3>Curated by Reverb</h3>
      <hr/>
      <p>Deals and Steals</p>
      <p>Prince</p>
      <p>Player Grade Vintage Guitars</p>
      <p>Fender Bass Guiters</p>
      <p>Artisanal Acoustics</p>
      <p>Collectors Grade vintage Guitars</p>
      <p>Selling Resourse</p>
    </div>
  </div>
    
  </div>
    </div>
      
      
    </div>):null}
   
   </div>
    </div>
  )
}

export default Dropdown
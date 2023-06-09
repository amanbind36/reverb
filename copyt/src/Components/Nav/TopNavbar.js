import React from 'react'
import "./topnavabar.css";
import { Link } from 'react-router-dom';
import { GoSearch } from "react-icons/go"
import { AiOutlineHeart, AiOutlineAppstore, AiOutlineShoppingCart } from "react-icons/ai"
import { fontSize } from '@mui/system';

const TopNavbar = () => {
  return (
    <>
      <div className='container mob-dis' >
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className='logo-img'>
            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="28" viewBox="0 0 98 28" aria-hidden="true">
              <g clip-path="url(#a)">
                <path d="M89.947 16.036c-.34.255-2.036 1.315-1.018-1.527.552-1.528 3.03-8.468 
                1.188-9.928-.9-.712-2.766-1.213-3.648-.339-.891.89-.594 2.74-.594 4.158 0 2.884-1.07 
                5.854-1.612 7.296-1.265 1.061-2.113 1.655-2.546 1.782 0 0 
                .73-2.715-1.273-2.63-2.443.102-3.054 2.766-3.733 
                2.715-.891-.068.136-1.866-.085-2.376-.11-.254-.848-.373-2.036-.339-2.8.085-2.8 
                2.376-2.8 2.715 0 1.018-.552 3.284-.849 5.023-.738.73-2.885 2.614-5.006 2.614-1.357 
                0-3.462-.976-3.648-3.055-.043-.51.254-.679.424-.679.255 0 1.926.102 3.903-.848 
                1.612-.78 2.545-1.952 2.545-3.564 0-.933-.076-2.715-3.563-2.715-3.564 0-6.584 1.612-7.637 
                4.751-1.824-1.697-2.163-2.766-2.29-3.139-.17-.509-.128-1.442-1.782-1.442-.085 0-2.121 
                0-2.121 1.866 0 .68 1.697 1.612 1.357 2.376-.407.933-1.867 5.685-4.836 5.685-2.614 
                0-.849-5.006-.51-6.11.255-.678.917-3.054.595-3.393-.162-.17-.68-.255-1.443-.255-2.29 
                0-3.818 2.715-4.497 7.721-1.926 1.927-3.648 2.885-5.176 2.885-1.103 
                0-2.952-.212-3.623-2.316-.152-.484 6.932-2.036 6.932-5.83 0-1.102 0-2.714-3.563-2.714-2.206 
                0-4.243.679-5.685 1.867-.721.593-2.63 2.545-2.376 6.533-.186.17-1.103.679-2.715.679-2.545 
                0-3.988-4.752-4.157-5.516-.594-2.8-2.665-3.504-2.206-3.818.916-.67 2.104-.509 5.345-2.885 
                1.867-1.527 2.885-3.478 2.885-5.6 0-1.187-.416-3.792-3.394-4.836a16.97 16.97 0 0 
                0-5.6-.848c-1.358 0-5.94.084-10.352 1.527-5.6 2.206-8.485 5.26-8.74 9.503-.084 1.273.213 
                4.157 3.989 4.157 3.445 0 5.023-2.715 
                4.921-3.648-.399.195-2.02.568-2.673-.34-1.349-1.832.085-5.192 2.588-6.872 2.104-1.417 
                4.243-2.206 6.279-2.291-.34.509-1.273 1.951-1.697 3.224-.594 1.697-5.09 16.97-5.855 
                20.279-.254 1.188-.254 1.765 0 1.782 1.613.135 5.117.195 5.176-.594.323-4.412 2.215-9.758 
                2.46-11.285.094-.594.595-.679.764-.679.425 0 .849.34 1.104.594.593.764 1.187 2.037 1.103 
                4.158-.085 1.697-.238 7.551 4.581 7.551 3.241 0 6.38-2.231 6.619-2.63.339.848 1.612 2.8 
                5.6 2.8 4.412 0 7.466-2.97 7.551-2.885.085.085.093.255.085.424-.034.68.212 2.419 2.97 2.376 
                5.981-.085 9.503-4.904 10.181-8.145 1.112 1.188 1.969 1.552 2.206 1.612 0 .763-1.51 6.618 
                5.77 6.618 2.86 0 5.26-1.078 7.212-3.224-.144.763-.704 2.274-.424 2.97.034.084 2.19 0 3.648 
                0 .552 0 .51-.12.552-.29.34-1.289-.22-4.496 2.758-8.45.322-.424.763-.62.941-.153.866 2.18 
                3.14 1.383 5.516-1.12-.51 1.935-.764 3.598-.764 5.006 0 1.782.509 5.388 5.43 5.26 
                6.686-.169 8.315-5.005 8.315-8.569 0-1.035-.636-3.818-3.903-3.733-1.442.034-2.375.594-3.054 
                1.103h-.009zm2.121 4.667c-.339 1.832-2.222 5.812-3.648 
                5.684-1.841-.17-1.442-3.563-1.188-5.006.34-1.357 1.383-4.794 3.479-4.666 2.087.127 
                1.697 2.206 1.358 3.988zM65.681 15.78c2.316-.085 1.255 2.63-.085 3.818-1.918 1.698-2.868 
                1.528-3.182 1.273-.399-.34-.144-1.434.594-2.757.764-1.392 1.425-2.283 2.673-2.334zm-27.322 
                1.36c.068.764-1.442 3.521-5.006 4.497-.339-.95.221-2.401.594-3.055.272-.483 1.366-2.655 
                2.97-2.8.874-.059 1.358.39 1.442 1.358zM20.117 1.612c.34 0 1.273.34 2.036 1.188.51.593 
                1.103 1.612.934 3.139-.17 1.612-.594 3.054-1.188 4.158a7.366 7.366 0 0 1-1.952 2.29c-1.323 
                1.137-4.132 1.307-4.327.934-.17-.255-.085-.679.34-1.867.576-1.917 2.74-8.357 
                3.224-9.079.17-.34.475-.763.933-.763z">
                </path>
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h97.576v28H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div></Link>
        <div className='top-search-mob'>
          <div className='top-search'>
            <div className='flex-parmanent'>
              <input className='top-search-input' type="text" placeholder='Shop for used & new music gear...' />
              <div className='search-icon'>
                <GoSearch style={{ fontSize: '25px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className='sell-gear'>
          <div className='sell-gear-btn'>
            <p style={{ fontSize: '20px' }}>Sell Your Gear</p>
          </div>
        </div>

        <div className='watch-feed-cart'>

          <div className='icon2 mob-dis'>
            <div className='sell'>
              <p style={{ fontSize: '15px' }}>SELL</p>
            </div>
            <div className='watch-list-div'>
              <AiOutlineHeart style={{ marginLeft: '5px' }} className='icon3' />
              <p className='invisible-in-mob-display' >Watch List</p>
            </div>
            <div className='my-feed-div'>
              <AiOutlineAppstore style={{ marginLeft: '5px' }} className='icon3' />
              <p className='invisible-in-mob-display'>My Feed</p>
            </div>
            <div className='cart-div'>
              <AiOutlineShoppingCart className='icon3' />
              <p className='invisible-in-mob-display'>Cart</p>
            </div>
            <div className='menu'>
              <p style={{ fontSize: '15px' }}>MENU</p>
            </div>
          </div>
        </div>

        <div className='sign-log-in '>
          <div className='flex-parmanent'>
            <div style={{ margin: '10px', width: '50px' }}>
              <Link to="/SignIn" style={{ textDecoration: "none" }}>
                <p className='color-orange' style={{ fontSize: '15px' }}>
                  Sign Up
                  </p>
              </Link>
            </div>
            <div style={{ margin: '10px', width: '50px' }}>
              <Link to="/LogIn" style={{ textDecoration: "none" }}>
                <p className='color-orange' style={{ fontSize: '15px' }}>
                  Log In
                  </p>
              </Link>
            </div>
          </div>
        </div>




      </div>
      <div className='search-2nd'>
        <div className='top-search '>
          <div className='flex-parmanent'>
            <input className='top-search-input' type="text" placeholder='Shop for used & new music gear...' />
            <div className='search-icon'>
              <GoSearch style={{ fontSize: '25px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNavbar
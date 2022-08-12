// a biriyani shop poster
import '../components/Banner.css';
// import { Component } from 'react';
import React from 'react';


function Banner() {


    const onHideButtonClick= () => {
        alert('Button Clicked');
        // console.log("hello");
    };
    
        return(
        <div>
            <div className="card mx-auto">
                    <div className="card-body ">
                        <h1 className='card-title text-danger bg-dark'>BIRIYANI 360</h1>
                        <img className='card-img-top' src="https://www.pepperdelight.com/wp-content/uploads/2017/03/pepper-delight-prawn-biriyani-4.jpg"></img>
                        <div className='list'>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;Price List</h3>
                            <ul className='list-items'>
                                <li>Prawn Biriyani  -  $20</li>
                                <li>Fish Biriyani  -  $20</li>
                                <li>Chicken Biriyani  -  $20</li>
                                <li>Mutton Biriyani  -  $20</li>
                                <li>Beef Biriyani  -  $20</li>
                            </ul>
                        </div>
                        <div className='icon'>
                            <a onClick={onHideButtonClick} href='https://www.google.com/maps'><img className='location' src='https://cdn-icons-png.flaticon.com/512/854/854878.png'></img></a>
                            <span className='text-danger'>Chennai</span>
                        </div>
                        <div className='wp'>
                            <button><img className='wp-icon' src='https://cdn-icons.flaticon.com/png/512/1377/premium/1377218.png?token=exp=1660295491~hmac=4dd4c8a497f4dd98f70a4481f70ee07d'></img></button>
                            <b><span className='text-white'>&nbsp;&nbsp;8072616117</span></b>
                        </div>
                    </div>
            </div>
        </div>
        );
}

export default Banner;
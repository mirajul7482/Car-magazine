import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer " fixed="bottom">
            <div>
                <h2>About Car Magazine Website</h2>
                <p>Car magazine website is the best wbsite in the world for buying caers</p>
            </div>
            <div>
                <h2>Quick Links</h2>
                <h4> <Link to="/home">Main services</Link></h4>
                <h4> <Link to="/login">Log In</Link></h4>
            </div>
            
            <div>
                <h2>Latest News</h2>
                <div className="d-flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBWa85Oc6E9ew70-TvpZ8VO0cRvgU6e_4-g&usqp=CAU" alt="" />
                    <div>
                        <h4>BMW CEO belittles Tesla in second swipe at automaker in EV wars</h4>
                        <p>Now we give up 30% off  visitors.</p>
                    </div>
                </div>
                <div className="d-flex">
                    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Bugatti/Bugatti-Divo/6528/1550827902051/front-left-side-47.jpg" alt="" />
                    <div>
                        <h4>BMW 4654 C Model</h4>
                        <p>This is the latest model coming soon </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;
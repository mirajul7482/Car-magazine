import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <Carousel className="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://www.automotiveaddicts.com/wp-content/uploads/2020/11/2020-chevrolet-corvette-side.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption >
                    
                    <h1>The Most Anticipated Cars of 2021</h1>
                    <p>Like almost every industry, automotive manufacturing took a beating early in 2020. Sales dropped as buyers scaled back their spending, </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/volkswagen-id4-2021-1607016698.jpg?crop=0.839xw:0.839xh;0.0743xw,0.104xh&resize=768:*"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1>2021 Volkswagen ID.4</h1>
                    <p>Volkswagen’s first purpose-built electric car—debuting the brand’s widely adaptable, all-electric MEB platform, which is modular for greater adaptability to </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-golf-r-europeanmodel-1607017308.jpg?crop=0.751xw:0.951xh;0.111xw,0.0492xh&resize=768:*"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>2022 Volkswagen Golf R</h1>
                    <p>Hot hatchbacks still have a firm place in enthusiast hearts, and the Volkswagen Golf R has always been one of our favorites. A sizable upgrade from the similarly</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
    );
};

export default TopBanner;
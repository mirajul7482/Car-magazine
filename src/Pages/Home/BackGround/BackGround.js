import React from 'react';
import { Button, Container } from 'react-bootstrap';

const BackGround = () => {
    return (
        <div className="w-100">
            <Container>
                <div className="d-flex align-items-center justify-content-center" style={{height:'100vh',width:'100%'}}>
                    <div className="w-100">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src="https://cdn.motor1.com/images/mgl/P4ww2/s3/oliver-zipse.webp" alt="" />
                            </div>
                            <div className="col-12 col-md-6">
                                <h1>BMW CEO belittles Tesla in second swipe at automaker in EV wars</h1>
                                <p>Tesla’s dominance in electric vehicles is under threat as traditional OEMs begin rolling out their own models. BMW is one such company, introducing the i4 and iX this year, and it wants a piece of the EV pie</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BackGround;
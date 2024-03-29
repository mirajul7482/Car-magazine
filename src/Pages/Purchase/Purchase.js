import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import NavBar from '../Shared/NavBar/NavBar';

const Purchase = () => {
    const [singleItem,setSingleItem] = useState({})
    const {id} = useParams()
    const { register, handleSubmit} = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
        if (!data.productName) {
            data.productName = singleItem?.productName
        }
        data.status = 'pending';
        data.img = singleItem?.img;
        data.price = singleItem?.price
        fetch('https://stark-reef-04255.herokuapp.com/order',{
            method:'POST',
            headers : {'content-type': 'application/json'},
            body:JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Success fully added your order')
            }
        })
    };


    useEffect(()=>{
        fetch(`https://stark-reef-04255.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setSingleItem(data))
    },[])



    return (
        <div>
            <NavBar/>
                <div className="row">
                    <div className="col-12 col-md-12">
                    <Card className="bg-dark text-white">
                        <Card.Img id="overlayImg" style={{height:'90vh'}} className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmn4oZjJnCosb5MbvEgRGf5oTFi6e1MeEFtbguf4VEfuCSi2PEQp03cB1hMixdRohAYY8&usqp=CAU" />
                        <Card.ImgOverlay>
                            <Container>
                            <div className="row mt-5">
                                <div className="col-12 col-md-4">
                                    <div className="p-5" style={{background:'white'}}>
                                        <div style={{height:'150px',width:'100%'}}>
                                            <img src={singleItem?.img} alt="" className="w-100 h-100" />
                                        </div>
                                        <h5>{singleItem?.productName}</h5>
                                        <h1>${singleItem?.price}</h1>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8">
                                    <div className="p-5" style={{background:'red'}}>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input className="w-100" type="text" defaultValue={user?.displayName} {...register("name", { required: true })} /><br/><br/>
                                        <input className="w-100" type="email" defaultValue={user?.email} {...register("email", { required: true })} /><br/><br/>
                                        <input className="w-100" type="text" defaultValue={singleItem?.name} {...register("productName")} /><br/><br/>
                                        <input className="w-100" type="number" placeholder="Qauntity" {...register("quantity", { required: true })} /><br/><br/>
                                        
                                        <input type="submit" />
                                    </form>
                                    </div>
                                </div>
                            </div>
                            </Container>
                        </Card.ImgOverlay>
                    </Card>
                    </div>
                </div>
        </div>
    );
};

export default Purchase;
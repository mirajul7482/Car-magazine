import React from 'react';
import { Button, Container } from 'react-bootstrap';
import ManegeOrder from './ManegeOrder/ManegeOrder';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Pay from './Pay/Pay';
import MyOrder from './MyOrder/MyOrder';
import Review from './Review/Review';
import AddProduct from './AddProduct/AddProduct';
import ManageProduct from './ManageProduct/ManageProduct';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer'
import AdminRoute from './AdminRoute/AdminRoute';
const DashBord = () => {
    let { path, url } = useRouteMatch();
    const {logOut,admin} = useAuth()
    return (
        <>
        <div className="text-light w-100 py-3 border-bottom ">
            <h3 className="p-0 m-0 text-center">DASHBORD</h3>
        </div>
        <div>
            <Container  bg="light" variant="light">
                <div className="row ">
                <div className="col-12">
                <NavLink style={{textDecoration:'none', background: '#6C757D', color: 'white'}} className=" p-2" to='/home'>Home</NavLink>
                <NavLink style={{textDecoration:'none', background: '#6C757D', color: 'white' }} className=" p-2" to={`${url}`}>My Order</NavLink>
                <NavLink style={{textDecoration:'none', background: '#6C757D', color: 'white'}} className=" p-2" to={`${url}/pay`}>Pay bill</NavLink>
                <NavLink style={{textDecoration:'none', background: '#6C757D', color: 'white'}} className=" p-2" to={`${url}/review`}>Review</NavLink>
                {
                    admin && <NavLink style={{textDecoration:'none', background: '#6C757D', color: 'white'}} className=" p-2" to={`${url}/manageAllOrder`}>Manage Order</NavLink>
                }
                {
                    admin && <NavLink style={{textDecoration:'none', background: '#6C757D', color: 'white'}} className="p-2" to={`${url}/addProduct`}>Add Product</NavLink>
                }
                {
                    admin && <NavLink style={{textDecoration:'none', background: '#6C757D', color: 'white'}} className=" p-2" to={`${url}/makeAdmin`}>Make Admin</NavLink>
                }
                {
                    admin && <NavLink style={{textDecoration:'none', background: '#6C757D', color: 'white'}} className=" p-2" to={`${url}/manageProduct`}>Manage Products</NavLink>
                }
                <Button onClick={logOut}>Log Out</Button>
                </div>
                <div className="col-12 col-md-9">
                <Switch>
                    <Route exact path={path}>
                    <MyOrder/>
                    </Route>

                    <AdminRoute exact path={`${path}/makeAdmin`}>
                    <MakeAdmin/>
                    </AdminRoute>

                    <Route exact path={`${path}/pay`}>
                    <Pay/>
                    </Route>

                    <AdminRoute exact path={`${path}/manageAllOrder`}>
                    <ManegeOrder/>
                    </AdminRoute>

                    <Route exact path={`${path}/review`}>
                    <Review/>
                    </Route>

                    <AdminRoute exact path={`${path}/manageProduct`}>
                    <ManageProduct/>
                    </AdminRoute>

                    <AdminRoute exact path={`${path}/addProduct`}>
                    <AddProduct/>
                    </AdminRoute>
                </Switch>
                </div>
                
                </div>
            </Container>
        </div>
        <Footer/>
        </>
    );
};

export default DashBord;
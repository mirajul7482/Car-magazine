import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Explore from './Pages/Explore/Explore';
import DashBord from './Pages/DashBord/DashBord';
import Purchase from './Pages/Purchase/Purchase';
import AuthProvider from '../src/AuthProvider/AuthProvider'
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import Review from './Pages/DashBord/Review/Review';
import MakeAdmin from './Pages/DashBord/MakeAdmin/MakeAdmin';
import MyOrder from './Pages/DashBord/MyOrder/MyOrder';
function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/explore">
            <Explore/>
          </Route>
          
          <PrivetRoute path="/dash">
            <DashBord/>
          </PrivetRoute>
          <PrivetRoute path="/review">
            <Review/>
          </PrivetRoute>
          <PrivetRoute path="/admin">
            <MakeAdmin/>
          </PrivetRoute>
          <PrivetRoute path="/myorders">
            <MyOrder/>
          </PrivetRoute>
          <PrivetRoute path="/purchase/:id">
            <Purchase/>
          </PrivetRoute>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/regi">
            <Register/>
          </Route>

        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

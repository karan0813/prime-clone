import React from 'react';
import './App.css';
import Channels from './com/Channels';
import Navbar from './com/Navbar';
import Poster from './com/Poster';

import Login from './com/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './homecomp/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
          <div className="app">
     
             <Navbar />
             <Poster dis={true} tittle="Welcome to Prime Video" btn="Start your 30-Day free trail" subt="Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals" imgUrl="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg"/>
             {/* chanels */}
             <Channels />
             <Poster tittle="One membership, many benefits" btn="Get Started" subt="Your Prime membership now also includes ad-free music along with unlimited free, fast delivery on eligible items, exclusive access to deals & more.Get started" imgUrl="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/PRIME_multi-benefit_MAGNET_2X._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg"/>
             <Poster order1={true}  tittle="Even better with Fire TV Stick" btn="Get Started" subt="The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds." imgUrl="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._SX1440_CR0,0,865,675_QL80_AC_FP_.jpg"/>
             <Poster tittle="Family Friendly" btn="Get Started" subt="With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem." imgUrl="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg"/>

          </div>
             <footer className="h-32 w-full bg-[#202020] flex justify-center">
                <img className="object-contain  w-40 h-20" src='https://logodownload.org/wp-content/uploads/2018/07/prime-video-1.png'/>
             </footer>
     

          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
      </Switch>
      </Router> 
     
         
    </>
  );
}

export default App;

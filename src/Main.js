import React from 'react'
import Header from './components/Header.jsx'
import Arvr from './components/Arvr.jsx';
import Full from './components/Fullpart.jsx';
import Products from './components/Products.jsx';
import Subscribe from './components/subscribe.jsx';
import Prac from './components/practise.jsx'
import Footer from './components/Footer.jsx'

const Main = () => {
    return (
        <div>
            <Header />
            <Arvr />
            <Full />
            <Products />
            <Subscribe />
            <Footer/>
            {/* <Prac/> */}
        </div>
    )
}

export default Main

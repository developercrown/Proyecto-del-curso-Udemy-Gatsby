import React from "react";
import Header from '../Header';
import Footer from '../Footer';

const PrimaryLayout = ({children}) => {
    return <div>
    <Header/>
    <div className="container">
        <div className="row justify-content-center">
            {children}
        </div>
    </div> 
    <Footer/>
</div>
}

export default PrimaryLayout;
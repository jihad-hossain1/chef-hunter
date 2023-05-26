import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const Main = () => {
    return (
        <div className=''>
            <div className='mx-6 md:mx-44'>
                <Header></Header>
            </div>
            <div className='min-h-screen mx-6 md:mx-44'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
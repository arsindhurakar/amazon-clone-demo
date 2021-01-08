import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

import banner from '../../assets/images/amazon-banner.jpg';
import findYourIdealTv from '../../assets/images/product-findYourIdealTv.jpg';
import gamingAccessories from '../../assets/images/product-gamingAccessories.jpg';
import beautyPicks from '../../assets/images/product-beautyPicks.jpg';
import getFitAtHome from '../../assets/images/product-getFitAtHome.jpg';
import startOnHoliday from '../../assets/images/product-startOnHoliday.jpg';
import shopLaptops from '../../assets/images/product-shopLaptops.jpg';
import computerAccessories from '../../assets/images/product-computerAccessories.jpg';
import ProductCategory from '../../views/productCategory';
import Ads from '../../views/ads';

function Home() {

    const history = useHistory();

    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__banner'
                    src={banner} alt=''
                />
                <div className='home__row'>
                    <ProductCategory
                        onClick={() => history.push('/find-your-ideal-tv')}
                        title='Find your ideal TV'
                        image={findYourIdealTv}
                        extras='See more'
                    />
                    <ProductCategory
                        onClick={() => history.push('/gaming-accessories')}
                        title='Gaming Accessories' 
                        image={gamingAccessories} 
                        extras="Shop our full selection"
                    />
                    <ProductCategory 
                        onClick={() => history.push('/beauty-picks')}
                        title='Beauty Picks' 
                        image={beautyPicks} 
                        extras='Shop now'
                    />
                    <Ads />
                </div>
                <div className='home__row'>
                    <ProductCategory
                        onClick={() => history.push('/start-on-your-holiday-early')}
                        title='Start on your holiday early' 
                        image={startOnHoliday} 
                        extras='Shop now'
                    />   
                    <ProductCategory 
                        onClick={() => history.push('/get-fit-at-home')}
                        title='Get fit at home' 
                        image={getFitAtHome} 
                        extras='Explore now'
                    />                                 
                    <ProductCategory
                        onClick={() => history.push('/laptops-and-tablets')}
                        title='Shop Laptops & Tablets' 
                        image={shopLaptops} 
                        extras="See more"
                    />
                    <ProductCategory
                        onClick={() => history.push('/computers-and-accessories')}
                        title='Computers & Accessories' 
                        image={computerAccessories} 
                        extras='Shop now'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;

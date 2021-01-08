import React from 'react';

import NavbarProd from '../../views/navbarProd';
import Product from '../../views/product';

import Layout from '../../components/layout';
import Sidebar from '../../components/sidebar';
import Content from '../../components/content';
import Row from '../../components/row';
import { gamingAccessoriesData } from '../../utils/productDatas';

function GamingAccessories() {

    const departments = ['Accessories']
    return (
        <div className='gamingAccessories'>
        <Layout>
            <Sidebar>
                <NavbarProd departments={departments}/>
            </Sidebar>
            <Content>
                <Row>
                    {
                        gamingAccessoriesData.map(data => {
                            return <Product 
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                img={data.img}
                                alt={data.alt}
                                by={data.by}
                                price={data.price}
                                specificity={data.specificity}
                                rating={data.rating}
                            />
                        })
                    }
                </Row>  
            </Content>       
        </Layout>
        </div>   
    )
}

export default GamingAccessories;

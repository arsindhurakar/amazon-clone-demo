import React from 'react';

import NavbarProd from '../../views/navbarProd';
import Product from '../../views/product';

import Layout from '../../components/layout';
import Sidebar from '../../components/sidebar';
import Content from '../../components/content';
import Row from '../../components/row';
import { beautyPicks } from '../../utils/productDatas';

function BeautyPicks() {

    const departments = ['Accessories']
    return (
        <div className='beautyPicks'>
        <Layout>
            <Sidebar>
                <NavbarProd departments={departments}/>
            </Sidebar>
            <Content>
                <Row>
                    {
                        beautyPicks.map(data => {
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

export default BeautyPicks;

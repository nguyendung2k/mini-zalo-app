import React, { useEffect, useState } from 'react'
import {
    Card,
    GridItem,
    Swiper,
    SwiperSlide,
    Text,
    useStore,
} from 'zmp-framework/react'

interface productProps {
    onClick?: () => void
}

const ProductList = ({ onClick }: productProps) => {
    const products = useStore('products')

    return (
        <div className="product">
            <Text bold className="product-type">
                {products[0].category}
            </Text>
            <div className="product-items">
                <Swiper
                    id="swiper"
                    // navigation
                    speed={400}
                    slidesPerView={2}
                    spaceBetween={50}
                    onSlideChange={(sw) => {
                        // console.log('activeIndex: ', sw.activeIndex)
                    }}
                >
                    {products[0].data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="product-swiper">
                                <Card inset className="product-item">
                                    <GridItem onClick={onClick}>
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="product-image"
                                        />
                                        <Text
                                            style={{
                                                fontWeight: '500',
                                                marginTop: '10px',
                                            }}
                                            className="product-name"
                                        >
                                            {item.name}
                                        </Text>
                                        <Text
                                            style={{ color: '#333' }}
                                            className="product-price"
                                        >
                                            {item.price} VND
                                        </Text>
                                    </GridItem>
                                </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default ProductList

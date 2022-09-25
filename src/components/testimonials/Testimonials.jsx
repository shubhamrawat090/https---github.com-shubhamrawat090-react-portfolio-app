import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.avif'
import AVTR2 from '../../assets/avatar2.avif'
import AVTR3 from '../../assets/avatar3.avif'
import AVTR4 from '../../assets/avatar4.avif'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid voluptatibus veritatis tempore quis pariatur. Aut facilis maiores laudantium repellat reprehenderit magnam quis, ab, nihil cumque dolorum necessitatibus consectetur obcaecati recusandae?',
    },
    {
        avatar: AVTR2,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid voluptatibus veritatis tempore quis pariatur. Aut facilis maiores laudantium repellat reprehenderit magnam quis, ab, nihil cumque dolorum necessitatibus consectetur obcaecati recusandae?',
    },
    {
        avatar: AVTR3,
        name: 'Kwame Despite',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid voluptatibus veritatis tempore quis pariatur. Aut facilis maiores laudantium repellat reprehenderit magnam quis, ab, nihil cumque dolorum necessitatibus consectetur obcaecati recusandae?',
    },
    {
        avatar: AVTR4,
        name: 'Nana Ama McBrown',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid voluptatibus veritatis tempore quis pariatur. Aut facilis maiores laudantium repellat reprehenderit magnam quis, ab, nihil cumque dolorum necessitatibus consectetur obcaecati recusandae?',
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
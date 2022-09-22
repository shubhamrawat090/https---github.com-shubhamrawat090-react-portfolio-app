import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.avif'
import AVTR2 from '../../assets/avatar2.avif'
import AVTR3 from '../../assets/avatar3.avif'
import AVTR4 from '../../assets/avatar4.avif'

const data = [
    {
        id: 1,
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid voluptatibus veritatis tempore quis pariatur. Aut facilis maiores laudantium repellat reprehenderit magnam quis, ab, nihil cumque dolorum necessitatibus consectetur obcaecati recusandae?',
    },
    {
        id: 2,
        avatar: AVTR2,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid voluptatibus veritatis tempore quis pariatur. Aut facilis maiores laudantium repellat reprehenderit magnam quis, ab, nihil cumque dolorum necessitatibus consectetur obcaecati recusandae?',
    },
    {
        id: 3,
        avatar: AVTR3,
        name: 'Kwame Despite',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid voluptatibus veritatis tempore quis pariatur. Aut facilis maiores laudantium repellat reprehenderit magnam quis, ab, nihil cumque dolorum necessitatibus consectetur obcaecati recusandae?',
    },
    {
        id: 4,
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

            <div className="container testimonials__container">
                {
                    data.map(({ id, avatar, name, review }) => {
                        return (
                            <article key={id} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimotionalImg from '../../img/testimonial/photo.png'
import testimotionalIcon from '../../img/testimonial/icon.png'


export const Testimonial = () => {
    const data = [
        {
            title: 'They are awesome!',
            description: 'Kollit a do eiusmod tempor incididunt ut labore et do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name: 'Kabir Manja',
            position: 'Music Producer',
        },
        {
            title: 'Are incredible',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam amet facilis qui pariatur iure quae inventore placeat facere exercitationem labore incidunt tempore aliquid dolores eaque dolorum eveniet, illo corporis cupiditate?',
            name: 'Salii Vladislav',
            position: 'Programmer',
        },
        {
            title: 'Team Work',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
            name: 'Pasha Sokyr',
            position: 'Developer',
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <div className="testimonial">
            <div className="testimonial__inner">
                <div className="testimonial__block">
                    <div className="testimonial__block_subtitle _anim-items _anim-no-hide">Testimonial</div>
                    <div className="testimonial__block_subtitle_photo">
                        <img src={testimotionalIcon} alt=""/>
                    </div>
                    <div className="testimonial_slider">
                        <Slider {...settings}>
                            {
                                data.map(item =>
                                    <div className="testimonial_slider_item" key={item.name}>

                                        <div className="testimonial__block_title">{item.title}</div>
                                        <div className="testimonial__block_text ">
                                            {item.description}
                                        </div>
                                        <div className="testimonial__block_signature">
                                            <div className="testimonial__block_signature_name">{item.name}</div>
                                            <div className="testimonial__block_signature_prof">{item.position}</div>
                                        </div>
                                    </div>
                                )
                            }
                        </Slider>
                    </div>
                </div>
                <div className="testimonial__photo">
                    <img src={testimotionalImg} alt=""/>
                </div>
            </div>
        </div>

)
}
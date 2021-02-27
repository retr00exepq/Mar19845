import React from 'react';
import Slider from "react-slick";
import sofa from './sillon.jpg'
import './Categorias.css'

function Categorias() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div>
            <h1>Muebles Y Camas</h1>
            <Slider {...settings} className="SliderC">
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
            </Slider>
        </div>
    )

}
export default Categorias;
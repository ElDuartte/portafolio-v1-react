import React, { useState } from "react";
import { SliderData } from "./SliderData.jsx";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	console.log(current);

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider">
			<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
			<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
			{SliderData.map((slide, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<div>
								<img src={slide.image} alt={slide.alt} className="image" />

								<div className="info">
									<h4>{slide.title}</h4>
									<p>{slide.info}</p>
								</div>
							</div>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default Slider;

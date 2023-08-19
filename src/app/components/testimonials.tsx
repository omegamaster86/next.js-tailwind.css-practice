import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carsousel-item";

const Testimonials: React.FC = () => (
<Carousel className="bg-black text-white py-10 lg:py-20 text-center">
    <CarouselItem index={0}>
        <div>test</div>
    </CarouselItem>
</Carousel>
)

export default Testimonials
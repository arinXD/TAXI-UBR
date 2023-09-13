import "./css/general_tour.css"
// import ScrollCarousel from 'scroll-carousel';
import React, { useEffect, useState } from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import { Link } from "react-router-dom";
import Destination from './Destination';
import Footer from './Footer';
const General_tour = () => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log(number);
    })
    return (
        <>
            <div class="con mb-4">
                <div class='w-100 hei'></div>
                <div class="centered">
                    <div class='text-start text-cen'>
                        <h1 class='fw-bold font-si display-4'>Explore Khonkaen like a local</h1>
                        <p class='d-nn font-sl mt-2'>From iconic attractions to amazing experiences, your journey begins here.</p>
                    </div>
                </div>
            </div>
            <ScrollCarousel
                autoplay
                autoplaySpeed={10}
                speed={4}
                smartSpeed={true}
            >
                {[
                    <div class="w-96 mr-5 space-y-5">
                        <div class='relative w-12 h-12'>
                            <div class='img-scroll'></div>
                        </div>
                        <div>
                            <h2 class="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p class="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>,
                    <div class="w-96 mr-5 space-y-5">
                        <div class='relative w-12 h-12'>
                            <div class='img-scroll2'></div>
                        </div>
                        <div>
                            <h2 class="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p class="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>, <div class="w-96 mr-5 space-y-5">
                        <div class='relative w-12 h-12'>
                            <div class='img-scroll3'></div>
                        </div>
                        <div>
                            <h2 class="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p class="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>, <div class="w-96 mr-5 space-y-5">
                        <div class='relative w-12 h-12'>
                            <div class='img-scroll4'></div>
                        </div>
                        <div>
                            <h2 class="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p class="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>, <div class="w-96 mr-5 space-y-5">
                        <div class='relative w-12 h-12'>
                            <div class='img-scroll5'></div>
                        </div>
                        <div>
                            <h2 class="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p class="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>, <div class="w-96 mr-5 space-y-5">
                        <div class='relative w-12 h-12'>
                            <div class='img-scroll6'></div>
                        </div>
                        <div>
                            <h2 class="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p class="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>,
                    <div class="w-96 mr-5 space-y-5">
                        <div class='relative w-12 h-12'>
                            <div class='img-scroll7'></div>
                        </div>
                        <div>
                            <h2 class="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p class="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>,
                    <div class="w-96 mr-5 space-y-5">
                        <div class='relative w-12 h-12'>
                            <div class='img-scroll8'></div>
                        </div>
                        <div>
                            <h2 class="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p class="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>].map((item) => (
                        <div key={item} className='ml-5 p-5'>
                            {item}
                        </div>
                    ))}
            </ScrollCarousel>
            <div className="wrap">
                <Destination />
            </div>

        </>
    );
};

export default General_tour
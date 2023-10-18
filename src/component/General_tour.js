import "./css/general_tour.css"
import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import Destination from './Destination';
const General_tour = () => {
    // const [carousel]
    return (
        <>
            <div className="con mb-4">
                <div className='w-100 hei'></div>
                <div className="centered">
                    <div className='text-start text-cen'>
                        <h1 className='fw-bold font-si display-4'>สถานที่ท่องเที่ยวที่น่าสนใจในขอนแก่น</h1>
                        <p className='d-nn font-sl mt-2'>From iconic attractions to amazing experiences, your journey begins here.</p>
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
                    <div className="w-96 mr-5 space-y-5">
                        <div className='relative w-12 h-12'>
                            <div className='img-scroll'></div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>,
                    <div className="w-96 mr-5 space-y-5">
                        <div className='relative w-12 h-12'>
                            <div className='img-scroll2'></div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>, <div className="w-96 mr-5 space-y-5">
                        <div className='relative w-12 h-12'>
                            <div className='img-scroll3'></div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>, <div className="w-96 mr-5 space-y-5">
                        <div className='relative w-12 h-12'>
                            <div className='img-scroll4'></div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>, <div className="w-96 mr-5 space-y-5">
                        <div className='relative w-12 h-12'>
                            <div className='img-scroll5'></div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>, <div className="w-96 mr-5 space-y-5">
                        <div className='relative w-12 h-12'>
                            <div className='img-scroll6'></div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>,
                    <div className="w-96 mr-5 space-y-5">
                        <div className='relative w-12 h-12'>
                            <div className='img-scroll7'></div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </div>,
                    <div className="w-96 mr-5 space-y-5">
                        <div className='relative w-12 h-12'>
                            <div className='img-scroll8'></div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold leading-6 text-slate-900 bg-transparent">Typescript support</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-700 bg-transparent">Scroll carousel is fully typed. Make sure you have a environment with typescript setup. Now just import and initialize. BOOM!!ssssssssssssssssssssssssssssssssssssssssssss</p>
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
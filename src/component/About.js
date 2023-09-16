import Header from "./Header"
import { useEffect } from "react"
import './css/about.css'
import Footer from './Footer';
import ServiceList from './ServiceList';
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Header />
            <div className='container-fluid'>
                <div className="row ">
                    <div className="col-md-6 position-relative bg-dark">
                        <div className="box box-2 ">
                            <div className="centeredss px-5">
                                <div className='text-start text-white'>
                                    <p>เกี่ยวกับเรา</p>
                                    <h1 className='fw-bold mt-3 display-4'>แอดไลน์มาคุยกัน.</h1>
                                    {/* <p className='mt-3'>ช่องทางการติดต่อ </p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 d-md-none d-block ">
                        <div className="box box-1 imgBox3">

                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="box box-3 d-none d-md-block imgBox2">
                        </div>
                    </div>


                </div>
            </div>
            <div className='container marconn'>
                <div className="row">
                    <div className="col-md-6 position-relative">
                        <div className="centeredss2 px-5">
                            <div className='text-start text dark'>
                                <p >LET'S CHAT</p>
                                <h1 className='fw-bold mt-3 display-4 padddd'>ช่องทางการติดต่อ</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 centeredss3" id="contact">
                        <div className='text-start text dark'>
                            <h2 className='fw-bold' style={{color:"#06C755"}}>@Line</h2>
                            <p className='h5 mt-3 lh-base'><i style={{color:"#06C755",marginRight:".5rem"}} class="bi bi-line"></i> <a className="text-decoration-none" href="https://line.me/ti/p/2dm3XrAuz3?fbclid=IwAR3K1ezj47AhoW3OfEx-o3QUMUU5YBxCDionC6CC7i-ahmfqAKpzEWekxFQ">Snook</a></p>
                            {/* <p className='h5 mt-3 lh-base'>If you don't find what you need, please chat us through LINE</p> */}
                        </div>
                        <div className='text-start text dark mt-5'>
                            <h2 className='fw-bold'>เบอร์โทรศัพท์</h2>
                            <p className='h5 mt-3 lh-base'><i style={{marginRight:".5rem"}} class="bi bi-telephone-fill"></i> <a className="text-decoration-none" href="tel:+66951795925">095-179-5925</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container marconn'>
                <div className="row">
                    <div className='text-start text dark'>
                        <h2 style={{    color: "#333333", borderLeft: "0.3rem solid #42a7c3", paddingLeft: "0.4rem"}}>รายละเอียด</h2>
                        <p className='mt-3 lh-base'>
                        แท็กซี่ขอนแก่น  บริการแท็กซี่รับส่งต่างจังหวัด บริการแท็กซี่รับส่งต่างอำเภอ บริการแท็กซี่รับส่งทุกทิศทั่วไทย เหมารถ เหมารถตู้ เช่ารถตู้ พร้อมคนขับ แท็กซี่ขนาดใหญ่ 7 ที่นั่ง
                        แท็กซี่สนามบินขอนแก่น แท็กซี่บขส 3 ขอนแก่น 
                        </p>
                        <ServiceList/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
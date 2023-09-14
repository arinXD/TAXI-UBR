import Header from "./Header"
import { useEffect } from "react"
import './css/about.css'
import Footer from './Footer';
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
                                    <p>CONTACT US</p>
                                    <h1 className='fw-bold mt-3 display-4'>Contact our Support and Sales team</h1>
                                    <p className='mt-2'>Need to get in touch with the team? We're all ears.</p>
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
                                <p >LET’S CHAT</p>
                                <h1 className='fw-bold mt-3 display-4 padddd'>Who do you need to get in touch with?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 centeredss3">
                        <div className='text-start text dark'>
                            <h2 className='fw-bold'>Support</h2>
                            <p className='h5 mt-3 lh-base'>We have a support portal that has the answers to dozens of the most common questions about Copper! Check it out here.</p>
                            <p className='h5 mt-3 lh-base'>If you don't find what you need, please chat us through the Copper app.</p>
                        </div>
                        <div className='text-start text dark mt-5'>
                            <h2 className='fw-bold'>Sales</h2>
                            <p className='h5 mt-3 lh-base'>Interested in learning more about Copper? Contact our product experts at sales@copper.com.</p>
                        </div>
                        <div className='text-start text dark mt-5'>
                            <h2 className='fw-bold'>Business Development</h2>
                            <p className='h5 mt-3 lh-base'>Are you a reseller, affiliate, or association that would like to partner with Copper? Get connected with our Partner team at partners@copper.com.</p>
                        </div>
                        <div className='text-start text dark mt-5'>
                            <h2 className='fw-bold'>General Questions</h2>
                            <p className='h5 mt-3 lh-base'>Have a general question for us? Contact us at info@copper.com.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
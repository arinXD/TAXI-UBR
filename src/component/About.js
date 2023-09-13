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
            <div class='container-fluid'>
                <div class="row ">

                    <div class="col-12 d-md-none d-block ">
                        {/* <div class="box box-1">sidebar top col (only for mobile)</div> */}
                        <div class="box box-1 imgBox3">

                        </div>
                    </div>

                    <div class="col-md-6 position-relative bg-dark">
                        <div class="box box-2 ">
                            <div class="centeredss px-5">
                                <div class='text-start text-white'>
                                    <p >CONTACT US</p>
                                    <h1 class='fw-bold mt-3 display-4'>Contact our Support and Sales team</h1>
                                    <p class='mt-2'>Need to get in touch with the team? We’re all ears.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-md-6">
                        {/* <div class="box box-3 d-none d-md-block">sidebar top col (only for desktop)</div> */}
                        <div class="box box-3 d-none d-md-block imgBox2">
                        </div>
                    </div>


                </div>
            </div>
            <div class='container-fluid marconn'>
                <div class="row">
                    <div class="col-md-6 position-relative">
                        <div class="centeredss2 px-5">
                            <div class='text-start text dark'>
                                <p >LET’S CHAT</p>
                                <h1 class='fw-bold mt-3 display-4 padddd'>Who do you need to get in touch with?</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 centeredss3">
                        <div class='text-start text dark'>
                            <h2 class='fw-bold'>Support</h2>
                            <p class='h5 mt-3 lh-base'>We have a support portal that has the answers to dozens of the most common questions about Copper! Check it out here.</p>
                            <p class='h5 mt-3 lh-base'>If you don't find what you need, please chat us through the Copper app.</p>
                        </div>
                        <div class='text-start text dark mt-5'>
                            <h2 class='fw-bold'>Sales</h2>
                            <p class='h5 mt-3 lh-base'>Interested in learning more about Copper? Contact our product experts at sales@copper.com.</p>
                        </div>
                        <div class='text-start text dark mt-5'>
                            <h2 class='fw-bold'>Business Development</h2>
                            <p class='h5 mt-3 lh-base'>Are you a reseller, affiliate, or association that would like to partner with Copper? Get connected with our Partner team at partners@copper.com.</p>
                        </div>
                        <div class='text-start text dark mt-5'>
                            <h2 class='fw-bold'>General Questions</h2>
                            <p class='h5 mt-3 lh-base'>Have a general question for us? Contact us at info@copper.com.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
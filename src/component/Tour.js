// import Header from "./Header"
import Travel from "./Travel"
import Nav from "./Nav"
import Generaltour from "./General_tour"
import Header from "./Header"
import { useEffect } from "react"
import Footer from "./Footer"

const Tour = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <>
            {/* <Header /> */}
            {/* <Nav />
            <Travel /> */}
            {/* <Nav /> */}
            <Header/>
            <Generaltour/>
            <Footer/>
        </>
    )
}

export default Tour
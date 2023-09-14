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
            <Header/>
            <Generaltour/>
            <Footer/>
        </>
    )
}

export default Tour
import Header from "./Header"
import { useEffect } from "react"
const About = ()=>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <Header/>
            <h1>About</h1>
        </>
    )
}

export default About
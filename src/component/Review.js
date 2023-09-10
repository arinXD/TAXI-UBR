import Header from "./Header"
import { useEffect } from "react"
const Review = ()=>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <Header/>
            <h1>Review</h1>
        </>
    )
}

export default Review
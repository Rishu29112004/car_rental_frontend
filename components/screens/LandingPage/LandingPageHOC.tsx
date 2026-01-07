import dynamic from "next/dynamic"

const LandingPage=dynamic(()=>import("./LandingPage"))

export const LandingPageHOC=()=>{
    return (
        <LandingPage/>
    )
}
import dynamic from "next/dynamic"

const Dashboard=dynamic(()=>import("./Dashboard"))

export const DashboardHOC=()=>{
    return (
        <Dashboard/>
    )
}
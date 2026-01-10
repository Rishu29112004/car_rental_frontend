// import Dashboard from "./Dashboard"
// import Dashboard from "./Dashboard"

import dynamic from "next/dynamic"

const Dashboard=dynamic(()=>import("./Dashboard"))

export const DashboardHOC=()=>{
    return (
        <Dashboard/>
    )
}
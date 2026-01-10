import dynamic from "next/dynamic"
// import ManageCars from "./ManageCars"

const ManageCars=dynamic(()=>import("./ManageCars"))

export const ManageCarsHOC=()=>{
    return (
        <ManageCars/>
    )
}
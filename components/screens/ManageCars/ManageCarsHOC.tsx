import dynamic from "next/dynamic"

const ManageCars=dynamic(()=>import("./ManageCars"))

export const ManageCarsHOC=()=>{
    return (
        <ManageCars/>
    )
}
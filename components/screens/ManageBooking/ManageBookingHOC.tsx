import dynamic from "next/dynamic"
// import ManageBooking from "./ManageBooking"
// 
const ManageBooking=dynamic(()=>import("./ManageBooking"))

export const ManageBookingHOC=()=>{
    return (
        <ManageBooking/>
    )
}
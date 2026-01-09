import dynamic from "next/dynamic"

const ManageBooking=dynamic(()=>import("./ManageBooking"))

export const ManageBookingHOC=()=>{
    return (
        <ManageBooking/>
    )
}
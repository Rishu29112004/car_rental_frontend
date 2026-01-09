import dynamic from "next/dynamic"

const AddCars=dynamic(()=>import("./AddCars"))

export const AddCarsHOC=()=>{
    return (
        <AddCars/>
    )
}
import dynamic from "next/dynamic"
// import AddCars from "./AddCars"

const AddCars=dynamic(()=>import("./AddCars"))

export const AddCarsHOC=()=>{
    return (
        <AddCars/>
    )
}
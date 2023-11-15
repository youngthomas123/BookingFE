import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SearchFilter from "../components/SearchFilter"



export default function RootPage()
{
    return (
        <>
        <NavBar/>
        <br/>
        <SearchFilter/>
        <br/>
       
       
        
        <Outlet/>

        </>
        
    )
}

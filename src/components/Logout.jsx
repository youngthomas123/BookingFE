import UserHelper from "../util/UserHelper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Logout()
{

    const navigate = useNavigate();
    function handleButtonClick()
    {
        localStorage.removeItem('token');
         navigate('/');
        //trigger a rerender
        window.location.reload(); // Refresh the page


    }

    return (
        <Button onClick={handleButtonClick}>
            Logout
        </Button>
    );


}
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/system';



export default function AppPaginataion({numberOfPages,handlePageChange, currentPage})
{
    
    
    return (
        <Box  justifyContent={"center"}
        alignItems="center"
        display={"flex"}
        sx={
            {margin : "20px 0px"
            }}
        >
            <Pagination 
            count={numberOfPages}
            page={currentPage}
            onChange={handlePageChange}
            
            />

        </Box>
       
    
    )


}
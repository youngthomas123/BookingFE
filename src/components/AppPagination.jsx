import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import FakePropertyAPI from '../mock/fakeAPI/FakePropertyAPI';

const pageSize = 6;
export default function AppPaginataion({pagination, handlePageChange})
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
            count={Math.ceil(pagination.count / pageSize)}
            onChange={handlePageChange}
            />

        </Box>
       
    
    )


}
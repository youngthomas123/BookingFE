import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import FakePropertyAPI from '../mock/fakeAPI/FakePropertyAPI';

const pageSize = 3;
export default function AppPaginataion({setProperties})
{
    const [pagination, setPagination] = useState({
        count :0,
        from : 0,
        to : pageSize
    })



    useEffect(() => {
        FakePropertyAPI.getProperties(pagination.from, pagination.to).then((response)=>
        {
            console.log(response)
            setPagination({
                ...pagination,
                count : response.totalCount

            });
            setProperties(response.properties);
        }
            )
      }, [pagination.from, pagination.to]);

      const handlePageChange = (event, page)=>
      {
        const from = (page-1) *pageSize;

        const to = (page-1) *pageSize +pageSize;

        setPagination({
            ...pagination,
            from : from,
            to : to,

        });

        

      }

    
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
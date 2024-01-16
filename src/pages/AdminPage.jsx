import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Button,
    Avatar
  } from '@mui/material';

import { useEffect, useState } from 'react';
import UserAPI from '../APIs/BookingSiteAPI/UserAPI';


const columns = [
    { id: 'profilePic', label: 'Profile Pic', minWidth: 50 },
    { id: 'username', label: 'Username', minWidth: 170 },
    { id: 'dateCreated', label: 'Date created', minWidth: 170 },
    { id: 'accountType', label: 'Account Type', minWidth: 100 },
    { id: 'actions', label: 'Actions', minWidth: 100 },
  ];
  
 
  
  




export default function AdminPage()
{
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [users, setUsers] = useState([]);

    const [banToggle, setBanToggle] = useState(false); // Added state for triggering useEffect


    const handleBanUnban = (userId, status) => {
      
      console.log(`Toggle ban/unban for user with ID: ${userId} status : ${status}`);

      UserAPI.updateUserStatus(userId, status)
      .then((response)=>{
        if(response.ok)
        {
          console.log("Success");
          setBanToggle(!banToggle);
        }
        else
        {
          console.log("fail");
        }
      })
      .catch((error)=>{
        console.log("error : "+ error);
      })
      


      

    };


    useEffect(()=>{
      UserAPI.getAllUsers()
      .then((response)=>{
        if(response.ok)
        {
          response.json()
          .then((data)=>{
            console.log(data);
            setUsers(data.users);
          })
        }
      })

    },[banToggle])



  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    
  
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {users
           .filter((user) => user.type !== 'admin')
           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
           .map((user) => (
              <TableRow key={user.userId}>
                <TableCell>
                  <Avatar alt={user.username} src={user.profilePicUrl} sx={{ width: 40, height: 40 }} />
                </TableCell>
                 <TableCell>{user.username}</TableCell>
                 <TableCell>{user.dateCreated}</TableCell>
                 <TableCell>{user.type}</TableCell>
                 <TableCell>
                  {user.banned ? (
                    <Button variant="contained" color="primary" onClick={() => handleBanUnban(user.userId, "unban")}>
                       Unban
                    </Button>
                    ) : (
                          <Button variant="contained" color="secondary" onClick={() => handleBanUnban(user.userId, "ban")}>
                              Ban
                          </Button>
                        )}
                          </TableCell>
                           </TableRow>
                            ))}

          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    );
  
        
    
}
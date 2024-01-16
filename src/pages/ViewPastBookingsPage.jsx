// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// function createData(name, location, checkin, checkout, ) 
// {
//   return { name, location, checkin, checkout};
// }
  
//   const rows = [
//     createData('City View Apartment', "911 Hillside Dr, Kodiak, Alaska 99615, USA", "2024-01-01", "2024-01-02"),
//     createData('Sunset Villa', "919 Stimple Ct, Fairbanks, Alaska 99712, USA ", "2024-01-03", "2024-01-05"),
    
//   ];
  
      

// export default function ViewPastBookingsPage()
// {
    
      



//     //table show property name, location, checkin, checkout. 
//     return (
//         <>
//         <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Property name</TableCell>
//             <TableCell align="right">Location</TableCell>
//             <TableCell align="right">CheckIn date</TableCell>
//             <TableCell align="right">CheckOut date</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.location}</TableCell>
//               <TableCell align="right">{row.checkin}</TableCell>
//               <TableCell align="right">{row.checkout}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
  
//         </>
//     )
// }
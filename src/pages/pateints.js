import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function TableDetails() {

const rows=[
    {value:'vikas' ,label:'Name'},
    {value:'24',label:'Age'},
    {value:'Fever',label:'Desease'},
    {value:'1/08/2024',label:'Appointment date'},
    {value:'Ameta',label:'Doctor name'}
]

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            { 
            rows.map((row,i)=>(
<TableCell key={i}>{row.label}</TableCell>
            ))
            
            }
            <TableCell>Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            {
                rows.map((row,i)=>(
                    <TableCell>{row.value}</TableCell>
                ))
            }  
             <TableCell>
            <DeleteOutlineIcon />
            <EditOutlinedIcon/>
          </TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableDetails
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
import { Tooltip } from '@mui/material';

function TableDetails() {
  const rows = [
    { label: 'Doctor Name', value: 'Ameta' },
    { label: 'Patients Name', value: 'Vikas' },
    { label: 'Appointment Date', value: '1/08/2024' },
    { label: 'Disease', value: 'Fever' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead >  
          <TableRow>
            {rows.map((row, i) => (
              <TableCell key={i}>{ row.label}</TableCell>
            ))}
            <TableCell >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='text-slate-600'>
          <TableRow>
            {rows.map((row, i) => (
              <TableCell key={i}>{row.value}</TableCell>
            ))}
            <TableCell>
            <Tooltip title="Delete">

  <DeleteOutlineIcon />
</Tooltip>
          
              <EditOutlinedIcon />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableDetails;

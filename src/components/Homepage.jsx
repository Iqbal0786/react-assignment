import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Homepage() {
  const[data,setData]=useState([]);

            useEffect(()=>{
             getData()
            },[])
            const getData=()=>{
              axios.get("http://localhost:8080/addcity").then((res)=>{
                setData(res.data)
              }).catch((err)=>{
                console.log(err.message)
              })
            }
          const deleteItem=(id)=>{
                 axios.delete(`http://localhost:8080/addcity/${id}`).then((res)=>{
                   getData();
                 })
          }
  return (
    

    <>
    <AppBar>
      <Toolbar sx={{backgroundColor:"white"}}>
      <Link style={{textDecoration:"none"}} to={"/add-country"}>  <Button variant='outlined'>Add Country</Button></Link>
      <Link style={{textDecoration:"none"}}to={"/add-city"}> <Button variant='outlined' sx={{marginLeft:"10px"}}>Add City</Button></Link>
      </Toolbar>
    </AppBar>
    <Box sx={{width:"90%" , margin:"auto" , marginTop:"100px"}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Population</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.id}
              </TableCell>
              <TableCell align="center">{row.country}</TableCell>
              <TableCell align="center">{row.cityName}</TableCell>
              <TableCell align="center">{row.population}</TableCell>
              <TableCell align="center"><Button variant='outlined'>Edit</Button></TableCell>
              <TableCell align="center"><Button variant='outlined' onClick={()=>{
                deleteItem(row.id)
              }}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </>
  )
}


import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import {useDispatch} from "react-redux"
import { ADD_CITY } from '../Redux/AddCity/AddCityAction';

export default function AddCity() {
    const dispatch= useDispatch();
  const [citydata,setCityData]=useState({
    cityName:"",
    population:"",
    country:""
  })
  useEffect(()=>{
fetchData()
  },[])
  const fetchData=()=>{
     axios.get("http://localhost:8080/addcity").then((res)=>{
       dispatch(ADD_CITY(res.data))
     }).catch((err)=>{
       console.log(err.message)
     })
  }
  const getCityData=(e)=>{
        let {id,value}=e.target;
        setCityData({...citydata,[id]:value})
  }
  const addData=()=>{
      axios.post("http://localhost:8080/addcity",citydata).then((res)=>{
        alert("success")
        fetchData()
      }).catch((err)=>{
        console.log(err.message)
      })
  }
  return (
       <>
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        margin: "auto",
        marginTop:"40px",
        
      }}
    >
      <TextField  type={"text"} label="City Name" id="cityName"  onChange={getCityData}/> <br />
      <TextField  type={"number"} label="Population" id="population" sx={{marginTop:"10px"}} onChange={getCityData}/><br />
      <TextField   type={"text"}label="Country" id="country"  sx={{marginTop:"10px"}}  onChange={getCityData}/><br />

      <Button variant='contained'  sx={{marginTop:"10px"}} onClick={addData}>Add</Button>
    </Box>
       </>
  )
}

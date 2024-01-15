import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useEffect } from "react";
import AppContext from "../AppContext";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { setService } = useContext(AppContext);
  useEffect(() => {
    axios.get('http://localhost:8000/get_services').then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={3}>

          {
            data.map((temp, index) => (
              <Grid item xs={12}>
                <Item sx={index === 0 ? { backgroundColor: "red", height: "200px" } : index === 1 ? { backgroundColor: "yellow", height: "200px" } : { backgroundColor: "pink", height: "200px" }}>
                  <Typography
                    sx={{ color: "white", fontWeight: "bold", fontSize: "25px" }}
                  >
                    {temp.servicename}
                  </Typography>

                  <Typography
                    sx={{ color: "white", fontWeight: "bold", marginLeft: "0px" }}
                  >
                    {temp.description}
                  </Typography>
                  <Button id={temp.servicename} onClick={(e) => { setService(e.target.id); navigate("/pricing") }} sx={{ backgroundColor: "white" }}>Get Details</Button>
                </Item>
              </Grid>
            ))
          }
        </Grid>
      </Box >
    </>
  );
}

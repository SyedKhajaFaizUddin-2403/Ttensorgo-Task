import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Admin() {
    return (
      <>
        <Typography sx={{ fontSize: "30px", color: "red" }}>
          Your Orders
        </Typography>
        <Grid
          item
          xs={4}
          sx={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            justifyItem: "center",
            display: "flex",
            marginTop: "180px",
          }}
        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {/* <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Your orders
              </Typography> */}
              {/* <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography> */}
              <Typography sx={{ mb: 1.5, fontWeight: "bold" }}>
                Service:Computation
              </Typography>
              <Typography sx={{ mb: 1.5, fontWeight: "bold" }}>
                plan_type:
                <br />
              </Typography>
              <Typography sx={{ mb: 1.5, fontWeight: "bold" }}>
                Expiry:
                <br />
              </Typography>

              <Typography sx={{ mb: 1.5, fontWeight: "bold" }}>
                Users-Added:
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add User</Button>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
}

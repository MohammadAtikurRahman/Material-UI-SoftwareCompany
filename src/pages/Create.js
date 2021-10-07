import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from '@mui/material/Container';

export default function Create() {
  return (
    <Container>
      <Typography variant="h1" color="primary" align="center">
        Create a new note
      </Typography>

      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Md. Atikur Rahman
      </Typography>

      <Button type="submit">Submit</Button>

      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>

      <Button type="submit" color="secondary" variant="contained">
        Submit
      </Button>

      <ButtonGroup color="secondary" variant="contained"  >
        <Button>One</Button>
        <Button>Two</Button>
         <Button>Three</Button>
        
      </ButtonGroup>


       <Button type="submit" color="success" variant="contained" onClick ={ () => console.log('You clicked me') }  >
        Submit
      </Button>


    </Container>
  );
}

import React from 'react';
import { AppBar, Toolbar, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Kalvium 
          </Typography>
          <Typography variant="h6">
            About us
          </Typography>
          <Typography variant="h6">
            Contacts
          </Typography>
          <Typography variant="h6">
            Courses
          </Typography>
        </Toolbar>
      </AppBar>
      <Button variant="contained" color="primary">
        Button One
      </Button>
      <div>Alert! This is awesome!</div>
      <Card>
        <CardMedia
          image="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kalvium Store
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            You have a new Course
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

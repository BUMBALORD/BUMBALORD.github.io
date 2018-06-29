import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Grid from '@material-ui/core/Grid';

const styles = {
  paper: {
    padding: "35px",
    marginTop: "40px",
    textAlign: 'center',
    color: "white",
    backgroundColor: "black",
    opacity: "0.6"
  },
  grid: {
    margin: "0 auto"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" style={{ backgroundColor: '#4e3981' }}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            David Hallinan
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid style={styles.grid} item xs={12}>
          <div style={styles.paper}>
            <h1 className="raleway" style={{fontSize: "45px"}}>David Hallinan</h1>
            <hr style={{width: "300px"}} />
            <p className="raleway" style={{fontSize: "32px"}}>Lead Instructor - Berkeley Coding Bootcamp</p>
            <p className="raleway noMarg" style={{fontSize: "25px"}}>UC Berkeley Extension</p>
            <p className="raleway noMarg" style={{fontSize: "25px"}}>Trilogy Education</p>
            <a href="https://github.com/BUMBALORD" target="_blank" rel="noopener noreferrer"><img className="imgSpace" src={require('./github-circle.png')} alt="" /></a>
            <a href="https://www.linkedin.com/in/dhallinan/" target="_blank" rel="noopener noreferrer"><img className="imgSpace" src={require('./linkedin-box.png')} alt="" /></a>
          </div>
      </Grid>
      </div>

    );
  }
}

export default App;

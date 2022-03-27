import React, { Component } from "react";
import { PaginationProps, Pagination, Label } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
// import Card from "components/Card/Card.jsx";
import FetchDataFromApi from "services/fetchDataFromApi";
// import PaginationExample from "./paginationExample";
// import WithoutPaginationExample from "./withoutPaginationExample";
import { Redirect } from "react-router-dom";
import { InputLabel, Input, FormControl, Typography, Button, TextareaAutosize, Divider, AppBar, Toolbar, TablePagination, TableFooter } from "@material-ui/core";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  fontSizeStyle: {
    fontSize: 15
  },
});

const thArray = ["Select", "Student Id", "Student Name"];
const tdArray = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
];

const resetErrorState = {
  vendorNumberError: "",
  vendorNameError: "",
  studentSearchError: ""
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


class StudentSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vendorNumber: 0,
      vendorName: "",
      vendorNumberError: "",
      vendorNameError: "",
      studentSearchError: "",
      apiCallSuccess: false,
    };
  }



  validate() {
    var regex = new RegExp(/^[0-9\b]+$/);
    this.setState(resetErrorState);
    let vendorNumberError = "";
    let vendorNameError = "";
    let studentSearchError = "";

    if (this.state.vendorName.length == 0 && this.state.vendorNumber.length == 0) {
      studentSearchError = "Please Enter Some Input..!!";
      this.setState({ studentSearchError });
      return false;
    }

    if (!(regex.test(this.state.vendorNumber)) && this.state.vendorNumber.length > 0) {
      vendorNumberError = "Invalid Input, Student Id must be integer."
    }

    if (this.state.vendorNumber.length > 8) {
      vendorNumberError = "Student Id must be upto 8 digit only";
    }

    // if (this.state.vendorName.length == 1) {
    //   vendorNameError = "Invalid Student Name";
    // }

    if (vendorNumberError || vendorNameError) {
      this.setState({ vendorNumberError, vendorNameError });
      return false;
    }

    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(resetErrorState);
    if (this.state.vendorNumber.length === 0 && this.state.vendorName.length === 0) {
      let studentSearchError = "No Vendor Details was Provided";
      this.setState({ studentSearchError });
    }
    else {
      this.refs.child.callstudentSearchAPI();
    }
    // const isValid = this.validate();
    // if(isValid){
    console.log(this.state);

    // this.refs.child.getChildMethod(this.state.vendorNumber);
    // this.refs.child.getChildMethod("1234");
    // console.log("test: " + this.refs.child.state.apiCallSuccess);
    // }

  };

  handleClick(rowData, rowId){
    alert("Cross Dock Information DC Screen Called for Vendor :    " + rowData.t616_VBU_NBR + "-" + rowData.vbu_NME);
  }

  apiDataCallbackFunction = (childData) => {
    // alert("apiDataCallbackFunction called");
    console.log("childData :" + childData);
    // this.setState(childData);
    if (childData.apiCallSuccess) {
      this.setState(childData);
      // console.log(this.state.childData.vendorNumber);
    }
    console.log(this.state);

  }

  render() {
    const { classes } = this.props;
    const rowPerPage = 2;
    return (
      <div style={{ marginLeft: 230 }} className={classes.fontSizeStyle}>
        <div style={{ marginLeft: 164 }}>
          <br></br><br></br>
          <FetchDataFromApi ref="child" apiDataCallback={this.apiDataCallbackFunction} props={this.state} />
          <div className='col-md-8'>
            <FormControl fullWidth='true' onSubmit={this.handleSubmit.bind(this)}
              style={{
                marginTop: 50, borderRadius: 4,
                backgroundColor: '#FFFFFF',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1)'
              }}>
                <div>
                  <AppBar position="static" style={{ background: '#004990',borderRadius: '4px 4px 0px 0px' }}>
                  <Toolbar variant="dense">
                    <Typography variant="h4" color="inherit">Student Search</Typography>
                    </Toolbar>
                  </AppBar>
                </div><br></br>
              <div style={{ padding: '15px 24px 10px' }}>
              
                <div>
                  <Typography color='textSecondary' variant='h4'>Selection Criteria</Typography>
                  <Divider variant='fullWidth' />
                </div>
                <br></br>
                

                <div style={{ display: 'flex' }}>
                  <Typography variant="displayInline">Student Id    :</Typography>
                  <TextareaAutosize className="form-control" style={{ marginLeft: 100, marginTop: -5, width: '68%' }}
                    aria-label="empty textarea"
                    placeholder="Enter the Student Id"
                    id="vendorNumber"
                    onChange={this.handleChange.bind(this)} />
                </div>
                <Typography variant='colorError'>{this.state.vendorNumberError}</Typography>
                <br></br>
                <Typography variant='h5' style={{textAlign: 'center'}}>--OR--</Typography><br></br>
                <div style={{ display: 'flex' }}>
                  <Typography variant="h5">Student Name :</Typography>
                  {/* <Label>Student Id : </Label> */}
                  <TextareaAutosize className="form-control" style={{ marginLeft: 114, marginTop: -5, width: '68%' }}
                    aria-label="empty textarea"
                    placeholder="Enter the Student Name"
                    id="vendorName"
                    onChange={this.handleChange.bind(this)} />
                </div>
                <Typography variant='colorError'>{this.state.vendorNameError}</Typography><br></br>
                <Divider variant="fullWidth" /><br></br>
                <div>
                  <Button style={{ marginLeft: 252, fontSize: 15,background: '#004990' }}
                    onClick={this.handleSubmit.bind(this)}
                    variant="containedPrimary"
                    size='large'
                    type="submit">Find</Button>&nbsp;&nbsp;
                  <Typography variant='colorError'>{this.state.studentSearchError}</Typography>
                </div>
              </div>
            </FormControl>

          </div>
          <br></br>
        </div>

        {this.state.apiCallSuccess ?
          <div className='col-md-8' style={{ marginLeft: 162, width: 755, marginTop: 21 }}>
            <div>
                  <AppBar position="static" style={{ background: '#004990',borderRadius: '4px 4px 0px 0px' }}>
                  <Toolbar variant="dense">
                    <Typography variant="h4" color="inherit">Vendor List</Typography>
                    </Toolbar>
                  </AppBar>
            </div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {thArray.map((prop, key) => {
                      return <TableCell align='center' style={{ fontSize: 15 }} key={key}>{prop}</TableCell>;
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.studentSearchResponse.map((prop, rowId) => (
                    <TableRow key={rowId} hover='true' onClick={() => this.handleClick(prop,rowId)}>
                      <TableCell align='center'><input type="radio" name="select" value=""></input></TableCell>
                      <TableCell align='center' sortDirection='desc' style={{ fontSize: 15 }} component="th" scope="row">{prop.t616_VBU_NBR}</TableCell>
                      <TableCell align="center" style={{ fontSize: 15 }}>{prop.vbu_NME}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer><br></br>
        <br></br>
{/* Check with business on this to go next page just by selecting row, then we do not need this select btn*/}
                {/* <div>
                  <Button style={{ marginLeft: 273, fontSize: 15,background: '#004990' }}
                    onClick={this.handleSubmit.bind(this)}
                    variant="containedPrimary"
                    size='large'
                    type="submit">Select</Button>
                </div> */}
          </div> : ''}
      </div>
    );
  }

  handleChange(event) {
    //this.setState({ [event.target.id] : event.target.value});
    // If you want to callback a function then use below line to call validate method onchange()
    this.setState({ [event.target.id]: event.target.value }, this.validate);
    console.log(this.state.vendorNumber);
    // alert(this.state.vendorNumber + '-' + this.state.lastName);
  }
}

export default withStyles(useStyles)(StudentSearch)
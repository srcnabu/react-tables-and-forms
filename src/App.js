import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import orderBy from "lodash/orderBy";
import Table from "./Table";
import Form from "./Form";


const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class App extends Component {
  state = {
    data: [
      {
        id: "00",
        fullName: "samuel jacks",
        email: "samuel.jacks@fiction.com",
        phone: "04664853838"
      },
      {
        id: "01",
        fullName: "Tann",
        email: "tgounin0@wordpress.com",
        phone: "0467723838"
      },
      {
        id: "02",
        fullName: "bobby briggs",
        email: "bobby.briggs@gmall.com",
        phone: "0484752838"
      },
      {
        id: "03",
        fullName: "Bingo bob",
        email: "bonggo.bob@frantik.com",
        phone: "04664853838"
      },
      {
        id: "04",
        fullName: "samuel jacks",
        email: "samuel.jacks@fiction.com",
        phone: "04664853838"
      },
      {
        id: "05",
        fullName: "bobby briggs",
        email: "bobby.briggs@gmall.com",
        phone: "0484752838"
      },
      {
        id: "06",
        fullName: "samuel jacks",
        email: "samuel.jacks@fiction.com",
        phone: "04664853838"
      },
      {
        id: "07",
        fullName: "bobby briggs",
        email: "bobby.briggs@gmall.com",
        phone: "0484752838"
      },
      {
        id: "08",
        fullName: "Bingo bob",
        email: "bonggo.bob@frantik.com",
        phone: "04664853838"
      },
      {
        id: "09",
        fullName: "samuel jacks",
        email: "samuel.jacks@fiction.com",
        phone: "04664853838"
      },
      {
        id: "10",
        fullName: "Bingo bob",
        email: "bonggo.bob@frantik.com",
        phone: "04664853838"
      },
      {
        id: "11",
        fullName: "Tann",
        email: "tgounin0@wordpress.com",
        phone: "0467723838"
      },
      {
        id: "12",
        fullName: "bobby briggs",
        email: "bobby.briggs@gmall.com",
        phone: "0484752838"
      },
      {
        id: "13",
        fullName: "samuel jacks",
        email: "samuel.jacks@fiction.com",
        phone: "04664853838"
      },
      {
        id: "14",
        fullName: "bobby briggs",
        email: "bobby.briggs@gmall.com",
        phone: "0484752838"
      },
      {
        id: "15",
        fullName: "Bingo bob",
        email: "bonggo.bob@frantik.com",
        phone: "04664853838"
      },
      {
        id: "16",
        fullName: "Tann",
        email: "tgounin0@wordpress.com",
        phone: "0467723838"
      },
      {
        id: "17",
        fullName: "Bingo bob",
        email: "bonggo.bob@frantik.com",
        phone: "04664853838"
      },
      {
        id: "18",
        fullName: "samuel jacks",
        email: "samuel.jacks@fiction.com",
        phone: "04664853838"
      },
      {
        id: "19",
        fullName: "bobby briggs",
        email: "bobby.briggs@gmall.com",
        phone: "0484752838"
      },

    ],
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc"
  };
  
  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleSave = (i, x) => {
    this.setState(state => ({
      data: state.data.map((row, j) => (j === i ? x : row))
    }));
    this.stopEditing();
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
  
    return (
      <div className="App">
        <MuiThemeProvider >
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Nord Software</h1>
          </header>
          
          <div className="content">

            <h1 className="Table-title">List of participants</h1>

            <Form
              onSubmit={submission =>
                this.setState({
                  data: [...this.state.data, submission]
                })
              }
            />

                       
          <Table
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleSave={this.handleSave}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                name: "Name",
                prop: "fullName"
              },
              {
                name: "E-mail address",
                prop: "email"
              },
              {
                name: "Phone number",
                prop: "phone"
              }
            ]}
          />

          </div>

        </MuiThemeProvider>
      </div>
    );
  }
  
  
}

export default App;
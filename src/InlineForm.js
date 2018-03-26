import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from 'material-ui/FlatButton';
import { TableRowColumn } from "material-ui/Table";
import './App.css';
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        ...props.x
      },
      errors: {
        id:"",
        fullName: "",
        email: "",
        phone: ""
      }
    };
  }

  change = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      values: {
        ...state.values,
        [name]: value
      }
    }));
  };

  validate = () => {
    let isError = false;
    const errors = {
      id:"",
      fullName: "",
      email: "",
      phone: ""
    };

    const { phone, email } = this.state.values;

    if (phone.length < 5) {
      isError = true;
      errors.phone = "Phone number needs to be atleast 5 digits long";
    }

    if (email.indexOf("@") === -1) {
      isError = true;
      errors.email = "Requires valid email";
    }

    this.setState({
      errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.handleSave(this.props.i, this.state.values);
    }
  };

  render() {
    const { header, } = this.props;
    return [
      header.map((y, k) => (
        <TableRowColumn key={`trc-${k}`}>
          <TextField
            className="ilFormField"
            underlineStyle={{display: 'none'}}
            name={y.prop}
            onChange={this.change}
            value={this.state.values[y.prop]}
            errorText={this.state.errors[y.prop]}
          />
        </TableRowColumn>
      )),
      <TableRowColumn key="icon-row-column">
        <FlatButton className="ilButton" label="Cancel"  onClick={this.props.stopEditing} />
        <FlatButton className="ilButton" label="Save"  onClick={this.onSubmit} />
      </TableRowColumn>
    ];
  }
}
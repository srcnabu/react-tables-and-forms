import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from 'material-ui/FlatButton';
import './App.css';

export default class Form extends React.Component {
  state = {
    id: "",
    idError: "",
    fullName: "",
    fullNameError: "",
    email: "",
    emailError: "",
    phone: "",
    phoneError: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      idError: "",
      fullNameError: "",
      emailError: "",
      phoneError: ""
    };

    if (this.state.phone.length < 5) {
      isError = true;
      errors.phoneError = "Phone number needs to be atleast 5 digits long";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        id: "",
        idError: "",
        fullName: "",
        fullNameError: "",
        email: "",
        emailError: "",
        phone: "",
        phoneError: ""
      });
    }
  };

  render() {
    return (
      <form className="nsForm">
        <TextField 
          underlineStyle={{display: 'none'}}
          className="nsFormField"
          name="fullName"
          hintText="Full name"
          value={this.state.fullName}
          onChange={e => this.change(e)}
          errorText={this.state.fullNameError}
        />
        <TextField
          underlineShow={false}
          className="nsFormField"
          name="email"
          hintText="E-mail address"
          value={this.state.email}
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
        />
        <TextField  
          underlineShow={false}
          className="nsFormField"
          name="phone"
          hintText="Phone number"
          value={this.state.phone}
          onChange={e => this.change(e)}
          errorText={this.state.phoneError}
        />
        <FlatButton className="nsfButton" label="Add new" onClick={e => this.onSubmit(e)}/>
      </form>
    );
  }
}
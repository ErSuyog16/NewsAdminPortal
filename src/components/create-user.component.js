import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs"; // Import BsCalendar icon from react-icons/bs

function success() {
  alert("User Information Registered");
}

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeImageUrl = this.onChangeImageUrl.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeReadMoreUrl = this.onChangeReadMoreUrl.bind(this);
    this.onChangeReadMoreText = this.onChangeReadMoreText.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      Title: "",
      ImageUrl: "",
      Description: "",
      ReadMoreUrl: "",
      ReadMoreText: "",
      formDate: "",
      formTime: "",
      // keyskills: "",
      // experience: "",
      // email: "",
      // password: "",
      // formErrors: {
      //   email: "",
      //   password: "",
      //   aadharno: "",
      //   phonenumber: "",
      // },
    };
  }

  // handleChange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   let formErrors = { ...this.state.formErrors };
  //   switch (name) {
  //     case "email":
  //       formErrors.email = emailRegex.test(value)
  //         ? ""
  //         : "invalid email address";
  //       break;
  //     case "password":
  //       formErrors.password = passRegex.test(value)
  //         ? ""
  //         : "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
  //       break;
  //     case "phonenumber":
  //       formErrors.phonenumber = value.length < 10 ? "Invalid" : "";
  //       break;

  //     case "aadharno":
  //       formErrors.aadharno = value.length < 12 ? "Invalid" : "";
  //       break;
  //     default:
  //       break;
  //   }

  //   this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  // };

  onChangeTitle(e) {
    this.setState({ Title: e.target.value });
  }

  onChangeImageUrl(e) {
    this.setState({ ImageUrl: e.target.value });
  }

  onChangeDescription(e) {
    this.setState({ Description: e.target.value });
  }

  onChangeReadMoreUrl(e) {
    this.setState({ ReadMoreUrl: e.target.value });
  }

  onChangeReadMoreText(e) {
    this.setState({ ReadMoreText: e.target.value });
  }
  onChangeDate(date) {
    this.setState({ formDate: date });
  }
  onChangeTime(time) {
    this.setState({ formTime: time });
  }
  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      Title: this.state.Title,
      ImageUrl: this.state.ImageUrl,
      Description: this.state.Description,
      ReadMoreUrl: this.state.ReadMoreUrl,
      ReadMoreText: this.state.ReadMoreText,
      formDate: this.state.formDate,
      formTime: this.state.formTime,
    };
    console.log(typeof formDate);

    axios
      .post("http://localhost:4000/users/create-user", userObject)
      .then((res) => console.log(res.data));

    this.state = {
      Title: "",
      ImageUrl: "",
      Description: "",
      ReadMoreUrl: "",
      ReadMoreText: "",
      formDate: "",
      formTime: "",
    };
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div className='form-wrapper'>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId='Title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              value={this.state.Title}
              onChange={this.onChangeTitle}
              required
            />
          </Form.Group>

          <Form.Group controlId='ImageUrl'>
            <Form.Label>ImageUrl</Form.Label>
            <Form.Control
              type='text'
              value={this.state.ImageUrl}
              onChange={this.onChangeImageUrl}
              required
            />
          </Form.Group>

          <Form.Group controlId='Description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              value={this.state.Description}
              onChange={this.onChangeDescription}
              required
            />
          </Form.Group>

          <Form.Group controlId='formDate'>
            <Form.Label style={{ marginRight: "10px" }}>
              Select Date :
            </Form.Label>
            <DatePicker
              selected={this.state.formDate}
              onChange={this.onChangeDate} // Use onChange to capture the selected date
              dateFormat='MMMM d, yyyy'
              className='form-control'
              placeholderText='Select a date'
              style={{ marginBottom: "10px" }} // Add margin bottom to the date picker
            />
          </Form.Group>

          <Form.Group controlId='formTime'>
            <Form.Label  style={{ marginRight: "10px" }}>Time : </Form.Label>
            <DatePicker
              selected={this.state.formTime}
              onChange={this.onChangeTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat='h:mm aa'
              placeholderText='Select a time'
              className='form-control'
            />
          </Form.Group>

          <Form.Group controlId='ReadMoreUrl'>
            <Form.Label>Read More Url</Form.Label>
            <Form.Control
              type='text'
              value={this.state.ReadMoreUrl}
              onChange={this.onChangeReadMoreUrl}
              required
            />
          </Form.Group>

          <Form.Group controlId='ReadMoreText'>
            <Form.Label>Read More Text</Form.Label>
            <Form.Control
              type='text'
              value={this.state.ReadMoreText}
              onChange={this.onChangeReadMoreText}
              required
            />
          </Form.Group>
          <br />
          <br />
          <br />

          <Button
            variant='danger'
            size='lg'
            block='block'
            type='submit'
            onClick={success}>
            Submit News
          </Button>
        </Form>
      </div>
    );
  }
}

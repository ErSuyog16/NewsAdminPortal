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
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      Title: "",
      ImageUrl: "",
      Description: "",
      ReadMoreUrl: "",
      ReadMoreText: "",
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

  // onChangeUserEmail(e) {
  //   this.setState({ email: e.target.value })
  // }

  // onChangeUserPhoneNumber(e) {
  //   this.setState({ phonenumber: e.target.value })
  // }

  // onChangeUserAadharNo(e) {
  //   this.setState({ aadharno: e.target.value })
  // }

  onChangeDescription(e) {
    this.setState({ Description: e.target.value });
  }

  onChangeReadMoreUrl(e) {
    this.setState({ ReadMoreUrl: e.target.value });
  }

  onChangeReadMoreText(e) {
    this.setState({ ReadMoreText: e.target.value });
  }

 
  onSubmit(e) {
    e.preventDefault();
  
    const userObject = {
      Title: this.state.Title,
      ImageUrl: this.state.ImageUrl,
      Description: this.state.Description,
      ReadMoreUrl: this.state.ReadMoreUrl,
      ReadMoreText: this.state.ReadMoreText,
    };
    console.log(userObject);

    axios
      .post("http://localhost:4000/users/create-user", userObject)
      .then((res) => console.log(res.data));

    this.state = {
      Title: "",
      ImageUrl: "",
      Description: "",
      ReadMoreUrl: "",
      ReadMoreText: "",
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

          {/* <Form.Group controlId='dateTimePicker'>
            <Form.Label>Date and Time</Form.Label>
            <div className='input-group'>
              <DatePicker
                selected={this.state.selectedDate}
                onChange={this.onChangeUserName}
                showTimeSelect
                timeFormat='HH:mm'
                timeIntervals={15}
                dateFormat='MMMM d, yyyy h:mm aa'
                className='form-control'
              />
              <div className='input-group-append'>
                <span className='input-group-text'>
                  <BsCalendar />
                </span>
              </div>
            </div>
          </Form.Group> */}
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
          {/* 
          <Form.Group controlId='Email'>
            <div className='email'>
              <Form.Label>Email</Form.Label>

              <Form.Control
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder='Email'
                type='email'
                name='email'
                value={this.state.email}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className='errorMessage'>{formErrors.email}</span>
              )}
            </div>
          </Form.Group>

          <Form.Group controlId='Password'>
            <div className='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder='Password'
                type='password'
                name='password'
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className='errorMessage'>{formErrors.password}</span>
              )}
            </div>
          </Form.Group>
          <Form.Group controlId='Address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              value={this.state.address}
              onChange={this.onChangeUserAddress}
              required
            />
          </Form.Group>

          <Form.Group controlId='Phonenumber'>
            <div className='phonenumber'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className={formErrors.phonenumber.length > 0 ? "error" : null}
                placeholder='Phone Number'
                type='number'
                name='phonenumber'
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phonenumber.length > 0 && (
                <span className='errorMessage'>{formErrors.phonenumber}</span>
              )}
            </div>
          </Form.Group>

          <Form.Group controlId='AadharNo'>
            <div className='aadharno'>
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                className={formErrors.aadharno.length > 0 ? "error" : null}
                placeholder='Aadhar Number'
                type='number'
                name='aadharno'
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.aadharno.length > 0 && (
                <span className='errorMessage'>{formErrors.aadharno}</span>
              )}
            </div>
          </Form.Group>

          <Form.Group controlId='Education'>
            <Form.Label>Education</Form.Label>
            <Form.Control
              type='text'
              value={this.state.education}
              onChange={this.onChangeUserEducation}
              required
            />
          </Form.Group>

          <Form.Group controlId='KeySkills'>
            <Form.Label>Key Skills</Form.Label>
            <Form.Control
              type='text'
              value={this.state.keyskills}
              onChange={this.onChangeUserKeySkills}
              required
            />
          </Form.Group>

          <Form.Group controlId='Experience'>
            <Form.Label>Experience(in Months)</Form.Label>
            <Form.Control
              type='number'
              value={this.state.experience}
              onChange={this.onChangeUserExperience}
              required
            />
          </Form.Group> */}
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

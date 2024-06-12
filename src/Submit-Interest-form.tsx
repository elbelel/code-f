import { Component, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InterestForm from './Interest-form';
import Modal from 'react-bootstrap/Modal';

class SubmitForm extends Component {
    state = {
        name: "",
        email: "",
        no_of_family: 0,
        raised_amount: 0,
        fund_breakdown: "", 
        fund_url: URL, 
        comments: "",
        family_in_egypt: false,
      };
}

const API_ENDPOINT = 'https://fund-family-backend-production.up.railway.app/?format=openapi'
// const form = useForm()
// const { register, control, handlesSubmit} =form;

const handleSubmit = event => {
    event.preventDefault();
    axios({
      method: 'post',
      data: {
        name: this.state.name,
        email: this.state.email,
        no_of_family: this.state.no_of_family,
        raised_amount: this.state.raised_amount,
        fund_breakdown: this.state.fund_breakdown, 
        fund_url: this.state.URL, 
        comments: this.state.comments,
        family_in_egypt: this.state.family_in_egypt,
      }
      axios.post(API_ENDPOINT),

    })
    .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })
      
    .catch(function (response) {
      //handle error
      console.log(response);
    });;
    handleChange = event =>{
        this.setState({ name: event.target.value});
      }

  } 
 
  export default SubmitForm
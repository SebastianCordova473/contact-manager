import React, {Component} from 'react';
import {Consumer} from '../../context';
import {v1 as uuid} from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;

    //Check for errors

    if (name === '') {
      this.setState({errors: {name: 'Name is required'}});
      return;
    } else if (email === '') {
      this.setState({errors: {email: 'Email is required'}});
      return;
    } else if (phone === '') {
      this.setState({errors: {phone: 'Phone is required'}});
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );

    dispatch({type: 'ADD_CONTACT', payload: res.data});

    // Clear state
    this.setState({name: '', email: '', phone: ''});
    this.props.history.push('/');
  };
  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    const {name, email, phone, errors} = this.state;
    return (
      <Consumer>
        {(value) => {
          const {dispatch} = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

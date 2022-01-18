import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
//import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  
  const [login, { error }] = useMutation(LOGIN_USER);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { mutationResponse } = await login({
        variables: { ...formState },
      });

      Auth.login(mutationResponse.login.token)
    } catch (e) {
      console.log(e);
    }
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // clear form values
  setFormState({
    username: '',
    password: ''
  });

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" className="box" onSubmit={handleFormSubmit}>
                <div className="field">
                  <label for="" className="label">Username</label>
                  <div className="control has-icons-left">
                    <input type="username" placeholder="e.g. johndoe" className="input" value={formState.username} onChange={handleChange} required></input>
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label for="" className="label">Password</label>
                  <div className="control has-icons-left">
                    <input type="password" placeholder="*******" className="input" value={formState.password} onChange={handleChange} required></input>
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label for="" className="checkbox">
                    <input type="checkbox"></input>
                    Remember me
                  </label>
                </div>
                <div className="field">
                  <button className="button is-warning">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



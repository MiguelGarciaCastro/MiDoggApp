import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

export default function SignUp(props) {
  const [formState, setFormState] = useState({ username: "", password: "", name:"" });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          password: formState.password,
          name: formState.name
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <div className="field bg-dark text-light p-3">
                <form className="box" onSubmit={handleFormSubmit}>
                  <div className="field">
                    <h3 className="text-center is-size-4 has-text-centered has-text-weight-bold">
                    Join the pack!
                    </h3>
                    <label for="username-signup">Username:</label>
                    <br />
                    <input
                      className="portfolio-languages text-dark input is-info"
                      type="text"
                      id="username-signup"
                      name="username"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label for="password-signup">Password:</label>
                    <br />
                    <input
                      className="portfolio-languages text-dark input is-info"
                      type="password"
                      id="password-signup"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="field">
                    <label for="name-signup">Name:</label>
                    <br />
                    <input
                      className="portfolio-languages text-dark input is-info"
                      type="name"
                      id="name-signup"
                      name="name"
                      onChange={handleChange}
                    />
                  </div> */}
                  <br />
                  <div className="field">
                    <p className="control">
                      <button className="button is-primary" type="submit">
                        Signup
                      </button>
                    </p>
                  </div>
                </form>
                {error && <div>Sign Up failed</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

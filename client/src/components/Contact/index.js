import React from 'react';

export default function Nav() {
    return (
        <section class="hero is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="columns is-8 is-variable ">
                            <div class="column is-two-thirds has-text-left">
                                <h1 class="title is-1">Contact Us</h1>
                                <p class="is-size-4">Let us know what you think about MiDogApp!</p>
                                <p class="is-size-5">Reach out with any questions, concerns or ideas for future development.</p>
                            </div>
                            <div className="column is-one-third has-text-left">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input className="input is-medium" type="text"></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input is-medium" type="text"></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Message</label>
                                    <div className="control">
                                        <textarea className="textarea is-medium"></textarea>
                                    </div>
                                </div>
                                <div className="control">
                                    <button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';

import logo from "../../public/images/logo.png";
import PostList from '../PostList';
import Auth from '../../utils/auth';

export default function Social() {

    const { loading, data } = useQuery(QUERY_POSTS);

    const posts = data?.posts || {};
    console.log(posts);

    const loggedIn = Auth.loggedIn();

    function scrollDown() {
        window.scroll({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-full is-centered">
                    <img src={logo} alt="Logo" className="images image is-128x128 is-inline-block"></img>
                    <h1 class="title text-light">
                        Bark Blog!
                    </h1>
                    <h2 class="subtitle text-light">
                    
                    </h2>
                    <hr />
                </div>
                
                <br />
            </div>
            <article class="column">
                {loading ? (
                    <div>Bark...Bark...Woof...</div>
                ) : (
                    <PostList posts={posts}/>
                )}
            </article>
            
        </div>
    )
}
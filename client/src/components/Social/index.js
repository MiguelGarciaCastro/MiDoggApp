import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC, QUERY_POSTS } from '../../utils/queries';

import logo from '../../public/images/logo.png';
import PostList from '../PostList';
import PostForm from '../PostForm';
import group from '../../public/images/group.png';
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
                        MyDog Blog
                    </h1>
                    <h2 class="subtitle text-light">
                    Sharing about your dog on your blog.
                    </h2>
                    <hr />
                </div>
                <button className="button is-fullwidth is-primary is-light" onClick={scrollDown}>Click to Post</button>
                <br />
            </div>
            <article class="column">
                {loading ? (
                    <div>Loading... Give your dog some attention while you wait!</div>
                ) : (
                    <PostList posts={posts}/>
                )}
            </article>
            <hr />
            <img src={group}></img>
            <hr />
            <div>
                {loggedIn && (
                    <PostForm />
                )}
            </div>

        </div>
    )
}

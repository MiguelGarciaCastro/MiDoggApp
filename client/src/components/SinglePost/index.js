import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_POST } from '../../utils/queries';
import Bottle from '../../public/images/bottle.png';

import CommentList from '../CommentList';
import CommentForm from '../CommentForm';
import Auth from '../../utils/auth';


const SinglePost = props => {

    const { id: postId } = useParams();
    console.log(postId)
    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId }
    });
    

    const posts = data?.post || {};

    if (loading) {
        return <div>Something is brewing!</div>;
    }

    return (
        
        <div className="column">
            <br />
            <article className="media box has-background-link-light">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src={Bottle}></img>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <div>
                            <strong>@{posts.username}</strong>  
                            <br />
                            {posts.body}
                            <br />
                            <small><a>Like</a> . {posts.createdAt}</small>
                        </div>
                    </div>
                    <div className="content">
                        <CommentList comments={posts.comments} />
                        <hr />
                        {Auth.loggedIn() && <CommentForm postId={posts._id} />}
                    </div>
                </div>
            </article>
        </div>
    )
}

export default SinglePost;
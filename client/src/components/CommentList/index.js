import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentForm from '../CommentForm';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries';
import Beericon from '../../public/images/circleBeericon.png';


const CommentList = ({ comments, postId }) => {

    const { id: postIdParam } = useParams();
    console.log(postId)
    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId ? postId : postIdParam }
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Something is brewing!</div>;
    }
    
    return (
        <>
            {comments &&
                comments.map(comment => (
                    <article className="media" key={comment._id}>
                        <figure className="media-left">
                            <p className="image is-48x48">
                                <img src={Beericon}></img>
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                                <div>
                                    <strong>@{comment.username}</strong> 
                                    <br />
                                    {comment.commentBody}
                                    <Link to={`/profile/${comment.username}`}></Link>
                                    <br />
                                    <small><a>Like</a> . {comment.createdAt}</small>
                                </div>
                            </div>
                            
                        </div>

                    </article>
                ))}

        </>
    )
}

export default CommentList;
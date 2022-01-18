import React, { useState } from 'react';
import { ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const CommentForm = ({ postId }) => {
    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const refreshPage = () => {
        window.location.reload();
    }

    const handleChange = event => {
        if (event.target.value.length <= 150) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addComment({
                variables: { commentBody, postId }
            });

            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p className={`${characterCount === 150 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/150
                {error && <span> - Something went wrong...</span>}
            </p>
            <form className="media-content" onSubmit={handleFormSubmit}>
                <div className="field">
                    <p className="control">
                        <textarea
                            className="textarea is-info is-small"
                            placeholder="Add a comment..."
                            value={commentBody}
                            onChange={handleChange}
                        ></textarea>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <button
                            className="button"
                            type="submit" >Post Comment</button>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;
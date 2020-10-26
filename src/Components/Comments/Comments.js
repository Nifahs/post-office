import React from 'react';
import './Comments.css'
const Comments = (props) => {

    const comment = props.comment;
    const {name, email, body} = comment;

    return (
        <div className='commentBlock'>
            <h5>{name}</h5>
            <small className='email'>{email}</small>
            <p className='commentbody'>{body}</p>
        </div>
    );
};

export default Comments;
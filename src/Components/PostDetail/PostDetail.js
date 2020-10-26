import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './PostDetail.css';


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';

// const useStyles = makeStyles({
//     root: {
//         width: 500,
//     },
// });


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const PostDetail = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    const { title, body } = post;
    return (
        <div>
            {/* <p>This is post details</p> */}
            {/* <h3>{title}</h3>
             */}
            <div className={classes.root}>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <h2>Post Details</h2>
                        <div className='postDetails'>
                            <h4 className="postTitle">{title}</h4>
                            <p className="postText">{body}</p>
                            <BottomNavigation
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                showLabels
                                className={classes.root}
                            >
                                <BottomNavigationAction label="Like" icon={<ThumbUpIcon />} />
                                <BottomNavigationAction label="Comment" icon={<ChatBubbleIcon />} />
                                <BottomNavigationAction label="Share" icon={<ShareIcon />} />
                            </BottomNavigation>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h2>Comments</h2>
                        {
                            comments.map((comment => <Comments comment={comment} id = {comment.id}> </Comments>))
                        }
                    </Grid>
                </Grid>
            </div>

        </div>
    );
};

export default PostDetail;
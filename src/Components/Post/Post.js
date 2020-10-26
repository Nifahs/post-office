import React from 'react';
import './Post.css';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';



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


const Post = (props) => {
    const classes = useStyles();
    const { title, body } = props.post;
    const id = props.id;
    let gender = '';
    if (id % 2 === 0) {
        gender = 'men';
    }

    else {
        gender = 'women';
    }
    const url = `https://randomuser.me/portraits/${gender}/${id - 1}.jpg`
    return (
        <div className="NewsfeedPost">
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={3} sm={3}>
                    <img className='round-photo' src={url} alt="" />
                </Grid>
                <Grid item xs={9} sm={9}>
                    <h4 className="postTitle">{title}</h4>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <small className="postBody">{body}</small>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="row" justify="flex-end" alignItems="center">

                <Grid item xs={12} sm={3}>
                    
                    <a href={`/postDetails/${id}`}><button className="detailsBtn">Read More</button></a>
                </Grid>
            </Grid>





        </div>
    );
};

export default Post;
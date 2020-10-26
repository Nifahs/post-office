import React, { createContext, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Post from '../Post/Post';
// import { PosterContext } from '../../App';

export const PostContext = createContext();

const Home = () => {

    const [posts, setPosts] = useState([]);
    // const poster = useContext(PosterContext);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=> setPosts(data))
    }, [])

    // console.log('the thing is : ', poster);
    
    return (
        
        <Container maxWidth="sm">
            <PostContext.Provider value='dog'>
            <h3>Newsfeed</h3>
            {
                posts.map(post => <Post post = {post} id ={post.id}></Post>)
            }
        </PostContext.Provider>
        </Container>
    );
};

export default Home;
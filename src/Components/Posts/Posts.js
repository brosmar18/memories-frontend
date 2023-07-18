import React from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import {Button, Card, Spinner} from 'react-bootstrap';
const Posts = () => {
    const posts = useSelector((state) => state.posts)

    console.log(posts);
    return (
        !posts.length ? 
        <Spinner animation="bordr" role="status">
            <span className='visually-hidden'>Loading...</span>
        </Spinner> : (
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src='https://placekitten.com/640/360' />
            </Card>
        )
    );
}

export default Posts;


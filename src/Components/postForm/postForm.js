import React, {useState, useEffect} from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import FileBase from 'react-file-base64';
import {createPost} from '../../Actions/posts';

const PostForm = () => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    return (
        <Container>
            <Card className='mb-4 shadow-sm'>
                <Card.Header as='h3' className='text-center'>Creating a Memory</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Creator</Form.Label>
                            <Form.Control name='creator' type='text' placeholder='Creator' value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control name='title' type='text' placeholder='Title' value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control name='message' type='text' placeholder='Message' value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control name='tags' type='text' placeholder='Tags' value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})} />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload File</Form.Label>
                            <Form.Control multiple={false} type="file" onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
                        </Form.Group>

                        <Button variant='primary' type='submit'>
                            Submit
                        </Button>
                        <Button variant='secondary' type='reset' className='ms-2'>
                            Clear
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default PostForm;

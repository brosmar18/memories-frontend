import React from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import FileBase from 'react-file-base64';

const PostForm = () => {
    return (
        <Container>
            <Card className='mb-4 shadow-sm'>
                <Card.Header as='h3' className='text-center'>Creating a Memory</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Creator</Form.Label>
                            <Form.Control type='text' placeholder='Creator' />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type='text' placeholder='Title' />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control type='text' placeholder='Message' />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control type='text' placeholder='Tags' />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload File</Form.Label>
                            <Form.Control type="file" />
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

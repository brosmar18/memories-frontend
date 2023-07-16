import React, {useEffect} from 'react';
import Posts from './Components/Posts/Posts';
import NavBar from './Components/NavBar/NavBar';
import {useDispatch} from 'react-redux';
import {getPosts} from './Actions/posts';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className='page'>
            <NavBar />
            <div>
                <Posts />
            </div>
            <div>
                <Posts />
            </div>
        </div>
    );
}

export default App;
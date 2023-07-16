import React from 'react';
import Posts from './Components/Posts/Posts';
import NavBar from './Components/NavBar/NavBar';
import {useDispatch} from 'react-redux';


const App = () => {
    const dispatch = useDispatch();
    
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
import React from 'react';
import memories from './images/memories.png';
import Posts from './Components/Posts/Posts';
import NavBar from './Components/NavBar/NavBar';


const App = () => {
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
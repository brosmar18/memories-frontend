import React from 'react';
import memories from './images/memories.png';
import Posts from './Components/Posts/Posts';


const App = () => {
    return (
        <div className='page'>
            <h1>Memories</h1>
            <img src={memories} alt='memories' />
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
import React from 'react';
import {navigate} from 'gatsby';

const Test = () => {
    return <div>
        <h1>This is a test page!</h1>
        <button onClick={()=>navigate('/')}>Goto Home</button>
    </div>
};

export default Test;
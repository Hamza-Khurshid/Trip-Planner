import React from 'react';
import Plan from './Plan/Plan';
import Work from './Work/Work';
import Industry from './Industry/Industry';
import Help from './Help/Help';

const Main = () => {
    return(
        <div>
            <Plan />
            <Work />
            <Industry />
            <Help />
        </div>
    );
}

export default Main;
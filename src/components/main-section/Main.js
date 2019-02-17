import React from 'react';
import Plan from './Plan/Plan';
import Work from './Work/Work';
import Industry from './Industry/Industry';
import Help from './Help/Help';
import BestExperience from './BestExperience';

const Main = () => {
    return(
        <div>
            <Plan />
            <Work />
            <Industry />
            <Help />
            <BestExperience />
        </div>
    );
}

export default Main;
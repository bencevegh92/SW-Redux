import React from 'react';

import classes from './spinner.module.scss';

const spinner = () => {
    return (
        <div className={classes.spinner}>
            <img src='https://media.giphy.com/media/JrMyqcNznjfx8g5sr2/giphy.gif' alt=''></img>
            <h1>Dance for Loading...</h1>
        </div>
    );
}

export default spinner;
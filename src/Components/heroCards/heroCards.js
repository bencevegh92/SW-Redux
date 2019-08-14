import React from 'react';

import classes from './heroCards.module.scss';

const heroes = (props) => {
    return (
        <div key={props.id} className={classes.heroes} onClick={props.clicked}>
            <img className={classes.heroes__avatar} src={props.heroImg[props.name] ? props.heroImg[props.name] : 'http://www.sclance.com/pngs/avatar-png/avatar_png_71193.png' } alt='avatar'></img>
            <div className={classes.heroes__stats}>
                <p className={classes.heroes__paragraps}>{props.name}</p>
            </div>
        </div>
    );
}

export default heroes;
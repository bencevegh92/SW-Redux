import React from 'react';

import classes from './myHero.module.scss';

const myHero = (props) => {
    return (
        <div className={classes.myHero}>
            <div className={classes.myHero__data}>
                <p className={classes.myHero__dataPara}>{props.name}</p>
                <p className={classes.myHero__dataPara}>{props.gender}</p>
                <p className={classes.myHero__dataPara}>{props.mass}</p>
            </div>
            <img className={classes.myHero__img} src={props.img} alt=''></img>
            <div className={classes.myHero__data}>
                <p className={classes.myHero__dataPara}>{props.height}</p>
                <p className={classes.myHero__dataPara}>{props.eyeColor}</p>
                <p className={classes.myHero__dataPara}>{props.hairColor}</p>
            </div>
        </div>
    );
}

export default myHero;

//pics
// https://purepng.com/public/uploads/large/purepng.com-darth-vaderdarth-vaderanakin-skywalkerstar-wars-franchiseskywalker-170152775443574arc.png
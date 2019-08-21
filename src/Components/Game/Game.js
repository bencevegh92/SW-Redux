import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import Fade from 'react-reveal/Fade';
import classes from './Game.module.scss';

class Game extends Component {
    state = {
        autoAttack : false,
        specialAttack : false
    }

    attackHandler() {
        
    }

    render() {
        return (
            <Fade>
                <div className={classes.Game}>
                    <h1 className={classes.GameHeader}>Fight!</h1>
                    <div className={classes.GameWrapper}>
                        <div className={classes.Game__selectedHero}>
                            <img className={classes.Game__img} src={this.props.heroData.img} alt=''></img>
                            <div className={classes.Game__btns}>
                                <button className={classes.Game__btn}>Auto Attack</button>
                                <button className={classes.Game__btn}>Special Attack</button>
                            </div>
                        </div>
                        <div className={classes.Game__selectedHero}>
                            <img className={classes.Game__img} src='https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/12/star-wars-stormtroopers.png?fit=300%2C557' alt=''></img>
                            <div className={classes.Game__btns}>
                                <button className={classes.Game__btn}>Auto Attack</button>
                                <button className={classes.Game__btn}>Special Attack</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.Game__nav}>
                        <Link to='/landingpage'><button className={classes.Game__navBtn}>&#8592;</button></Link>
                    </div>
                </div>
            </Fade>
        )
    }
}

const mapStateToProps = state => {
    return {
        heroData: state.heroes
    }
}

export default connect(mapStateToProps)(Game);
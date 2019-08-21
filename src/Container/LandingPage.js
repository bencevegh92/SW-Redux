import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes';

import classes from './LandingPage.module.scss';

import MyHero from '../Components/myHero/myHero';
import HeroCards from '../Components/heroCards/heroCards';
import Spinner from '../Components/UI/Spinner/spinner';

class LandingPage extends Component {
    state = {
        isLoading: false,
        resData: []
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/people/.json')
            .then(response => {
                const resData = response.data;
                const heroes = resData.results;
                this.setState({ resData: heroes, isLoading: true })
                console.log(this.state.resData)
            })
    }
    render() {
        //Hero Images | There is no transparent image for Beru and Biggs :( //
        const heroImg = {
            'Luke Skywalker': 'https://66.media.tumblr.com/52045179f1499f032fd09e379229fb1d/tumblr_o2lkz0OkKV1rxkqbso1_1280.png',
            'C-3PO': 'https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/12/star-wars-cp3o-transparent-image.png?fit=535%2C1024',
            'R2-D2': 'https://i.pinimg.com/originals/58/53/0b/58530b9a3becedaf61ecf90332d689f5.png',
            'Darth Vader': 'https://purepng.com/public/uploads/large/purepng.com-darth-vaderdarth-vaderanakin-skywalkerstar-wars-franchiseskywalker-170152775443574arc.png',
            'Leia Organa': 'https://i.pinimg.com/originals/be/92/62/be926222e248ecfd993dffa6e077a30a.png',
            'Owen Lars': 'https://i.pinimg.com/originals/b5/3a/5a/b53a5ae9a90265578ecec1a99b0134cc.png',
            'R5-D4': 'https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png/revision/latest?cb=20160809033145',
            'Obi-Wan Kenobi': 'https://gameskeysaustralia.com/image/cache/catalog/data/Hot-Toys/HOTMMS477-500x500.png'
        }
        let heroes = this.state.resData.map(hero => {
            return <HeroCards
                key={hero.url}
                name={hero.name}
                heroImg={heroImg}
                clicked={() => {
                    /* console.log(heroImg[hero.name]);
                    console.log(hero.name); */
                    this.props.clickHandler(
                        {
                            ...hero,
                            img: heroImg[hero.name]
                        }
                    )
                }}
            />;
        });
        if (!this.state.isLoading) {
            return <Spinner />
        }
        return (
            <Fade>
                <div className={classes.LandingPage}>
                    <h1 className={classes.LangingPage__Title}>Select your Hero</h1>
                    <MyHero
                        name={this.props.heroData.name}
                        gender={this.props.heroData.gender}
                        mass={this.props.heroData.mass}
                        img={this.props.heroData.img}
                        height={this.props.heroData.height}
                        eyeColor={this.props.heroData.eye_color}
                        hairColor={this.props.heroData.hair_color}
                    />
                    <div className={classes.LangingPage__HeroSlide}>
                        {heroes}
                    </div>
                    <div className={classes.LandingPage__nav}>
                        <Link to=''><button className={classes.LandingPage__btn}>&#8592;</button></Link>
                        <Link to='/game'><button className={classes.LandingPage__btn}>&#8594;</button></Link>
                    </div>
                </div>
            </Fade>
        );
    }
}
const mapStateToProps = state => {
    return {
        heroData: state.heroes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        clickHandler: (data) => {/* console.log(data);  */dispatch({ type: actionTypes.LOAD_CURRENT_HERO, data }) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
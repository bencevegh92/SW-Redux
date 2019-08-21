import * as actionTypes from './actionTypes';

const initialState = {
    heroes: {
        name: 'Storm Trooper',
        gender: 'Male / Female',
        mass: '93',
        img: 'https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/12/star-wars-stormtroopers.png?fit=300%2C557',
        height: '189',
        eye_color: 'multiple',
        hair_color: 'auburn, white'
    }
}



const rootReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case actionTypes.LOAD_CURRENT_HERO:
            return {
                ...state,
                heroes: action.data
            };
        default: 
            return state
    }
};

export default rootReducer; 
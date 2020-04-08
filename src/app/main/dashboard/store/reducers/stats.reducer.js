import * as Actions from '../actions/index';

const initalValues = {
  statistics: []
}

const Stats = function(state = initalValues, action){
  switch(action.type){
    case Actions.GET_STATISTICS:{
      return { ...state, statistics: action.payload}
    }
    default: {
      return state;
    }
  }
}

export default Stats;
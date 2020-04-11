import * as Action from '../actions/index';

const initalValues = {
  TestCases: []
}

const TestCases = function(state = initalValues, action){
  switch(action.type){
    case Action.GET_TEST_CASES: {
      return {
        ...state,
        TestCases: action.payload
      }
    }
    default : {
      return state
    }
  }
}

export default TestCases;
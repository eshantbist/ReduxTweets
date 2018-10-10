import ajax from '../Utils/ajax';

const TweetsReducer=(state=[],action)=>{
  switch (action.type) {
    case 'TWEETS':
    console.log(action.tweets.data);
    return [...state,{tweets:action.tweets.data}];
    default:
    return state;
  }
}

export default TweetsReducer

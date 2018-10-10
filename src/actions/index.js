import {SIGN_IN,SIGN_UP,TWEETS} from './actionTypes'
import axios from 'axios';

export function signIn(username,password){
   return{
     type:SIGN_IN,
     username,
     password,
   };
}

export function signUp(username,password,email,phone_number){
   return{
     type:SIGN_UP,
     username,
     password,
     email,
     phone_number
   };
}

export function tweets(tweets){

   const url='https://staging.chinmayamission.com/wp-json/wp/v2/tweet';
   const request=axios.get(url)
   return{
     type:TWEETS,
     tweets:request,
   };
}

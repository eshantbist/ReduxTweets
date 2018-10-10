import React,{Component} from 'react';
import {View,Text,FlatList,StyleSheet,Platform,Animated,Easing} from 'react-native';
import {tweets} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class TweetList extends Component{
    titleXPos=new Animated.Value(0);
    constructor(props){
      super(props);
      this.state={
        tweets:[],
      }
    }
    animatedTitle=(direction=1)=>{
    Animated.timing(
      this.titleXPos,
      {toValue: direction*75,
        duration:850,
        easing:Easing.spring
      }).start(({finished})=> {
        if(finished){
          this.animatedTitle(-1*direction);
        }
    });
  }

    async componentDidMount() {
      this.animatedTitle();
      //const tweets = await ajax.fetchInitialTweets();
      //this.setState({tweets});
      this.props.tweets();
      //console.log(this.props.allTweets);

    }

    render() {
      // if(this.state.tweets!==null)
      // {
      //   return(
      //     <View>
      //         <TweetItem/>
      //     </View>
      //   );
      // }
      return (
        <Animated.View style={[{left:this.titleXPos}, styles.container]}>
            <Text style={styles.header}>CCMT TWEETS</Text>
        </Animated.View>
      );
    }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({tweets},dispatch);
}

const mapStateToProps=(state)=>{
  return{allTweets:state.TweetsReducer};
}
export default connect(mapStateToProps,mapDispatchToProps)(TweetList);

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight:'900',
    fontFamily:'Cochin'
  },
});

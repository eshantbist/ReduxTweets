import React, {Component} from 'react';
import {ScrollView,Modal,TouchableOpacity,Button,TextInput,Platform, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {signIn} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SignIn extends Component {
  state = {
    username:'',
    password:'',
    user:{},
  }
  onChangeText(key,value) {
    this.setState({ [key]:value })
  }

  signIn=()=>{
    // this.props.signIn(this.state.username,this.state.password);
    // console.log(this.props.authenticated);
    // console.log('after action')
    var authenticated=true;
    if(authenticated){
      this.props.navigation.navigate('App');
    }
  }

  show=()=>{
    console.log(this.props.authenticated);
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.container}>
          <FontAwesome name={'user-circle'} color={'#333333'} size={100} style={styles.userIcon}/>
          <TextInput
            placeholder='Username'
            onChangeText={value => this.onChangeText('username',value)}
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            onChangeText={value => this.onChangeText('password',value)}
            secureTextEntry={ true }
            style={styles.input}
          />
          <Button title='Sign In' onPress={()=>this.signIn()}/>
          <Button title='Forgot Password??' onPress={()=>this.show()} />
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({signIn},dispatch);
}

const mapStateToProps=(state)=>{
  return{authenticated:state.SignInReducer};
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 50,
    backgroundColor: '#ededed',
    margin:10,
    paddingLeft:10,
    borderRadius:10
  },
  userIcon:{
    marginHorizontal:130,
    marginBottom:20,
  }
});

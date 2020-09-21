// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Animated,
//   Button,
// } from 'react-native';
//
// export default class App extends Component{
//   marginTop = new Animated.Value(20);
//   animate = () =>{
//     Animated.timing(
//         this.marginTop,
//         {
//           toValue:200,
//           duration:500,
//         }
//     ).start();
//   }
//   render() {
//     return (
//         <View style={styles.container}>
//           <Button title='Animate Box' onPress={this.animate}/>
//           <Animated.View style={[styles.box, {marginTop: this.marginTop}]}/>
//         </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     padding:10,
//     paddingTop:50,
//   },
//   box:{
//     width:150,
//     height:150,
//     backgroundColor:'red',
//   }
// });






// import React, {Component} from 'react';
// import {StyleSheet, View, Animated, Button, TextInput, Text} from 'react-native';
//
// export default class App extends Component{
//     animateWidth = new Animated.Value(200);
//     animate=(value)=>{
//         Animated.timing(this.animateWidth, {toValue:value, duration:750,}).start();
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Animated.View style={{width:this.animateWidth}}>
//                     <TextInput style={[styles.input]} onBlur={()=>this.animate(200)} onFocus={()=>this.animate(325)} ref={input => this.input=input}/>
//                 </Animated.View>
//                 <Button title='Submit' onPress={()=> this.input.blur()}/>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         padding:10,
//         paddingTop:50,
//     },
//     input:{
//         height:50,
//         marginHorizontal:15,
//         backgroundColor:'#ededed',
//         marginTop:10,
//         paddingHorizontal:9,
//     }
// });






// import React, {Component} from 'react';
// import { Easing, StyleSheet, View, Animated, Button, Text } from 'react-native';
//
// export default class App extends Component{
//     state={
//         loading: true,
//     }
//
//     componentDidMount() {
//         this.animate();
//         setTimeout(()=> this.setState({loading:false}), 2000)
//     }
//
//     animatedRotation = new Animated.Value(0);
//
//     animate = () =>{
//         Animated.loop(Animated.timing(this.animatedRotation, {toValue:1, duration:1800, easing:Easing.linear})).start();
//     }
//
//     render() {
//         const rotation = this.animatedRotation.interpolate({
//             inputRange:[0,1],
//             outputRange:['0deg', '360deg'],
//         });
//         const {loading} = this.state;
//         return (
//             <View style={styles.container}>
//                 {
//                     loading ? (<Animated.Image source={require('./V.png')} style={{width:40, height: 40, transform:[{rotate:rotation}]}}/> ) : (<Text>Welcome</Text>)
//                 }
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         padding:10,
//         paddingTop:50,
//     },
//     input:{
//         height:50,
//         marginHorizontal:15,
//         backgroundColor:'#ededed',
//         marginTop:10,
//         paddingHorizontal:9,
//     },
// })






// import React, {Component} from 'react';
// import {Easing, StyleSheet, View, Animated, Text, TouchableHighlight} from 'react-native';
//
// export default class App extends Component{
//     animatedTitle = new Animated.Value(-200);
//     animatedSubtitle = new Animated.Value(600);
//     animatedButton = new Animated.Value(800);
//
//     componentDidMount() {
//         this.animate();
//     }
//
//     animate = () =>{
//         Animated.parallel([Animated.timing(this.animatedTitle, {toValue:200, duration:800}),
//                                     Animated.timing(this.animatedSubtitle, {toValue:0, duration:1400, delay:800}),
//                                     Animated.timing(this.animatedButton, {toValue:0, duration:1000, delay:2200})]).start();
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Animated.Text style={[styles.title, {marginTop: this.animatedTitle}]}>Welcome</Animated.Text>
//                 <Animated.Text style={[styles.subTitle, {marginLeft: this.animatedSubtitle}]}>Thanks for visiting our app</Animated.Text>
//                 <Animated.View style={{marginTop: this.animatedButton}}>
//                     <TouchableHighlight style={styles.button}>
//                         <Text>Get Started</Text>
//                     </TouchableHighlight>
//                 </Animated.View>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//     },
//     title:{
//         textAlign:'center',
//         fontSize:20,
//         marginBottom: 12,
//     },
//     subTitle:{
//         width: '100%',
//         textAlign: 'center',
//         fontSize: 18,
//         opacity:.8,
//     },
//     button:{
//         marginTop:25,
//         backgroundColor:'#ddd',
//         height:55,
//         justifyContent:'center',
//         alignItems:'center',
//         marginHorizontal:10,
//     }
// });








// import React, {Component} from 'react';
// import {StyleSheet, View, Animated} from 'react-native';
//
// export default class App extends Component{
//     componentDidMount() {
//         this.animate();
//     }
//
//     AnimatedValue1 = new Animated.Value(-30);
//     AnimatedValue2 = new Animated.Value(-30);
//     AnimatedValue3 = new Animated.Value(-30);
//
//     animate = () =>{
//         const createAnimation = (value) =>{
//             return Animated.timing(value, {toValue: 290, duration:500});
//         }
//         Animated.sequence([
//             createAnimation(this.AnimatedValue1),
//             createAnimation(this.AnimatedValue2),
//             createAnimation(this.AnimatedValue3)
//         ]).start();
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Animated.Text style={[styles.text, {marginTop:this.AnimatedValue1}]}>
//                     1
//                 </Animated.Text>
//                 <Animated.Text style={[styles.text, {marginTop:this.AnimatedValue2}]}>
//                     2
//                 </Animated.Text>
//                 <Animated.Text style={[styles.text, {marginTop:this.AnimatedValue3}]}>
//                     3
//                 </Animated.Text>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         flexDirection:'row'
//     },
//     text:{
//         marginHorizontal:20,
//         fontSize: 26
//     }
// })









import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

export default class App extends Component{
    constructor() {
        super();
        this.animatedValues=[];
        for (let i=0; i<1000;i++){
            this.animatedValues[i] = new Animated.Value(0)
        }
        this.animations = this.animatedValues.map(value => {
            return Animated.timing(value, {toValue:1, duration:6000})
        })
    }
    componentDidMount() {
        this.animate();
    }
    animate=()=>{
        Animated.stagger(15, this.animations).start();
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.animatedValues.map(((value, index) => (
                        <Animated.View key={index} style={[{opacity:value}, styles.box]}/>
                    )))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    box:{
        width:15,
        height:15,
        margin:.5,
        backgroundColor:'red'
    }
})

// import React, {Component} from 'react';
// import Proptypes from 'prop-types';
// import update from 'immutability-helper';
// import {
//     StyleSheet,
//     View,
//     Image,
//     Text,
//     Platform,
//     TouchableHighlight,
// } from 'react-native';
//
// const userImage = require('./user.jpg');
//
// const data = [{
//     image: userImage,
//     name: 'MooSong',
//     occupation: 'React Native Developer',
//     description: 'moosong is a really great JavaScript developer. She loves using JS to build React Native applications for iOS and Android.',
//     showThumbnail: true,
// }];
//
// const ProfileCard = (props) => {
//     const {image, name, occupation, description, onPress, showThumbnail} = props;
//     let containerStyles = [styles.cardContainer];
//     if (showThumbnail) {
//         containerStyles.push(styles.cardThumbnail);
//     }
//     return (
//         <TouchableHighlight onPress={onPress}>
//             <View style={[containerStyles]}>
//                 <View style={styles.cardImageContainer}>
//                     <Image style={styles.cardImage} source={image}/>
//                 </View>
//                 <View>
//                     <CenteredText style={styles.cardName}>
//                         {name}
//                     </CenteredText>
//                 </View>
//                 <View style={styles.cardOccupationContainer}>
//                     <Text style={styles.cardOccupation}>
//                         {occupation}
//                     </Text>
//                 </View>
//                 <View>
//                     <Text style={styles.cardDescription}>
//                         {description}
//                     </Text>
//                 </View>
//             </View>
//         </TouchableHighlight>
//     );
// };
//
// ProfileCard.propTypes ={
//     image:Proptypes.number.isRequired,
//     name:Proptypes.string.isRequired,
//     occupation:Proptypes.string.isRequired,
//     description:Proptypes.string.isRequired,
//     showThumbnail:Proptypes.bool.isRequired,
//     onPress:Proptypes.func.isRequired
// };
//
// export default class App extends Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state={
//             data:data
//         }
//     }
//
//     handleProfileCardPress = (index) =>{
//         const showThumbnail = !this.state.data[index].showThumbnail;
//         this.setState({
//             data:update(this.state.data, {[index]:{showThumbnail:{$set:showThumbnail}}})
//         });
//     };
//
//     render() {
//         const list = this.state.data.map(function (item, index) {
//             const {image, name, occupation, description, showThumbnail }=item;
//             return <ProfileCard key={'card-'+index} image={image} name={name} occupation={occupation} description={description} showThumbnail={showThumbnail} onPress={this.handleProfileCardPress.bind(this, index)}/>
//         }, this);
//         return (
//             <View style={styles.container}>
//                 {list}
//             </View>
//         );
//     }
// };
//
// const profileCardColor = 'rgb(250,216,216)';
// const profileBorderColor = 'rgb(231,158,158)';
// const profileNameColor = 'rgb(50,24,24)';
//
// const CenteredText = (props) => (
//     <Text style={[styles.centeredText, props.style]}>
//         {props.children}
//     </Text>
// );
//
// const styles = StyleSheet.create({
//     cardThumbnail:{
//         transform:[{scale:0.2}]
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     cardContainer: {
//         alignItems: 'center',
//         borderColor: profileBorderColor,
//         borderWidth: 3,
//         borderStyle: 'solid',
//         borderRadius: 20,
//         backgroundColor: profileCardColor,
//         width: 300,
//         height: 400,
//         ...Platform.select({
//             ios: {
//                 shadowColor: 'black',
//                 shadowOffset: {
//                     height: 10,
//                 },
//                 shadowOpacity: 1,
//             },
//             android: {
//                 elevation: 15,
//             },
//         }),
//     },
//     cardImageContainer: {
//         alignItems: 'center',
//         backgroundColor: 'white',
//         borderWidth: 3,
//         borderColor: profileBorderColor,
//         width: 120,
//         height: 120,
//         borderRadius: 60,
//         marginTop: 30,
//         paddingTop: 0,
//         ...Platform.select({
//             ios: {
//                 shadowColor: 'black',
//                 shadowOffset: {
//                     height: 10,
//                 },
//                 shadowOpacity: 1,
//             },
//             android: {
//                 elevation: 15,
//             },
//         }),
//     },
//     cardImage: {
//         width: 114,
//         height: 114,
//         borderRadius: 60,
//     },
//     cardName: {
//         color: profileNameColor,
//         marginTop: 30,
//         fontWeight: 'bold',
//         fontSize: 24,
//         textShadowColor: 'black',
//         textShadowOffset: {
//             height: 2,
//             width: 2,
//         },
//         textShadowRadius: 3,
//     },
//     cardOccupationContainer: {
//         borderColor: profileNameColor,
//         borderWidth: 3,
//         borderTopWidth: 0,
//         borderRightWidth: 0,
//         borderLeftWidth: 0,
//
//     },
//     cardOccupation: {
//         fontWeight: 'bold',
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     cardDescription: {
//         fontStyle: 'italic',
//         marginTop: 10,
//         marginLeft: 40,
//         marginRight: 40,
//         marginBottom: 10,
//         lineHeight: 26,
//     },
//     centeredText: {
//         ...Platform.select({
//             ios: {
//                 fontFamily: 'American Typewriter',
//             },
//             android: {
//                 fontFamily: 'monospace',
//             },
//         }),
//     },
// });




// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Example style={{}}>A</Example>
//
//                 <Example style={{transform: [{skewX: '45deg'}]}}>B X45</Example>
//
//                 <Example style={{transform: [{skewX: '-45deg'}]}}>C X-45</Example>
//
//                 <Example style={{transform: [{skewY: '45deg'}]}}>D Y45</Example>
//
//                 <Example style={{transform: [{skewY: '-45deg'}]}}>E Y-45</Example>
//             </View>
//         );
//     }
// }
//
// const Example = (props) => (
//     <View style={[styles.example, props.style]}>
//         <Text>
//             {props.children}
//         </Text>
//     </View>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//         flex: 1,
//     },
//     example: {
//         width: 75,
//         height: 75,
//         borderWidth: 2,
//         margin: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });






// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={[styles.flexContainer]}>
//                     <Example style={[styles.darkgrey]}>A 50%</Example>
//                     <Example>B 50%</Example>
//                 </View>
//                 <View style={[styles.flexContainer]}>
//                     <Example style={[styles.darkgrey]}>C 33%</Example>
//                     <Example style={{flex: 2}}>D 66%</Example>
//                 </View>
//                 <View style={[styles.flexContainer]}>
//                     <Example style={[styles.darkgrey]}>E 25%</Example>
//                     <Example style={{flex: 3}}>F 75%</Example>
//                 </View>
//             </View>
//         );
//     }
// }
//
// const Example = (props) => (
//     <View style={[styles.example,styles.lightgrey,props.style]}>
//         <Text>
//             {props.children}
//         </Text>
//     </View>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//         flex: 1
//     },
//     flexContainer: {
//         width: 150,
//         height: 150,
//         borderWidth: 1,
//         margin: 10,
//         flexDirection:'row'
//     },
//     darkgrey: {
//         backgroundColor: '#666666'
//     },
//     lightgrey: {
//         backgroundColor: '#ededed'
//     },
//     example: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
// });






//
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component{
//     render() {
//         return (
//             <View style={styles.container}>
//                 <FlexContainer style={[{justifyContent: 'center'}]}>
//                     <Example>center</Example>
//                     <Example>center</Example>
//                 </FlexContainer>
//                 <FlexContainer style={[{justifyContent: 'flex-start'}]}>
//                     <Example>flex-start</Example>
//                     <Example>flex-start</Example>
//                 </FlexContainer>
//                 <FlexContainer style={[{justifyContent: 'flex-end'}]}>
//                     <Example>flex-end</Example>
//                     <Example>flex-end</Example>
//                 </FlexContainer>
//                 <FlexContainer style={[{justifyContent: 'space-around'}]}>
//                     <Example>space-around</Example>
//                     <Example>space-around</Example>
//                 </FlexContainer>
//                 <FlexContainer style={[{justifyContent: 'space-between'}]}>
//                     <Example>space-between</Example>
//                     <Example>space-between</Example>
//                 </FlexContainer>
//             </View>
//         );
//     }
// }
//
// const FlexContainer = (props) => (
//     <View style={[styles.flexContainer,props.style]}>
//         {props.children}
//     </View>
// );
//
// const Example = (props) => (
//     <View style={[styles.example,props.style]}>
//         <Text>
//             {props.children}
//         </Text>
//     </View>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//         flex: 1
//     },
//     flexContainer: {
//         alignItems: 'stretch',
//         backgroundColor: '#ededed',
//         width: 120,
//         height: 100,
//         borderWidth: 1,
//         margin: 10
//     },
//     example: {
//         width: 120,
//         height: 15,
//         backgroundColor: '#666666'
//     },
// });







// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';
//
// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={[styles.flexContainer,{alignItems: 'center'}]}>
//                     <Example style={[styles.darkgrey]}>A 50%</Example>
//                     <Example>B 50%</Example>
//                 </View>
//                 <View style={[styles.flexContainer,{alignItems: 'flex-start'}]}>
//                     <Example style={[styles.darkgrey]}>C 33%</Example>
//                     <Example style={{flex: 2}}>D 66%</Example>
//                 </View>
//                 <View style={[styles.flexContainer,{alignItems: 'flex-end'}]}>
//                     <Example style={[styles.darkgrey]}>E 25%</Example>
//                     <Example style={{flex: 3}}>F 75%</Example>
//                 </View>
//             </View>
//         );
//     }
// }
//
// const Example = (props) => (
//     <View style={[styles.example,styles.lightgrey,props.style]}>
//         <Text>
//             {props.children}
//         </Text>
//     </View>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//         flex: 1
//     },
//     flexContainer: {
//         width: 150,
//         height: 150,
//         borderWidth: 1,
//         margin: 10
//     },
//     darkgrey: {
//         backgroundColor: '#666666'
//     },
//     lightgrey: {
//         backgroundColor: '#ededed'
//     },
//     example: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
// });











// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <FlexContainer style={[]}>
//                     <Example align='auto'>auto</Example>
//                     <Example align='stretch'>stretch</Example>
//                     <Example align='center'>center</Example>
//                     <Example align='flex-start'>flex-start</Example>
//                     <Example align='flex-end'>flex-end</Example>
//                     <Example>default</Example>
//                 </FlexContainer>
//             </View>
//         );
//     }
// }
//
// const FlexContainer = (props) => (
//     <View style={[styles.flexContainer,props.style]}>
//         {props.children}
//     </View>
// );
//
// const Example = (props) => (
//     <View style={[styles.example,
//                   styles.lightgrey,
//                   {alignSelf: props.align || 'auto'},
//                   props.style
//     ]}>
//         <Text>
//             {props.children}
//         </Text>
//     </View>
// );
//
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//         flex: 1
//     },
//     flexContainer: {
//         backgroundColor: '#ededed',
//         width: 120,
//         height: 180,
//         borderWidth: 1,
//         margin: 10
//     },
//     example: {
//         height: 25,
//         marginBottom: 5,
//         backgroundColor: '#666666'
//     },
// });







import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* flexWrap 속성 값에 nowrap으로 지정. 정사각형이 벗어남 */}
                <NoWrapContainer>
                    <Example>A nowrap</Example>
                    <Example>1</Example>
                    <Example>2</Example>
                    <Example>3</Example>
                    <Example>4</Example>
                </NoWrapContainer>
                {/* flexWrap 속성 값에 wrap으로 지정. 정사각형이 유지되어 새로운 줄에서 시작 */}
                <WrapContainer>
                    <Example>B wrap</Example>
                    <Example>1</Example>
                    <Example>2</Example>
                    <Example>3</Example>
                    <Example>4</Example>
                </WrapContainer>
            </View>
        );
    }
}

//첫 번째 예에 noWrapContainer 스타일을 적용
const NoWrapContainer = (props) => (
    <View style={[styles.noWrapContainer,props.style]}>
        {props.children}
    </View>
);

// 두 번째 예에 wrapContainer 스타일을 적용
const WrapContainer = (props) => (
    <View style={[styles.wrapContainer,props.style]}>
        {props.children}
    </View>
);

const Example = (props) => (
    <View style={[styles.example,props.style]}>
        <Text>
            {props.children}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        flex: 1
    },
    //flexDirection 속성에는 row, flexWrap 속성에는 nowrap을 지정
    noWrapContainer: {
        backgroundColor: '#ededed',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        borderWidth: 1,
        margin: 10
    },

    //flexDirection 속성에는 row, flexWrap 속성에는 wrap을 지정
    wrapContainer: {
        backgroundColor: '#ededed',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        margin: 10
    },
    example: {
        width: 100,
        height: 100,
        margin: 5,
        backgroundColor: '#666666'
    },
});

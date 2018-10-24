import React from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const SocialIcon = (props) => (
    <TouchableHighlight
        onPress={props.onPress}
    >
        <Icon name={props.icon} size={props.size}/>
    </TouchableHighlight>
);

export default SocialIcon;

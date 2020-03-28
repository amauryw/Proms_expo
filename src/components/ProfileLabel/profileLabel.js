import React from 'react';
import { View, Text} from 'react-native';

Class ProfileLabel extends React.Component {
    render(){
        const {tile, input} = this.props.label;
        return (
           <View style = {styles.container}>
           <Text style = {styles.labelText}>title</Text>
           <Text style = {styles.inputText}>input</Text>
           </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        marginHortizontal: 10,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    labelText: {
        fontsize: 20
    },
    inputText: {
        fontsize: 15
    }
});

export default ProfileLabel
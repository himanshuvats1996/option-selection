import * as React from "react";
import { Modal,View,Text,StyleSheet,FlatList,TouchableOpacity } from "react-native"; 
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class CustomPopUp extends React.Component
{
      constructor(props) {
         
         super(props);
         const { items, selectedItem } = props;
         let selectedIndex;
        if (selectedItem != null) {
            selectedIndex = items.findIndex(
                item => item.value === selectedItem.value,
            );
         }
            this.state = { selectedIndex };
        }


        onPressItem(value) {
            const { items } = this.props;
            this.setState(() => {
            const selectedIndex = items.findIndex(item => item.value === value);
            return { selectedIndex };
            });
        }
        
    keyExtractor = item => String(item.value);
       renderItem = ({ item,index }) => (

            <TouchableOpacity onPress={()=> this.onPressItem(item.value)} onPressIn={()=> this.props.onChange({selectedItem:this.props.items[item.value]})} >
                <View style={styles.rowContainer}>
                    <View style={styles.iconContainer}>
                        <Text>{item.label}</Text>
                        <Icon
                            name={
                                index === this.state.selectedIndex
                                ? 'radio-button-checked'
                                : 'radio-button-unchecked'
                            }
                            color={'#000'}
                            size={24}
                        />
                    </View>
                </View>
            </TouchableOpacity>
       );

    render(){
        return(
            <Modal
                visible={this.props.visible}
                transparent={true}
                animationType="fade"
                onRequestClose={this.props.onRequestClose}
            >
                <View style={styles.containerModal}>
                    <View style={styles.innercontainerModal}>
                        <FlatList
                            data={this.props.items}
                            extraData={this.state}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}  
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}
const styles=StyleSheet.create({
    containerModal: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
    },
    innercontainerModal:{
        justifyContent:'center',
        backgroundColor:'#fff',
        
        width:'80%'
    },
    rowContainer: {
        borderBottomWidth:1.5,
        height: 46,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft:20,
        paddingRight:20
    },
    iconContainer: {
       marginRight: 1,
       width:'100%',
       flexDirection:'row',
       justifyContent:'space-between'
    },
});
CustomPopUp.defaultProps={
    selectedItem:undefined
}
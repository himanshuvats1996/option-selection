# react-native-option-selection
This repo is provides the simple option selection while passing array in to it.
To use this package just install it by running

npm i react-native-option-selection .

It provide the simple list of the rendered data array in to the selectable option 

To use it 

import PopUp from 'react-native-option-selection';

    this.state={
      data:[
          {id:"1",label:"India"},
          {id:"2",label:"America"},
          {id:"3",label:"Paris"},
          {id:"4",label:"Kenya"},
          {id:"5",label:"South Africa"},
          {id:"6",label:"Japan"},
          {id:"7",label:"China"},
      ],
      PopUp_status:false,
      selected_value:''
    }
    
    
     <PopUp
          visible={this.state.PopUp_status}
          items={this.state.data.map((row,index)=>{return{value:index,label:row.label,idValue:row.id};})}
          onChange={
                result=>{
                  this.setState({PopUp_status:false,selected_value:result.selectedItem.label});
                  console.log(result.selectedItem.label);
                }
          }
      />


if you got the issue of chinese language alphabet in place of icon then please follow the steps to resolve it .
follow the path : -  android/app/build.gradle
and add the below line to it .

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

and then execute
react-native run-android


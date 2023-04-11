import React, { useState } from 'react';
import { View, Text, TouchableOpacity ,FlatList,Dimensions} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

const calender = () => {
  const event=[
    {
        "id": 3567,
        "date": "2023-01-12T22:10:06",
        "date_gmt": "2023-04-07T16:40:06",
        "guid": {
            "rendered": "https://goonjfoundationnashik.test/?post_type=tribe_events&#038;p=3567"
        },
        "modified": "2023-04-07T22:10:06",
        "modified_gmt": "2023-04-07T16:40:06",
        "slug": "test-events",
        "status": "publish",
        "type": "tribe_events",
        "link": "https://staging.co.in/index.php/event/test-events/",
        "title": {
            "rendered": "test events"
        },
        "content": {
            "rendered": "<p>events data description data</p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>events data description data</p>\n",
            "protected": false
        },
        "author": 3,
        "featured_media": 0,
        "comment_status": "open",
        "ping_status": "closed",
        "template": "",
        "meta": {
            "site-sidebar-layout": "default",
            "site-content-layout": "default",
            "ast-global-header-display": "",
            "ast-main-header-display": "",
            "ast-hfb-above-header-display": "",
            "ast-hfb-below-header-display": "",
            "ast-hfb-mobile-header-display": "",
            "site-post-title": "",
            "ast-breadcrumbs-content": "",
            "ast-featured-img": "",
            "footer-sml-layout": "",
            "theme-transparent-header-meta": "default",
            "adv-header-id-meta": "",
            "stick-header-meta": "",
            "header-above-stick-meta": "",
            "header-main-stick-meta": "",
            "header-below-stick-meta": "",
            "_tribe_events_status": "",
            "_tribe_events_status_reason": ""
        },
        "tags": [],
        "tribe_events_cat": [],
        "acf": [],
        "_links": {
            "self": [
                {
                    "href": "https://staging.co.in/index.php/wp-json/wp/v2/tribe_events/3567"
                }
            ],
            "collection": [
                {
                    "href": "https://staging.co.in/index.php/wp-json/wp/v2/tribe_events"
                }
            ],
            "about": [
                {
                    "href": "https://staging.co.in/index.php/wp-json/wp/v2/types/tribe_events"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://staging.co.in/index.php/wp-json/wp/v2/users/3"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://staging.co.in/index.php/wp-json/wp/v2/comments?post=3567"
                }
            ],
            "version-history": [
                {
                    "count": 1,
                    "href": "https://staging.co.in/index.php/wp-json/wp/v2/tribe_events/3567/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 3568,
                    "href": "https://staging.co.in/index.php/wp-json/wp/v2/tribe_events/3567/revisions/3568"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://staging.co.in/index.php/wp-json/wp/v2/media?parent=3567"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://staging.co.in/index.php/wp-json/wp/v2/tags?post=3567"
                },
                {
                    "taxonomy": "tribe_events_cat",
                    "embeddable": true,
                    "href": "https://staging.co.in/index.php/wp-json/wp/v2/tribe_events_cat?post=3567"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    }
]
let t=(event[0].date)
 const myArray = t.split("T");
 
const ev=myArray[0].split("-")
const setY =ev[0]
const setM =ev[1]
const setD =ev[2]




   
var state = {
        activeDate: new Date()
    } 
 
    const{height,width}=Dimensions.get("window")
  const    months=["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  const Days =["sun","mun","tue","wed","thu","fri","set",]
  const [years,setYear]= useState(2023)
 

 const Date2=[]
  const [count,setCount]=useState(0)

const getDays = (year: number, month: number) => {
return new Date(year, month, 0).getDate();
};  
const daysInSeptember = getDays(years,count+1); 
  
 const j = new Date(years,count,1).getDay()
    for(let i=0;i<j;i++){
      Date2.push(" ")
    }

  for(let j=1;j<=daysInSeptember;j++){
    Date2.push(j)
    }

   


  return (
    <View style={{}}>

         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style={{margin:10}} onPress={()=>{
                if(count-1>0){
                    setCount(count-1)
                }else{
                    setCount(11)
                    setYear(years-1)
                }
               }
        }>
                <Text>back</Text>
            </TouchableOpacity >
            <Text style={{margin:20,fontWeight:'800',fontSize:30}}>{months[0+count]}</Text>
            <TouchableOpacity  style={{margin:10}} onPress={()=>{
                if(count+1<11){
                    setCount(count+1)
                }else{
                    setCount(0)
                    setYear(years+1)
                    // setYear(years+1)
                }
               }}>
                <Text>next</Text>
            </TouchableOpacity>


         </View>
         <Text style={{alignSelf:'center',borderWidth:2,width:"100%",textAlign:'center'}}>{months[0+count]} {years}</Text>
       
       
         <FlatList
         horizontal
         data={Days}
     renderItem={({item})=>{
       
        return(
       <View style={{backgroundColor:'#3c1a79',justifyContent:'space-around'}}>
    
    <Text style={{color:"#FFF",width:height/13,borderRightColor:'#FFF',borderWidth:2,textAlign:'center'}} >{item}</Text>
 

</View>
        )
     }}
         />
         <View style={{marginTop:10}}>
      

      
          <FlatList
       
         data={Date2}
         numColumns={7}
     renderItem={({item})=>{
      
      if(count==parseInt(setM)-1 && years==parseInt(setY) && item==parseInt(setD)){
        return(
          <View style={{backgroundColor:'#94a7ea',marginRight:1,elevation:10,width:height/13,height:height/9,justifyContent:'center',borderRightColor:'#FFF',borderWidth:2}}>     
          <TouchableOpacity>         
                   <Text style={{color:'black',fontWeight:'bold',alignSelf:'center'}}>
                   {item}
                  </Text>
                  </TouchableOpacity>    
                  <Text style={{color:'#FFF',alignSelf:'center',fontWeight:'bold',}}>
                   {event[0].title.rendered}
                   </Text>
              </View>

        )
      }else{
        return(
          <View style={{backgroundColor:'#94a7ea'}}>
               <TouchableOpacity >
       <Text style={{color:"#FFF",width:height/13,borderRightColor:'#FFF',borderWidth:2,height:height/9,textAlign:'center'}} >{item}</Text>
       </TouchableOpacity>
   </View>
           )
      }
        
    
     }}
         />
    
       </View>
    </View>
  );
}

export default calender;

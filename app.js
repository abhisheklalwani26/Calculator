import React , {Component} from 'react';
import {StyleSheet ,View,Text,Button,TouchableOpacity} from 'react-native';


export default class App extends Component{
  constructor(){
    super()
    this.state={
      calculationText:"",
      resultText:"",
      ansText:"",
      dmtext:false,
    }
  }
  btnpress(text){
    //console.log(this.state.calculationText)
    if(this.state.calculationText.length<=9)
    {
    this.setState({
      calculationText: this.state.calculationText + text,
      
    }) 
    
    this.setState({
      resultText: this.state.resultText + text,
      
    }) }
    this.setState({
      ansText: this.state.ansText + text,
      
    })
    
    
    

  }
  acpress()
  {
    this.setState({
      calculationText: "",
      resultText:"",
      ansText:"",
    })
  }
  delpress()
  {
    console.log(this.state.calculationText)
    let text=this.state.calculationText.split('')
    text.pop()
    this.setState({
      calculationText: text.join(''),
     })
      console.log(this.state.resultText)
    let text1=this.state.resultText.split('')
    text1.pop()
    this.setState({
      resultText: text1.join(''),})

      console.log(this.state.ansText)
    let text2=this.state.ansText.split('')
    text2.pop()
    this.setState({
      ansText: text2.join(''),})
  }
  opPress(text)
  {
    if(this.state.resultText=="")
    {
      return}
      else if(this.state.resultText=='.')
      {
        return
      }
      else{

      
    
    console.log(this.state.resultText)
    let temp1= this.state.resultText.split('').pop()
    if(temp1=='text') return;
    else if(temp1=='+')
    {
     let text1=this.state.resultText.split('')
     let text2=this.state.ansText.split('')
    text1.pop()
    text2.pop()
    this.setState({
      resultText: text1.join('') + text,
       ansText: text2.join('')+ text,
      
      calculationText:""})
    }
    else if(temp1=='-')
    {
      let text1=this.state.resultText.split('')
      let text2=this.state.ansText.split('')
      text2.pop()
    text1.pop()
    this.setState({
      resultText: text1.join('') + text,
       ansText: text2.join('')+ text,
     
      calculationText:""})
    }
     else if(temp1=='%')
    {
      let text1=this.state.resultText.split('')
      let text2=this.state.ansText.split('')
      text2.pop()
    text1.pop()
    this.setState({
      resultText: text1.join('') + text,
       ansText: text2.join('') + text,
      
      calculationText:""})
    }
     else if(temp1=='×')
    {
      let text1=this.state.resultText.split('')
      let text2=this.state.ansText.split('')
      text2.pop()
    text1.pop()
    this.setState({
       resultText: text1.join('') + text,
      ansText: text2.join('') + '*',
      
      calculationText:""})
    }
     else if(temp1=='÷')
    {
      let text1=this.state.resultText.split('')
      let text2=this.state.ansText.split('')
      text2.pop()
    text1.pop()
    this.setState({
      ansText: text2.join('')+'/',
       resultText: text1.join('') + text,
      
      calculationText:""})
    }
    else 
    {
      if(text=='÷') { 
        let text1=this.state.resultText.split('')
        let text2=this.state.ansText.split('')
        
        this.setState({
           resultText: text1.join('')+ text,
           ansText: text2.join('')+'/',
           calculationText:""

        } )
      }
      else if(text=='×') { 
        let text1=this.state.resultText.split('')
        let text2=this.state.ansText.split('')
        
        this.setState({
        resultText: eval(this.state.ansText)+ text,
        ansText: text2.join('') +'*',
        
        calculationText:""

        }  )
      }
      else if(text=='+') { 
        let text1=this.state.resultText.split('')
        let text2=this.state.ansText.split('')
        this.setState({
      
       resultText: eval(this.state.ansText)+ text,
         ansText: text2.join('')+ text,
        calculationText:""

        }  )
      }
      else if(text=='+') { 
        let text1=this.state.resultText.split('')
        let text2=this.state.ansText.split('')
        this.setState({
      
        resultText: eval(this.state.ansText)+ text,
        ansText: text2.join('')+ text,
        calculationText:""

        }  )
      }
      else if(text=='-') { 
        let text1=this.state.resultText.split('')
        let text2=this.state.ansText.split('')
        this.setState({
      
        resultText: eval(this.state.ansText)+ text,
        ansText: text2.join('')+ text,
        calculationText:""

        }  )
      }
      else if(text=='%') { 
        let text1=this.state.resultText.split('')
        let text2=this.state.ansText.split('')
        this.setState({
      
        resultText: eval(this.state.ansText)+ text,
        ansText: text2.join('')+ text,
        calculationText:""

        }  )
      }
      

    }
    }
  }
    epress()
    {
      //console.log(this.state.resultText)
      let text2=this.state.ansText;
      let text3=(new Intl.NumberFormat('en-IN', 
        { 
        notation:'standard'
        }).format(eval(text2)));
        
      
      if(text3.length<=14)
      {
       
      
      this.setState({
        
        calculationText:  (new Intl.NumberFormat('en-IN', 
        { 
        notation:'standard'
        }).format(eval(text2)))
        
        
      })
      }
      else{
        this.setState({
        
        calculationText:  (new Intl.NumberFormat('en-IN', 
        { 
        notation:'scientific'
        }).format(eval(text2)))
        
        
      })
      }
    }
    dm()
    {
      if(this.state.dmtext){

      
      this.setState({
        dmtext:false
      })
      }
      else{
        this.setState({
          dmtext:true
          })
      }
    }
    fontSizeChange()
    {
      if(this.state.calculationText.length<=9)
        {
          return styles.resultText1
        }
        else{
          return styles.resultText10
    }
    }
    
  render(){
   
    return(
      <View style={styles.container}>
      <View style={this.state.dmtext?styles.calculation1:styles.calculation}>
        <TouchableOpacity 
         onPress={()=>this.dm()} style={this.state.dmtext?styles.dtouch:styles.d1touch}>
          <Text style=
           {this.state.dmtext?{color:'white', alignItems:'center', justifyContent:'center'}:
           {color:'black', alignItems:'center', justifyContent:'center'}}>
           {this.state.dmtext?'🌑':'🌕'}
          </Text>
        </TouchableOpacity>
       <Text 
       //style={this.state.dmtext?styles.calculationText1:styles.calculationText}
       style= {(this.state.resultText.length)<=13?this.state.dmtext?styles.calculationText1:styles.calculationText:this.state.dmtext?styles.calculationText110:styles.calculationText10}
         
       >    {this.state.resultText}
       </Text>
      
      </View>
        <View style={this.state.dmtext?styles.result1:styles.result}>
         <Text  //style={this.state.dmtext?styles.resultText1:styles.resultText}
         style= {(this.state.calculationText.length)<=10?this.state.dmtext?styles.resultText1:styles.resultText:this.state.dmtext?styles.resultText110:styles.resultText10}
         >
         {this.state.calculationText}
         </Text>
        </View>
         <View style={styles.buttons}>
            <View style={this.state.dmtext?styles.numbers1:styles.numbers}>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.acpress()}>
                  <View  style={this.state.dmtext?styles.uptouch1:styles.uptouch}>
                    <Text style={this.state.dmtext?{fontSize:25,
                            textAlign:'center',
                            justifyContent:'center',
                            color:'black',
                            }:{fontSize:25,
                            textAlign:'center',
                            justifyContent:'center',
                            color:'white',
                            }}>AC</Text>
                  </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress = {() => this.opPress('%')} >
                <View style={this.state.dmtext?styles.uptouch1:styles.uptouch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>%</Text>
                  </View>
                </TouchableOpacity>
               <TouchableOpacity onPress ={() => this.delpress()}style={styles.uptouch}>
                  <View  style={this.state.dmtext?styles.uptouch1:styles.uptouch}>
                    <Text style={this.state.dmtext?{fontSize:25,
                            textAlign:'center',
                            justifyContent:'center',
                            color:'black',
                            }:{fontSize:25,
                            textAlign:'center',
                            justifyContent:'center',
                            color:'white',
                            }}>Del</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress = {() => this.opPress('÷')}  >
                  <View style={styles.utouch} >
                    <Text style={styles.btntext}>÷</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress = {() => this.btnpress('7')}>
                  <View style={this.state.dmtext?styles.touch1:styles.touch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>7</Text>
                  </View>
                </TouchableOpacity> 
               <TouchableOpacity onPress = {() => this.btnpress('8')}>
                  <View style={this.state.dmtext?styles.touch1:styles.touch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>8</Text>
                  </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress = {() => this.btnpress('9')}>
                  <View style={this.state.dmtext?styles.touch1:styles.touch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>9</Text>
                  </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress = {() => this.opPress('×')} style={styles.utouch}>
                  <View >
                    <Text style={styles.btntext}>×</Text>
                  </View>
                </TouchableOpacity>
              </View>
            <View style={styles.row}>
              <TouchableOpacity onPress = {() => this.btnpress('4')}>
                  <View style={this.state.dmtext?styles.touch1:styles.touch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>4</Text>
                  </View>
                </TouchableOpacity>  
               <TouchableOpacity onPress = {() => this.btnpress('5')}>
                  <View style={this.state.dmtext?styles.touch1:styles.touch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>5</Text>
                  </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress = {() => this.btnpress('6')}>
                  <View style={this.state.dmtext?styles.touch1:styles.touch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>6</Text>
                  </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress = {() => this.opPress('-')} style={styles.utouch}>
                  <View >
                    <Text style={styles.btntext}>-</Text>
                  </View>
                </TouchableOpacity>
              </View>
            <View style={styles.row}>
             <TouchableOpacity onPress = {() => this.btnpress('1')}>
                  <View style={this.state.dmtext?styles.touch1:styles.touch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>1</Text>
                  </View>
                </TouchableOpacity> 
               <TouchableOpacity onPress = {() => this.btnpress('2')}>
                  <View style={this.state.dmtext?styles.touch1:styles.touch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>2</Text>
                  </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress = {() => this.btnpress('3')}>
                  <View style={this.state.dmtext?styles.touch1:styles.touch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>3</Text>
                  </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress = {() => this.opPress('+')} style={styles.utouch}>
                  <View >
                    <Text style={styles.btntext}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            <View style={styles.row}>
              <TouchableOpacity onPress = {() => this.btnpress('0')}>
                  <View style={this.state.dmtext?styles.touch01:styles.touch0} >
                    <Text style={this.state.dmtext?styles.btn0text1:styles.btn0text}>0</Text>
                  </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress = {() => this.btnpress('.')}>
                  <View style={this.state.dmtext?styles.touch1:styles.touch} >
                    <Text style={this.state.dmtext?styles.btntext1:styles.btntext}>.</Text>
                  </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => this.epress()} style={styles.utouch}>
                  <View >
                    <Text style={styles.btntext}>=</Text>
                  </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    touch1:{
    
    width:60,
    height:60,
    alignItems:'center',
    borderRadius:3600,
    backgroundColor:'rgb(245, 245, 245)',
    justifyContent:'center',

  },
    touch:{
    
    width:60,
    height:60,
    alignItems:'center',
    borderRadius:3600,
    backgroundColor:'rgb(51, 51, 51)',
    justifyContent:'center',

  },
   
   utouch:{
    
    width:60,
    height:60,
    alignItems:'center',
    borderRadius:3600,
    backgroundColor:'rgb(256, 159, 11)',
    justifyContent:'center',
    

  },
   uptouch1:{
    
    width:60,
    height:60,
    alignItems:'center',
    borderRadius:3600,
    backgroundColor:'rgb(220, 220, 220)',
    justifyContent:'center',

  },
   
     uptouch:{
    
    width:60,
    height:60,
    alignItems:'center',
    borderRadius:3600,
    backgroundColor:'rgb(165,165,165)',
    justifyContent:'center',

  },
  touch0:{
    
    width:138,
    height:60,
    
    borderRadius:3600,
    backgroundColor:'rgb(51, 51, 51)',
    justifyContent:'center',
    textAlign:'left'

  },
   touch01:{
    
    width:138,
    height:60,
    
    borderRadius:3600,
    backgroundColor:'rgb(245,245,245)',
    justifyContent:'center',
    textAlign:'left'

  },
  btntext:{
    color:'white',
    fontSize:30,
    textAlign:'center',
    justifyContent:'space-evenly',
    alignItems:'center',
    alignContent:'center',
    textAlignVertical:'center'


  },
  btntext1:{
    color:'black',
    fontSize:30,
    textAlign:'center',
    justifyContent:'space-evenly',
    alignItems:'center',
    alignContent:'center',
    textAlignVertical:'center'


  },
   btn0text:{
    color:'white',
    fontSize:30,
    marginLeft:25,
    textAlign:'left',
    justifyContent:'space-evenly',
    alignItems:'center',
    alignContent:'center',
    textAlignVertical:'center'


  },
  btn0text1:{
    color:'black',
    fontSize:30,
    marginLeft:25,
    textAlign:'left',
    justifyContent:'space-evenly',
    alignItems:'center',
    alignContent:'center',
    textAlignVertical:'center'


  },
  
  container: {
  flex: 1
  },
  result:{
    flex:1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  
  result1:{
    flex:1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  resultText:{
    
    
    fontSize: 60,
    color:'white',
    
     
   },
   resultText1:{
    fontSize:60,
    color:'black',
    
     
   },
    resultText10:{
    
    
    fontSize: 29,
    color:'white',
    
     
   },
   resultText110:{
    fontSize:29,
    color:'black',
    
     
   },
  
    
  calculation:{
    flex:1,
    backgroundColor: 'black',
    alignItems:'flex-end',
    justifyContent:'center'
  },
   calculation1:{
    flex:1,
    backgroundColor: 'white',
    alignItems:'flex-end',
    justifyContent:'center'
  },
  calculationText:{
    fontSize:40,
    color:'gray',
    
   },
   calculationText1:{
    fontSize:40,
    color:'gray',
    
   },
   calculationText10:{
    fontSize:18,
    color:'gray',
    
   },
   calculationText110:{
    fontSize:18,
    color:'gray',
    
   },
  buttons: {
    flex: 4,
    flexDirection:'row'
  },
  numbers:{
    flex:3,
    backgroundColor:'black'
  },
  numbers1:{
    flex:3,
    backgroundColor:'white'
  },
  row:{
  flexDirection:'row',
  flex:1,
  justifyContent:'space-evenly',
  alignItems:'center'


},
dtouch:{
  marginRight:10,
   width:20,
    height:20,
    alignItems:'center',
    borderRadius:400,
   
    
    
    justifyContent:'center',
    textAlign:'center',


},
d1touch:{
  marginRight:10,
   width:20,
    height:20,
    alignItems:'center',
    borderRadius:400,
   
    
    
    justifyContent:'center',
    textAlign:'center',


},

  

})

  

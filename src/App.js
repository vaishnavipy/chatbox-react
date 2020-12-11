
import './App.css';
import { motion, useSpring } from "framer-motion"
import React, { Fragment, useEffect, useState } from "react"


function App() {

  const [chatDiv,setChatDiv] = useState("")

  const [chatIndex,setChatIndex] = useState(0)

  

  const chatArr =[
    {emoji:"frog",
      chat : "How do I get better at React?"},

    {emoji:"oct",
      chat :"Just build something !"},

    {emoji:"frog",
    chat :"Okay ! What should I build ?"},

    {emoji:"oct",
      chat : "IDK, Just google it.."},
    
    {emoji:"frog",
    chat :"Oh, this github profile looks cool !"},

    {emoji:"oct",
      chat : "Send me the link ?"},
    
    {emoji:"frog",
    chat : "https://github.com/vaishnavipy?tab=repositories"}

  
    ]

    const parentVariant ={
     animate:{},
     initial:{},
     
    }

    const circle={
      initial :{scale:0.2},
      animate:{scale:[0.4,0.6,0.8,1]}
    
    }

 
    function populate(){

      setChatDiv(chatArr.map((item,index)=>{

        //First time bounce effect
        if(chatIndex == 0 && index == chatIndex){

          return(
            <Fragment>
            <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="grid"
          >
           
            <div className="icon">🐸</div>
            <div key={index} className="frog-chat chat">{item.chat}</div>
            <div></div>
          </motion.div>
         
          <motion.div className="load-container left" animate="animate" initial="initial" variants={parentVariant}   transition={{staggerChildren: 0.3,delayChildren: 0.2,duration:0.2}}>
             <motion.div className="circle" variants={circle}   transition={{repeat:Infinity,repeatType:"reverse",duration:2}}></motion.div>
             <motion.div className="circle" variants={circle}  transition={{repeat:Infinity,repeatType:"reverse",duration:2}}></motion.div>
             <motion.div className="circle" variants={circle}  transition={{repeat:Infinity,repeatType:"reverse",duration:2}}> </motion.div>
           </motion.div>
            </Fragment>
         
          )

        }

        //Fill in the normal chat
        if(index < chatIndex){

          if(item.emoji == "frog"){

        return(  <div  className="grid" >
          <div className="icon">🐸</div>
          <div key={index} className="frog-chat chat">{item.chat}</div>
          <div></div>
        </div>)

        }
        else{
        
          return( 
            <div className="grid" >
                <div></div>
                <div key={index} className="oct-chat chat">{item.chat}</div>
                <div className="icon">🐙</div>
              </div>)

        }


        }
        //Attach a animated loader with every conversation, and remove it when you render next time
        if(index == chatIndex && chatIndex != chatArr.length){
          let marginClass;
          item.emoji == "frog" ?  marginClass="right" :marginClass="left";
          return ( <motion.div className={`load-container ${marginClass}`} animate="animate" initial="initial" variants={parentVariant}   transition={{staggerChildren: 0.3,delayChildren: 0.2,duration:2}}>
          <motion.div className="circle" variants={circle}   transition={{repeat:Infinity,repeatType:"reverse",duration:2}}></motion.div>
          <motion.div className="circle" variants={circle}  transition={{repeat:Infinity,repeatType:"reverse",duration:2}}></motion.div>
          <motion.div className="circle" variants={circle}  transition={{repeat:Infinity,repeatType:"reverse",duration:2}}> </motion.div>
        </motion.div>)
        }
      }) 
      
      ) 
      setChatIndex(prevCount => prevCount+1)

    }

    useEffect(()=>{
      
      //Because we want the first chat to bounce first time, we call index 1 two times, without little time out 
      if(chatIndex ==1){
        setTimeout(populate,200)
      }
      
      //We want first index to have bounce effext, only at component mount, rest of the time the time-out is the sames
      else if(chatIndex < 8){
          console.log(chatIndex)
        setTimeout(populate,1500)
       
        //To make animation repeat , set chatIndex to 0
        }else if(chatIndex==8){
          setChatIndex(0)
        }
      
      
    },[chatIndex])


  return (
    
    <div className="main-container">
      
   {chatDiv}
  
    </div>
   
  );
}

export default App;

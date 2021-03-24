
import { useEffect, useState } from 'react/cjs/react.development';
import './App.css';
import { motion } from "framer-motion"


function App() {

  const [count,setCount] = useState(0)

  const parentVariant ={
    animate:{},
    initial:{},
    
   }

   const circle={
     initial :{scale:0.2},
     animate:{scale:[0.4,0.6,0.8,1]}
   
   }


  const conversation =[
  {
    name: "frog",
    says : "How do I get better at React ?"
  },
  {
    name: "Oct",
    says : "Just build something.."
  },
  {
    name: "frog",
    says : "Ok! what should I build ?"
  },
  {
    name: "Oct",
    says : "Lono Just Google it.."
  },
  {
    name: "frog",
    says : "Oh..this links looks cool!"
  },
  {
    name: "Oct",
    says : "Send me the link?"
  },
  {
    name: "frog",
    says : "FreeCodeCamp"
  }
  ]


  useEffect(()=>{
    let intervalId;
    if(count <= conversation.length){
   intervalId = setTimeout(()=>{
      setCount(prevCount => prevCount+1)
    },1300)
  }else{
    setCount(0)
  }

  return () => clearInterval(intervalId)

  },[count])
  

  

    const rows = conversation.map((elm,index) => {

      if(count !== 0){

      if(index < count ){
      return(
      <div className="grid">
        <div className="icons">{elm.name == "frog" ? "🐸" :""}</div>
        <div className={`conversation-div ${elm.name}`}>{elm.says}</div>
        <div className="icons">{elm.name == "Oct" ? "🐙" : ""}</div>
      </div>)
      }
      if(index === count ){
        console.log("eqiual")
        let positionClass;
        if(index%2 === 0 || index === 0){
          positionClass="right"
        }
        else{
          positionClass ="left"
        }
          return (
          <motion.div className={`motion-div ${positionClass}`} animate="animate" initial="initial" variants={parentVariant}   transition={{staggerChildren: 0.3,delayChildren: 0.2,duration:0.2}}>
            <motion.div className="circle" variants={circle}   transition={{repeat:Infinity,repeatType:"reverse",duration:2}}></motion.div>
            <motion.div className="circle" variants={circle}   transition={{repeat:Infinity,repeatType:"reverse",duration:2}}></motion.div>
            <motion.div className="circle" variants={circle}   transition={{repeat:Infinity,repeatType:"reverse",duration:2}}></motion.div>
          </motion.div>)
      
          
      }
    }

    })

  

 
 return(

  <div className="main-container" >
    {rows}
 </div>
 )
   
 
}

export default App;


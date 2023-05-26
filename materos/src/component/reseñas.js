import React from 'react';
import '../css/reseñas.css'
import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight,AiFillInstagram } from "react-icons/ai";
import { mensajes, reseñas } from './mensajes';
function MensajesClientes(props) {
const[currentSms,setCurrentSms] = useState(0);
const smsLength = mensajes.length;
const[currentres,setCurrentres] = useState(0);
const resLength = reseñas.length;

const autoScroll = true;
let smsInterval;
let resinterval;
let intervalTime = 5000;

const nextSms =()=>{
    setCurrentSms(currentSms === smsLength -1 ? 0: currentSms +1);
    console.log("next")
};
const nextRes =()=>{
  setCurrentres(currentres === resLength -1 ? 0: currentres +1);
  console.log("next")
};
const prevSms = ()=>{
    setCurrentSms(currentSms === 0? smsLength -1: currentSms-1)
};
const prevRes = ()=>{
  setCurrentres(currentres === 0? resLength -1: currentres-1)
};
function auto(){
    smsInterval=setInterval(nextSms,intervalTime);
};
function auto(){
  resinterval=setInterval(nextRes,intervalTime);
};
useEffect(() => {
    setCurrentSms(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(smsInterval);
}, [currentSms]);
useEffect(() => {
  setCurrentres(0);
}, []);

useEffect(() => {
  if (autoScroll) {
    auto();
  }
  return () => clearInterval(resinterval);
}, [currentres]);
  return (
    <section className='cajonmensajes' id='body'>
    <div className="mensajes">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSms} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSms} />
      {mensajes.map((res, index) => {
        return (
          <div
            className={index === currentres ? "sms current" : "sms"}
            key={index}>
            {index === currentres && (
              <div>             
                  <div className="content">
                  <AiFillInstagram className='insta'/> 
                  <h2>{res.autor}</h2>
                  <h4>{res.Ig}</h4>
                  <p className='reseña'>{res.texto}</p>
                  <hr />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
    <div  className="mensajes">
    <AiOutlineArrowLeft className="arrow prev" onClick={prevRes} />
      <AiOutlineArrowRight className="arrow next" onClick={nextRes} />
      {reseñas.map((sms, index) => {
        return (
          <div
            className={index === currentres ? "sms current" : "sms"}
            key={index}>
            {index === currentres && (
              <div>             
                  <div className="content">
                  <AiFillInstagram className='insta'/> 
                  <h2>{sms.autor}</h2>
                  <h4>{sms.Ig}</h4>
                  <p className='reseña'>{sms.texto}</p>
                  <hr />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
    </section>
    
  )
  ;
}

export default MensajesClientes;
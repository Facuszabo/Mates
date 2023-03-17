import React from 'react';
import '../css/reseñas.css'
import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight,AiFillInstagram } from "react-icons/ai";
import { mensajes } from './mensajes';
function MensajesClientes(props) {
const[currentSms,setCurrentSms] = useState(0);
const smsLength = mensajes.length;

const autoScroll = true;
let smsInterval;
let intervalTime = 5000;

const nextSms =()=>{
    setCurrentSms(currentSms === smsLength -1 ? 0: currentSms +1);
    console.log("next")
};
const prevSms = ()=>{
    setCurrentSms(currentSms === 0? smsLength -1: currentSms-1)
};
function auto(){
    smsInterval=setInterval(nextSms,intervalTime);
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
  return (
    <section id='body'>
    <div className="mensajes">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSms} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSms} />
      {mensajes.map((sms, index) => {
        return (
          <div
            className={index === currentSms ? "sms current" : "sms"}
            key={index}>
            {index === currentSms && (
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
  );
}

export default MensajesClientes;
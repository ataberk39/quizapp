import React, { useState } from 'react'
import "./Modal.css"

const Modal = ({score , questionsData,}) => {

  return (
    <div className='modal'>
      <div className='answers'>
        {
          questionsData.map((data, index) => (
            <div key={index}>{index+1}. Soru {data.correct_answer}</div>
          ))
        }
      </div>
        <div className='modal-title'>Skor : {score}/1000</div>
        <div onClick={()=> window.location = "/"} className='modal-btn'>Yeniden Başla</div>
    </div>
  )
}

export default Modal

// yarınki görev son sayfaya cevapları gösterecek şekilde düzenle
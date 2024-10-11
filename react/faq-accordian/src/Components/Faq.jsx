import React from 'react'

export default function Faq({faqData, faqIndex,currentId, setCurrentId}) {

    const faqHandler =(qno) => {
        setCurrentId(qno);
    }

  return (
    <>
        <div className="column" id="column1" key={faqIndex}>
            <h2 className="faqquestions" onClick={ () => faqHandler(faqData.qno) } >{ faqIndex+1 }. {faqData.question} <span> { (currentId == faqData.qno) ? '-' : '+' } </span></h2>
            <p className={`${ (currentId == faqData.qno) ? '' : 'display'  }`} >{faqData.answer}</p>
        </div>
    </>
  )
}

import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import CV from './../RESOURCES/CV.pdf';
let Cv= (props) => {
    return(
        <div className='body-text'>
       <iframe src={CV} type="application/pdf" width="100%" height="500" ></iframe>
       
      </div>
    );
}
export default Cv;
import React from 'react'
import Accordion from '../Home1/Accordion';

export default function FAQArea() {
  return (
      <section className="faq__area pt-75 pb-120">
          <div className="container">
             <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mt-100 mb-100">
                   <Accordion/>
                </div>
                <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
                   <div className="faq__content">
                      <div className="section__title-wrapper section__title-wrapper-2 mt-100 mb-100 wow fadeInUp" data-wow-delay=".3s">
                         <h2 id="troubleshooting" className="section__title section__title-2">Troubleshooting Common Problems</h2>
                         <p>Don't hesitate to contact us with any issues!</p>
                      </div>
                      {/* <div className="faq__counter wow fadeInUp" data-wow-delay=".5s">
                         <ul>
                            <li>
                               <h3 className="pink"><span className="counter"><CounterUp count={876}/></span></h3>
                               <p>Happy Clients</p>
                            </li>
                            <li>
                               <h3 className="blue"><span className="counter"><CounterUp count={156}/></span></h3>
                               <p>Projects</p>
                            </li>
                            <li>
                               <h3 className="yellow"><span className="counter"><CounterUp count={430}/></span></h3>
                               <p>Trusted Users</p>
                            </li>
                         </ul>
                      </div> */}
                   </div>
                </div>
             </div>
          </div>
       </section>
  )
}

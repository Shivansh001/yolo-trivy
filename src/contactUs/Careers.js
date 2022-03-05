import React, { useState } from 'react'
import './contactUs.css'
import bg from '../assets/contactBG.jpg'
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { ContactFooter } from './ContactFooter';


const Careers = () => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
  return (
    
    <>
    <div className='contact'>
        <div className="career-container">
            <div className="career-container-header">
                <div className="contact-heading">
                    <h2 className='contact-us' style={{fontSize:'24px'}}>CAREERS</h2>
                    <p className='contact-us-text'>
                    To apply for any of the positions below, please email us at hr@trivy.co with your resume and cover letter. Indicate the position you're applying for in the subject line of your email.
                    </p>
                </div>
                
            </div>
            <hr style={{width: '100%', marginLeft: '0'}}/>
            <div className="career-center">
                <div className="career-element-flex">
                    <div className="career-element-flex-left">
                        <h5>Business Development Manager</h5>
                    </div>
                    <div className="career-element-flex-right">
                    <button className='careers-button' onClick={onClick}>VIEW DETAILS</button>
                        
                    </div>
                </div>
                <hr style={{width: '100%', marginLeft: '0'}}/>
                { showResults ? <div class="career-content-content" style={{textAlign: 'left'}}>

                                <b>Yolo Card</b> is looking for a <b>Business Development Manager</b> to strategize and execute on new partnerships, based in our New York office.

                                <br/><br/>
                                Yolo Card is an exclusive membership community that gives entrepreneurs and business executives negotiated discounts across travel, lifestyle, and business brands including Park Hyatt, Ritz-Carlton, St Regis, Dell, Avis, British Airways, and Caesars -- just to name a few of our over 500 benefits. Our Members are influential in their communities, and that’s why our benefit partners offer our Members such unparalleled access and discounts. The Business Development Manager will play a key part growing our influential Member base.

                                <br /><br />
                                The Business Development Manager will seek out new partnerships with vetted companies and organizations to partner with. The ideal candidate thrives on not just scouting out partnership opportunities, but more importantly closing the deal.
                                <br /><br />

                                <p class="bold">Responsibilities:</p>
                                <ul>
                                <li>Identify and manage pipeline of prospective marketing partners</li>
                                <li>Proactively contact prospective benefit partners through all means necessary (phone, email, LinkedIn, using personal network) to setup meetings with our CEO</li>
                                <li>Research and identify highly qualified/vetted groups where Yolo Card could grow its Member base via partnering.</li>
                                </ul>

                                <br />

                                <p class="bold">Requirements:</p>
                                <ul>
                                <li>5-10 years experience in sales or business development</li>
                                <li>Excellent written and oral communication skills</li>
                                <li>Excels at working independently -- while you’ll be working with the Founder &amp; CEO, you’ll be doing the legwork solo</li>
                                <li>Comfortable working in a fast-paced and dynamic environment</li>
                                <li>Extremely comfortable on the phone, willing to call anyone relentlessly </li>
                                <li>Comfortable communicating with executives in all levels of the business- from sales to C-Level to owner</li>
                                <li>Experience in negotiating high dollar sales packages, with the ability to tailor them to the partner</li>
                                </ul>

                                Compensation is competitive, and we offer a robust benefits package including heavily funded medical, dental, and vision insurance as well as 15 PTO days + holidays per year.

                                <br /><br />

                                <p class="bold">How to Apply:</p>

                                To apply for this position below, please email us at <a href="mailto:hr@trivy.co">hr@trivy.co</a> with your resume and cover letter.
                                Indicate the position you're applying for in the subject line of your email.

                                In your cover letter, please provide answers to the following two questions:
                                <ol>
                                <li>Why are you perfect for this role?</li>
                                <li>What are three benefit partners you think would be a good fit for Yolo Card, and how would you go about making contact with them?</li>
                                </ol>

                                <br />

                                </div> : null }
            </div>
            <div className="career-center">
                <div className="career-element-flex">
                    <div className="career-element-flex-left">
                        <h5>Travel and Lifestyle Concierge</h5>
                    </div>
                    <div className="career-element-flex-right">
                    <button className='careers-button' onClick={onClick}>VIEW DETAILS</button>
                        
                    </div>
                </div>
                <hr style={{width: '100%', marginLeft: '0'}}/>
                { showResults ? <div class="career-content-content" style={{textAlign: 'left'}}>

                                

          <p class="bold">INTRODUCTION TO YOLOCARD</p>

          YoloCard is a community of over 100,000 members comprised of the world's most successful and influential entrepreneurs, innovators, and business owners. Our Members are the Yolo and CEOs of today's most innovative companies and tomorrow's most promising ventures. Members enjoy access to frequent invitation-only networking events as well as exclusive benefits from premier travel, lifestyle, and business brands.
          <br/><br/>
          <p class="bold">JOB SUMMARY</p>

          YoloCard is looking for a new Elite Concierge to work onsite in our Austin office. In this role, you will be required to provide a high-touch, personable, and informed concierge experience for our ELITE Members. This is including but not limited to basic troubleshooting related to Membership benefits, as well as detailed requests requiring research, third party communication, and problem solving.
          <br/><br/>
          ELITE Members may place a variety of requests related to luxury shopping, dining, entertainment, travel and leisure, as well as administrative and lifestyle needs/tasks. Requests will be made through email communication, phone, or text message and are actioned by the Member Concierge in a timely manner. The ideal applicant will possess a thorough knowledge of YoloCard Membership, will be comfortable talking to executives as well as be comfortable planning leisure and corporate travel, events, gift purchases and will be able to handle all member requests.
          <br/><br/>
          We are looking for candidates with an understanding of luxury travel, fashion, retail, elevated services and operational standards, with a knack for problem solving and delivering exceptional customer service.

          <br/><br/>

          <p class="bold">Responsibilities include, but not limited to:</p>
          <ul>
            <li>Customer Service to ELITE Members</li>
            <li>Answer inbound calls and emails</li>
            <li>Thoroughly research and reply to ELITE Member requests including travel suggestions/accommodations, restaurant reservations, and other administrative tasks, with high sense of urgency and professionalism</li>
            <li>Continually exceed Member expectations</li>
            <li>Ability to troubleshoot and communicate across multiple platforms</li>
            <li>Proactive Sales, both to new and existing Members</li>
            <li>Overflow (backup) support to Member Services</li>
          </ul>

          <p class="bold">Requirements:</p>

          <ul>
            <li>5+ years of customer service experience (preferably in a luxury environment, hotel, executive assistance, personal assistant, etc.)</li>
            <li>Excellent written and oral communication</li>
            <li>Polite and professional conduct, excellent interpersonal skills</li>
            <li>Proactive attitude with an ability to creatively solve problems quickly</li>
            <li>Independent, excellent time management and organizational skills</li>
            <li>Willing to to support other teams when needed</li>
            <li>Confident, with the ability to prioritize and meet deadlines working under pressure</li>
            <li>Computer and Technology savvy</li>
          </ul>

          <p class="bold">BENEFITS</p>

          <ul>
            <li>Healthcare: Medical, Dental, and Vision benefits. (Company contribution provided)</li>
            <li>15 days PTO, accrued over the course of a year + other major holidays</li>
          </ul>
          <br/>

          Austin Office Location: 100 Congress Avenue, Suite 2000, Austin, Texas 78701

          <br/><br/>

          This role reports directly to the Vice President of Operations.

          <br/><br/>

          Job Type: Full-time

          <br/><br/>

          Experience:
          <br/>
          <ul><li>Customer Service: 5 years (Preferred)</li></ul>

          Education:
          <br/>
          <ul><li>Bachelor's (Preferred)</li></ul>

          Work Location:
          <br/>
          <ul><li>Austin</li></ul>

          Benefits offered:
          <br/>
          <ul>
            <li>Paid time off</li>
            <li>Health insurance</li>
            <li>Dental insurance</li>
            <li>Other types of insurance</li>
            <li>Employee discounts</li>
            <li>Workplace perks such as food/coffee and flexible work schedules</li>
          </ul>

          <br/>

          <p class="bold">How to Apply:</p>

          To apply for this position below, please email us at <a href="mailto:hr@trivy.co">hr@trivy.co</a> with your resume and cover letter.
          Indicate the position you're applying for in the subject line of your email.

          <br/>


                                </div> : null }
            </div>
            <div className="career-center">
                <div className="career-element-flex">
                    <div className="career-element-flex-left">
                        <h5>Customer Success Specialist</h5>
                    </div>
                    <div className="career-element-flex-right">
                    <button className='careers-button' onClick={onClick}>VIEW DETAILS</button>
                        
                    </div>
                </div>
                <hr style={{width: '100%', marginLeft: '0'}}/>
                { showResults ? <div class="career-content-content" style={{textAlign: 'left'}}>

          <p class="bold">INTRODUCTION TO YOLOCARD</p>

          YoloCard is a community of over 100,000 members comprised of the world's most successful and influential entrepreneurs, innovators, and business owners. Our Members are the Yolo and CEOs of today's most innovative companies and tomorrow's most promising ventures. Members enjoy access to frequent invitation-only networking events as well as exclusive benefits from premier travel, lifestyle, and business brands.
          <br/><br/>

          <p class="bold">JOB SUMMARY</p>

          YoloCard is looking for a new Customer Success Specialist to work onsite in our Austin office. In this role, you will be required to provide a high-touch, personable, and informed experience for our Members. This is including but not limited to basic troubleshooting related to Membership benefits, as well as detailed requests requiring research, third party communication, and problem solving.

          <br/><br/>

          <p class="bold">Responsibilities include, but not limited to:</p>
          <ul>
            <li>Providing high level of customer service to Member via inbound calls and emails (Daily Volume: ~30-50 calls, ~60-80 emails)</li>
            <li>Thoroughly research and reply to Member requests with high sense of urgency and professionalism</li>
            <li>Continually exceed Member expectations</li>
            <li>Ability to troubleshoot and communicate across multiple platforms</li>
            <li>Proactive Sales, both to new and existing Members</li>
            <li>Constantly evaluate Member experience and make suggestions to improve Member engagement/satisfaction</li>
            <li>Meet or exceed KPI's including time to first response, customer satisfaction scores,</li>
          </ul>

          <p class="bold">Requirements:</p>
          <ul>
            <li>5+ years of customer service experience</li>
            <li>Excellent written and oral communication</li>
            <li>Polite and professional conduct, excellent interpersonal skills</li>
            <li>Proactive attitude with an ability to creatively solve problems quickly</li>
            <li>Independent, excellent time management and organizational skills</li>
            <li>Willing to to support other teams when needed</li>
            <li>Confident, with the ability to prioritize and meet deadlines working under pressure</li>
            <li>Computer and Technology savvy</li>
          </ul>

          <p class="bold">BENEFITS</p>
          <ul>
            <li>Healthcare: Medical, Dental, and Vision benefits. (Company contribution provided)</li>
            <li>15 days PTO, accrued over the course of a year + other major holidays</li>
          </ul>

          <br/>
          Austin Office Location: 100 Congress Avenue, Suite 2000, Austin, Texas 78701
          <br/><br/>
          This role reports directly to the Vice President of Operations.
          <br/><br/>
          Job Type: Full-time
          <br/><br/>
          Experience:
          <br/>
          <ul><li>customer service: 5 years (Preferred)</li></ul>

          Work Location:
          <br/>
          <ul><li>Remote Position, but must reside in the State of Texas</li></ul>

          Benefits offered:
          <br/>
          <ul>
            <li>Paid time off</li>
            <li>Health insurance</li>
            <li>Dental insurance</li>
            <li>Employee discounts</li>
            <li>Workplace perks such as food/coffee and flexible work schedules  </li>
          </ul>

          <br/>

          <p class="bold">How to Apply:</p>

          To apply for this position below, please email us at <a href="mailto:hr@trivy.co">hr@trivy.co</a> with your resume and cover letter.
          Indicate the position you're applying for in the subject line of your email.

          <br/>
      

                                </div> : null }
            </div>
            <div className="career-center">
                <div className="career-element-flex">
                    <div className="career-element-flex-left">
                        <h5>Travel and Lifestyle Concierge</h5>
                    </div>
                    <div className="career-element-flex-right">
                    <button className='careers-button' onClick={onClick}>VIEW DETAILS</button>
                        
                    </div>
                </div>
                <hr style={{width: '100%', marginLeft: '0'}}/>
                { showResults ? <div class="career-content-content" style={{textAlign: 'left'}}>

                                

          <p class="bold">INTRODUCTION TO YOLOCARD</p>

          YoloCard is a community of over 100,000 members comprised of the world's most successful and influential entrepreneurs, innovators, and business owners. Our Members are the Yolo and CEOs of today's most innovative companies and tomorrow's most promising ventures. Members enjoy access to frequent invitation-only networking events as well as exclusive benefits from premier travel, lifestyle, and business brands.
          <br/><br/>
          <p class="bold">JOB SUMMARY</p>

          YoloCard is looking for a new Elite Concierge to work onsite in our Austin office. In this role, you will be required to provide a high-touch, personable, and informed concierge experience for our ELITE Members. This is including but not limited to basic troubleshooting related to Membership benefits, as well as detailed requests requiring research, third party communication, and problem solving.
          <br/><br/>
          ELITE Members may place a variety of requests related to luxury shopping, dining, entertainment, travel and leisure, as well as administrative and lifestyle needs/tasks. Requests will be made through email communication, phone, or text message and are actioned by the Member Concierge in a timely manner. The ideal applicant will possess a thorough knowledge of YoloCard Membership, will be comfortable talking to executives as well as be comfortable planning leisure and corporate travel, events, gift purchases and will be able to handle all member requests.
          <br/><br/>
          We are looking for candidates with an understanding of luxury travel, fashion, retail, elevated services and operational standards, with a knack for problem solving and delivering exceptional customer service.

          <br/><br/>

          <p class="bold">Responsibilities include, but not limited to:</p>
          <ul>
            <li>Customer Service to ELITE Members</li>
            <li>Answer inbound calls and emails</li>
            <li>Thoroughly research and reply to ELITE Member requests including travel suggestions/accommodations, restaurant reservations, and other administrative tasks, with high sense of urgency and professionalism</li>
            <li>Continually exceed Member expectations</li>
            <li>Ability to troubleshoot and communicate across multiple platforms</li>
            <li>Proactive Sales, both to new and existing Members</li>
            <li>Overflow (backup) support to Member Services</li>
          </ul>

          <p class="bold">Requirements:</p>

          <ul>
            <li>5+ years of customer service experience (preferably in a luxury environment, hotel, executive assistance, personal assistant, etc.)</li>
            <li>Excellent written and oral communication</li>
            <li>Polite and professional conduct, excellent interpersonal skills</li>
            <li>Proactive attitude with an ability to creatively solve problems quickly</li>
            <li>Independent, excellent time management and organizational skills</li>
            <li>Willing to to support other teams when needed</li>
            <li>Confident, with the ability to prioritize and meet deadlines working under pressure</li>
            <li>Computer and Technology savvy</li>
          </ul>

          <p class="bold">BENEFITS</p>

          <ul>
            <li>Healthcare: Medical, Dental, and Vision benefits. (Company contribution provided)</li>
            <li>15 days PTO, accrued over the course of a year + other major holidays</li>
          </ul>
          <br/>

          Austin Office Location: 100 Congress Avenue, Suite 2000, Austin, Texas 78701

          <br/><br/>

          This role reports directly to the Vice President of Operations.

          <br/><br/>

          Job Type: Full-time

          <br/><br/>

          Experience:
          <br/>
          <ul><li>Customer Service: 5 years (Preferred)</li></ul>

          Education:
          <br/>
          <ul><li>Bachelor's (Preferred)</li></ul>

          Work Location:
          <br/>
          <ul><li>Austin</li></ul>

          Benefits offered:
          <br/>
          <ul>
            <li>Paid time off</li>
            <li>Health insurance</li>
            <li>Dental insurance</li>
            <li>Other types of insurance</li>
            <li>Employee discounts</li>
            <li>Workplace perks such as food/coffee and flexible work schedules</li>
          </ul>

          <br/>

          <p class="bold">How to Apply:</p>

          To apply for this position below, please email us at <a href="mailto:hr@trivy.co">hr@trivy.co</a> with your resume and cover letter.
          Indicate the position you're applying for in the subject line of your email.

          <br/>


                                </div> : null }
            </div>
            <div className="career-center">
                <div className="career-element-flex">
                    <div className="career-element-flex-left">
                        <h5 style={{textAlign: 'left'}}>Marketing Manager</h5>
                    </div>
                    <div className="career-element-flex-right">
                    <button className='careers-button' onClick={onClick}>VIEW DETAILS</button>
                        
                    </div>
                </div>
                <hr style={{width: '100%', marginLeft: '0'}}/>
                { showResults ? <div class="career-content-content" style={{textAlign: 'left'}}>

          <p class="bold">INTRODUCTION TO YOLOCARD</p>

          Founded in 2009, YOLOCard is an exclusive membership community that gives
          entrepreneurs and business executives negotiated discounts across travel, lifestyle, and
          business brands including Park Hyatt, Ritz-Carlton, St Regis, Dell, Avis, British
          Airways, and Caesars -- just to name a few of our over 500 benefits. Our Members are
          influential in their communities, and that's why our benefit partners offer our Members
          such unparalleled access and discounts.
          <br/><br/>
          Member growth has been accelerating over the last 12 months, but we’ve just scratched
          the surface of our marketing potential. Thus, we are looking for a talented and
          enthusiastic Marketing Manager to join our growing Marketing team. The Marketing
          Manager will play a key role in growth efforts across multiple digital and offline
          channels. S/he will work closely with our marketing and operations team leadership, as
          well as with our CEO. This is an enormous opportunity to accelerate your marketing
          career at a fast-growing company.
          <br/><br/>
          This position is onsite in our New York City or Austin offices.
          <br/><br/>
          <p class="bold">RESPONSIBILITIES</p>

          <ul>
            <li>Manage all Member acquisition channels, from strategy to campaign management to reporting</li>
            <li>Partner with Product and Tech leads on landing pages, conversion funnels, email communications and more</li>
            <li>Constantly test and iterate advertising creatives, landing pages and user flows</li>
            <li>Negotiate media buys across multiple channels</li>
            <li>Work closely with both internal team and vendors to implement tracking</li>
            <li>Track and analyze performance across all channels</li>
          </ul>

          <br/>

          <p class="bold">REQUIREMENTS:</p>

          <ul>
            <li>5+ years experience in marketing</li>
            <li>Excellent written and oral communication skills</li>
            <li>Excels at working toward ambitious goals and constantly strives to exceed targets</li>
            <li>Comfortable working in a fast-paced and dynamic environment</li>
            <li>Creative and analytically balanced to cover both bases of modern marketing</li>
            <li>Comfortable communicating with executives in all levels of the business- from sales to C-Level to owner</li>
            <li>Core experience in multiple marketing channels including paid social, programmatic and affiliate (in addition to others)</li>
          </ul>

          <br/>

          <p class="bold">How to Apply:</p>

          To apply for this position, please email us at <a href="mailto:hr@trivy.co">hr@trivy.co</a> with your resume and cover letter.
          Indicate the position you're applying for in the subject line of your email.
        

                                </div> : null }
            </div>
            <div className="contact-bottom">
              <div className="question">
                <p>
                  <strong>Have a question?</strong>
                  &nbsp;
                  <CallIcon style={{color: '#e50914'}} className="form-icon" />
                  +91-7011733860 &nbsp;
                  <EmailIcon style={{color: '#e50914'}} className="form-icon" />
                  hello@trivy.co
                </p>
              </div>
            </div>
        </div>
    </div>
    <ContactFooter />
    </>
  )
}

export default Careers
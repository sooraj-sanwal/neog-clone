import React from 'react'
import { Link } from 'react-router-dom';

const FrequentAsk = () => {
  return (
    
         <div>
                    <h1>Frequently Asked Questions</h1>
                    <hr />
                    <h2>levelZero FAQs</h2>
                    <hr />
                    <ol>
                        <li>Is levelZero open for everyone?
                            <ul>
                                <li>The levelZero is free and open for all. There is no limitation for levelZero.</li>
                            </ul>
                        </li>
                        <li> Do I need to prepare beforehand for levelZero?
                            <ul>
                                <li>No extra preparation is needed. levelZero of this boot camp is for beginners. You just need good internet and chrome installed.</li>
                            </ul>
                        </li>
                        <li> Are there any eligibility criteria to join levelZero?
                            <ul>
                                <li>There are no such eligibility criteria.</li>
                            </ul>
                        </li>
                        <li> What will be the Cost? Will it be free or paid?
                            <ul>
                                <li>The neoG.camp is structured in 2 levels: levelZero (free); levelOne (paid)</li>
                                <li>levelZero is free and open for all.</li>
                                <li>levelOne’s admission fee is Rs.30,000 + 18% GST + a convenience fee may be charged by the payment gateway you choose to pay with. You pay the admission fee for levelOne only after you are selected for the course.</li>
                            </ul>
                        </li>
                        <li>Where should I start learning about levelZero?
                            <ul>
                                <li>You can start learning about levelZero from    <Link to={"/levelZeroFaq"}>here.</Link></li>
                            </ul>
                        </li>
                        <li>What is the duration of levelZero?
                            <ul>
                                <li>levelZero is self-paced. You can complete levelZero in one month or six depending upon your speed. For reference, in the last cohort kids did levelZero in two months majorly.</li>
                            </ul>
                        </li>
                        <li>Will I be able to get the job just after doing the levelZero, the free version?
                            <ul>
                                <li>We think with the free version you’ll have a good enough knowledge to get an internship. However, we would suggest you keep learning and exploring the web-development field for better opportunities.</li>
                                <li>You can apply for jobs directly with <a href="https://www.roc8.careers/">roc8.careers</a></li>
                            </ul>
                        </li>
                        <li>What to do if I am stuck in levelZero?
                            <ul>
                                <li>We have a helpful, supportive and awesome discord community of 21k members who will help you in your web dev journey Join the community <a href="https://discord.com/invite/4RCncKrDUX">here.</a></li>
                            </ul>
                        </li>
                        <li>Where can I know about all the updates on the camp?
                            <p>We don’t believe in spamming or data collection, so there is no registration required to join this camp. But do join the #teamtanay Discord community to stay updated about any announcement regarding the neoG.camp. You can join the community and enjoy the ongoing talks and discussions:</p>
                            <ul>
                                <li><a href="https://instagram.com">Instagram</a></li>
                                <li><a href="https://twitter.com">Twitter</a></li>
                                <li><a href="https://Linkedin.com">Linkedin</a></li>
                                <li><a href="https://discord.com/invite/4RCncKrDUX">#teamtanay Discord.</a></li>
                            </ul>
                        </li>
                        <li>I am not able to register for level 1, getting 500 | Internal server error, what should i do?
                            <ul>
                                <li>If you are not able to register for level 1, please drop a mail to admissions@neog.camp, with a screenshot of the error, you'll get a reply, within 48hrs from the team.</li>
                            </ul>
                        </li>
                        <li>Is the Mark15 blog mandatory?
                            <ul>
                                <li>Mark15 blog is not mandatory but you can score bonus points which will help when it comes to considering for leadership position later on when you get opportunity.</li>
                            </ul>
                        </li>
                        <li>I have completed mark15 portfolio in 2022/2020, do I need to make and complete portfolio again for admission in neoG'23 ?
                            <ul>
                                <li>No, you do not need to complete the portfolio again. You can submit your portfolio which you made in 2020. Just make sure that it has all the mark9 requirements complete.</li>
                            </ul>
                        </li>
                    </ol>

                    {/* admission faq */}

                    <h2>admission FAQs</h2>
                    <hr />
                    <ol>
                        <li>What will boot camp be about?
                            <ul>
                                <li>levelZero: Free beginner, friendly, self-paced course to teach you the basics of web development/programming.</li>
                                <li>levelOne: Closed and paid, six-month course. The course is structured in such a way to make sure that you create advanced projects, and get at par with 1-2 years of experienced folks.</li>
                                <li>The last level is to help you get placed with the hiring partners, with the help of our partner, <a href="https://www.roc8.careers/">roc8.careers</a></li>
                                <li>Read more under<Link to={"/levelZeroFaq"}>camp structure</Link> </li>
                            </ul>
                        </li>
                        <li>What to do after registering for the waitlist for neoG Camp 2023?
                            <ul>
                                <li>Please start learning levelZero and working on your portfolio, we will open the admission platform soon for you to submit your portfolio and get ready for the interview of levelOne.</li>
                                <li>We will let you know when the admission platform opens via mail and social media.</li>
                            </ul>
                        </li>
                        <li>What is the admission process of the camp?
                            <ul>
                                <li>Firstly, you learn and finish upto mark9 projects, then you fill out the admission form on the admission platform, and then you submit your portfolio. Once your portfolio is passed you can schedule an interview call with us. You are eligible to book your levelOne seat after qualifying for the interview.</li>
                            </ul>
                        </li>
                        <li>What is mark15?
                            <ul>
                                <li>At the end of every lesson of levelZero, you need to complete an assignment. You need to complete till mark9 from the mark15 and add them to your portfolio in order to apply for levelOne.</li>
                            </ul>
                        </li>
                        <li>Is submitting your portfolio necessary for qualification of levelOne?
                            <ul>
                                <li>If you are applying to levelOne, you will need to complete your portfolio (that you created in levelZero) and submit it for evaluation.</li>
                                <li>Read more about the admission process for levelOne <Link to={"/levelZeroFaq"}>levelzero</Link> .</li>
                            </ul>
                        </li>
                        <li>What will the interview for levelOne be about? Is any DS Algorithm required?
                            <ul>
                                <li>The interview will be casual. No DS Algo for the boot camp interview.</li>
                                <li>It would be just to know you. What motivates you? What does this program mean to you? How committed you are?</li>
                                <li>And a few minutes of live coding based on whatever you learn in levelZero with us.</li>
                                <li>Here is an interview guide for you.</li>
                            </ul>
                        </li>
                        <li>Will Domain, Age and Career gap matter to learn in neoG camp?
                            <ul>
                                <li>Does not matter as long as you have learning mindset. There are lot of examples who have more than 5, 6, even 10 yrs experience from previous batch 2022. Only thing required is hardworking and learning mind set.</li>
                            </ul>
                        </li>
                        <li>I am in 12th grade right now and I have my boards next year. Will that be a problem for getting in level one ?
                            <ul>
                                <li>No, it won't be a problem.</li>
                            </ul>
                        </li>
                    </ol>


                    {/* level one faq */}

                    <h2>levelOne FAQs</h2>
                    <hr />
                    <ol>
                        <li>What will boot camp be about?
                            <ul>
                                <li>levelZero: Free beginner, friendly, self-paced course to teach you the basics of web development/programming.</li>
                                <li>levelOne: Closed and paid, six-month course. The course is structured in such a way to make sure that you create advanced projects, and get at par with 1-2 years of experienced folks.</li>
                                <li>The last level is to help you get placed with the hiring partners, with the help of our partner, <a href="https://www.roc8.careers/">roc8.careers</a></li>
                                <li>Read more under<Link to={"/levelZeroFaq"}>camp structure</Link> </li>
                            </ul>
                        </li>
                        <li>What to do after registering for the waitlist for neoG Camp 2023?
                            <ul>
                                <li>Please start learning levelZero and working on your portfolio, we will open the admission platform soon for you to submit your portfolio and get ready for the interview of levelOne.</li>
                                <li>We will let you know when the admission platform opens via mail and social media.</li>
                            </ul>
                        </li>
                        <li>What is the admission process of the camp?
                            <ul>
                                <li>Firstly, you learn and finish upto mark9 projects, then you fill out the admission form on the admission platform, and then you submit your portfolio. Once your portfolio is passed you can schedule an interview call with us. You are eligible to book your levelOne seat after qualifying for the interview.</li>
                            </ul>
                        </li>
                        <li>What is mark15?
                            <ul>
                                <li>At the end of every lesson of levelZero, you need to complete an assignment. You need to complete till mark9 from the mark15 and add them to your portfolio in order to apply for levelOne.</li>
                            </ul>
                        </li>
                        <li>Is submitting your portfolio necessary for qualification of levelOne?
                            <ul>
                                <li>If you are applying to levelOne, you will need to complete your portfolio (that you created in levelZero) and submit it for evaluation.</li>
                                <li>Read more about the admission process for levelOne <Link to={"/levelZeroFaq"}>levelzero</Link> .</li>
                            </ul>
                        </li>
                        <li>What will the interview for levelOne be about? Is any DS Algorithm required?
                            <ul>
                                <li>The interview will be casual. No DS Algo for the boot camp interview.</li>
                                <li>It would be just to know you. What motivates you? What does this program mean to you? How committed you are?</li>
                                <li>And a few minutes of live coding based on whatever you learn in levelZero with us.</li>
                                <li>Here is an interview guide for you.</li>
                            </ul>
                        </li>
                        <li>Will Domain, Age and Career gap matter to learn in neoG camp?
                            <ul>
                                <li>Does not matter as long as you have learning mindset. There are lot of examples who have more than 5, 6, even 10 yrs experience from previous batch 2022. Only thing required is hardworking and learning mind set.</li>
                            </ul>
                        </li>
                        <li>I am in 12th grade right now and I have my boards next year. Will that be a problem for getting in level one ?
                            <ul>
                                <li>No, it won't be a problem.</li>
                            </ul>
                        </li>
                    </ol>

                    {/* financial aid faq */}
                    <h2>FInancial AID</h2>
                    <hr />
                    <ol>
                        <li>What will boot camp be about?
                            <ul>
                                <li>levelZero: Free beginner, friendly, self-paced course to teach you the basics of web development/programming.</li>
                                <li>levelOne: Closed and paid, six-month course. The course is structured in such a way to make sure that you create advanced projects, and get at par with 1-2 years of experienced folks.</li>
                                <li>The last level is to help you get placed with the hiring partners, with the help of our partner, <a href="https://www.roc8.careers/">roc8.careers</a></li>
                                <li>Read more under<Link to={"/levelZeroFaq"}>camp structure</Link> </li>
                            </ul>
                        </li>
                        <li>What to do after registering for the waitlist for neoG Camp 2023?
                            <ul>
                                <li>Please start learning levelZero and working on your portfolio, we will open the admission platform soon for you to submit your portfolio and get ready for the interview of levelOne.</li>
                                <li>We will let you know when the admission platform opens via mail and social media.</li>
                            </ul>
                        </li>
                        <li>What is the admission process of the camp?
                            <ul>
                                <li>Firstly, you learn and finish upto mark9 projects, then you fill out the admission form on the admission platform, and then you submit your portfolio. Once your portfolio is passed you can schedule an interview call with us. You are eligible to book your levelOne seat after qualifying for the interview.</li>
                            </ul>
                        </li>
                        <li>What is mark15?
                            <ul>
                                <li>At the end of every lesson of levelZero, you need to complete an assignment. You need to complete till mark9 from the mark15 and add them to your portfolio in order to apply for levelOne.</li>
                            </ul>
                        </li>
                        <li>Is submitting your portfolio necessary for qualification of levelOne?
                            <ul>
                                <li>If you are applying to levelOne, you will need to complete your portfolio (that you created in levelZero) and submit it for evaluation.</li>
                                <li>Read more about the admission process for levelOne <Link to={"/levelZeroFaq"}>levelzero</Link> .</li>
                            </ul>
                        </li>
                        <li>What will the interview for levelOne be about? Is any DS Algorithm required?
                            <ul>
                                <li>The interview will be casual. No DS Algo for the boot camp interview.</li>
                                <li>It would be just to know you. What motivates you? What does this program mean to you? How committed you are?</li>
                                <li>And a few minutes of live coding based on whatever you learn in levelZero with us.</li>
                                <li>Here is an interview guide for you.</li>
                            </ul>
                        </li>
                        <li>Will Domain, Age and Career gap matter to learn in neoG camp?
                            <ul>
                                <li>Does not matter as long as you have learning mindset. There are lot of examples who have more than 5, 6, even 10 yrs experience from previous batch 2022. Only thing required is hardworking and learning mind set.</li>
                            </ul>
                        </li>
                        <li>I am in 12th grade right now and I have my boards next year. Will that be a problem for getting in level one ?
                            <ul>
                                <li>No, it won't be a problem.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
  )
}

export default FrequentAsk
import React, { useState } from 'react';
import './faq.scss';
import FrequentAsk from './FrequentAsk';
import OurApproch from './OurApproch';
import WhyDoing from './WhyDoing';
import WhyUs from './WhyUs';
import CampStructure from './CampStructure';
import LevelZeroFaq from './LevelZeroFaq';
import LevelOneFaq from './LevelOneFaq';
import FeeStructure from './FeeStructure';
import FinancialAid from './FinancialAid';
import AdmissionProcess from './AdmissionProcess';
import InterviewTips from './InterviewTips';
import InterviewPractice from './InterviewPractice';

const Faq = () => {

    const [faq, SetFaq] = useState(true);
    const [ourApproch, SetOurApproch] = useState(false);
    const [whyDoing, SetWhyDoing] = useState(false);
    const [whyUs, SetWhyUs] = useState(false);
    const [campStructure, SetCampStructure] = useState(false);
    const [levelZeroFaq, SetLevelZeroFaq] = useState(false);
    const [levelOneFaq, SetLevelOneFaq] = useState(false);
    const [feeStructure, SetFeeStructure] = useState(false);
    const [financialAid, SetFinancialAid] = useState(false);
    const [admissionProcess, SetAdmissionProcess] = useState(false);
    const [interviewTips, SetInterviewTips] = useState(false);
    const [interviewPractice, SetInterviewPractice] = useState(false);


    function handleClickFaq() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(true);
        SetOurApproch(false);
        SetWhyDoing(false);
        SetWhyUs(false);
        SetCampStructure(false);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(false);
        SetFeeStructure(false);
        SetFinancialAid(false);
        SetAdmissionProcess(false);
        SetInterviewTips(false);
        SetInterviewPractice(false);

    }
    function handleClickOurApproch() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(true);
        SetWhyDoing(false);
        SetWhyUs(false);
        SetCampStructure(false);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(false);
        SetFeeStructure(false);
        SetFinancialAid(false);
        SetAdmissionProcess(false);
        SetInterviewTips(false);
        SetInterviewPractice(false);
    }
    function handleClickWhyDoing() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(false);
        SetWhyDoing(true);
        SetWhyUs(false);
        SetCampStructure(false);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(false);
        SetFeeStructure(false);
        SetFinancialAid(false);
        SetAdmissionProcess(false);
        SetInterviewTips(false);
        SetInterviewPractice(false);
    }
    function handleClickWhyUs() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(false);
        SetWhyDoing(false);
        SetWhyUs(true);
        SetCampStructure(false);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(false);
        SetFeeStructure(false);
        SetFinancialAid(false);
        SetAdmissionProcess(false);
        SetInterviewTips(false);
        SetInterviewPractice(false);
    }
    function handleClickCampStructure() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(false);
        SetWhyDoing(false);
        SetWhyUs(false);
        SetCampStructure(true);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(false);
        SetFeeStructure(false);
        SetFinancialAid(false);
        SetAdmissionProcess(false);
        SetInterviewTips(false);
        SetInterviewPractice(false);
    }
    function handleClickLevelZeroFaq() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(false);
        SetWhyDoing(false);
        SetWhyUs(false);
        SetCampStructure(false);
        SetLevelZeroFaq(true);
        SetLevelOneFaq(false);
        SetFeeStructure(false);
        SetFinancialAid(false);
        SetAdmissionProcess(false);
        SetInterviewTips(false);
        SetInterviewPractice(false);
    }
    function handleClickLevelOneFaq() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(false);
        SetWhyDoing(false);
        SetWhyUs(false);
        SetCampStructure(false);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(true);
        SetFeeStructure(false);
        SetFinancialAid(false);
        SetAdmissionProcess(false);
        SetInterviewTips(false);
        SetInterviewPractice(false);
    }
    function handleClickFeeStructure() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(false);
        SetWhyDoing(false);
        SetWhyUs(false);
        SetCampStructure(false);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(false);
        SetFeeStructure(true);
        SetFinancialAid(false);
        SetAdmissionProcess(false);
        SetInterviewTips(false);
        SetInterviewPractice(false);
    }
    function handleClickFinancialAid() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(false);
        SetWhyDoing(false);
        SetWhyUs(false);
        SetCampStructure(false);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(false);
        SetFeeStructure(false);
        SetFinancialAid(true);
        SetAdmissionProcess(false);
        SetInterviewTips(false);
        SetInterviewPractice(false);
    }
    function handleClickAdmissionProcess() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(false);
        SetWhyDoing(false);
        SetWhyUs(false);
        SetCampStructure(false);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(false);
        SetFeeStructure(false);
        SetFinancialAid(false);
        SetAdmissionProcess(true);
        SetInterviewTips(false);
        SetInterviewPractice(false);
    }
    function handleClickInterviewTips() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(false);
        SetWhyDoing(false);
        SetWhyUs(false);
        SetCampStructure(false);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(false);
        SetFeeStructure(false);
        SetFinancialAid(false);
        SetAdmissionProcess(false);
        SetInterviewTips(true);
        SetInterviewPractice(false);
    }
    function handleClickinterviewPractice() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        SetFaq(false);
        SetOurApproch(false);
        SetWhyDoing(false);
        SetWhyUs(false);
        SetCampStructure(false);
        SetLevelZeroFaq(false);
        SetLevelOneFaq(false);
        SetFeeStructure(false);
        SetFinancialAid(false);
        SetAdmissionProcess(false);
        SetInterviewTips(false);
        SetInterviewPractice(true);
    }


    return (
        <div className='faqmain'>
            <div className="maincontent">
                {faq ? <FrequentAsk />
                    : ourApproch ? <OurApproch />
                        : whyDoing ? <WhyDoing />
                            : whyUs ? <WhyUs />
                                : campStructure ? <CampStructure />
                                    : levelZeroFaq ? <LevelZeroFaq />
                                        : levelOneFaq ? <LevelOneFaq />
                                            : feeStructure ? <FeeStructure />
                                                : financialAid ? <FinancialAid />
                                                    : admissionProcess ? <AdmissionProcess />
                                                        : interviewTips ? <InterviewTips />
                                                            : <InterviewPractice />
                }

            </div>
            <div className="sidenav">
                <div>
                    <button onClick={handleClickFaq}>frequently asked questions</button>
                    <button onClick={handleClickOurApproch}>what's new in our approach</button>
                    <button onClick={handleClickWhyDoing}>why are we doing this?</button>
                    <button onClick={handleClickWhyUs}>why us?</button>
                    <button onClick={handleClickCampStructure}>camp structure</button>
                    <button onClick={handleClickLevelZeroFaq}>levelZero</button>
                    <button onClick={handleClickLevelOneFaq}>levelOne</button>
                    <button onClick={handleClickFeeStructure}>fee structure</button>
                    <button onClick={handleClickFinancialAid}>financial aid</button>
                    <button onClick={handleClickAdmissionProcess}>admission process</button>
                    <button onClick={handleClickInterviewTips}>interview tips</button>
                    <button onClick={handleClickinterviewPractice}>interview practice</button>

                </div>
            </div>
        </div>
    )
}

export default Faq
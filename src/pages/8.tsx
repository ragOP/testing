import React, { useState, useEffect } from "react";
//@ts-ignore
import TagManager from "react-gtm-module";
import axios from "axios";
import "./styles.scss";
import { scrollTo } from "../utils";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head_bg from "../assets/body.png";
import abba from "../assets/abba.png";
import abc from "../assets/abc.jpeg";
import Headline from "../assets/headline_spandeb1.png";

// google tag manager

const tagManagerArgs = {
  gtmId: "GTM-KZJBC3B",
};

TagManager.initialize(tagManagerArgs);

export default function Fifth_SP() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };




  useEffect(() => {
    window.document.title = "Senior's Allowance Program 2024";

    
  }, []);

  const handleCall = () => {
   
  };

  const [quiz, setQuiz] = useState(
    "1. Do you have any personal or family history of chronic diseases?  "
  );
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState<any>(0);
  const [yes, setYes] = useState("YES");
  const [no, setNo] = useState("NO");
  const [eligible, setEligible] = useState(true);
  const [Humana,setHumana]=useState("Humana")
  const [Aetna,setAetna]=useState("Aetna")
  const [KaiserPermanante,setKaiserPermanante]=useState("Kaiser Permanante")
  const [Other,setOther]=useState("other")
  const [OriginalMedicare,setOriginalMedicare]=useState("Original Medicare")

  const stepProcess = () => {
    if (step === " ") {
      setTimeout(() => {
        setStep("Reviewing Your Answers...");
      }, 2000);
    }
    if (step === "Reviewing Your Answers...") {
      setTimeout(() => {
        setStep("Matching With Best Options...");
      }, 1500);
    }
    if (step === "Matching With Best Options...") {
      setTimeout(() => {
        setStep("Confirming Eligibility...");
      }, 1500);
    }
    if (step === "Confirming Eligibility...") {
      setTimeout(() => {
        setStep("completed");

        axios
          .get(process.env.REACT_APP_PROXY + `/visits/8`)
          .then(({ data }) => {
            const _id = data[0]._id;
            const _visits = data[0].visits;
            const _views = data[0].views;
            const _calls = data[0].calls;
            const _positives = data[0].positives;
            const _negatives = data[0].negatives;
            const visits = {
              visits: _visits,
              views: _views + 1,
              calls: _calls,
              positives: _positives,
              negatives: _negatives,
            };
            axios
              .put(
                process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
                visits
              )
              .catch((err) => console.log(err));
          });
      }, 1500);
    }

    if (step === "completed") {
      const startTime: any = new Date();
      const timer = setInterval(() => {
        const nowTime: any = new Date();
        setSecond((180 - Math.round((nowTime - startTime) / 1000)) % 60);
        setMin(
          Math.floor((180 - Math.round((nowTime - startTime) / 1000)) / 60)
        );
      }, 1000);
    }
  };

  useEffect(() => {
    stepProcess();
  }, [step]);

  const topScroll = (id: any) => {
    scrollTo({ id });
  };

  useEffect(() => {
    console.log("Scrollingggg");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [step, eligible]);

  const handleQuizP = () => {
    topScroll("btn");
    if (
      quiz ===
      "1. Do you have any personal or family history of chronic diseases?  "
    ) {
      setYes("Yes");
      setNo("No");
      setQuiz("2.  Do you have a Original Medicare Red White and Blue card?");
    } else {
      setEligible(true);
      setStep(" ");
    }
  };

  const handleQuizN = () => {
    topScroll("btn");
    if (
      quiz ===
      "1. Do you have any personal or family history of chronic diseases?  "
    ) {
      setYes("Yes");
      setNo("No");
      topScroll("top");
      setQuiz("2.  Do you have a Original Medicare Red White and Blue card?");
    } else {
      setQuiz("3. Who is your Medicare provider?");
      setHumana("Humana")
      setAetna("Aetna")
      setKaiserPermanante("Kaiser Permanante")
      setOther("other")
      setOriginalMedicare("Original Medicare")
   
      // setEligible(false);
      // setStep(" ");  
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll
      });
    }
  };


  const handleNew=(value:any)=>{
    console.log('value',value);
    if(value==="OriginalMedicare"){
      setStep(" ");
      setEligible(true)
    }
    else {
        setStep(" ");  
      setEligible(false)
    }
    
  }
  return (
    <div>
      {step === "process" ? (
        <>
          <div className="main-container-5">
            <div className="main-descrition-5-5">
              <img
                className="topic-img-middle-za"
                src={abba}
                alt="head"
                style={{ marginTop: "5px" }}
              />
              <div className="main-des-title-6-7" style={{ marginTop: "2px" }}>
                <b>
                  Americans Over 65 Can Now Qualify For Genetic Screening at No
                  Cost!
                </b>
              </div>
              {/* <img className='topic-img-larger' src = {Headline} alt = "head"/> */}
              <img className="topic-img-middle-z" src={Head_bg} alt="head" />
              <div style={{ marginTop: "22px" }} className="main-des-5">
                Receive your Genetic Test Kit at No cost if you're over 65 years
                or older, allowing you to detect potential life-threatening
                diseases such as cancer, diabetes, anemia, alzheimer’s,
                arthritis, and a wide range of other disorders.
              </div>
              <div className="main-des-5" style={{ marginTop: "-5px" }}>
                If you have not tested for these deadly diseases through
                high-quality genetic screening{" "}
                <b>get it done now while it’s still covered under Medicare.</b>
              </div>
              {/* <div className='main-des-5' style = {{marginTop:"1rem"}}><b>Simplemente responda las siguientes preguntas:</b></div> */}
            </div>
            <div style={{ marginTop: "9px" }} className="survey">
              <div className="quiz-5" id="btn">
                {quiz ===
                  "2.  Do you have a Original Medicare Red White and Blue card?" && (
                  <img
                    className="topic-img-middle-zaa"
                    src={abc}
                    alt="head"
                    style={{ borderRadius: "10px", marginBottom: "5px" }}
                  />
                )}
                {quiz}
                {quiz ===
                  "2.  Do you have a Original Medicare Red White and Blue card?" && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    If you have a plan with Humana, Cigna, Aetna, etc you DO NOT
                    Qualify!
                  </p>
                )}
              </div>
           {  quiz !="3. Who is your Medicare provider?" ?
           <div className="answer">
                <div className="answer-btn-5" onClick={handleQuizP}>
                  {yes}
                </div>
                <div className="answer-btn-5" onClick={handleQuizN}>
                  {no}
                </div>
              </div>:
               <div className="answer">
               <div className="answer-btn-5" onClick={()=>handleNew("Humana")}>
                 {Humana}
               </div>
               <div className="answer-btn-5" onClick={()=>handleNew("Aetna")}>
                 {Aetna}
               </div>
               <div className="answer-btn-5" onClick={()=>handleNew("KaiserPermanante")}>
                 {KaiserPermanante}
               </div>
               <div className="answer-btn-5" onClick={()=>handleNew("Other")}>
                 {Other}
               </div>
               <div className="answer-btn-5" onClick={()=>handleNew("OriginalMedicare")}>
                 {OriginalMedicare}
               </div>
             </div>
              }
            </div>
          </div>
        </>
      ) : step !== "process" && step !== "completed" ? (
        <div
          className={step !== " " ? "checking" : ""}
          style={{ fontWeight: "700" }}
        >
          {step}
        </div>
      ) : (
        <div>
          {eligible ? (
            <div className="checking">
              <div className="congrats">Congratulations, You Qualify!</div>
              <div className="top-description-5">
                Make A <b>Quick Call to </b> Claim Your No Cost Genetic
                Screening Kit.
              </div>
              <div className="spots-count">Spots remaining: 4</div>
              <div className="sub-description1">
                If you DO NOT have an Original Medicare Red White And Blue Card
                you cannot qualify!
              </div>
              <div className="tap-direction">👇 TAP BELOW TO CALL 👇</div>
              <a href="tel:+18663380677">
                <div className="call-btn" onClick={handleCall}>
                  CALL (866) 338-0677
                </div>
              </a>
              <div className="sub-title">We Have Reserved Your Spot</div>
              <div className="sub-description">
                Due to high call volume, your official agent is waiting for only{" "}
                <b>3 minutes</b>, then your spot will not be reserved.
              </div>
              <div className="timer">
                <div className="timer-cell">{min}</div>
                <div className="timer-cell">:</div>
                <div className="timer-cell">{second}</div>
              </div>
            </div>
          ) : (
            <div className="checking">Sorry, You're not eligible!</div>
          )}
        </div>
      )}

      <div className="footer">
        <div className="terms">Terms & Conditions | Privacy Policy</div>
        <div className="copyright">
          Copyright © 2024 - All right reserved Daily America Savings.
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./hero.css"

function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Dreams", "Hopes", "Aspirations"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="heroSection" id="home">
      <Container>
        <div className="bannerMain">
          <div className="bannerText">
            <div className="welcome">
              <h2>Welcome to </h2>
              <img src="./logo.png" alt="" />
            </div>

            <div className="heading">
              <h1>BUILDING </h1>
              <h1>
                <span className="typed">{text}</span>
              </h1>
            </div>

            <p>Home of Real Estate Investment &amp; Advisory Masters</p>
            <div className="heroButtons">
              <button className="btn1">
                <a href="">Read More</a>
              </button>
              <button className="btn2">
                <a href="#">Apply Now</a>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

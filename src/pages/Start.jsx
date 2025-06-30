import { Typewriter } from "react-simple-typewriter";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer";
import Logo from "../assets/Logo.jpg";


const WelcomeMessage = styled.p`
font-size: 1.2rem;
background: linear-gradient(
  90.21deg,
  rgba(170, 54, 124, 0.5) -5.91%,
  rgba(74, 47, 189, 0.5) 111.58%
);
border: 1px solid rgba(255, 255, 255, 0.5);
max-width: fit-content;
padding: 10px;
color: white;
margin-top: 13%;
margin-left: 3%;

@media (max-width: 767px) {
  margin-top: 30%;
}
`;

const TypewriterText = styled.p`
font-size: 2.2rem;
color: white;
font-weight: bold;
margin-left: 3%;
`;

const MyInfoText = styled.p`
font-size: 1.3rem;
color: lightgrey;
max-width: 50%;
line-height: 1.6;
letter-spacing: 1.2;
margin-left: 3%;


@media (max-width: 767px) {
 max-width: 70%;
}
`;


const animatedImg = keyframes`
0% {
  transform: translateY(0); 
}
50% {
  transform: translateY(-20px); 
}
100% {
  transform: translateY(0); 
}
`;

const Img = styled.img`
max-width: 30%;
height: auto; 
position: absolute;
right: 10%;
top: 30%;
animation: ${animatedImg} 3s infinite ease-in-out; 
border-radius: 20px;
clip-path: circle();

@media (max-width: 767px){
  margin-right: -5%;
   height: 6rem;
   margin-top: 55%;
   clip-path: circle();
   animation: none;
}
`;




const ConnectBtn = styled.button`
font-size: 1.3rem;
background-color: transparent;
color: white;
border: none;
letter-spacing: 3px;
margin-left: 3%;
opacity: 1;
transition: opacity .5s ease;

&:hover{
 color: lightgrey;
 opacity: 0.6;
 cursor: pointer;
}

@media (max-width: 767px){
  margin-top: 10%;
}
`


function Start() {

  const {ref: welcomeRef, inView: welcomeInView} = useInView({triggerOnce: true, threshold: 0.2});
  const {ref: typewWriterRef, inView: typeWriterinView} = useInView({triggerOnce: true, threshold: 0.2});
  const {ref: infoTextRef, inView: infoTextInView} = useInView({triggerOnce: true, threshold: 0.2});
  const {ref: btnRef, inView: btnInView} = useInView({triggerOnce: true, threshold: 0.2});

  return (
    <section id="Home">
      <motion.div
        ref={welcomeRef}
        initial={{ opacity: 0, y: -100 }}
        animate={welcomeInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <WelcomeMessage>Welcome to المفكر الصغير</WelcomeMessage>
     <motion.div/>

     <motion.div
        ref={typewWriterRef}
        initial={{opacity: 0, x: -100}}
        animate={typeWriterinView ? {opacity: 1, x: 0} : {}}
        transition={{duration: 0.8, ease: "easeOut"}}
      >
       
      <TypewriterText>
      Looking for fun? <br />We've got the perfect toy for you -<br />
        <span style={{ color: "lightblue" }}>
          <Typewriter
            words={["Frontend Entwickler", " React developer", " UI designer"]}
            loop={true}
            cursor
            cursorStyle="|"
            cursorBlinking={true}
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={3000}
          />
        </span>
      </TypewriterText>
      </motion.div>

      <motion.div
         ref={infoTextRef}
         initial={{opacity: 0, x: 100}}
         animate={infoTextInView ? {opacity: 1, x: 0} : {}}
         transition={{duration: 0.8, ease: "easeOut"}}
         >
      <MyInfoText>

        Hallo! Ich bin Mehmet Katircioglu, 14 Jahre alt und hauptberuflich
        Frontend developer. Am liebsten programmiere ich mit React, da ich 
        darauf spezalisiert bin. Zudem habe ich auch gute Kenntnisse im UI
        Design um selber zu designen und schließlich dies in Code umzusetzen.
      </MyInfoText>
      </motion.div>
      
      <Img src={Logo} alt="Logo" loading="lazy"/>

      <motion.div
         ref={btnRef}
         initial={{opacity: 0, x: 100}}
         animate={btnInView ? {opacity: 1, x: 0} : {}}
         transition={{duration: 0.8, ease: "easeIn"}}
         >
      <ConnectBtn> Download App! <span>➡️</span></ConnectBtn>
      </motion.div>
      </motion.div>
    </section>
  );
}

export default Start;
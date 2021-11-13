import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
export default function Section({
  title,
  description,
  backgroundImg,
  leftText,
  rightText,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <BtnGroup>
            <Leftbtn>{leftText}</Leftbtn>

            {rightText && <Rightbtn>{rightText}</Rightbtn>}
          </BtnGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: orange;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const BtnGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Leftbtn = styled.div`
  background-color: #1f1f23;
  height: 40px;
  width: 256px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.75;
  text-transform: uppercase;
  font-size: 12px;
  margin: 15px;
`;
const Rightbtn = styled(Leftbtn)`
  background-color: white;
  color: grey;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  overflow-x: hidden;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;

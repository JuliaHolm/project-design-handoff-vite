import styled from "styled-components";

const BubbleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 4.3rem;
    left: 1rem;
    width: 240px;
  }

  @media (min-width: 744px) {
    display: none;
  }
`;

const BubbleText = styled.span`
  position: absolute;
  top: 8rem;
  left: 2.8rem;
  transform: rotate(-5deg);

  font-family: var(--metal-mania);
  font-size: 3rem;
  color: var(--cobalt);
  text-transform: uppercase;
`;

export const SpeechBubble = ({ hideOnBiggerScreens }) => {
  return (
    <BubbleContainer>
      <img src="./speech-bubble.svg" alt="Speech bubble" />
      <BubbleText>sat nam</BubbleText>
    </BubbleContainer>
  );
};

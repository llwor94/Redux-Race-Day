import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import avatar from '../assets/avatar-placeholder.png';

const FlipperWrapper = styled.div`
  width: 50%;
  height: 70%;
  position: relative;
  z-index: 1;
  transition: all 0.8s;
  perspective: 1000px;
`;

// const FlipperBody = styled.div`
//   width: 100%;
//   height: 100%;
//   transform-style: preserve-3d;
//   transition: all .7s linear;
//   transform: ${props => props.flip ? 'rotateY(180deg)' : 'none'};
// `
const Wrapper = styled.div`
  border-radius: 3px;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 10px;
  backface-visibility: hidden;
  background-image: linear-gradient(to right bottom, #015147, #1c6861);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: all 0.8s;

  h1 {
    font-family: 'Lato', sans-serif;
    color: #fafafa;
  }
`;

const Front = styled(Wrapper)`
  transform: ${props => (props.flip ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const Back = styled(Wrapper)`
  transform: ${props => (props.flip ? 'rotateY(0)' : 'rotateY(-180deg)')};
`;

const TopWrapper = styled.div`
  display: flex;
`;

const TextHeader = styled.div`
  padding: 5px 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  font-family: 'Lato', sans-serif;
  color: #fafafa;
`;

const InnerWrapper = styled.div`
  padding: 10px;

  h5 {
    font-weight: 400;
    text-decoration: underline;
  }
  p {
    font-family: Roboto;
  }
`;

const Avatar = styled.img`
  height: 225px;
  border-radius: 3px;
`;

const RacerProfile = ({ racer, handleSubmit }) => (
  <FlipperWrapper>
    <Front flip={racer.checked_in}>
      <TopWrapper>
        <Avatar src={avatar} />
        <TextHeader>
          <h1>{racer.name}</h1>
          <TextWrapper>
            <InnerWrapper>
              <h5>Distance</h5>
              <p>{racer.distance}</p>
            </InnerWrapper>
            <InnerWrapper>
              <h5>Age</h5>
              <p>{racer.age}</p>
            </InnerWrapper>
          </TextWrapper>
        </TextHeader>
      </TopWrapper>
      <Button title="Check In" main={true} handleClick={handleSubmit} />
    </Front>
    <Back flip={racer.checked_in}>
      <h1>Yo we flipped! {racer.name} is checked in yooo</h1>
    </Back>
  </FlipperWrapper>
);

export default RacerProfile;

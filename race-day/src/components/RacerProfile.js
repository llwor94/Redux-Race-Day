import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import avatar from '../assets/avatar-placeholder.png';

const Wrapper = styled.div`
  width: 50%;
  height: 70%;
  border-radius: 3px;
  padding: 10px;
  background-color: #00897b;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-family: 'Lato', sans-serif;
    color: #fafafa;
  }
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

const RacerProfile = ({ racer }) => (
  <Wrapper>
    <Avatar src={avatar} />
    <TextHeader>
      <h1>{racer.name}</h1>
      <TextWrapper>
        <InnerWrapper>
          <h5>Distance</h5>
          <p>
            {racer.distance}
            miles
          </p>
        </InnerWrapper>
        <InnerWrapper>
          <h5>Age</h5>
          <p>{racer.age}</p>
        </InnerWrapper>
      </TextWrapper>
    </TextHeader>
  </Wrapper>
);

export default RacerProfile;

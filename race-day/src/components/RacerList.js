import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.table`
  background: #e5e5e5;
  width: 100%;
`;

const Body = styled.tr`
  border-bottom: 1px solid black;
`;

const Racers = [
  {
    name: 'Lauren Worthington',
    age: 24,
    distance: '2 miles',
  },
  {
    name: 'Jacob Carlson',
    age: 59,
    distance: '8 miles',
  },
  {
    name: 'Keith Price',
    age: 30,
    distance: '3 miles',
  },
  {
    name: 'Claire Adams',
    age: 42,
    distance: '2 miles',
  },
];

const RacerList = params => (
  <Wrapper>
    <tbody>
      <Body>
        <th>Name</th>
        <th>Age</th>
        <th>Distance</th>
      </Body>
      {Racers.map((racer, index) => (
        <Body key={index}>
          <td>{racer.name}</td>
          <td>{racer.age}</td>
          <td>{racer.distance}</td>
        </Body>
      ))}
    </tbody>
  </Wrapper>
);

export default RacerList;

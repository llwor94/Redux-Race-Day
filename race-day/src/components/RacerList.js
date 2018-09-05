import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #e5e5e5;
  width: 100%;
  padding: 16px;
  overflow-x: scroll;
`;

const Table = styled.table`
  width: 100%;
  background: #fafafa;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

const Body = styled.tr`
  border-top: 1px solid black;
`;

const Header = styled.th`
  padding: 7px 5px;
  background: #292929;
  color: #fafafa;
`;

const Item = styled.td`
  padding: 5px;
  overflow: scroll;
`;

const RacerList = ({ racers }) => (
  <Wrapper>
    <Table>
      <tbody>
        <tr>
          <Header>Name</Header>
          <Header>Age</Header>
          <Header>Distance</Header>
        </tr>
        {racers.map(racer => (
          <Body key={racer.id}>
            <Item>{racer.name}</Item>
            <Item>{racer.age}</Item>
            <Item>{racer.distance} miles</Item>
          </Body>
        ))}
      </tbody>
    </Table>
  </Wrapper>
);

export default RacerList;

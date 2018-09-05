import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  background: #fafafa;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  margin: 7px 0;
`;

const Body = styled.tbody`
  display: block;
  max-height: 500px;
  overflow: scroll;
`;

const ItemBody = styled.tr`
  border-top: 1px solid black;
  display: table;
  width: 100%;
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
  <Table>
    <thead style={{ display: 'table', width: '100%' }}>
      <tr>
        <Header>Name</Header>
        <Header>Age</Header>
        <Header>Distance</Header>
      </tr>
    </thead>
    <Body>
      {racers.map(racer => (
        <ItemBody key={racer.id}>
          <Item>{racer.name}</Item>
          <Item>{racer.age}</Item>
          <Item>{racer.distance} miles</Item>
        </ItemBody>
      ))}
    </Body>
  </Table>
);

export default RacerList;

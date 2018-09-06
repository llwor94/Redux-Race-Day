import React from 'react';
import styled from 'styled-components';
import checked from '../assets/checked.svg';
import multiply from '../assets/multiply.svg';

const Table = styled.div`
  width: 100%;
  background: #fafafa;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  margin: 7px 0;
`;

const Body = styled.div`
  display: block;
  max-height: 500px;
  overflow: scroll;
`;

const HeaderWrap = styled.div`
  display: flex;
  width: 100%;
`;

const ItemBody = styled.div`
  border-top: 1px solid black;
  display: flex;
  width: 100%;
`;

const Header = styled.div`
  padding: 7px 10px;
  background: #292929;
  color: #fafafa;
  flex-basis: 0;
  flex-grow: ${props => (props.first ? '2' : '1')};
  text-align: ${props => (props.first ? 'left' : 'right')};
`;

const Item = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  flex-basis: 0;
  height: 50px;
  text-align: ${props => (props.first ? 'left' : 'right')};
  flex-grow: ${props => (props.first ? '2' : '1')};
  img {
    max-height: 40px;
  }
`;

const RacerList = ({ racers }) => (
  <Table>
    <HeaderWrap>
      <Header first>Name</Header>
      <Header>Age</Header>
      <Header>Distance</Header>
      <Header>Status</Header>
    </HeaderWrap>

    <Body>
      {racers.map(racer => (
        <ItemBody key={racer.id}>
          <Item first>{racer.name}</Item>
          <Item>{racer.age}</Item>
          <Item>{racer.distance}m</Item>
          <Item>
            <img src={racer.checkedIn ? checked : multiply} />
          </Item>
        </ItemBody>
      ))}
    </Body>
  </Table>
);

export default RacerList;

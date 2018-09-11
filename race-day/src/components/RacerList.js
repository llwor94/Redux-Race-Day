import React from 'react';
import styled from 'styled-components';
import checked from '../assets/checked.svg';
import multiply from '../assets/multiply.svg';

const Table = styled.div`
  width: ${props => (props.big ? '60%;' : '100%')};
  height: ${props => (props.big ? '70%;' : '90%')};
  background: #fafafa;
  ${
    '' /* box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2); */
  }
  border-radius: ${props => (props.big ? '3px' : '0')};
`;

const Body = styled.div`
  display: block;
  max-height: calc(100% - 40px);
  overflow: scroll;
`;

const HeaderWrap = styled.div`
  display: flex;
  width: 100%;
  border-radius: 3px;
`;

const ItemBody = styled.div`
  border-top: 1px solid #bdbdbd;
  display: flex;
  width: 100%;

  &:hover {
    cursor: pointer;
    background-color: #e5e5e5;
  }
`;

const Header = styled.div`
  border-top-left-radius: ${props => (props.first ? '3px' : '0')};
  border-top-right-radius: ${props => (props.last ? '3px' : '0')};
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

const RacerList = ({ racers, big, handleClick }) => (
  <Table big={big}>
    <HeaderWrap>
      <Header first>Name</Header>
      <Header>Age</Header>
      <Header>Distance</Header>
      <Header last>Status</Header>
    </HeaderWrap>

    <Body>
      {racers.map(racer => (
        <ItemBody key={racer.id} onClick={() => handleClick(racer)}>
          <Item first>{racer.name}</Item>
          <Item>{racer.age}</Item>
          <Item>{racer.distance}</Item>
          <Item>
            <img src={racer.checked_in ? checked : multiply} />
          </Item>
        </ItemBody>
      ))}
    </Body>
  </Table>
);

export default RacerList;

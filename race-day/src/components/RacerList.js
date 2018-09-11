import React from 'react';
import styled from 'styled-components';
import checked from '../assets/checked.svg';
import multiply from '../assets/multiply.svg';

const Table = styled.div`
  width: 100%;
  max-width: 750px;
  height: ${props => (props.big ? '65%;' : '100%')};
  background: #fafafa;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);

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
  cursor: pointer;
  flex-grow: ${props => (props.first ? '2' : '1')};
  text-align: ${props => (props.first ? 'left' : 'center')};
`;

const Item = styled.div`
  padding: 5px 8px;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.first ? 'flex-start' : 'center')};
  font-size: 14px;
  flex-basis: 0;
  height: 50px;
  text-align: ${props => (props.first ? 'left' : 'center')};
  flex-grow: ${props => (props.first ? '2' : '1')};
  img {
    max-height: 40px;
  }
`;

class RacerList extends React.Component {
  state = {
    sortedList: [],
    sortedBy: '',
  };

  componentDidMount() {
    this.handleSort('status');
  }

  handleSort = sort => {
    let sorted = [];
    if (sort === this.state.sortedBy) {
      sorted = this.state.sortedList.reverse();
    } else {
      sorted = this.props.racers.sort((a, b) => {
        if (sort === 'name') {
          let textA = a.name.toUpperCase();
          let textB = b.name.toUpperCase();
          return textA.localeCompare(textB);
        } else if (sort === 'age') {
          return a.age - b.age;
        } else if (sort === 'distance') {
          return a.distance_id - b.distance_id;
        } else {
          return a.checked_in - b.checked_in;
        }
      });
    }
    this.setState({ sortedList: sorted, sortedBy: sort });
  };
  render() {
    return (
      <Table big={this.props.big}>
        <HeaderWrap>
          <Header first onClick={() => this.handleSort('name')}>
            Name
          </Header>
          <Header onClick={() => this.handleSort('age')}>Age</Header>
          <Header onClick={() => this.handleSort('distance')}>Distance</Header>
          <Header last onClick={() => this.handleSort('status')}>
            Status
          </Header>
        </HeaderWrap>

        <Body>
          {this.props.racers.map(racer => (
            <ItemBody
              key={racer.id}
              onClick={() => this.props.handleClick(racer)}
            >
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
  }
}

export default RacerList;

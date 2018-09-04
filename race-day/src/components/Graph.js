import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  div {
    padding: 0 10px;
    width: ${props => 'calc(100% /' + props.length + ')'};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const Bar = styled.div`
  background-color: #292929;
  margin: 0px;
  display: block;
`;

const data = [
  { x: 0, percent: '60%', age: '20-' },
  { x: 1, percent: '80%', age: '20-30' },
  { x: 2, percent: '50%', age: '30-40' },
  { x: 3, percent: '40%', age: '40-50' },
  { x: 4, percent: '90%', age: '50-60' },
  { x: 5, percent: '10%', age: '60-70' },
  { x: 6, percent: '70%', age: '70+' },
];

const Graph = () => (
  <Wrapper length={data.length}>
    {data.map(group => (
      <div key={group.x}>
        <Bar style={{ height: `${group.percent}`, width: '100%' }} />
        <p>{group.age}</p>
      </div>
    ))}
  </Wrapper>
);

export default Graph;

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

    p {
      font-size: 10px;
    }
  }
`;

const Bar = styled.div`
  background-color: #292929;
  margin: 0px;
  display: block;
`;

const Graph = ({ groups }) => (
  <Wrapper length={groups.length}>
    {groups.map(group => (
      <div key={group.id}>
        <Bar
          style={{
            height: `calc(${Math.ceil(
              (group.checkedIn / group.racers) * 100,
            )}% + 5px)`,
            width: '100%',
          }}
        />
        <p>{group.name}</p>
      </div>
    ))}
  </Wrapper>
);

export default Graph;

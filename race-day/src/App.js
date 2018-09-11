import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './containers/Dashboard';
import SearchContainer from './containers/SearchContainer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <BodyWrapper>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/checkin" component={SearchContainer} />
          </Switch>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

export default App;

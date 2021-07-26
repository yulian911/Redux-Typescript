import React, { ChangeEvent, FC, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import styled from "styled-components";

import { TododList } from "./pages/TodoList";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { UserFetch } from "./pages/UserFetch";
import { Counter } from "./pages/Counter";
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background-color: violet;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Text = styled.p`
  font-size: 35px;
  color: white;
  font-wight: bold;
`;

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBar>
            <Logo>
              <Text>TYPESCRIPT-REACT</Text>
            </Logo>
            <NavLink to="/user-fetch">User-fetch</NavLink>
            <NavLink to="/">TodoList React-TypeScript-Redux</NavLink>
            <NavLink to="/counter">Counter</NavLink>
          </NavBar>
          <Switch>
            <Route exact path="/" component={TododList} />
            <Route path="/user-fetch" component={UserFetch} />
            <Route path="/counter" component={Counter} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

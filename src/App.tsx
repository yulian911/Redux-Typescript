import React, {  FC } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import styled from "styled-components";

import { TododList } from "./pages/TodoList";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { UserFetch } from "./pages/UserFetch";
import { Counter } from "./pages/Counter";
import { Lista } from "./pages/Lista";
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background-color:#18191a;
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
  font-weight: bold;
`;
const ButtonNav=styled(NavLink)`
background-color: #18191a;
color:white;
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
margin: 5px 20px;
padding: 0 20px;
border-radius: 15px;

:hover{
  background-color: #3A3B3C;
}

`;
const Nav =styled.div`
display:flex;
flex-direction: row;
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
            <Nav>

            <ButtonNav to="/user-fetch">User-fetch</ButtonNav>
            <ButtonNav to="/">TodoList React-TypeScript-Redux</ButtonNav>
            <ButtonNav to="/counter">Counter</ButtonNav>
            <ButtonNav to="/lista">Normal list</ButtonNav>
            </Nav>
          </NavBar>
          <Switch>
            <Route exact path="/" component={TododList} />
            <Route path="/user-fetch" component={UserFetch} />
            <Route path="/counter" component={Counter} />
            <Route path="/lista" component={Lista} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

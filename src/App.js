import React from "react";
import {BrowserRouter, NavLink, Redirect, Route, Switch, useParams } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter forceRefresh={true}>
      <h1>App Layout</h1>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/users" component={UsersLayout} /> 
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
    </>
  )
};

const MainPage = () => {
  return (
    <>
    <h2>Main</h2>
    <NavLink to="/users" >UsersList</NavLink>
    </>
  )
};

const UsersLayout = () => {
  return (
    <div>
  <Switch>
    <Route path="/users" exact component={UsersList} />
    <Route path="/users/:userId/profile" exact component={UserProfile} />
    <Route path="/users/:userId/edit" exact component={EditUserPage} />
    <Redirect from="/users/:userId" to="/users/:userId/profile" />
  </Switch>
  </div>)
}

const UsersList = () => {
  return (
    <>
      <h2>UsersList</h2>
      <NavLink to="/">Main Page</NavLink>
      <ul>
      <li><NavLink to="/users/1" >User 1</NavLink></li>
      <li><NavLink to="/users/2" >User 2</NavLink></li>
      <li><NavLink to="/users/3" >User 3</NavLink></li>
      <li><NavLink to="/users/4" >User 4</NavLink></li>
      <li><NavLink to="/users/5" >User 5</NavLink></li>
      </ul>
    </>
  )
}

const UserProfile = () => {
  const {userId} = useParams();
  console.log(userId);
  return (<>
    <h2>User Profile</h2>
    <h3>User id: {userId}</h3>
    <h3><NavLink to="/users">Users List</NavLink></h3>
    <h3><NavLink to={"/users/"+userId+"/edit"}>Edit user</NavLink></h3>
    </>
  )
}

const EditUserPage = () => {
  const {userId} = useParams();
  const anotherUserId = +userId+1
  return (<>
    <h2>Edit User Profile</h2>
    <h3>Edit User: {userId}</h3>
    <h3><NavLink to="/users">Users List</NavLink></h3>
    <h3><NavLink to={"/users/"+userId+"/profile"}>Profile</NavLink></h3>
    <h3><NavLink to={"/users/"+anotherUserId}>Another User Page</NavLink></h3>
    </>
  )
}

export default App;
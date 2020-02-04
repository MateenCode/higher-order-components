import React from "react";

import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";

function App() {
  return (
    <div className='App'>
      <UserList />
      <UserProfile name='mateen' email='mateenkazia@gmail.com' />
    </div>
  );
}

export default App;

import UsersList from "./components/UserList/UserList";
import Profile from "./components/Profile/Profile";
import UserState from "./context/User/UserState";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <UserState>
        <UsersList />
        <Profile />
      </UserState>
    </>
  );
}

export default App;

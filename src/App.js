import UsersList from "./components/UserList/UserList";
import Profile from "./components/Profile/Profile";
import UserState from "./context/User/UserState";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <UserState>
        <div className='container p-4 d-flex justify-content-center'>
          <div className='col-md-7'>
            <UsersList />
          </div>
          <div className='col-md-5'>
            <Profile />
          </div>

        </div>
      </UserState>
    </>
  );
}

export default App;

import './App.css';
import ProfilePhoto from './Components/profile/ProfilePhoto';
import FullName from './Components/profile/FullName';
import Address from './Components/profile/Address';
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;

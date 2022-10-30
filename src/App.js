import profileImg from "../src/images/profile.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="profile_img">
          <img src={profileImg} alt='profile'></img>
        </div>
      </header>
    </div>
  );
}

export default App;

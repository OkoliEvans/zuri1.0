import profileImg from "../src/images/evans.png"
import shareIcon from "../src/images/shareIcon2.png"
import github from "../src/images/github_icon.png"
import slack from "../src/images/slack.jpg"
import zuriLogo from "../src/images/zuriLogo.webp"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="photo">
          <img src={profileImg} alt='profile' id="profile_img"></img>
          <p>Evans Okoli</p>
          <div id="share">
          <img src={shareIcon} alt="share icon" id="shareBtn"></img>
          </div>
        </div>
        <section id="rows">
          <div id="row">
            <button id="twitter_Btn"><a href="https://twitter.com/okolievans">@OkoliEvans</a></button>
            <button id="Slack_Btn"><a href="https://slack.com/mr.evans0075">Evans</a></button>
          </div>
          <div id="row">
            <button id="Btn_Zuri"><a href="https://training.zuri.team/">Zuri Team</a></button>
          </div>
          <div id="row">
            <button id="books" title="find books about design and coding"><a href="https://books.zuri.team">Zuri Books</a></button>
          </div>
          <div id="row">
            <button id="books_python" title="get quality books on python coding"><a href="https://books.zuri.team/python-for-beginners?ref_id=mr.evans0075">Python Books</a></button>
          </div>
          <div id="row">
            <button id="pitch" title="we work with only verified devs that pass our assessment"><a href="https://background.zuri.team">Background Check for Coders</a></button>
          </div>
          <div id="row">
            <button id="book_design" title="get quality designs for your books for free"><a href="https://books.zuri.team/design-rules">Design Books</a></button>
          </div>
          <div id="logos">
            <img  src={slack} alt="slack logo" id="slack_logo"></img>
            <img src={github} alt="slack logo" id="git_logo"></img>
          </div>
          <div id="footer">
            <p id="zuri_text">Zuri<span id="fullstop">.</span>Internship</p>

            <p id="HNG_text">HNG Internship 9 Frontend Task</p>

            <img src={zuriLogo} alt="zuri logo" id="zuri_logo"></img>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;

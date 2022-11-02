import profileImg from "../src/images/evans.png";
import shareIcon from "../src/images/shareIcon2.png";
import github from "../src/images/github_icon.png";
import slack from "../src/images/slack-icon.png";
import zuriLogo from "../src/images/zuriLogo.webp";
import zuri_icon from "../src/images/zuri-logo.png";
import zuri_dot from "../src/images/zuri-dot.png";
import "./App.css";
import "./App2.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <div id="profile">
            <img src={profileImg} alt="profile" id="profile_img"></img>
            <p>Evans Okoli</p>
            <div id="share">
              <img src={shareIcon} alt="share icon" id="shareBtn"></img>
            </div>
          </div>
          <section id="rows">
            <div className="rows">
              <div id="row">
                <a id="twitter_Btn" href="https://twitter.com/okolievans">
                  @OkoliEvans
                </a>

                <a id="Slack_Btn" href="https://slack.com/mr.evans0075">
                  Evans
                </a>
              </div>
            </div>
            <div id="row">
              <a id="Btn_Zuri" href="https://training.zuri.team/">
                Zuri Team
              </a>
            </div>
            <div id="row">
              <a
                id="books"
                title="find books about design and coding"
                href="https://books.zuri.team"
              >
                Zuri Books
              </a>
            </div>
            <div id="row">
              <a
                id="books_python"
                title="get quality books on python coding"
                href="https://books.zuri.team/python-for-beginners?ref_id=mr.evans0075"
              >
                Python Books
              </a>
            </div>
            <div id="row">
              <a
                id="pitch"
                title="we work with only verified devs that pass our assessment"
                href="https://background.zuri.team"
              >
                Background Check for Coders
              </a>
            </div>
            <div id="row">
              <a
                id="book_design"
                title="get quality designs for your books for free"
                href="https://books.zuri.team/design-rules"
              >
                Design Books
              </a>
            </div>
            `{" "}
          </section>
        </div>

        <div id="logos">
          <div id="logo-container">
            <div className="logo-content">
              <div className="social-icons">
                <img src={slack} alt="slack logo" id="slack_logo"></img>
                <img src={github} alt="slack logo" id="git_logo"></img>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="footer">
        <div className="footer">
          <div className="footer_content">
            <>
              <img src={zuri_icon} alt="zuri logo" id="zuri-logo"></img>
              <img src={zuri_dot} alt="zuri logo" id="zuri-dot"></img>
            </>

            <p id="HNG_text">HNG Internship 9 Frontend Task</p>

            <img src={zuriLogo} alt="zuri logo" id="zuri_logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

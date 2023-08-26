import './App.css';

function App() {
  return (
      <div className="App">
        <div className='TopNavbar'>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src="./logo.jpg" alt="Bootstrap" width="54" height="45"></img></a>
              <a class="navbar-brand" href="#" style={{ fontSize: "1.5rem" }}><strong>StayFit</strong></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav" style={{ fontSize: "1.25rem" }}>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className='IntroPage'>
          <h1>Welcome</h1>
          <h4>Be the change you want to see</h4>
        </div>
        <div className='InfoPage'>
          <div className='InfoPrelude'>
            <h4 style={{ marginBottom: "1.25rem", textAlign: "center" }}>Life At StayFit</h4>
          </div>
          <div className='InfoPages'>
            <div className='CardsInfo'>
              <div class="card" style={{ width: "18rem" }}>
                <img src={require('./title-pic1.jpg')} class="card-img-top" alt="fkpdfpm"></img>
                <div class="card-body">
                  <p class="card-text">Fitness is a fundamental aspect of maintaining a healthy and active lifestyle.</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={require('./title-pic2.jpg')} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <p class="card-text">It involves engaging in regular physical activity, and prioritizing overall well-being.</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={require('./title-pic3.jpg')} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <p class="card-text">Fitness plays crucial role in losing weight, bettering performance and getting the feel of well being.</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={require('./title-pic4.jpg')} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <p class="card-text">Balanced nutrition complements physical activity by providing the necessary fuel for the body.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Footer'>
          <footer>
            <p className='BasicFooter'>Made By Siddhartha Sharma ©2023</p>
            <div className='links'>
              <a href='https://github.com/Siddharthaiiitt2021'><img src={require('./github.png')}></img></a>
              <a href='https://www.instagram.com/_sidd_artha_02/'><img className='insta' src={require('./instagram (2).png')}></img></a>
              <a href='https://www.linkedin.com/in/siddhartha-sharma-1bb2b2245/'><img src={require('./linkedIn.png')}></img></a>
            </div>
          </footer>
        </div>
      </div>
  );
}

export default App;

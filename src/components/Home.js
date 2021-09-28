import "./style.css";

function Home() {
  return (
    <>
      <h1 className="title"> Welcome </h1>
      <div className="home-box">
        <div className="home-desc-box">
          <h3> About this demo</h3>
          <p>
            _____________________ Welcome to one of my demo React sites!
            <br />
            _____________________
            <br />
            you can submit a photo of a vacation destination in the
            "destinations tab"
          </p>
          <div className="home-img">
            <img
              className="home-img2"
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              alt="home logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

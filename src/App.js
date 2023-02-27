import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <section className="py-5 my-3">
            <div className="container">
              <div className="row banner-res">
                <div className="col-lg-5 col-md-5 text-sm-center text-md-start investban">
                  <h1 className="offset-heading">
                    Offset and <br /> <span>Invest</span>
                  </h1>
                  <p className="token-info">
                    Our innovative two-token structure makes offsetting and
                    investing in the voluntary carbon market simple and
                    accessible for all.
                  </p>
                  <button className="Litepaper-btn text-center">
                    Litepaper
                  </button>
                  <button className="faq-btn mt-3">FAQ</button>
                </div>
                <div className="col-lg-7 col-md-7  mt-5 ">
                  <div className="card">
                    <div className="card-image">
                      <img className="img-fluid" src="/images/o2.png" alt="" />
                    </div>
                    <div className="card-text">
                      <p>
                        The Block token allows investors to gain exposure to the
                        voluntary carbon credit market. This is the first time
                        investors can easily access this market, making the
                        Block token valuable and innovative.
                        <b>The block token will launch later this year.</b>
                      </p>
                    </div>
                  </div>

                  <div className="card mt-3">
                    <div className="card-image">
                      <img className="img-fluid" src="/images/co2.png" alt="" />
                    </div>
                    <div className="card-text">
                      <p>
                        The CO2 token is a digital asset backed by carbon
                        credits. It allows businesses to of offset their
                        emissions in a transparent and accessible way. When the
                        token is bought, it is burned and the underlying carbon
                        credits are transferred to the purchaser.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className="py-5 my-3">
            <div className="container ">
              <div className="w-85 m-auto">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="cards">
                      <p>
                        With every offset, a fee will go into the block token
                        giving individuals exposure to the growing voluntary
                        carbon credit market
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <img
                      className="img-fluid"
                      src="/images/companyimg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className="py-5 my-3">
            <div className="container mb-5 pb-4">
              <div className="row">
                <h1 className="offset-heading text-center">
                  The market is <span>growing quickly</span>
                </h1>
                <p className="text-center grow-info mt-4">
                  More and more companies offset their emissions through
                  voluntary carbon credits
                </p>
              </div>
            </div>

            <div className="container ">
              <div className="row d-flex align-items-center">
                <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    style={{ width: "500px" }}
                    src="/images/coin.png"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <div className="row g-3 mb-2">
                    <div className="col-lg-6">
                      <div className="card-container  cards text-center">
                        <div className="">
                          <h3>High Demand</h3>
                          <p>Demand is set to grow 15x by 2030 (McKinsey)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-container  cards text-center">
                        <div className="">
                          <h3>High Demand</h3>
                          <p>Demand is set to grow 15x by 2030 (McKinsey)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3  ">
                    <div className="col-lg-6">
                      <div className="card-container cards text-center">
                        <div className="">
                          <h3>High Demand</h3>
                          <p>Demand is set to grow 15x by 2030 (McKinsey)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 ">
                      <div className="card-container cards text-center">
                        <div className="">
                          <h3>High Demand</h3>
                          <p>Demand is set to grow 15x by 2030 (McKinsey)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

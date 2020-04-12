import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faLayerGroup, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
const LandingPage: React.FC = props => {
    return (
        <React.Fragment>


  <header className="masthead text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">Manging your team has just become easier!</h1>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <div className="form-row">
              <div className="col-12 col-md-3 mx-auto">
                <Link to="/register" className="btn btn-block btn-lg btn-primary">Get Started</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </header>

  <section className="features-icons bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
            <FontAwesomeIcon icon={faDesktop} className="icon-layers m-auto text-primary icon" />
            </div>
            <h3>Fully Responsive</h3>
            <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
            <FontAwesomeIcon icon={faLayerGroup}  className="icon-layers m-auto text-primary icon" />

            </div>
            <h3>Bootstrap 4 Ready</h3>
            <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
            <FontAwesomeIcon icon={faCheckCircle}  className="icon-layers m-auto text-primary icon" />
            </div>
            <h3>Easy to Use</h3>
            <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="showcase">
    <div className="container-fluid p-0">
      <div className="row no-gutters">

        <div className="col-lg-6 order-lg-2 text-white showcase-img  showcase-img-1"></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Fully Responsive Design</h2>
          <p className="lead mb-0">When you use a Tasky website, you know that the your company profile will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 text-white showcase-img showcase-img-2"></div>
        <div className="col-lg-6 my-auto showcase-text">
          <h2>Updated For Newest Tasky Version</h2>
          <p className="lead mb-0">Newly improved, and full of great utility, Tasky is leading the way teams are managed! All of subscribtion plans have 30 days money back gurentee!</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 order-lg-2 text-white showcase-img showcase-img-3"></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Easy to Use &amp; Customize</h2>
          <p className="lead mb-0">Tasky is super user friendly with a well designed UX so that a user will find what he is looking for exactly where it should be!</p>
        </div>
      </div>
    </div>
  </section>


  <section className="testimonials text-center bg-light">
    <div className="container">
      <h2 className="mb-5">What people are saying...</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src={require('../../img/testimonials-1.jpg')} alt="" />
            <h5>Mark E.</h5>
            <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src={require('../../img/testimonials-2.jpg')} alt="" />
            <h5>Fred S.</h5>
            <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src={require('../../img/testimonials-3.jpg')} alt="" />
            <h5>John W.</h5>
            <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="call-to-action text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h2 className="mb-4">Ready to get started?</h2>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <div className="col-12 col-md-12">
                <Link to="/register" className="btn btn-block btn-lg btn-primary">Join now!</Link>
              </div>
        </div>
      </div>
    </div>
  </section>
    </React.Fragment>

        );
}


export default LandingPage;
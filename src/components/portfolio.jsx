import React from 'react';

//import socialApp
import socialApp from '../img/socialapp/home.PNG';
import socialApp1 from '../img/socialapp/comments.PNG';
import socialApp2 from '../img/socialapp/profile.png';
import socialApp3 from '../img/socialapp/confirm.PNG';
import socialApp4 from '../img/socialapp/chat.PNG';
import socialApp5 from '../img/socialapp/resetpassword.PNG';

//import medeasy
import medeasy from '../img/medeasy/dashboard.png'
import medeasy1 from '../img/medeasy/admin-orders.png'
import medeasy2 from '../img/medeasy/pending-orders.png'
import medeasy3 from '../img/medeasy/home.png'
import medeasy4 from '../img/medeasy/cart.PNG'
import medeasy5 from '../img/medeasy/orders.PNG'
import medeasy6 from '../img/medeasy/order-details.PNG'

// import chatapp
import chatapp from '../img/chat-app/1.PNG'
import chatapp1 from '../img/chat-app/2.PNG'

//import predimage
import predimage from '../img/predimage/Capture.PNG'
import predimage1 from '../img/predimage/screen1.PNG'
import predimage2 from '../img/predimage/screen2.PNG'
import predimage3 from '../img/predimage/screen4.PNG'


class Portfolio extends React.Component{

    render(){
        return (
          <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Portfolio
                    </h3>
                    <p className="subtitle-a">
                      Check Out My Latest Projects.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={socialApp} data-lightbox="gallery-vmarine">
                      <div className="work-img">
                        <img src={socialApp} alt="" className="img-fluid"/>
                      </div>
                    </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">
                              <a href="https://sociallappp.herokuapp.com/">
                                SocialApp 
                                <i style={{ fontSize: "24px", marginLeft: "10px" }} className="ion-link"></i> 
                              </a>
                              <a href="https://github.com/shahshubh/socialApp-MERN">
                                <i style={{ fontSize: "24px", marginLeft: "10px" }} className="ion-social-github"></i> 
                              </a>
                            </h2>
                            <div className="w-more">
                              <span className="w-ctegory">REACTJS  NODEJS  EXPRESSJS  MONGODB  BOOTSTRAP-MATERIAL</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>

                          </div>
                          <div className="col-sm-4">
                          <a href={socialApp1} data-lightbox="gallery-vmarine">
                              <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                              </div>
                          </a>
                          </div>

                        </div>
                      </div>
                      
                      <a href={socialApp2} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={socialApp3} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={socialApp4} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={socialApp5} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>


                <div className="col-md-4">
                  <div className="work-box">
                    <a href={medeasy} data-lightbox="gallery-vmarine">
                      <div style={{ height:"165px", width: "350px" }} className="work-img">
                        <img src={medeasy} alt="" className="img-fluid"/>
                      </div>
                    </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">
                              <a href="https://medeasyy.herokuapp.com/">
                                MedEasy 
                                <i style={{ fontSize: "24px", marginLeft: "10px" }} className="ion-link"></i> 
                              </a>
                              <a href="https://github.com/shahshubh/medEasy">
                                <i style={{ fontSize: "24px", marginLeft: "10px" }} className="ion-social-github"></i> 
                              </a>

                            </h2>
                            <div className="w-more">
                              <span className="w-ctegory">HTML  CSS  BOOTSTRAP  JAVASCRIPT   NODEJS  EXPRESSJS  MONGODB  </span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                          <a href={medeasy1} data-lightbox="gallery-vmarine">
                              <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                              </div>
                          </a>
                          </div>
                        </div>
                      </div>
                      
                      <a href={medeasy2} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={medeasy3} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={medeasy4} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={medeasy5} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={medeasy6} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="work-box">
                    <a href={chatapp1} data-lightbox="gallery-vmarine">
                      <div style={{ height:"165px", width: "350px" }} className="work-img">
                        <img src={chatapp1} alt="" className="img-fluid"/>
                      </div>
                    </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">
                              <a href="https://chat-appln.netlify.com/">
                                Chat-App 
                                <i style={{ fontSize: "24px", marginLeft: "10px" }} className="ion-link"></i> 
                              </a>
                              <a href="https://github.com/shahshubh/chat-app">
                                <i style={{ fontSize: "24px", marginLeft: "10px" }} className="ion-social-github"></i> 
                              </a>
                            </h2>
                            <div className="w-more">
                              <span className="w-ctegory">REACTJS   NODEJS  EXPRESSJS  SOCKET.IO </span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                          <a href={chatapp} data-lightbox="gallery-vmarine">
                              <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                              </div>
                          </a>
                          </div>
                        </div>
                      </div>
                      
                  </div>
                </div>



                <div className="col-md-4">
                  <div className="work-box">
                    <a href={predimage} data-lightbox="gallery-vmarine">
                      <div style={{ height:"165px", width: "350px" }} className="work-img">
                        <img src={predimage} alt="" className="img-fluid"/>
                      </div>
                    </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">
                              <a href="https://github.com/shahshubh/model-trainer">
                                predImage - model trainer 
                                <i style={{ fontSize: "24px", marginLeft: "10px" }} className="ion-link"></i> 
                              </a>
                              <a href="https://github.com/shahshubh/model-trainer">
                                <i style={{ fontSize: "24px", marginLeft: "10px" }} className="ion-social-github"></i> 
                              </a>
                            </h2>
                            <div className="w-more">
                              <span className="w-ctegory">BOOTSTRAP  NODEJS  JAVASCRIPT  FLASK  TENSORFLOW  OPENCV  KERAS-CNN  </span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                          <a href={predimage1} data-lightbox="gallery-vmarine">
                              <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                              </div>
                          </a>
                          </div>
                        </div>
                      </div>
                      
                      <a href={predimage2} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={predimage3} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                
              </div>
            </div>
          </section>
        );
    }
}

export default Portfolio;
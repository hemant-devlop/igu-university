import React from "react";
import "./Navbar.css";
import announcment from "./announcment.json";
import tender from './tender.json'
import quickLinks from './quickLinks.json'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <button
            className="navbar-toggler border-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list text-white fs-1"></i>
          </button>
          <ul className="d-flex d-sm-none social-links p-0 m-0">
            <li className="rounded-circle p-3 ms-1">
              <a href="" target="_blank" className="decoration-none text-dark">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="rounded-circle p-3 ms-1">
              <a href="" target="_blank" className="decoration-none text-dark">
                <i className="bi bi-twitter "></i>
              </a>
            </li>
            <li className="rounded-circle p-3 ms-1">
              <a href="" target="_blank" className="decoration-none text-dark">
                <i className="bi bi-instagram "></i>
              </a>
            </li>
            <li className="rounded-circle p-3 ms-1">
              <a href="" target="_blank" className="decoration-none text-dark">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
            <button
              className="btn btn-primary border-0 btn-sm ms-1 quick-links d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Quick links
            </button>
          </ul>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUTUS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ADMINISTRATION
                </a>
                <ul className="dropdown-menu rounded-0 py-0 border-0">
                  <li className="border-bottom border-dark py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      Governing Bodies
                    </a>
                  </li>
                  <li className="border-bottom border-dark py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      University Officers
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      Administrative sections
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACADIMICS
                </a>
                <ul className="dropdown-menu rounded-0 py-0 border-0">
                  <li className="border-bottom border-dark py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      Facalities and Deans
                    </a>
                  </li>
                  <li className="border-bottom border-dark py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      Departments
                    </a>
                  </li>
                  <li className="border-bottom border-dark py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      Syllabus
                    </a>
                  </li>
                  <li className="border-bottom border-dark py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      Academic Celender
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      Chairs & Centers
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ADMISSIONS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  EXAMINATION
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WEB PORTALS
                </a>
                <ul className="dropdown-menu rounded-0 py-0 border-0">
                  <li className="border-bottom border-dark py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      Liabrary Portal
                    </a>
                  </li>
                  <li className="border-bottom border-dark py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      Collage Portal
                    </a>
                  </li>
                  <li className="border-bottom border-dark py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      LMS Portal
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="dropdown-item fw-medium" href="#">
                      Student Portal
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  RESEARCH & DEVELOPMENT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  EMAIL DIRECTORY
                </a>
              </li>
            </ul>
          </div>
          <a
            className="d-none d-sm-block btn btn-danger border-0 ms-2"
            href="https://igu1.ucanapply.com/"
            title=" old version website"
            onClick={() =>
              alert("are you sure you wanted to go old version site")
            }
          >
            old
          </a>
        </div>
      </nav>
      {/* announcment */}
      <div className="d-flex py-2 bg-white">
        <div className="col-md-2 d-none d-sm-block">
          <div className="d-flex justify-content-center">
            <a href="" className="btn announcment rounded-1">
              <i className="bi bi-megaphone-fill text-white"></i> ANNOUNCMENTS
            </a>
          </div>
        </div>
        {/* markee links */}
        <div className="col-md-8">
          <marquee direction="fixed" scrolldelay="80" className="pt-1">
            <div>
              {announcment.map((data) => (
                <a href={data.link} className="announcment-link" key={data.id}>
                  <img src="../asset\imges\new_stiker.gif" alt="" />
                  {data.title}&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                </a>
              ))}
            </div>
          </marquee>
        </div>
        {/* social links */}
        <div className="col-md-2 d-none d-lg-block">
          <div>
            <ul className="d-flex justify-content-center social-links p-0 m-0">
              <li className="rounded-circle p-3 mx-1">
                <a target="_blank" className="decoration-none text-dark">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="rounded-circle p-3 mx-1">
                <a target="_blank" className="decoration-none text-dark">
                  <i className="bi bi-twitter "></i>
                </a>
              </li>
              <li className="rounded-circle p-3 mx-1">
                <a target="_blank" className="decoration-none text-dark">
                  <i className="bi bi-instagram "></i>
                </a>
              </li>
              <li className="rounded-circle p-3 mx-1">
                <a target="_blank" className="decoration-none text-dark">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>



      {/* quick links collapse section */}
      <div className="d-sm-flex px-3">
        <div className="col-sm-3 collapse collapse-vertical d-sm-block" id="collapseWidthExample">
          <nav className="navbar sticky-top bg-body-tertiary row pt-0">
          <h3 className="text-white text-center fw-bold py-1 quick-links-heading">
            QUICK LINKS
          </h3>
          <ul className="navbar-nav margin-li p-0">
            {quickLinks.map((data,ind)=>
              <li key={ind} className="nav-item color-orange py-3 px-4 border-bottom border-white ">
              <a href="#" className="decoration-none text-white fw-medium">
                {data.link}
              </a>
            </li>
            )}                 
          </ul>
           </nav>
        </div>
        <div className="col-sm-9 ps-3">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../asset\imges\azadi-ka-amrit-mahotsav-1024x560.png"
                  className="d-block w-100"
                  alt="..." 
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../asset\imges\har-ghar-tiranga-1-1024x562.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div>
            <div className="p-4">
              <h5 className="fw-bold d-inline desk-message">
                MESSAGE FROM THE DESK
              </h5>
            </div>
            <div className="d-flex flex-wrap justify-content-around align-items-center">
              <div className="p-3">
                <div className="p-3 d-flex row justify-content-center border rounded shadow" style={{width: '18rem'}}>
                <div>
                  <img src="../asset\imges\chancellor-1-204x300.jpg" className="card-img-top height-img rounded" alt="..." />
                  </div>
                  <div className=" text-center">
                    <h5 className="font-14 fw-bold m-0 py-1">Shri Bandaru Dattatraya</h5>
                    <p className="fw-medium m-0 p-1">
                     Chancellor
                    </p>
                    <a  className="btn btn-primary rounded-0">
                      Message
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex  p-3">
                <div className="p-3 d-flex row justify-content-center border rounded shadow" style={{width: '18rem'}}>
                <div>
                  <img src="../asset\imges\JPYadav-VC-281x300.jpg" className="card-img-top height-img rounded" alt="..." />
                  </div>
                  <div className=" text-center">
                    <h5 className="font-14 fw-bold m-0 py-1">Prof. J.P. Yadav</h5>
                    <p className="fw-medium m-0 p-1">
                    Vice Chancellor
                    </p>
                    <a className="btn btn-primary rounded-0">
                      Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          
          <ul className="nav nav-pills mb-3 bg-success" id="pills-tab" role="tablist">
  <li className="nav-item " role="presentation">
    <button className="nav-link active rounded-0" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Notice board</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link rounded-0" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Events</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link rounded-0" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Tender</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link rounded-0" id="pills-exam-tab" data-bs-toggle="pill" data-bs-target="#pills-exam" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Exam Notice</button>
  </li>
</ul>
<div className="tab-content shadow bg-white rounded-1" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <marquee direction="up" scrolldelay="200" className="p-3" style={{height:'400px'}}>
            <div>
              {tender.map((data,ind) => (
                <li  key={ind} className="tender-scroll-list" >
                  <a className="text-dark fw-medium" style={{textDecoration:"none"}}>
                 &nbsp;&nbsp;&nbsp;{data.date} :{data.notice}
                </a>
                </li>
              ))}
            </div>
          </marquee>          
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
     <marquee direction="up" scrolldelay="200" className="p-3" style={{height:'400px'}}>
            <div>
              {tender.map((data,ind) => (
                <li key={ind} className="tender-scroll-list" >
                  <a className="text-dark fw-medium" style={{textDecoration:"none"}}>
                 &nbsp;&nbsp;&nbsp;{data.date} :{data.notice}
                </a>
                </li>
              ))}
            </div>
          </marquee>  
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
     <marquee direction="up" scrolldelay="200" className="p-3" style={{height:'400px'}}>
            <div>
              {tender.map((data,ind) => (
                <li key={ind} className="tender-scroll-list" >
                  <a className="text-dark fw-medium" style={{textDecoration:"none"}}>
                 &nbsp;&nbsp;&nbsp;{data.date} :{data.notice}
                </a>
                </li>
              ))}
            </div>
          </marquee>  
  </div>
  <div className="tab-pane fade" id="pills-exam" role="tabpanel" aria-labelledby="pills-exam-tab">
     <marquee direction="up" scrolldelay="200" className="p-3" style={{height:'400px'}}>
              {tender.map((data,ind) => (
                <li key={ind} className="tender-scroll-list" >
                  <a className="text-dark fw-medium" style={{textDecoration:"none"}}>
                 &nbsp;&nbsp;&nbsp;{data.date } :{data.notice}
                </a>
                </li>
              ))}
          </marquee>  
  </div>
</div> 



          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

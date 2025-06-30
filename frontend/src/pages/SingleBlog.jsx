import { useLocation } from "react-router-dom";
import img from "../assets/singleimg.png"

export default function SingleBlog() {
  const loaction=useLocation()

  const data=loaction.state
  
  return (
    <div className="container mt-5">
      <div className="row">
        {/* singlepage_Blog */}
        <div className="col-lg-9">
          <h2 className="fw-bold mb-4">
            {data.title}
          </h2>
          <img
            src={data.Image}
            className="img-fluid rounded mb-3"
            alt="Main Blog Image"
           
          />
          <div className="d-flex justify-content-start text-muted small mb-2">
            <div className="me-4">
              <i className="bi bi-calendar"></i> July 14, 2022
            </div>
            <div className="me-4">
              <i className="bi bi-chat"></i> Comments: 35
            </div>
            <div>
              <i className="bi bi-tag"></i> Category: Sport
            </div>
          </div>
        
          <p>
            {data.Desc}
          </p>
        </div>

    
     {/* Comment section*/}
        <h6 className="mb-2 text-black">💬 Comments</h6>
      <div className="card p-3 mb-3 shadow-sm border-0" style={{background:'#F5F5F5'}}>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              src={img}
              alt="Jon Kantner"
              className="rounded-circle me-3"
              width="40"
              height="40"
            />
            <div>
              <h6 className="mb-0">Jon Kantner</h6>
              <small className="text-muted">
                <i className="bi bi-calendar2"></i> 2022 04 July
              </small>
            </div>
          </div>
          <button className="btn btn-light btn-sm">
            <i className="bi bi-reply"></i> Reply
          </button>
        </div>
        <p className="mt-3 mb-0 text-secondary" style={{ textAlign: 'justify' }}>
          When you are ready to indulge your sense of excitement, check out the range of water-sports
          opportunities at the resort’s on-site water-sports center. Want to leave your</p>
        </div>
      </div>
    </div>
  );
}

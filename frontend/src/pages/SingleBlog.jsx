import React from 'react';

export default function SingleBlog() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-4">
            How to Spend the Perfect Day on Croatia’s Most Magical Island
          </h2>
          <img
            src="https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
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
            <strong>Don't Wait. The Purpose Of Our Lives Is To Be Happy!</strong>
          </p>
          <p>
            Upon arrival, your senses will be rewarded with the pleasant scent of
            lemongrass oil...
          </p>
        </div>

        <div className="col-lg-4">
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
              alt="Author"
              className="rounded-circle me-3"
              style={{ width: '50px', height: '50px' }}
            />
            <div>
              <h6 className="mb-0">Louis Hoebregts</h6>
              <button className="btn btn-sm btn-danger mt-1">Follow</button>
            </div>
          </div>

          <h6 className="fw-bold mt-4">Tags</h6>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-secondary">Montenegro</span>
            <span className="badge bg-secondary">Luxury Travel</span>
            <span className="badge bg-secondary">Travel Log</span>
          </div>

          <h6 className="fw-bold mt-4">Top Post</h6>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              <img
                src="thumb1.jpg"
                className="me-2"
                style={{ width: '40px' }}
              />
              How to Spend the Perfect Day
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

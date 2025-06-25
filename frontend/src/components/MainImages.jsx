import React from 'react'
import { Carousel } from "react-bootstrap";


function MainImages() {
  return (
   <>
    <div className="container mt-5">
        <div className="row justify-content-center align-items-start">
          {/* Static Image 1 */}
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded shadow-sm text-center h-100">
              <img
                src="/images/img (8).jpg"
                alt="Static 1"
                className="img-fluid rounded mb-3"
              />
              <h3>Nature Beauty</h3>
              <p>
                This photo captures the essence of natural beauty and peace.
              </p>
            </div>
          </div>

          {/* Static Image 2 */}
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded shadow-sm text-center h-100">
              <img
                src="/images/img (2).jpg"
                alt="Static 2"
                className="img-fluid rounded mb-3"
              />
              <h3>Urban Vibes</h3>
              <p>
                An energetic cityscape that never sleeps, full of colors and
                life.
              </p>
            </div>
          </div>

          {/* Carousel with 3 Images */}
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded shadow-sm text-center h-100">
              <Carousel fade interval={3000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded mb-3"
                    src="/images/img (4).jpg"
                    alt="Slide 1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded mb-3"
                    src="/images/img (3).jpg"
                    alt="Slide 2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded mb-3"
                    src="/images/img (7).jpg"
                    alt="Slide 3"
                  />
                </Carousel.Item>
              </Carousel>
              <h3>Travel Memories</h3>
              <p>
                A rotating collection of travel moments from across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default MainImages
import React, { useEffect, useState } from 'react';

const posts = [
  {
    image: "/images/newpost (1).jpg",
    title: "Peaceful Lake",
    description: "A quiet reflection of sky on water, captured in the early morning calm.",
    profile: "/images/profile1.jpg",
    author: "John Doe",
    date: "June 24, 2025",
  },
  {
    image: "/images/newpost (2).jpg",
    title: "Street Art",
    description: "Creative expression on the urban walls, full of colors and messages.",
    profile: "/images/profile2.jpg",
    author: "Sarah Khan",
    date: "June 24, 2025",
  },
  {
    image: "/images/newpost (3).jpg",
    title: "Forest Path",
    description: "Winding paths shaded by trees — perfect for a peaceful walk.",
    profile: "/images/profile3.jpg",
    author: "Ali Raza",
    date: "June 23, 2025",
  },
  {
    image: "/images/newpost (4).jpg",
    title: "Desert Dunes",
    description: "Golden waves of sand that stretch into the horizon.",
    profile: "/images/profile4.jpg",
    author: "Hamza Malik",
    date: "June 23, 2025",
  },
  {
    image: "/images/newpost (5).jpg",
    title: "Snowy Peaks",
    description: "The majestic mountains covered in snow during early winter.",
    profile: "/images/profile5.jpg",
    author: "Zainab Shah",
    date: "June 22, 2025",
  },
  {
    image: "/images/newpost (6).jpg",
    title: "Night Market",
    description: "A vibrant market buzzing with life and local flavors under city lights.",
    profile: "/images/profile6.jpg",
    author: "Fahad Khan",
    date: "June 22, 2025",
  },
];

export default function NewPost() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Option 1: Detect dark mode by body class
    const darkClassPresent = document.body.classList.contains('dark-mode');
    setIsDarkMode(darkClassPresent);

    // Option 2: Alternatively, detect by computed style (uncomment if needed)
    // const bgColor = window.getComputedStyle(document.body).backgroundColor;
    // setIsDarkMode(bgColor === 'rgb(33, 37, 41)' || bgColor === '#212529');
  }, []);

  return (
    <div className={`mt-5 ${isDarkMode ? 'newpost-dark' : ''}`}>
      <h4 className=" mb-4">New Post</h4>
      <div className="container">
        <div className="row gy-4">
          {posts.map((post, index) => (
            <div className="col-md-6" key={index}>
              <div className="d-flex now-post-box p-3 rounded shadow-sm align-items-start h-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded me-3 now-post-img"
                />
                <div>
                  <h3 className="fw-semibold">{post.title}</h3>
                  <p>{post.description}</p>
                  <div className="d-flex align-items-center gap-2 mt-2">
                    <img
                      src={post.profile}
                      className="rounded-circle"
                      width="28"
                      height="28"
                      alt="author"
                    />
                    <small className="text-muted">
                      {post.author} · {post.date}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

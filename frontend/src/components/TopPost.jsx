import React, { useEffect, useState } from "react";

const topPosts = [
  {
    image: "/images/img (5).jpg",
    title: "Sunrise Bliss",
    description: "Golden hues of morning light fill the sky.",
    profile: "/images/profile1.jpg",
    author: "John Doe",
    date: "June 25, 2025",
  },
  {
    image: "/images/img (2).jpg",
    title: "City Panorama",
    description: "The urban skyline shining in twilight.",
    profile: "/images/profile2.jpg",
    author: "Sarah Khan",
    date: "June 24, 2025",
  },
  {
    image: "/images/img (6).jpg",
    title: "Forest Whisper",
    description: "A serene walk under the green canopy.",
    profile: "/images/profile3.jpg",
    author: "Ali Raza",
    date: "June 23, 2025",
  },
  {
    image: "/images/img (4).jpg",
    title: "Ocean Waves",
    description: "Crashing waves under a setting sun.",
    profile: "/images/profile4.jpg",
    author: "Hamza Malik",
    date: "June 22, 2025",
  },
];

export default function TopPost() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect dark mode by checking body bg color
    const bodyBg = window.getComputedStyle(document.body).backgroundColor;
    const isDark =
      bodyBg === "rgb(33, 37, 41)" || bodyBg === "#212529"; // Bootstrap dark bg
    setIsDarkMode(isDark);
  }, []);

  return (
    <div className={`mt-5 container ${isDarkMode ? "top-post-dark" : ""}`}>
      <h2 className="mb-4 ">Top Posts</h2>
      <div className="row">
        {topPosts.map((post, idx) => (
          <div
            className="col-md-3 mb-4"
            key={idx}
            style={{ cursor: "pointer" }}
            title={post.title}
          >
            <div className="top-post-box p-3 rounded shadow-sm text-center h-100">
              <img
                src={post.image}
                alt={post.title}
                className="img-fluid rounded mb-3 top-post-img"
              />
              <h1 className="fs-5 fw-bold">{post.title}</h1>
              <p className="small">{post.description}</p>
              <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
                <img
                  src={post.profile}
                  alt={post.author}
                  className="rounded-circle"
                  width="30"
                  height="30"
                />
                <small>
                  {post.author} · {post.date}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

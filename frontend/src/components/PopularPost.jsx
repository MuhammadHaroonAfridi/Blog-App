import React, { useEffect, useState } from 'react';

const popularPosts = [
  {
    image: "/images/img (5).jpg",
    title: "Sunny Hills",
    description: "A beautiful view of the sunlit landscape.",
  },
  {
    image: "/images/img (6).jpg",
    title: "Forest Trail",
    description: "Nature's calm path through green trees.",
  },
  {
    image: "/images/img (8).jpg",
    title: "City Lights",
    description: "The city glowing beautifully at night.",
  },
  {
    image: "/images/img (4).jpg",
    title: "Mountain View",
    description: "A breathtaking view from the high peaks.",
  },
];

export default function PopularPost() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const bodyBg = window.getComputedStyle(document.body).backgroundColor;
    const isDark = bodyBg === 'rgb(33, 37, 41)' || bodyBg === '#212529'; // Bootstrap dark
    setIsDarkMode(isDark);
  }, []);

  return (
    <div className={`mt-5 ${isDarkMode ? 'popular-dark' : ''}`}>
      <h6 className="mb-5 ">Popular Posts</h6>
      <div className="row">
        {popularPosts.map((post, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className={`p-2 popular-post-box rounded text-center shadow-sm`}>
              <img
                src={post.image}
                alt={post.title}
                className="img-fluid rounded mb-2 popular-post-img"
              />
              <h6 className="fw-bold">{post.title}</h6>
              <p className="small">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

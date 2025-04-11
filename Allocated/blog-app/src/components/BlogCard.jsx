

import React from 'react';

const BlogCard = ({ title, author, date, excerpt }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-1">By {author} | {date}</p>
      <p className="text-gray-700">{excerpt}</p>
    </div>
  );
};

export default BlogCard;

import React from 'react';

export default function MovieCard({ title, subtitle, description, image, rating }) 
{
  const stars = Math.floor(rating);
  const starIcons = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>{i < stars ? '★' : '☆'}</span>
  ));

  return (
    <div className="bg-white text-black rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <h3 className="text-sm text-gray-600">{subtitle}</h3>
        <p className="text-sm mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="text-yellow-500">{starIcons}</div>
          <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">{rating}</div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import MovieCard from './components/MovieCard';

const movies = [
  {
    title: 'Kingsglaive',
    subtitle: 'Final Fantasy XV',
    description: 'King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire\'s plans to steal the sacred crystal.',
    image: 'https://npr.brightspotcdn.com/7e/0f/10df4b6e4fad97e400d9ed8e8789/fd-bloodlines.jpg',
    rating: 4.5
  },
  {
    title: 'Final Fantasy',
    subtitle: 'Spirits Within',
    description: 'A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.',
    image: 'https://i.redd.it/l3ekbet0o5ha1.jpg',
    rating: 4.5
  },
  {
    title: 'Ghost In The Shell',
    subtitle: 'Ghost In The Shell',
    description: 'A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).',
    image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/06/ghost-rider-using-chains-and-fire-in-marvel-comics.jpg',
    rating: 5
  }
];

export default function App() {
  return (
    <div className="bg-gray-800 min-h-screen text-white font-sans">
      <header className="p-6 bg-gray-900 text-center text-2xl font-semibold flex items-center justify-center gap-2">
        <span>🎬</span> React Movie Cards
      </header>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}

import Image from 'next/image';

async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDNlNzIzOTc4MjIwOTJlNzQ3NGFiMjZlYmZmMmJhYyIsInN1YiI6IjYzNjRmMjNlOWQ2ZTMzMDA4YWRhZTM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VLYnMwp64avkgOXtYylBgYsiSoD9_OUrrW7X2NncI9s",
    },
  };

  const res = await fetch("https://api.themoviedb.org/3/trending/all/day", options);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Hero() {
  const data = await getData()
  const banner = data.results[0];
  console.log(banner);

  return (
    <header>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
          width={100}
          height={100}
          alt="{}"
        />
      </div>
    </header>
  );
}
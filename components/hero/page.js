import Image from "next/image";
import Link from "next/link";

async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDNlNzIzOTc4MjIwOTJlNzQ3NGFiMjZlYmZmMmJhYyIsInN1YiI6IjYzNjRmMjNlOWQ2ZTMzMDA4YWRhZTM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VLYnMwp64avkgOXtYylBgYsiSoD9_OUrrW7X2NncI9s",
    },
  };

  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/day",
    options
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Hero() {
  const data = await getData();
  const banner = data.results[0];
  const second = data.results[1];
  console.log(banner);

  return (
    <header className="p-10 flex gap-5">
      <div className="flex flex-col gap-4">
        <div className="relative rounded-md overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
            width={800}
            height={400}
            alt={`${banner.name} banner`}
            // className="rounded-md"
          />
          <div className="absolute bg-dark over z-10 top-0 inset-0"></div>
          <h1 className="absolute z-20 bottom-16 left-3 font-bold text-lg font-montserrat">
            {banner.name}
          </h1>
          <div className="absolute flex gap-2 items-center bottom-3 left-3 z-20">
            <Image src="/rate star.png" width={30} height={30} alt="Rating" />
            <span>{banner.vote_average}</span>
          </div>
        </div>
        <p className="max-w-xl">{banner.overview}</p>
        <div className="flex gap-3">
          <Link href="#" className="bg-red px-6 py-1 rounded-2xl">Watch Trailer</Link>
          <Link href="#" className="bg-blue py-1 px-3 rounded-2xl">B</Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative inline-block rounded-md overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original${second.backdrop_path}`}
            width={150}
            height={386}
            alt={`${second.name} banner`}
            className="rounded-md inset-0 object-cover h-4/5"
          />
          <div className="absolute bg-dark h-full over z-10 top-0"></div>
          <h1 className="absolute z-20 bottom-16 left-3 font-medium text-lg font-montserrat">
            {second.name}
          </h1>
          <div className="absolute flex gap-2 items-center bottom-3 left-3 z-20">
            <Image src="/rate star.png" width={30} height={30} alt="Rating" />
            <span>{second.vote_average}</span>
          </div>
        </div>
        <p className="max-w-xl">{second.overview}</p>
      </div>
    </header>
  );
}

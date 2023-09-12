import Image from 'next/image';
import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className="col-span-1 bg-container rounded-md sticky top-3 left-3 bottom-5 mt-3 flex flex-col font-poppins py-16 pl-7 pr-5 justify-between max-h-screen">
      <div className="logo font-montserrat text-md font-medium">
        M<span className="">o</span>viee
      </div>
      <ul className="flex flex-col gap-6">
        <li>
          <Link href="#" className="flex gap-2 items-center ">
            <Image
              src="/home.png"
              width={20}
              height={20}
              alt="Home"
              className="h-6 w-6 object-contain"
            />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex gap-2 items-center ">
            <Image
              src="/filter.png"
              width={20}
              height={20}
              alt="Discover"
              className="h-6 w-6 object-contain"
            />
            <span>Browse</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex gap-2 items-center ">
            <Image
              src="/bookmark.png"
              width={20}
              height={20}
              alt="Saved Videos"
              className="h-6 w-6 object-contain"
            />
            <span>Saved Videos</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex gap-2 items-center ">
            <Image
              src="/star.png"
              width={20}
              height={20}
              alt="Reviews"
              className="h-6 w-6 object-contain"
            />
            <span>Reviews</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex gap-2 items-center ">
            <Image
              src="/article.png"
              width={20}
              height={20}
              alt="Blogs"
              className="h-6 w-6 object-contain"
            />
            <span>Blogs</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex gap-2 items-center ">
            <Image
              src="/gear.png"
              width={20}
              height={20}
              alt="Settings"
              className="h-6 w-6 object-contain"
            />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex gap-2 items-center ">
            <Image
              src="/question mark.png"
              width={20}
              height={20}
              alt="Help"
              className="h-6 w-6 object-contain"
            />
            <span>Help</span>
          </Link>
        </li>
      </ul>
      <Link href="#" className="flex gap-2 items-center ">
        <Image
          src="/exit.png"
          width={20}
          height={20}
          alt="Log Out"
          className="h-6 w-6 object-contain"
        />
        <span>Log Out</span>
      </Link>
    </nav>
  );
}

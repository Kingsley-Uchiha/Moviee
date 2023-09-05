import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className="bg-container rounded-md fixed top-4 left-3 bottom-4 flex flex-col font-poppins py-20 pl-7 pr-10 justify-between">
      <div className="logo font-montserrat text-md font-medium">
        M<span className="">o</span>viee
      </div>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Browse</Link>
        </li>
        <li>
          <Link href="#">Reviews</Link>
        </li>
        <li>
          <Link href="#">Blogs</Link>
        </li>
        <li>
          <Link href="#">Help</Link>
        </li>
        <li>
          <Link href="#">Upgrade Account</Link>
        </li>
      </ul>
      <Link href="#">Log Out</Link>
    </nav>
  );
}

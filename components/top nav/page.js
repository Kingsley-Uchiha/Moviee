import Image from 'next/image';
import Link from 'next/link';

export default function TopNav() {
  return (
    <nav className="flex justify-between p-10 nav top-0 right-0 w-full items-center">
      <div className="relative">
        {/* <Image className="absolute" src="/magnifying glass.png" width={30} height={30} /> */}
        <input
          type="text"
          className="rounded-3xl w-96 bg-container p-3 outline-none border-none"
        />
      </div>
      <ul className="flex gap-10">
        <li>
          <Link href="#" className="p-1 rounded-2xl">
            <Image src="/bell.png" width={25} height={25} alt="Notifications" />
          </Link>
        </li>
        <li>
          <Link href="#" className="p-1 rounded-2xl">
            <Image src="/user.png" width={25} height={25} alt="Profile" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
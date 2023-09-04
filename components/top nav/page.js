import Image from 'next/image';
import Link from 'next/link';

export default function TopNav() {
  return (
    <nav className="flex justify-between p-10 fixed nav top-0 right-0 w-full">
      <div>
        <input type="text" className="rounded-xl bg-container" />
      </div>
      <ul className="flex gap-4">
        <li>
          <Link href="#">
            <Image src="/user.png" width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/gear.png" width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/bell.png" width={30} height={30} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
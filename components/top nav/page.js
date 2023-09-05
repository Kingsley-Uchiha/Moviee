import Image from 'next/image';
import Link from 'next/link';

export default function TopNav() {
  return (
    <nav className="flex justify-between p-10 fixed nav top-0 right-0 w-full">
      <div>
        <input type="text" className="rounded-3xl w-96 bg-container p-3 outline-none border-none" />
      </div>
      <ul className="flex gap-4">
        <li>
          <Link href="#" className='p-3 bg-foreground rounded-2xl'>
            {/* <Image src="/user.png" width={30} height={30} /> */}
          </Link>
        </li>
        <li>
          <Link href="#" className='p-3 bg-foreground rounded-2xl'>
            {/* <Image src="/gear.png" width={30} height={30} /> */}
          </Link>
        </li>
        <li>
          <Link href="#" className='p-3 bg-foreground rounded-2xl'>
            {/* <Image src="/bell.png" width={30} height={30} /> */}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
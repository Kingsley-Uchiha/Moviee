import Hero from '@/components/hero/page';
import SideNav from '@/components/side nav/page'
import TopNav from '@/components/top nav/page';
import Image from 'next/image'

export default function Home() {
  return (
    // * Clear everything & restart
    <>
      <main className="text-foreground bg-background grid grid-cols-6">
        <SideNav />
        <div className="relative col-span-5">
          <TopNav />
          <Hero />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

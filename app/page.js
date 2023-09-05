import Hero from '@/components/hero/page';
import SideNav from '@/components/side nav/page'
import TopNav from '@/components/top nav/page';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="text-foreground bg-background">
      <SideNav />
      <TopNav />
      <div className='app relative'>
        <Hero />
      </div>
    </main>
  );
}

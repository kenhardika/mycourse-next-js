import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{"Select Request Type"}</title>
      </Head>
      <section className="w-full h-screen justify-center flex flex-col items-center gap-8">
        <h1 className="text-3xl">Select Request API Type</h1>
        <div className="flex flex-row gap-8">
          <Link href="/fetch/Login" className='w-[100px] text-center hover:bg-slate-400 bg-slate-500 rounded-lg active:translate-y-0.5 outline-none text-white' > Fetch </Link>
          <Link href="/axios/Login" className='w-[100px] text-center hover:bg-slate-400 bg-slate-500 rounded-lg active:translate-y-0.5 outline-none text-white'> Axios </Link>
          <Link href="/xhr/Login" className='w-[100px] text-center hover:bg-slate-400 bg-slate-500 rounded-lg active:translate-y-0.5 outline-none text-white' > XHR </Link>
        </div>
      </section>
  </div>
  );
}
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
          <Link href="/fetch/Login" > Fetch </Link>
          <Link href="/axios/Login" > Axios </Link>
          <Link href="/xhr/Login" > XHR </Link>
        </div>
      </section>
  </div>
  );
}
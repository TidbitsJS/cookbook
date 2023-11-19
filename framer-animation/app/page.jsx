import Link from "next/link";

function Page() {
  return (
    <section className='flex flex-col gap-10 justify-center items-center min-h-screen bg-orange-300'>
      <p>Wanna know how to use Framer Motion with Next.js?</p>
      <Link href='/learn' className='text-blue-600 underline'>
        Learn Now
      </Link>
    </section>
  );
}

export default Page;

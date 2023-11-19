import Link from "next/link";

function Page() {
  return (
    <section className='flex flex-col gap-10 justify-center items-center min-h-screen bg-blue-300'>
      Learn Framer Motion Animations with Next.js!
      <Link href='/' className='text-orange-600 underline'>
        Go back to gome
      </Link>
    </section>
  );
}

export default Page;

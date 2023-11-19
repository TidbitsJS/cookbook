import Image from "next/image";

import { MotionDiv } from "./MotionElements";

const stagger = 0.5;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

async function Home() {
  const response = await fetch(`http://localhost:8000/photos`);
  const data = await response.json();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-white'>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-10'>
        {data.map((photo, index) => (
          <MotionDiv
            className='w-96 relative h-96 rounded shadow-lg'
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{
              delay: index * stagger,
              ease: "easeInOut",
              duration: 0.6,
            }}
            key={index}
          >
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              className='object-cover rounded'
            />
          </MotionDiv>
        ))}
      </div>
    </main>
  );
}

export default Home;

import LoadMore from "./LoadMore";

const MAX_ITEMS = 5;

async function Home({ searchParams }) {
  const page = searchParams.page || 1;

  const response = await fetch(
    `http://localhost:8000/tasks?_start=0&_end=${page * MAX_ITEMS}`
  );
  const data = await response.json();

  return (
    <main>
      <div className='container mx-auto p-8 max-w-5xl'>
        <h1 className='text-3xl font-semibold mb-4'>Coding Tasks</h1>
        <div className='flex flex-col gap-4'>
          {data.map((task) => (
            <div key={task.id} className='bg-white p-4 rounded shadow'>
              <h2 className='text-xl font-semibold mb-2'>{task.title}</h2>
              <p className='text-gray-600'>{task.description}</p>
              <span className='mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
                {task.tag}
              </span>
            </div>
          ))}
        </div>

        <LoadMore isNext={data.length >= page * MAX_ITEMS} />
      </div>
    </main>
  );
}

export default Home;

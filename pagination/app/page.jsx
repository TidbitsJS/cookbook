import Pagination from "./Pagination";

const MAX_ITEMS = 5;

async function Home({ searchParams }) {
  const page = searchParams.page || 1;

  const response = await fetch(
    `http://localhost:8000/tasks?_start=${(page - 1) * MAX_ITEMS}&_end=${
      page * MAX_ITEMS
    }`
  );

  const data = await response.json();

  return (
    <main className='bg-slate-200 min-h-screen'>
      <div className='container mx-auto p-8 max-w-5xl'>
        <h1 className='text-3xl font-semibold mb-4 text-black'>Tasks</h1>
        <div className='flex flex-col gap-4 mt-5'>
          {data.length > 0 ? (
            data.map((task) => (
              <div key={task.id} className='bg-white p-4 rounded shadow'>
                <h2 className='text-xl font-semibold mb-2 text-black'>
                  {task.title}
                </h2>
                <p className='text-gray-600'>{task.description}</p>
                <span className='mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
                  {task.tag}
                </span>
              </div>
            ))
          ) : (
            <p className='text-black'>End of List</p>
          )}
        </div>

        <Pagination isNext={data.length !== 0} />
      </div>
    </main>
  );
}

export default Home;

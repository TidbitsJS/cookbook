import Search from "./Search";

async function Home({ searchParams }) {
  const query = searchParams.query;
  const url = query
    ? `http://localhost:8000/tasks?q=${query}`
    : "http://localhost:8000/tasks";

  const response = await fetch(url);
  const data = await response.json();

  return (
    <main className="container mx-auto p-8 max-w-5xl">
      <h1 className="text-3xl font-semibold mb-4">Coding Tasks</h1>

      <Search />

      <div className="flex flex-col gap-4">
        {data.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
            <span className="mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {task.tag}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;

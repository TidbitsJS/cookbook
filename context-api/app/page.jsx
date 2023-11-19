import Client from "./Client";
import Server from "./Server";

function Home() {
  return (
    <main className='bg-white min-h-screen p-5'>
      <Client>
        <Server />
      </Client>
    </main>
  );
}

export default Home;

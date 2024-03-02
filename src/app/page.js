import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const response = await res.json();

  console.log(response);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="header relative flex place-items-center before:absolute before:h-[300px] before:w-full sm::w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:conr befo0 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
{/* 
        <h3 className="text-[30px] ms-5 font-semibold pt-10 header">
          Meme Generator App By Rehan
                 </h3> */}
      </div>

      <div className="mb-20 grid text-center lg:max-w-5xxl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {response.data &&
          response.data.memes &&
          response.data.memes.map((item) => (
            <Link href={`/detail/${item.id}`}>
              <div  key={item.id} className="m-10 h-[320px] w-[280px]">
                <img
                  src={item.url}
                  className="h-[100%] w-[100%] object-cover"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
            
          ))}
      </div>
    </main>
  );
}

import Image from "next/image";
import Header from "./Components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <section class="flex bg-gradient-to-r from-red-100 to-orange-100 h-96">
    <div class="container mx-auto flex justify-center items-center flex-col">
      
      <h1 class="text-black text-4xl md:text-5xl font-bold text-center w-1/2">
        Build beautiful website & mobile apps.
      </h1>

      <a href="#" class="mt-9 bg-red-400 px-12 py-3 rounded-3xl hover:bg-red-500 text-white" role="button">
        Get started!
      </a>

    </div>
    
  </section>
    </>
    
  );
}

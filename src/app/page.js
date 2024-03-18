import NavBar from "@/components/homePageComponent/NavBar";
import LocalitiesCard from "@/components/homePageComponent/LocalitiesCard";
import Collection from "@/components/homePageComponent/Collection";
import ContactMeBar from "@/components/homePageComponent/ContactMeBar";
import ExploreMeCard from "@/components/homePageComponent/ExploreMeCard";
import FooterComponent from "@/components/homePageComponent/FooterComponent";
import Link from "next/link";


export default function Home() {

  return (
    <>
      <NavBar />
      {/* order online and dining card */}
      <main className="container flex justify-between mx-auto mt-9 xl:w-3/5 md:w-full">
        <Link href="/order-online">
          <div className="w-[538px] h-[238px] border rounded-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
            <img src="/order-online-image.png" alt="order-online" className="w-full h-[10rem] object-cover rounded-md " />
            <div className="m-4">
              <h1>Order Online</h1>
              <h2>Stay home and order to your doorstep</h2>
            </div>
          </div>
        </Link>
        <Link href="/order-online/delivery">
          <div className="w-[538px] h-[238px] ml-4  border rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
            <img src="/dining-image.png" alt="dining-online" className="w-full h-[10rem] object-cover rounded-md " />
            <div className="m-4">
              <h1>Dining</h1>
              <h2>View the city's favourite dining venues</h2>
            </div>
          </div>
        </Link>

      </main>
      <Collection />
      <div className="container mx-auto mt-24 xl:w-3/5 md:w-full">
        <h1 className="text-3xl font-light">
          Popular localities in and around <span className="font-normal">patna</span>
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-8 gap-x-12">

          <LocalitiesCard />
          <LocalitiesCard />
          <LocalitiesCard />
          <LocalitiesCard />
          <LocalitiesCard />
          <LocalitiesCard />
        </div>
      </div>
      <div className="h-[26rem] mt-32 bg-yellow-50 flex justify-center ">
        <ContactMeBar />
      </div>

    </>

  );
}
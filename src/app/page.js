import Collection from "@/components/homePageComponent/Collection";
import ContactMeBar from "@/components/homePageComponent/ContactMeBar";
import ExploreMeCard from "@/components/homePageComponent/ExploreMeCard";
import LocalitiesCard from "@/components/homePageComponent/LocalitiesCard";
import FooterComponent from "@/components/homePageComponent/FooterComponent";


export default function Home() {

  return (
    <>
      <main className="container flex justify-between mx-auto mt-9 xl:w-3/5 md:w-full">
        <div className="w-[538px] h-[238px] border rounded-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
          <img src="/order-online-image.png" alt="order-online" className="w-full h-[10rem] object-cover rounded-md " />
          <div className="m-4">
            <h1>Order Online</h1>
            <h2>Stay home and order to your doorstep</h2>
          </div>
        </div>
        <div className="w-[538px] h-[238px] ml-4  border rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
          <img src="/dining-image.png" alt="dining-online" className="w-full h-[10rem] object-cover rounded-md " />
          <div className="m-4">
            <h1>Dining</h1>
            <h2>View the city's favourite dining venues</h2>
          </div>
        </div>
      </main>
    </>

  );
}
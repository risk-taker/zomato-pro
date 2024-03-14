import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/homePageComponent/NavBar";
import LocalitiesCard from "@/components/homePageComponent/LocalitiesCard";
import Collection from "@/components/homePageComponent/Collection";
import ContactMeBar from "@/components/homePageComponent/ContactMeBar";
import ExploreMeCard from "@/components/homePageComponent/ExploreMeCard";
import FooterComponent from "@/components/homePageComponent/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zomato Pro",
  description: "Having some enhanced features!",
  // <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {/* order online and dining card */}
        {children}
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
        {/* Explore me section */}
        <div className="bg-slate-50">
          <div className="container pt-12 mx-auto xl:w-3/5 md:w-full">
            <h1 className="text-2xl font-medium ">Explore options near me</h1>
            <div className="grid gap-4 pb-12 mt-4">
              <ExploreMeCard />
              <ExploreMeCard />
              <ExploreMeCard />
              <ExploreMeCard />
            </div>
          </div>
        </div>
        {/* footer section */}
        <div className="bg-slate-100">
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}

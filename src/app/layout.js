import { Inter } from "next/font/google";
import "./globals.css";
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      {/* {inter.className} */}
      <body className={`&{inter.className} min-w-fit`}>
        {children}
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

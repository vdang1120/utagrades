import Head from "next/head";
import { Poppins, Montserrat } from "next/font/google";
import SearchBar from "./components/SearchBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights you need
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0e6aac] from-0% via-[#000000] via-60%  to-[#5d2c00] to-100% text-white px-4 lg:px-24">
        <Head>
          <title>MavGrades</title>
        </Head>

        <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-between items-center h-full">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start mb-8 lg:mb-0">
            <h1 className="text-6xl tracking-wide">
              <span
                className={`${poppins.className} font-extrabold text-gray-300`}
              >
                MAV
              </span>
              <span
                className={`${montserrat.className} font-light text-gray-300`}
              >
                GRADES
              </span>
            </h1>
            <p className="text-lg text-gray-200 mt-4 max-w-md mx-auto lg:mx-0">
              Learn from your previous peers. See how they did! It&apos;s free
              and accessible for all UTA students.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center lg:items-center">
            <div className="w-full max-w-md">
              <SearchBar />
            </div>
            <p className="mt-8 text-sm text-gray-300 justify-center">
              Enjoy your course registration experience!
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-400">
          Developed by{" "}
          <a
            href="https://github.com/acmuta/utagrades"
            target="_blank"
            className="hover:underline"
          >
            ACM @ UTA
          </a>
          . Not affiliated with or sponsored by UT Arlington.
          <br />© 2024{" "}
          <a href="https://acmuta.com" className="hover:underline">
            ACM @ UT Arlington
          </a>
          . All rights reserved.
        </div>
      </div>
    </>
  );
}

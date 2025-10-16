import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      icon: "/bg/facebook.svg",
      link: "https://www.facebook.com/",
    },
    {
      icon: "/bg/insta.svg",
      link: "https://www.instagram.com/",
    },
    {
      icon: "/bg/youtoobe.svg",
      link: "https://www.youtube.com/",
    },
    {
      icon: "/bg/x.svg",
      link: "https://x.com/",
    },
  ];
  return (
    <div
      className="font-sans container flex w-full flex-col items-center justify-items-center min-h-screen min-w-screen "
      style={{ backgroundImage: "url('/bg/gb-img.jpg')" }}
    >
      <main className="flex flex-col row-start-1 items-center ">
        <Image
          className=""
          src="/bg/logo.png"
          alt="Next.js logo"
          width={400}
          height={400}
          priority
        />
        <Image
          className="ml-[35px] mt-[-170px]"
          src="/bg/poseLotos.png"
          alt="Next.js logo"
          width={280}
          height={450}
          priority
        />
        <div className="ml-[35px] mt-[-300px] relative h-auto">
          <Image
            className="h-auto"
            src="/bg/ellipse.svg"
            alt="Next.js logo"
            width={0}
            height={0}
            sizes="80vw"
            style={{ width: "80vw" }}
            priority
          />
          <div className="absolute z-1 top-1/2 left-1/2 mt-[100px] -translate-x-1/2 -translate-y-1/2 w-full p-3 flex flex-col justify-center gap-[30px]"
          style={{ backgroundImage: "url('bg/ellipse.svg')" }}>
            <h1 className="text-[#F5E7BC] font-montserrat text-center text-[32px] font-bold w-fit max-w-[400px] mx-auto leading-8">
              Your Astro Journey Starts Here...
            </h1>
            <p className="text-[#F5E7BC] font-montserrat mx-auto text-[24px] ">
              Join the Private Beta’s Waitlist.
            </p>
            <div className="w-full">
              <div className="w-full max-w-[360px] h-[60px] flex items-center justify-between p-[6px] mx-auto border border-[#F5E7BC]/30 rounded-md focus-within:border-[#F5E7BC]">
                <span>👉</span>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="w-full mx-2 my-1 placeholder:text-[#F5E7BC]/20 text-white/70 outline-0 bg-transparent"
                />
                <button className="h-full px-[20px] text-[#F5E7BC] bg-black rounded-md border border-[#F5E7BC]/20 cursor-pointer hover:scale-105 transition-all duration-300 ease-out will-change-transform">
                  Send
                </button>
              </div>

              <p className="mt-[15px] text-center text-[#8C8C8C] font-bold text-[14px]">
                We respect your privacy. No spam, ever.
              </p>
            </div>
            <ul className="w-fit flex flex-row gap-6 mx-auto">
              {links.map((item) => (
                <li
                  key={item.link}
                  className="cursor-pointer hover:scale-110 transition-all duration-300 ease-out"
                >
                  <Link href={item.link}>
                    <Image
                      className="h-auto"
                      src={item.icon}
                      alt="icon logo"
                      width={30}
                      height={30}
                      priority
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}

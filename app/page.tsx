import HomeSection from "@/components/home/HomeSection";

export default function Home() {
  return (
    <div
      className="font-sans flex w-full flex-col items-center justify-items-center min-h-screen"
      style={{ backgroundImage: "url('/bg/gb-img.jpg')" }}
    >
      <main className="w-full min-h-screen ">
        <HomeSection />
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer> */}
    </div>
  );
}

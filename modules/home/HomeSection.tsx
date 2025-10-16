import HomeSendEmail from "./HomeSendEmail";
import HomeLinks from "./HomeLinks";
import HomeImages from "./HomeImages/HomeImages";

export default function HomeSection() {
  return (
    <div className="w-full">
      <HomeImages/>
      <div className="flex  flex-col max-w-[517px] mx-auto items-center w-full my-auto p-4  absolute z-[3] top-[70%] sm:top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full">
          <h1 className="text-[var(--primary-color)] font-montserrat text-center text-[20px] mb-[15px] sm:mb-[30px] sm:text-[32px] font-bold w-fit max-w-[400px] mx-auto leading-8">
            Your Astro Journey <br /> Starts Here...
          </h1>
          <p className="text-[var(--primary-color)] font-montserrat mx-auto text-[16px] sm:text-[24px] text-center">
            Join the Private Beta’s Waitlist.
          </p>
        </div>

        <HomeSendEmail />
        <HomeLinks />
      </div>
    </div>
  );
}

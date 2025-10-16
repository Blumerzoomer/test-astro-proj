import Image from "next/image";

export default function HomeSendEmail() {
  return (
    <div className="w-full mt-[25px] sm:mt-[30px]">
      <div className="w-full max-w-[360px] h-[60px] flex items-center justify-between  p-[8px] mx-auto border-[1px] border-[var(--primary-color)]/30 rounded-md focus-within:border-[var(--primary-color)]">
        <div className="min-w-5 min-h-5">
          <Image
            src="/icons/pointing-right.svg"
            alt="Right arrow icon for email input"
            width={24}
            height={24}
            loading="lazy"
          />
        </div>
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full mx-2 my-1 placeholder:text-[var(--primary-color)]/20 text-white/70 outline-0 bg-transparent"
        />
        <button className="h-full px-[20px] text-[var(--primary-color)] bg-black font-medium text-[16px] rounded-md border border-[var(--primary-color)]/20 cursor-pointer hover:scale-105 transition-all duration-300 ease-out will-change-transform">
          Send
        </button>
      </div>

      <p className="mt-[15px] text-center text-[var(--secondary-color)] font-bold text-[14px]">
        We respect your privacy. No spam, ever.
      </p>
    </div>
  );
}

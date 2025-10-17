"use client";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import styles from "./HomeSendEmail.module.css";

export default function HomeSendEmail() {
  const [animate, setAnimate] = useState(false);
  const [email, setEmail] = useState("");

  const triggerAnimation = () => {
    if (!email) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 600);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const isFilled = email.trim().length > 0;

  return (
    <div className="w-full mt-[25px] sm:mt-[30px]">
      <div className="w-full max-w-[360px] h-[60px] flex items-center justify-between p-[8px] mx-auto border-[1px] border-[var(--primary-color)]/30 rounded-md transition-all focus-within:border-[var(--primary-color)]">

        <div
          className={classNames(
            "flex items-center justify-center w-[25px] h-[25px] transition-all duration-300 ease-in-out",
            {
              [styles["animate-shake-up-down"]]: animate,
              "opacity-0 invisible": isFilled, 
              "opacity-100 visible": !isFilled, 
            }
          )}
        >
          <Image
            src="/icons/pointing-right.svg"
            alt="Right arrow icon for email input"
            width={25}
            height={25}
            loading="lazy"
          />
        </div>

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleChange}
          className="w-full mx-2 my-1 placeholder:text-[var(--primary-color)]/20 text-white/70 outline-0 bg-transparent"
          onMouseEnter={triggerAnimation}
          onFocus={triggerAnimation}
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

import { socialLinks } from "@/constants/SocialLinks";
import Image from "next/image";
import Link from "next/link";



export default function HomeLinks() {
  return (
    <ul className="w-fit flex flex-row gap-6 mx-auto mt-[30px]">
      {socialLinks.map((item) => (
        <li
          key={item.alt}
          className="cursor-pointer hover:scale-125 transition-all duration-300 ease-out"
        >
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${item.alt} page`}
          >
            <Image
              className="h-auto"
              src={item.icon}
              alt={`Follow us on ${item.alt}`}
              width={30}
              height={30}
              priority
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

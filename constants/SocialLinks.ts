export interface SocialLinkType {
  icon: string;
  link: string;
  alt: string;
}

export const socialLinks: SocialLinkType[] = [
  {
    icon: "icons/socials/facebook.svg",
    link: "https://www.facebook.com/",
    alt: "Facebook",
  },
  {
    icon: "icons/socials/instagram.svg",
    link: "https://www.instagram.com/astro.sensei",
    alt: "Instagram",
  },
  {
    icon: "icons/socials/youtube.svg",
    link: "https://www.youtube.com/",
    alt: "Youtube",
  },
  {
    icon: "icons/socials/tiktok.svg",
    link: "https://www.tiktok.com/@astrosensei.com",
    alt: "Tiktok",
  },
];

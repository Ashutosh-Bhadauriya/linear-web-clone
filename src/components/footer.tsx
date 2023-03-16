import { Container } from "./container";
import Link from "next/link";
import { Logo } from "./icons/logo";
import { TwitterIcon } from './icons/twitter';
import { GitHubIcon } from './icons/github';
import { SlackIcon } from './icons/slack';

const footerLink = [
  {
    title: "Product",
    links: [
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Integrations",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Changelog",
        href: "#",
      },
      {
        title: "Docs",
        href: "#",
      },
      {
        title: "Linear Method",
        href: "#",
      },
      {
        title: "Download",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Customers",
        href: "#",
      },
      {
        title: "Brand",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Community",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
      {
        title: "DPA",
        href: "#",
      },
      {
        title: "Terms of service",
        href: "#",
      },
      {
        title: "Report vulnerability",
        href: "#",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        title: "API",
        href: "#",
      },
      {
        title: "Status",
        href: "#",
      },
      {
        title: "Github",
        href: "#",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-transparent-white py-[56px] mt-12 text-sm">
      <Container className="flex justify-between flex-col lg:flex-row">
        <div>
          <div className="flex flex-row justify-between lg:flex-col h-full">
            <div className="flex text-grey text-md items-center">
              <Logo className="h-[1.8rem] mr-1" /> - Designed worldwide
            </div>
            <div className="mt-auto flex space-x-4 text-grey">
                <TwitterIcon/>
                <GitHubIcon/>
                <SlackIcon/>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLink.map((column, index) => (
            <div key={index} className="lg:min-w-[18rem] mt-10 lg:mt-0 min-w-[50%]">
              <h3 className="font-medium mb-3">{column.title}</h3>
              <ul>
                {column.links.map((link, i) => (
                  <li key={i} className="[&_a]:last:mb-0">
                    <Link className="mb-3 block text-grey hover:text-offWhite transition-colors" href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

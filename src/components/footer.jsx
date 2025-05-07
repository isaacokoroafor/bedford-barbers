import { ReactSVG } from "react-svg";
import { Footer } from "../js/footerLinks";
import { socialLinks } from "@/js/socialLinks";
import { LogoIcon } from './svg/logo';
import { BooksyIcon } from './svg/booksy';
export default function FooterMenu() {
  return (
    <footer className="w-full overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col flex-shrink-0 items-center justify-center">
          <a className=" flex mb-4 stroke-amber-400" href="/">
            <LogoIcon ></LogoIcon>
          </a>
          <p className="text-white text-center">20C Miller Rd, Bedford MK42 9NZ</p>
        </div>

        <div className="flex justify-center flex-wrap gap-x-12 mt-8">
          {Footer.map((item) => (
            <a
              key={item.name}
              href={item.href} 
              name={item.name}
              className="text-white scale-95 hover:scale-100"
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* …logo/links… */}
        <div className="flex justify-center space-x-12 mt-8">
          {socialLinks.map(({ name, href, Icon, svg }) => (
            <a
              key={name}
              href={href}
              name={name}
              className="text-white"
              aria-current={name}
            >
              {Icon ? (
                <Icon className="h-6 w-6" />
              ) : (
                <div className="w-6 text-white">
                  <BooksyIcon></BooksyIcon>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

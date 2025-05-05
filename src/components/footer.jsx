import { ReactSVG } from "react-svg";
import { Footer } from "../js/footerLinks";
import { socialLinks } from "@/js/socialLinks";
const BooksyIcon = () => {
	return (<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256.000000 256.000000"
   preserveAspectRatio="xMidYMid meet" className= "h-6">
  
  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
  fill="#fff">
  <path d="M1268 2109 c-17 -9 -18 -44 -18 -504 l0 -493 41 -35 c22 -20 65 -48
  94 -63 74 -39 82 -31 87 99 5 117 27 174 100 253 62 67 135 98 233 98 106 1
  166 -25 239 -105 76 -82 100 -146 100 -274 1 -175 -54 -269 -200 -342 -130
  -64 -279 -57 -451 22 -93 43 -173 95 -371 243 -90 68 -186 134 -213 147 -144
  73 -339 73 -496 -1 -107 -51 -245 -209 -260 -298 -8 -48 15 -57 134 -54 l97 3
  40 60 c56 81 117 118 205 123 114 6 201 -40 516 -272 156 -115 296 -188 420
  -217 75 -18 110 -20 215 -16 151 6 239 32 343 103 158 108 247 285 247 491 0
  180 -59 331 -175 449 -112 114 -233 164 -395 164 -100 0 -170 -18 -256 -66
  -34 -18 -64 -31 -68 -27 -3 3 -6 114 -6 245 0 287 3 278 -112 278 -40 0 -81
  -5 -90 -11z"/>
  </g>
  </svg>)}
export default function FooterMenu() {
  return (
    <footer className="w-full overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col flex-shrink-0 items-center justify-center">
          <a className=" flex ">
            <img className="h-40 mb-4" src="/logo.svg"></img>
          </a>
          <p className="text-white">20C Miller Rd, Bedford MK42 9NZ</p>
        </div>

        <div className="flex justify-center space-x-12 mt-8">
          {Footer.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-green-500 transition-colors"
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

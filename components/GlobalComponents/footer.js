import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <div className="contact">
        <h3>Get in touch with us</h3>
      </div>
      <footer className="footer mt-20 bg-blue-50 p-16 px-28">
        <div className="flex flex-row justify-between items-start">
          <div className=" flex flex-row justify-center items-center">
            <img
              src="/images/logo.svg"
              alt=""
              className="footer__logo h-10 mr-2"
            />
            <h4 className="footer__text text-3xl font-medium">Oronium</h4>
          </div>
          <div className="flex flex-row">
            <ul className="p-6">
              <li className="font-medium text-gray-500 text-base mb-2">
                About
              </li>
              <li className="font-medium text-gray-500 text-base mb-2">
                Works
              </li>
              <li className="font-medium text-gray-500 text-base mb-2">
                Contact
              </li>
            </ul>
            <ul className="p-6 flex flex-col items-start">
              <li className="font-medium flex flex-row items-center justify-center text-gray-500 text-base mb-2">
                <IoLogoInstagram className="mr-2" /> Instagram
              </li>
              <li className="font-medium flex flex-row items-center justify-center text-gray-500 text-base mb-2">
                <IoLogoLinkedin className="mr-2" /> Linkedin
              </li>
              <li className="font-medium flex flex-row items-center justify-center text-gray-500 text-base mb-2">
                <IoLogoTwitter className="mr-2" /> Twitter
              </li>
              <li className="font-medium flex flex-row items-center justify-center text-gray-500 text-base mb-2">
                <IoLogoFacebook className="mr-2" /> Facebook
              </li>
            </ul>
          </div>
        </div>
        <div className=""></div>
      </footer>
    </>
  );
}

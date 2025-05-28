import { socialImgs } from "../constants";

const Footer = () => {

  const redir = (redirect) => {
    window.open(redirect, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img
                src={socialImg.imgPath}
                alt="social icon"
                onClick={() => redir(socialImg.redirect)}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Zain Jadoon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

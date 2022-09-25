const links = ["home", "about", "projects"];

const NavBar = () => (
  <nav>
    {
      /* display an <a> tag for each link here */
      links.map((link) => (
        <a href={`#${link}`} key={link}>
          {link}
        </a>
      ))
    }
  </nav>
);

export default NavBar;

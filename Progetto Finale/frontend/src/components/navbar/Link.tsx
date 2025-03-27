import { SelectedPage } from "@/components/common/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className={`${
        selectedPage === page ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300 text-lg`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {page === SelectedPage.Home && "Home"}
      {page === SelectedPage.Benefits && "Servizi"}
      {page === SelectedPage.OurClasses && "Corsi"}
      {page === SelectedPage.ContactUs && "Contattaci"}
    </AnchorLink>
  );
};

export default Link;

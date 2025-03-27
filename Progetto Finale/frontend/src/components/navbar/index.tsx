import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link as RouterLink } from "react-router-dom";
import NavLinkCustom from "./Link";
import { SelectedPage } from "@/components/common/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/common/ActionButton";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  minimal?: boolean; // ✅ nuova prop
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  minimal,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const navLinks = [
    { page: SelectedPage.Home },
    { page: SelectedPage.Benefits },
    { page: SelectedPage.OurClasses },
    { page: SelectedPage.ContactUs },
  ];

  return (
    <nav className="text-lg">
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 max-w-[1440px]`}>
          {/* LEFT SIDE */}
          <div
            className={`w-full gap-16 ${
              minimal ? "flex justify-center" : flexBetween
            }`}
          >
            <RouterLink to="/" className="block">
              <img className="w-60" alt="logo" src={Logo} />
            </RouterLink>

            {/* RIGHT SIDE (solo se non minimal) */}
            {!minimal && isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {navLinks.map(({ page }) => (
                    <NavLinkCustom
                      key={page}
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <RouterLink
                    to="/login"
                    className="hover:text-primary-500 transition"
                  >
                    Login
                  </RouterLink>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Unisciti a noi !
                  </ActionButton>
                </div>
              </div>
            ) : null}

            {/* MOBILE BURGER MENU (solo se non minimal) */}
            {!minimal && !isAboveMediumScreens && (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                aria-label="Apri menu"
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU CON ANIMAZIONE */}
      <AnimatePresence>
        {!minimal && !isAboveMediumScreens && isMenuToggled && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-[#ffd86cd8]"
              onClick={() => setIsMenuToggled(false)}
            />

            {/* SLIDE-IN MENU */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
            >
              {/* CLOSE ICON */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMenuToggled(false)}
                  aria-label="Chiudi menu"
                  role="button"
                >
                  <XMarkIcon className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="ml-10 flex flex-col gap-10 text-xl">
                {navLinks.map(({ page }) => (
                  <NavLinkCustom
                    key={page}
                    page={page}
                    selectedPage={selectedPage}
                    setSelectedPage={(page) => {
                      setSelectedPage(page);
                      setIsMenuToggled(false);
                    }}
                  />
                ))}

                <RouterLink
                  to="/login"
                  onClick={() => setIsMenuToggled(false)}
                  className="hover:text-primary-500 transition"
                >
                  Login
                </RouterLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

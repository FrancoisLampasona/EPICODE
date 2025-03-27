import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/components/common/types";
import ActionButton from "@/components/common/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import Sponsor_1 from "@/assets/Sponsor-1.png";
import Sponsor_2 from "@/assets/Sponsor-2.png";
import Sponsor_3 from "@/assets/Sponsor-3.png";
import Sponsor_4 from "@/assets/Sponsor-4.png";
import Sponsor_5 from "@/assets/Sponsor-5.png";
import Sponsor_6 from "@/assets/Sponsor-6.png";
import Sponsor_7 from "@/assets/Sponsor-7.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 overflow-hidden">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.9 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative justify-items-center ">
              <div className="relative before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-[url('/src/assets/EvolveText.png')] ">
                <img className="w-xl" alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-lg text-center">
              La piattaforma ideale per chi vuole vivere il fitness in modo
              completo. Qui trovi allenamenti su misura, corsi di alta qualità e
              studi virtuali pensati per ogni livello e obiettivo. Che tu voglia
              tonificare, aumentare la massa muscolare o semplicemente ritrovare
              il benessere, hai a disposizione tutti gli strumenti per
              trasformare il tuo corpo. Allenati dove e quando vuoi, con
              programmi studiati da professionisti del settore. Il tuo percorso
              verso la forma fisica che desideri comincia da qui.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Iscrivi Ora !
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Scopri di più</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE con animazione */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img className="w-2xl" alt="home-pageGraphic" src={HomePageGraphic} />
        </motion.div>
      </motion.div>

      {/* SPONSORS - Carosello Orizzontale */}
      {isAboveMediumScreens && (
        <div className="relative h-40 w-full overflow-hidden bg-primary-100 py-8">
          <div className="animate-marquee flex w-max gap-16 px-4 py-5">
            {[
              Sponsor_1,
              Sponsor_2,
              Sponsor_3,
              Sponsor_4,
              Sponsor_5,
              Sponsor_6,
              Sponsor_7,
            ].map((sponsor, index) => (
              <img
                key={index}
                src={sponsor}
                alt={`sponsor-${index}`}
                className="h-12 w-auto object-contain"
              />
            ))}
            {/* Duplicate for infinite loop effect */}
            {[
              Sponsor_1,
              Sponsor_2,
              Sponsor_3,
              Sponsor_4,
              Sponsor_5,
              Sponsor_6,
              Sponsor_7,
            ].map((sponsor, index) => (
              <img
                key={`dup-${index}`}
                src={sponsor}
                alt={`sponsor-dup-${index}`}
                className="h-12 w-auto object-contain"
              />
            ))}
          </div>
          {/* Inline styles for animation */}
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          `}</style>
          <p className="text-sm py-5 px-3 text-end font-bold text-primary-500 underline hover:text-secondary-500">
            SPONSOR
          </p>
        </div>
      )}
    </section>
  );
};

export default Home;

import ActionButton from "@/components/common/ActionButton";
import HText from "@/components/common/HText";
import { BenefitType, SelectedPage } from "@/components/common/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Strutture all’Avanguardia",
    description:
      "Spazi progettati per offrire il massimo comfort e le migliori condizioni per il tuo allenamento. Ambienti moderni, attrezzature di ultima generazione e un’attenzione costante ai dettagli per garantirti un'esperienza di fitness completa ed efficace.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Centinaia di Corsi Diversificati",
    description:
      "Un’ampia scelta di corsi pensati per ogni livello, esigenza e stile di allenamento. Dallo yoga al functional training, dal cardio alla tonificazione, troverai sempre l’attività giusta per te. Allenati come vuoi, quando vuoi.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Istruttori Esperti e Professionisti",
    description:
      "Un team di trainer qualificati e appassionati, pronti a guidarti con competenza in ogni fase del tuo percorso. Grazie alla loro esperienza e attenzione personalizzata, potrai allenarti in modo sicuro, efficace e sempre motivante.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            Più di una{" "}
            <span className="text-primary-500"> semplice palestra</span>
          </HText>
          <p className="my-5 text-lg">
            Offriamo attrezzature fitness di livello internazionale, istruttori
            qualificati e una vasta gamma di corsi pensati per aiutarti a
            raggiungere i tuoi obiettivi in modo efficace e sicuro. Ma ciò che
            ci distingue davvero è l’attenzione autentica che dedichiamo a ogni
            singolo iscritto. Il tuo percorso conta, e noi siamo al tuo fianco
            in ogni fase.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex overflow-hidden">
          {/* GRAPHIC with animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              className="w-screen h-auto mx-auto overflow-hidden"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
          </motion.div>

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Milioni di Persone Soddisfatte e{" "}
                    <span className="text-primary-500">in Forma </span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTIONS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-lg">
                Una community in continua crescita, formata da persone che hanno
                scelto di prendersi cura di sé attraverso il movimento. Ogni
                giorno, milioni di iscritti si allenano, migliorano e
                raggiungono i propri obiettivi grazie a programmi efficaci,
                supporto costante e un ambiente pensato per il benessere.
              </p>
              <p className="mb-5 text-lg">
                Unisciti a una comunità globale di appassionati del fitness che,
                grazie a programmi efficaci e supporto dedicato, raggiungono i
                propri obiettivi di benessere. Scopri come il nostro approccio
                personalizzato può aiutarti nel tuo percorso verso una vita più
                sana.
              </p>
            </motion.div>

            {/* BUTTON */}
            {/* BUTTON con animazione */}
            <motion.div
              className="relative mt-16 justify-items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Iscriviti Subito
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

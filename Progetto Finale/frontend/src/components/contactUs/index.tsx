import { useForm } from "react-hook-form";
import { SelectedPage } from "@/components/common/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/components/common/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
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
            <span className="text-primary-500">ISCRIVITI ORA</span> PER TORNARE
            IN FORMA
          </HText>
          <p className="my-5 text-lg">
            Mantieni alta la tua motivazione e raggiungi i tuoi obiettivi con il
            supporto giusto. Il nostro team è al tuo fianco per guidarti passo
            dopo passo, con programmi su misura e un ambiente che ispira energia
            e benessere. Qualunque sia il tuo punto di partenza, siamo qui per
            aiutarti a trasformare il movimento in uno stile di vita.
          </p>
        </motion.div>

        {/* FORMULARIO E IMMAGINE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/4ee7dba8fc03b97c0c3e3608e8716987"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NOME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" &&
                    "Questo campo è obbligatorio."}
                  {errors.name.type === "maxLength" &&
                    "La lunghezza massima è di 100 caratteri."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "Questo campo è obbligatorio."}
                  {errors.email.type === "pattern" &&
                    "Indirizzo email non valido."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGGIO"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "Questo campo è obbligatorio."}
                  {errors.message.type === "maxLength" &&
                    "La lunghezza massima è di 2000 caratteri."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                INVIA
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] before:content-[url('/src/assets/EvolveText.png')]">
              <img
                className="w-full"
                alt="grafica della pagina contattaci"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

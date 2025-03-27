"use client";

import { SelectedPage, type ClassType } from "@/components/common/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/components/common/HText";
import Class from "./Class";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const classes: Array<ClassType> = [
  {
    name: "Corsi di Sollevamento Pesi",
    description:
      "Allenamenti intensivi per aumentare la forza, migliorare la resistenza muscolare e scolpire il corpo. Ideali per chi vuole ottenere risultati concreti e duraturi.",
    image: image1,
  },
  { name: "Corsi di Yoga", image: image2 },
  {
    name: "Corsi per Addominali e Core",
    description:
      "Sessioni mirate per rafforzare l'area addominale, migliorare la postura e aumentare la stabilità del corpo. Perfette per ogni livello di preparazione.",
    image: image3,
  },
  {
    name: "Corsi Avventura",
    description:
      "Allenamenti dinamici e coinvolgenti che combinano attività fisica e divertimento. Ideali per chi cerca nuove sfide e ama mettersi alla prova.",
    image: image4,
  },
  { name: "Corsi di Fitness", image: image5 },
  {
    name: "Corsi di Allenamento",
    description:
      "Programmi completi per migliorare la forma fisica generale, tonificare il corpo e aumentare il livello di energia. Adatti a tutti, dai principianti agli esperti.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, itemsToShow]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsToShow >= classes.length ? 0 : prev + itemsToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsToShow < 0
        ? Math.max(0, classes.length - itemsToShow)
        : prev - itemsToShow
    );
  };

  const goToSlide = (index: number) => setCurrentIndex(index);

  // Calcolo dinamico delle larghezze
  const totalSlides = Math.ceil(classes.length / itemsToShow);

  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40 overflow-x-hidden"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        {/* Header */}
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>
              I Nostri <span className="text-primary-500"> Corsi</span>
            </HText>
            <p className="py-5 text-lg">
              Proponiamo una vasta gamma di allenamenti adatti a ogni livello,
              dal principiante all’esperto. Ogni corso è studiato per offrire il
              giusto equilibrio tra impegno, divertimento e risultati concreti.
              Che tu voglia tonificare, migliorare la resistenza o semplicemente
              sentirti meglio, troverai sempre l’allenamento giusto per te,
              guidato da istruttori qualificati in un ambiente stimolante e
              accogliente.
            </p>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="mt-10 w-full relative">
          <div
            className="relative overflow-hidden mx-auto w-5/6"
            onMouseEnter={pauseAutoPlay}
            onTouchStart={pauseAutoPlay}
          >
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  (currentIndex / classes.length) * 100
                }%)`,
                width: `${classes.length * (100 / itemsToShow)}%`,
              }}
            >
              {classes.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="px-2"
                  style={{
                    width: `${100 / classes.length}%`,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <Class
                      name={item.name}
                      description={item.description}
                      image={item.image}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <Button
            variant="outline"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10 w-16 h-16 flex items-center justify-center"
            onClick={() => {
              prevSlide();
              pauseAutoPlay();
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-10 h-10 text-black" />
          </Button>

          <Button
            variant="outline"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10 w-16 h-16 flex items-center justify-center"
            onClick={() => {
              nextSlide();
              pauseAutoPlay();
            }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-10 h-10 text-black" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index * itemsToShow);
                  pauseAutoPlay();
                }}
                className={`w-3 h-3 rounded-full ${
                  currentIndex >= index * itemsToShow &&
                  currentIndex < (index + 1) * itemsToShow
                    ? "bg-primary"
                    : "bg-[#102138]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

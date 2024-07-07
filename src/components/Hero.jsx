import { Section } from "./Section";
import { curve } from "../assets";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explora las Posibilidades de la IA Conversando con BrainwaveCurve
            <span className="inline-block relative">
              Brainwave
              <img
                src={curve}
                className="absolute top-full left-0
               w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curva"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Desata el poder de la IA con Brainwave. Mejora tu productividad con
            Brainwave, la aplicación de chat de IA abierta.
          </p>
          <Button href="/pricing" white>
            Comenzar
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative p-0.5 z-1 rounded-2xl bg-conic-gradient"></div>
        </div>
      </div>
    </Section>
  );
};

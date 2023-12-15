import TestimonialCard from "@/components/cards/TestimonialCard";
import CtaBtn from "@/components/ui/Buttons/CtaBtn";
import css from "@/styles/home.module.css";
export default function Home() {
  return (
    <div>
      <div
        className={`${css.mainContainer} flex flex-col justify-center items-center min-h-[88vh] w-full bg-white flex-grow relative`}
      >
        <h1 className="text-2xl font-bold z-10">Bienvenido a RodeApp</h1>
        <h3 className="z-20 text-center">
          Organiza todo para tu viaje en un solo lugar!
        </h3>
        <CtaBtn></CtaBtn>
        <div className="h-full w-full absolute top-0 bg-black/50"></div>
      </div>
      <section className="min-h-[100vh] w-full flex flex-col justify-center items-center p-5">
        <h2 className="text-bold text-2xl">Que es RodeApp?</h2>
        <p className="text-center">
          En RodeApp, nos apasiona convertir cada viaje en moto en una
          experiencia inolvidable. Somos motoviajeros, exploradores de
          carreteras y amantes de la libertad sobre dos ruedas. Nuestra misión
          es simple: Facilitar la planificación de tus viajes en moto. Desde la
          emocionante anticipación de trazar rutas personalizadas hasta
          descubrir parajes ocultos y compartir experiencias con otros moteros,
          RodeApp es tu compañero integral para cada aventura. Con
          funcionalidades intuitivas y detallada información sobre tus viajes,
          estamos aquí para hacer que cada kilómetro cuente. Únete a la
          comunidad de RodeApp y descubre un mundo de posibilidades en cada giro
          del camino. ¡Prepárate para una nueva era en la planificación de
          viajes en moto con RodeApp!
        </p>
      </section>
      <section className="h-[100vh] w-full bg-green-400">Beneficios</section>
      <section className="min-h-[100vh] w-full">
        Testimonios
        <TestimonialCard
          name="Juan Hernandez"
          location="Buenos Aires, Argentina"
          rating={5}
          testimonial="¡Increíble experiencia utilizando RodeApp para planificar mi último viaje en moto! La aplicación hizo todo mucho más fácil y divertido. ¡Altamente recomendado!"
          date="2 de marzo de 2023"
          avatar="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg"
        />
        <TestimonialCard
          name="María López"
          location="Madrid, España"
          rating={4}
          testimonial="RodeApp hizo que mi viaje en moto fuera mucho más organizado. Pude planificar todas mis paradas y conocer lugares increíbles. Un gran compañero de viaje."
          date="15 de abril de 2023"
          avatar="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
        />
        <TestimonialCard
          name="Carlos Ramirez"
          location="Ciudad de México, México"
          rating={5}
          testimonial="¡RodeApp superó mis expectativas! Me ayudó a encontrar rutas emocionantes y descubrir lugares únicos en mi ciudad. Una herramienta imprescindible para motociclistas."
          date="7 de mayo de 2023"
          avatar="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg"
        />
        <TestimonialCard
          name="Laura Gómez"
          location="Barcelona, España"
          rating={4}
          testimonial="RodeApp ha sido mi compañero constante en todos mis viajes en moto. La planificación de rutas y la información detallada han hecho que cada viaje sea inolvidable."
          date="20 de mayo de 2023"
          avatar="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
        />
      </section>
      <section className="h-[100vh] w-full bg-blue-400">Galeria</section>
    </div>
  );
}

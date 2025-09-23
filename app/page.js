import About from "@/components/home/About";
import Agenda from "@/components/home/Agenda";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Registration from "@/components/home/Registration";
import Speakers from "@/components/home/Speakers";
import Sponsors from "@/components/home/Sponsors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Speakers />
      <Agenda />
      <Registration />
      <Faq />
      <Sponsors />
    </>
  );
}

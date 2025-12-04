import { Hero } from "../components/Hero";
import { ServiceList } from "../components/ServiceList";
import { ServiceAreas } from "../components/ServiceAreas";
import { ContactFooter } from "../components/ContactFooter";

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceList />
      <ServiceAreas />
      <ContactFooter />
    </div>
  );
};

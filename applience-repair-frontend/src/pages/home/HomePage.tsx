import Hero from "./components/Hero";
import ServiceList from "./components/ServiceList";
import ServiceAreas from "./components/ServiceAreas";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceList />
      <ServiceAreas />
    </div>
  );
}

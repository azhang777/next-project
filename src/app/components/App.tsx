import { Accordion } from "./Accordion";
import { Banner } from "./Banner";
import { HouseList } from "./HouseList";

export const App = () => {
  return (
    <>
      <Banner> Providing houses all over the world</Banner>
      <HouseList />
      <Accordion />
    </>
  );
};

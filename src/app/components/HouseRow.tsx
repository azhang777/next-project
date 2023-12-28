import { currencyFormatter } from "../helpers//currency-formatter";
import { House } from "./HouseList";

interface HouseRowProps {
  address: House["address"];
  country: House["country"];
  price: House["price"];
}

export const HouseRow: React.FC<HouseRowProps> = ({
  address,
  country,
  price,
}) => {
  return (
    <tr>
      <td>{address}</td>
      <td>{country}</td>
      <td>{currencyFormatter.format(price)}</td>
    </tr>
  );
};

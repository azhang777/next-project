import React from "react";
import { HouseRow } from "./HouseRow";

export class House {
  id!: number;
  address!: string;
  country!: string;
  price!: number;
}
const houseArray: House[] = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
  },
];

export const HouseList = () => {
  return (
    <>
      <div className='row mb-2'>
        <h5 className='text-center'>Houses currently on the market</h5>
      </div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houseArray.map((house) => (
            <HouseRow
              key={house.id}
              {...house} //use spread operator wisely
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

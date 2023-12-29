"use client"
import React, { useState } from "react";
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
  const [houses, setHouses] = useState(houseArray); //call hooks at the top level, called within the function component satisfies all rules of using hooks
  const [counter, setCounter] = useState(houseArray.length);
  
  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
    setCounter(counter + 1);
  };

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
          {houses.map((house) => (
            <HouseRow
              key={house.id}
              {...house} //use spread operator wisely
            />
          ))}
        </tbody>
      </table>
      <button
          className='btn btn-primary'
          onClick={addHouse}
        >
          Add
        </button>
        <div>{counter}</div> 
    </> //hydration failed because the button was inside table, should not be in table, but below it
  );
};

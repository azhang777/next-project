"use client"
import React, { useEffect, useRef, useState } from "react";
import { HouseRow, HouseRowMem } from "./HouseRow";
interface House {
  id: number;
  address: string;
  country: string;
  price: number;
}

export const HouseList = () => {
  
  const [houses, setHouses] = useState<House[]>([]); //call hooks at the top level, called within the function component satisfies all rules of using hooks
  const counter = useRef<number>(0);
  
  const refValue: number = counter.current;
  useEffect(() => { //this is run after the jsx returned by this function is rendered
    const fetchHouses = async () => {
      try {
        const response = await fetch("../houses.json")
        const data: {houses: House[]} = await response.json();
        setHouses(data.houses);
        counter.current++; //bc  of empty dependency array, this will not change, remove dependency to see it illustrate infinite useEffect hook
      }
      catch(error) {
        console.log('error fetching houses:', error)
      }
    };
    fetchHouses();
  }, []) //square brackets so this hook is called once during initially rendering of HouseList component, without it, everytime HouseList rerenders, this hook will be called and the house data will be set back to its initial state.

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
            <HouseRowMem
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
        <div>{refValue}</div> 
    </> //hydration failed because the button was inside table, should not be in table, but below it
  );
};

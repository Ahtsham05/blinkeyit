import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGlobalContext } from "../provider/GlobalProvider";
import { currencyConverter } from "../utils/currencyConverter";
import AddAddress from "../components/AddAddress";

const CheckoutPage = () => {
  const { totalPrice, totalQty, notDicountedPrice } = useGlobalContext();
  const [openAddressPage, setOpenAddressPage] = useState(false);
  return (
    <section className="min-h-[79vh] p-4 bg-blue-50">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h1 className="font-semibold">Choose your address</h1>
          <div className="bg-white p-2">
            <div className="border-dashed border-2 p-4 flex items-center justify-center min-h-24 bg-blue-50 cursor-pointer" onClick={()=>setOpenAddressPage(true)}>
              <p>Add address</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white">
          <h1 className="font-semibold">Summary</h1>
          <div className="text-sm my-2 p-4">
            <div className="font-semibold">Bill details</div>
            <div className="p-2">
              <div className="flex justify-between items-center">
                <p>Items total</p>
                <p className="flex gap-2">
                  <span className="text-neutral-400 line-through">
                    {currencyConverter(notDicountedPrice)}
                  </span>
                  <span>{currencyConverter(totalPrice)}</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Quantity total</p>
                <p>{totalQty} Items</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Delivery Charge</p>
                <p>free</p>
              </div>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <p>Grand total</p>
              <p>{currencyConverter(totalPrice)}</p>
            </div>
          </div>
          <div className="grid gap-3">
            <button className="p-2 border border-green-700 bg-green-700 text-white rounded hover:bg-green-800">
              Make Payment Online
            </button>
            <button className="p-2 border border-green-700 rounded hover:bg-green-700 hover:text-white">
              Cash On Delivery
            </button>
          </div>
        </div>
      </div>
      {openAddressPage && <AddAddress close={() => setOpenAddressPage(false)} />}
    </section>
  );
};

export default CheckoutPage;

import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
function ConfirmedPage({ name, email }) {
  return (
    <>
      <Header steps={false} />
      <div className='flex flex-col justify-center bg-white shadow-lg gap-2 -mt-16 rounded-md p-6 mx-2 py-20 md:mx-32 lg:mx-64 xl:mx-[25rem] md:py-16'>
        <h1 className='text-[#0d274f] font-bold text-xl text-center'>
          Order has been confirmed 👍
        </h1>
        <p className='text-[#b0afb4] font-medium text-md text-center'>
          Hi {name ? name : "John Giovanni"}, You'll receive an email shortly
          about the details of your order at this{" "}
          <span className='text-sm'>
            "{email ? email : "johngiovann1@gmail.com"}"
          </span>{" "}
          email address .
        </p>
        <div className='flex justify-center pt-4'>
          <Link
            to='/'
            className='text-medium py-2 px-3 rounded-md text-white bg-[#483ffc]'>
            Order again
          </Link>
        </div>
      </div>
    </>
  );
}

export default ConfirmedPage;

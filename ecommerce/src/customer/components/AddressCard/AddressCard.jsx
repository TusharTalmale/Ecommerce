import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl  border border-gray-200">

      <div className="space-y-4 text-sm text-gray-700 p-2 pl-10">
        <div>
          <p className="text-base font-semibold">
            {`${address?.firstName} ${address?.lastName}`}
          </p>
        </div>

        <div className="leading-relaxed">
          <p>{`${address?.streetAddress}, ${address?.city}`}</p>
          <p>{`${address?.state}, ${address?.zipCode}`}</p>
        </div>

        <div>
          <p className="font-semibold text-sm text-gray-800 mb-1">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;

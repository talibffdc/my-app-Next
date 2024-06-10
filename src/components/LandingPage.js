"use client";

import React from "react";
import Dropdown from "./Dropdown";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center border-b p-4">
          <button className="text-xl font-bold">&larr;</button>
          <div className="text-lg font-semibold">Talib</div>
          <div className="text-lg font-bold"> </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="flex justify-between items-center border-b p-4">
          <Dropdown />
          <div className="text-sm text-gray-500">Showing All Time Details</div>
        </div>
        <div className="flex justify-between items-center border-b p-4">
          <div className="text-lg font-semibold">Opening Balance</div>
          <div className="text-lg font-semibold">Rs 10,000.00 Cr</div>
        </div>

        <div className="" style={{maxWidth:'100%'}}>
          <table className=" bg-white">
            <thead>
              <tr>
                <th className="px-2 py-3 border-b border-white-900 bg-blue-400 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-8 py-3 border-b border-gray-200 bg-blue-400 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Particular
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-blue-400 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Dr
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-blue-400 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Cr
                </th>
                <th className="px-8 py-3 border-b border-gray-200 bg-blue-400 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody className="w-full h-72 items-center justify-center ">
          <tr className="w-full">
            <td className="text-center w-full" colSpan="5">
              No transaction available
            </td>
          </tr>
        </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center border-t p-4">
          <div className="text-lg font-semibold">Closing Balance</div>
          <div className="text-lg font-semibold">$ 10,000.00 Cr</div>
        </div>
        <div className="flex justify-around border-t p-4">
          <button className="text-blue-500">Image</button>
          <button className="text-blue-500">PDF</button>
          <button className="text-blue-500">Excel</button>
          <button className="text-blue-500">Html</button>
        </div>
      </div>
    </div>
  );
}
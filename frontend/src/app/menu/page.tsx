"use client"

import { useAppDispatch, useAppSelector } from "@/lib/global/hooks"
import { fetchMenuItem } from "@/lib/slice/menu/menu.slice"
import { useEffect, useState } from "react"
import Link from "next/link"


const Menu = () => {

  const dispatch = useAppDispatch()
  const { data: menu } = useAppSelector((store) => store.menu)
  useEffect(() => {
    dispatch(fetchMenuItem())
  }, [])


  return (
    <div className="bg-gray-200 ">

      <div className={` w-full min-h-screen flex flex-col flex-1 lg:grid lg:grid-cols-4 lg:gap-3 md:grid md:mx-4 md:grid-cols-3 md:gap-3 lg:mx-3 my-1 `}>
        {menu.map((item, index) => (

          <Link href={`/place-item/${item._id}`}>
            <div key={index} className=" group w-full h-[45vh] border border-gray-300 shadow-xl hover:shadow-white shadow-black  my-5 flex flex-col overflow-hidden transition-all duration-300 ease-out hover:scale-105 cursor-pointer " >
              <img
                src={item.images[0]}
                className="w-full h-1/2 object-cover px-2 py-1 rounded-xl "
              />
              <div className="flex flex-col justify-between flex-1 p-2 text-center">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="text-gray-500 text-xs">
                  {item.description}
                </p>
                <Link href={`/orders`} className="flex  justify-center">
                  <button className=" mr-4 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 transition-opacity duration-300  bg-amber-300 border   hover:bg-black hover:text-white rounded-xl shadow-2xl font-semibold cursor-pointer px-22 py-2">
                    ${Number(item.price.$numberDecimal)}
                  </button>

                  <button className=" translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 transition-opacity duration-300  bg-green-300 text-black border   hover:bg-black hover:text-white rounded-xl shadow-2xl font-semibold cursor-pointer px-6 py-2">
                    Add to Cart
                  </button>
                </Link>

              </div>
            </div>
          </Link>



        ))}




      </div>


    </div >
  )
}

export default Menu

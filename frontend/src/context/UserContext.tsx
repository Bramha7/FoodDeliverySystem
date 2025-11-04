
"use client"

import { Children, createContext, useState } from "react"
const [addtocart, setAddtoCart] = useState<number>(0)

const userContext = createContext<any>(0)

function AddtoCart() {
  setAddtoCart((prev) => prev + 1)
}


<userContext.Provider value={[AddtoCart, addtocart]}>




</userContext.Provider>






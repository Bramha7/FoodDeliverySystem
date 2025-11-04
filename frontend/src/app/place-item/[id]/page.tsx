
"use client"

import { useAppSelector } from "@/lib/global/hooks"
import { useEffect } from "react"

const SingleItem = ({ params }) => {


  const { data } = useAppSelector((store) => store.menu.data)
  const { id } = params

  useEffect(() => {
    console.log(menu)


  }, [])

  return (

    <div>

    </div>
  )
}

export default SingleItem

"use client"
import { Truck, User } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";






export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push('/login')
    }

  }, [router])
  return <div className="min-h-screen max-w-screen">
    {/*home*/}
    <div className="flex items-center justify-center ">
      <img src={'/Food.gif'} className="min-h-screen w-full" alt="Internet available" />


    </div>





  </div>


}

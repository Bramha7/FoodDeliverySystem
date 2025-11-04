"use client"
import { useAppDispatch, useAppSelector } from "@/lib/global/hooks";
import { customerLogin, setStatus } from "@/lib/slice/auth/cus.auth.slice";
import { IcusLogin } from "@/lib/slice/auth/cus.auth.types";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Link from 'next/link'
import { STATUS } from "@/lib/global/status";
import { useRouter } from "next/navigation";


const Login = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { status } = useAppSelector((store) => store.cusAuth)

  const [data, setData] = useState<IcusLogin>({
    email: "",
    password: ""
  })

  const onChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })

  }

  const onSubmitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(customerLogin(data))
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.replace('/')
    }
  }, [router, status])

  useEffect(() => {
    dispatch(setStatus(STATUS.LOADING))
    localStorage.removeItem("token")
    if (status === STATUS.LOADING) {
      router.replace('/login')
    }

  }, [dispatch])

  useEffect(() => {

    if (status === STATUS.SUCCESS) {
      router.push('/')
    }
  }, [status, router])



  return <div className={`bg-[url("/noodels.jpg")] min-h-screen max-w-screen flex justify-center items-center  bg-cover bg-center bg-no-repeat  relative `}>
    <ToastContainer />
    <div className="container flex justify-center items-center bg-transparent">
      <div className="wrapper border-0 mt-2 h-[50%] w-[650px] ">
        <form className="  " onSubmit={onSubmitData}>
          <h2 className="font-bold text-[40px] text-center md:text-5xl md:px-2 text-black lg:text-5xl sm:my-6">Sign In</h2>
          <div className="email lg:mt-8  flex justify-center items-center rounded-2xl">
            <input className="text-center w-full h-[40px] outline-0 border-1 rounded-2xl text-xl p-2" type="email" placeholder="Email" name="email" value={data.email} onChange={onChangeData} />
          </div>
          <p className="flex justify-end my-2 hover:text-gray-800 text-blue-700 text-[20px]" ><span>forgot password?</span></p>

          <div className="password mt-3  flex justify-center items-center">
            <input className="text-center w-full text-black h-[40px] rounded-2xl border-1 outline-0 text-xl p-2" type="password" placeholder="Password" name="password" value={data.password} onChange={onChangeData} />
          </div>

          <div className=" w-full mt-6 h-[50px] flex justify-center items-center ">
            <button className="bg-black w-full h-[45px] font-[500] text-[23px] text-white rounded-[12px] cursor-pointer hover:bg-gray-500 ">Login</button>
          </div>
          <label className="flex justify-center items-center mt-4 text-[18px]">Don't have an account?
            <Link href={'/register'}>
              <span className="text-blue-500 ml-2 hover:underline cursor-pointer text-xl font-[500]">Register</span>

            </Link>
          </label>


        </form >
      </div>
    </div>





  </div >

}


export default Login

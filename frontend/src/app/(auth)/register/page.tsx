"use client"
import { IcusRegistration } from "@/lib/slice/auth/cus.auth.types"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from "@/lib/global/hooks"
import { cusRegistration, setStatus } from "@/lib/slice/auth/cus.auth.slice"
import { STATUS } from "@/lib/global/status"
import { useRouter } from "next/navigation"





const Register = () => {
  const router = useRouter()
  const { status } = useAppSelector((store) => store.cusAuth)
  const dispatch = useAppDispatch()

  const [showPassword, setShowPassword] = useState(false)

  const [regData, setRegData] = useState<IcusRegistration>({
    username: "",
    email: "",
    password: "",
    phone_number: "",

    address: {
      street: "",
      city: "",
      ward: "",
      landmark: "",
    },
  })

  useEffect(() => {
    if (status === STATUS.SUCCESS) {
      router.push('/login')
      dispatch(setStatus(STATUS.LOADING))
    }

  }, [status, router, dispatch])

  useEffect(() => {
    localStorage.removeItem("token")
    dispatch(setStatus(STATUS.LOADING))
  }, [dispatch])


  const onChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (["street", "city", "ward", "landmark"].includes(name)) {
      setRegData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setRegData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

  }



  const onSubmitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(cusRegistration(regData))

  }
  return <div className="flex items-center justify-center min-h-screen bg-yellow-400">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-fit min-h-150 shadow-gray-300">
      <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-10 mt-10">Sign Up</h2>
      <form className="" onSubmit={onSubmitData}>
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Username */}

          <div>
            <input
              onChange={onChangeData}
              type="text"
              placeholder="Username"
              name="username"
              value={regData.username}
              className="w-full border-0 hover:border hover:border-gray-400 rounded-2xl text-center px-2 py-2 outline-0 shadow-2xl hover:shadow-gray-400 bg-white"
            />
          </div>


          <div>
            <input
              onChange={onChangeData}
              type="email"
              placeholder="Email"
              name="email"
              value={regData.email}
              className="w-full border-0 hover:border hover:border-gray-400 rounded-2xl text-center px-2 py-2 outline-0 shadow-2xl hover:shadow-gray-400 bg-white"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={regData.password}
              onChange={onChangeData}
              className="w-full border-0 hover:border hover:border-gray-400 rounded-2xl text-center px-4 py-2 pr-10 outline-0 shadow-2xl hover:shadow-gray-400 bg-white"
            />
            {showPassword ? (
              <Eye
                onClick={() => setShowPassword(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-yellow-500"
                size={18}
              />
            ) : (
              <EyeOff
                onClick={() => setShowPassword(true)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-yellow-500"
                size={18}
              />
            )}
          </div>

          {/* Phone Number */}
          <div>
            <input
              onChange={onChangeData}
              type="tel"
              placeholder="Phone Number"
              name="phone_number"
              value={regData.phone_number}
              className="w-full border-0 hover:border hover:border-gray-400 rounded-2xl text-center px-2 py-2 outline-0 shadow-2xl hover:shadow-gray-400 bg-white"
            />
          </div>

          <div>
            <input
              onChange={onChangeData}
              type="text"
              placeholder="Street"
              name="street"
              value={regData.address.street}
              className="w-full border-0 hover:border hover:border-gray-400 rounded-2xl text-center px-2 py-2 outline-0 shadow-2xl hover:shadow-gray-400 bg-white"
            />
          </div>

          <div>
            <input
              onChange={onChangeData}
              type="text"
              placeholder="City"
              name="city"
              value={regData.address.city}
              className="w-full border-0 hover:border hover:border-gray-400 rounded-2xl text-center px-2 py-2 outline-0 shadow-2xl hover:shadow-gray-400 bg-white"
            />
          </div>

          <div>
            <input
              onChange={onChangeData}
              type="text"
              placeholder="Ward"
              name="ward"
              value={regData.address.ward}
              className="w-full border-0 hover:border hover:border-gray-400 rounded-2xl text-center px-2 py-2 outline-0 shadow-2xl hover:shadow-gray-400 bg-white"
            />
          </div>

          <div className="grid place-items-center">
            <input
              onChange={onChangeData}
              type="text"
              placeholder="Landmark"
              name="landmark"
              value={regData.address.landmark}
              className="w-full border-0 hover:border hover:border-gray-400 rounded-2xl text-center px-2 py-2 outline-0 shadow-2xl hover:shadow-gray-400 bg-white"
            />
          </div>
        </div>


        <button className="w-full border  mr-4 lg:mt-8 mt-3 h-10 text-2xl font-semibold text-white bg-black rounded-xl ">Register</button>

      </form>
      <p className="flex justify-center items-center mt-2">Havae an account?<Link href={'/login'}><span className="text-blue-400 text-[16px] font-semibold">&nbsp; Login</span></Link> </p>

    </div>
  </div>






}

export default Register

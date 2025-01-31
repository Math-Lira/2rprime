import React from "react"
import Image from "next/image"

export default function FormLogin() {
    return (
        <div>
                  <form className="max-w-screen-md mx-auto">
        <div className="grid gap-y-6">

          <div>
            <label htmlFor="email" className="block font-poppins font-medium text-sm mt-6 mb-2 text-white">
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-4 block w-96 border border-white rounded-lg text-base bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
            <p className="hidden mb-2 text-sm text-red-600 mt-2" id="email-error">
              Please include a valid email address so we can get back to you
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block font-poppins mb-2 font-medium text-sm text-white">
                Password
              </label>
              <a
                className="text-sm text-lightGreen hover:underline focus:outline-none font-bold"
                href="../examples/html/recover-account.html"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className="py-3 px-4 block w-96 border border-white rounded-lg text-base bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
            <p className="hidden text-sm text-red-600 mt-2" id="password-error">
              8+ characters required
            </p>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="appearance-none w-5 h-5 border border-white rounded bg-transparent checked:bg-lightGreen focus:ring-lightGreen focus:outline-none checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-center checked:after:text-[12px]"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-white">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-32 inline-flex justify-center items-center text-lg font-bold rounded-lg border border-transparent bg-lightGreen text-white hover:bg-lightGreen2 focus:outline-none focus:bg-lightGreen2 disabled:opacity-50 disabled:pointer-events-none"
          >
            Sign in
          </button>

          <div className="py-4 flex items-center text-xs text-white uppercase before:flex-1 before:border-t before:border-gray-200 after:flex-1 after:border-t after:border-gray-200">
            <span className="px-">OR</span>
          </div>

          <div className="flex justify-center">
                  <button type="button" className="py-3 px-4 inline-flex justify-center items-center rounded-lg bg-white text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-white">
                    <Image src="/icon-google.png" width={26} height={26} alt="Icone Google"/>
                  </button>
          </div>
        </div>
      </form>
        </div>
    )
}
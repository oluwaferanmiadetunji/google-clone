import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const [value, setValue] = useState<string>('')

  const handleSubmit = async (event: {
    preventDefault: () => void
  }): Promise<void> => {
    event.preventDefault()

    if (window && !!value) {
      window.location.href = `https://google.com/search?q=${value}`
    }
  }
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google Home page clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto flex lg:justify-end justify-between px-6 items-center h-header w-screen">
        <div className="flex">
          <a href="#" className="mr-4 hover:underline text-sm">
            Gmail
          </a>
          <a href="#" className="mr-4 hover:underline text-sm">
            Images
          </a>
        </div>

        <div className="flex">
          <div className="w-5 h-5 hover:bg-button hover:rounded-full flex items-center justify-center cursor-pointer">
            <svg className="text-footer" focusable="false" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
          </div>

          <button className="lg:px-8 px-4 lg:py-2 py-1 mr-4 bg-signin text-white ml-4 hover:border-2 hover:border-gray-400 hover:shadow rounded-md text-button bg-button text-sm">
            Sign In
          </button>
        </div>
      </header>

      <main className="container mx-auto md:flex pt-16 justify-center items-center px-2 h-main w-screen">
        <div className="justify-center items-center">
          <div className="flex justify-center items-center h-1">
            <Image
              src="/google.png"
              width="280"
              height="90"
              layout="intrinsic"
              alt="google"
            />
          </div>

          <form
            className="justify-center items-center md:w-600 mt-14 relative"
            onSubmit={handleSubmit}
          >
            <div className="absolute top-1.5 left-3 left-3 md:top-3 md:left-5">
              <Image
                src="/search.png"
                width="25"
                height="25"
                layout="intrinsic"
                alt="google"
              />
            </div>

            <input
              type="text"
              className="border-1 hover:rounded-none hover:shadow-lg focus:outline-none rounded-full py-2 md:py-3 md:px-14 px-12 w-full text-sm"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />

            <div className="absolute top-1.5 right-3.5 md:top-3 md:right-5">
              <Image
                src="/search-by-voice.png"
                width="25"
                height="25"
                layout="intrinsic"
                alt="google"
              />
            </div>
          </form>

          <div className="justify-center items-center mt-8 hidden md:flex">
            <button className="px-4 py-2 mr-4 hover:border-2 hover:border-gray-400 hover:shadow rounded-lg text-button bg-button text-sm">
              Google Search
            </button>

            <a
              className="px-4 py-2 mr-6 hover:border-2 hover:border-gray-400 hover:shadow rounded-lg text-button bg-button border-2 border-black text-sm"
              href="https://perfects.engineering"
              target="_blank"
              rel="noreferrer"
            >
              I&apos;m Feeling Lucky
            </a>
          </div>

          <div className="md:flex text-center justify-center items-center mt-6 w-full text-sm">
            <p className="mr-2 text-sm text-primary justify-center mb-2 md:mb-0">
              Google offered in:
            </p>

            <div className="flex justify-center items-center">
              <a
                href="#"
                className="mr-3 text-anchor hover:underline text-primary"
              >
                Hausa
              </a>
              <a href="#" className="mr-3 text-anchor hover:underline">
                Igbo
              </a>
              <a href="#" className="mr-3 text-anchor hover:underline">
                Èdè Yorùbá
              </a>
              <a href="#" className="text-anchor hover:underline">
                Nigerian Pidgin
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-screen bg-footer h-footer py-2 md:py-4">
        <p className="pb-2 ml-8 text-footer">Nigeria</p>

        <hr />

        <div className="w-screen flex md:justify-between justify-center text-center px-8 mt-3">
          <div className="flex hidden md:block">
            <a href="#" className="mr-4 text-footer hover:underline text-sm">
              About
            </a>
            <a href="#" className="mr-4 text-footer hover:underline text-sm">
              Advertising
            </a>
            <a href="#" className="mr-4 text-footer hover:underline text-sm">
              Business
            </a>
            <a href="#" className="mr-4 text-footer hover:underline text-sm">
              How Search Works
            </a>
          </div>

          <div className="flex justify-center hidden md:block">
            <p className="text-footer text-sm">
              <Image
                src="/carbon.png"
                width="12"
                height="12"
                layout="intrinsic"
                alt="google"
              />

              <a href="#" className="ml-2 text-footer hover:underline text-sm">
                Carbon neutral since 2017
              </a>
            </p>
          </div>

          <div className="flex justify-center">
            <a href="#" className="mr-4 text-footer hover:underline text-sm">
              Privacy
            </a>
            <a href="#" className="mr-4 text-footer hover:underline text-sm">
              Terms
            </a>
            <a href="#" className="mr-4 text-footer hover:underline text-sm">
              Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

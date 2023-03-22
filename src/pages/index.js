/* eslint-disable @next/next/no-img-element */
import { FcLike, FcComments, FcShare } from 'react-icons/fc';

export default function Home() {
  return (
    <>
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-start px-4 py-6 w-full bg-base-100 border rounded">
            <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1">Brad Adams </h2>
              </div>
              <p className="mt-3 text-gray-700 text-sm">
                Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
              </p>
              <div className="mt-4 flex items-center">
                <button className="flex">
                  <FcLike />
                </button>
                <button className="flex mx-4">
                  <FcComments />
                </button>
                <button className="flex">
                  <FcShare />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

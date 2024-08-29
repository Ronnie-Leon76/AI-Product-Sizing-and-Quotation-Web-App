import Image from 'next/image'
import React from 'react'

type Props = {}

const CustomerListCard = (props: Props) => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className=" rounded-full"
                  width={24}
                  height={24}
                  src="/images/cust-img2.jpeg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  width={24}
                  height={24}
                  className=" rounded-full"
                  src="/images/cust-img1.jpeg"
                  alt="Bonnie image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Bonnie Green
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3467
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className=" rounded-full"
                  width={24}
                  height={24}
                  src="/images/cust-img2.jpeg"
                  alt="Michael image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Michael Gough
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $67
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  width={24}
                  height={24}
                  className=" rounded-full"
                  src="/images/cust-img1.jpeg"
                  alt="Lana image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Lana Byrd
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $367
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  width={24}
                  height={24}
                  className=" rounded-full"
                  src="/images/cust-img2.jpeg"
                  alt="Thomas image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Thomes Lean
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Image
                  width={24}
                  height={24}
                  className=" rounded-full"
                  src="/images/cust-img1.jpeg"
                  alt="Thomas image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Thomes Lean
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CustomerListCard
import { FaEye } from "react-icons/fa";
import { MdOutlineAddCard } from "react-icons/md";

// modal 

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'



const ShopRow = ({ medicine, }) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='block relative'>
                <img
                  alt='profile'
                  src={medicine?.image}
                  className='mx-auto object-cover rounded h-10 w-15 '
                />
              </div>
            </div>
            <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>{medicine?.title}</p>
            </div>
          </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {medicine.name}
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {medicine.categoryName}
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0  opacity-50 rounded-full'
            ></span>
            <span className='text-2xl'><MdOutlineAddCard /></span>
          </span>
        </td>
        <td onClick={openModal} className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 opacity-50 rounded-full'
            ></span>
            <span className='text-2xl'><FaEye /></span>
          </span>
        </td>

        {/* modal */}
        <td>

          {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10 " onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto border ">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      
                      <div className="flex max-w-md  overflow-hidden items-center bg-white rounded-lg ">
                        <div className=" w-1/2 bg-cover" >
                          <img
                            alt='profile'
                            src={medicine?.image}
                            className='mx-auto object-cover rounded  '
                          />
                        </div>

                        <div className="w-2/3 p-4 md:p-4">
                          <h1 className="text-2xl  ">{medicine?.name} </h1>
                          <h2 className="text-sm"></h2>
                          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{medicine.description}</p>
                          <p className="mt-2 text-sm  "> Company :<span className="text-xs"> {medicine.company}</span></p>
                          <p className="mt-2 text-sm "> Category :<span className="text-xs"> {medicine.categoryName}</span></p>



                          <div className="flex justify-between mt-3 item-center">
                            <h1 className="text-lg font-bold text-gray-700  md:text-xl">Price : ${medicine.price}</h1>
                            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                          </div>
                        </div>
                      </div>
                      {/* <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div> */}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          {/* modal */}
        </td>
      </tr>


    </>
  );
};

export default ShopRow;
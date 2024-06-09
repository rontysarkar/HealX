import { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
const RoleModal = ({isOpen,closeModal,handleSetRole}) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 text-center uppercase"
                                    >
                                        choose her role
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 bg-base-100 rounded-box  uppercase space-y-2 text-center">


                                            <li onClick={() => handleSetRole()} className="font-bold hover:bg-cyan-400 hover:text-white hover:rounded-3xl p-2 border">Admin</li>
                                            <li onClick={() => handleSetRole()} className="font-bold hover:bg-cyan-400 hover:text-white hover:rounded-3xl p-2 border">Seller</li>
                                            <li onClick={() => handleSetRole()} className="font-bold hover:bg-cyan-400 hover:text-white hover:rounded-3xl  p-2 border">User</li>
                                        </ul>
                                    </div>

                                    <div className="mt-4">

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
    );
};

export default RoleModal;
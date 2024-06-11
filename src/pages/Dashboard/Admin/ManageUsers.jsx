import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers, FaUserCheck } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
// import RoleModal from "../../../components/Modal/RoleModal";

const ManageUsers = () => {
    const { user: presentUser } = useAuth()
    let [isOpen, setIsOpen] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const axiosPrivate = useAxiosPrivate()



    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const { data } = await axiosPrivate('users')
            return data

        }
    })



    const handleDeleteUser = async (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete User"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosPrivate.delete(`users/${id}`)
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    // toast.success('The user has been successfully deleted from your')
                    // console.log('delete')
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                    });

                }

            }
        });

    }



    function closeModal() {
        setIsOpen(false)
    }

    function openModal(userEmail) {
        setIsOpen(true)
        // console.log("user email function call",userEmail)
        setUserEmail(userEmail)

    }


    const handleSetRole = async (email, role) => {
        closeModal()

        const user = {
            email,
            role
        }

        const { data } = await axiosPrivate.patch('users', user)
        if (data.modifiedCount > 0) {
            refetch()
            toast.success(` ${role}  Role Set Successfully `)
        }



    }

    return (
        <>
            <h1 className="text-3xl uppercase text-center py-8 font-semibold text-cyan-300">Manage All Users</h1>

            <div className="lg:w-[1200px] mx-auto overflow-x-auto mt-10">
                <h1 className="text-2xl font-bold uppercase py-4">All Users :{users?.length}</h1>
                <table className="table table-zebra shadow-2xl p-20">
                    {/* head */}
                    <thead>
                        <tr className="text-base uppercase bg-cyan-200">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                {user?.email === presentUser?.email ? <th> <button className="btn btn-ghost btn-xs text-2xl text-orange-300"><MdAdminPanelSettings /></button></th> :

                                    <th onClick={() => openModal(user.email)} className="group">
                                        {user.role === 'user' && <button className="btn btn-ghost btn-xs text-xl text-orange-300"><FaUsers /></button>}
                                        {user.role === 'seller' && <button className="btn btn-ghost btn-xs text-xl text-orange-300"><FaUserCheck /></button>}
                                        {user.role === 'admin' && <button className="btn btn-ghost btn-xs text-2xl text-orange-300"><MdAdminPanelSettings /></button>}
                                    </th>
                                }
                                {/* <th>
                                    {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakingAdmin(user._id)} className="btn btn-ghost btn-xs text-2xl text-orange-300"><FaUsers /></button>}
                                </th> */}
                                <th>
                                    {user.role === 'admin' ? <button disabled className="btn btn-ghost btn-xs text-xl text-red-600"><FaTrashAlt /></button> : <button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost btn-xs text-xl text-red-600"><FaTrashAlt /></button>}

                                </th>


                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {/* <RoleModal handleSetRole={handleSetRole} closeModal={closeModal} isOpen={isOpen} /> */}


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


                                            <li onClick={() => handleSetRole(userEmail, 'admin')} className="font-bold hover:bg-cyan-400 hover:text-white hover:rounded-3xl p-2 border">Admin</li>
                                            <li onClick={() => handleSetRole(userEmail, 'seller')} className="font-bold hover:bg-cyan-400 hover:text-white hover:rounded-3xl p-2 border">Seller</li>
                                            <li onClick={() => handleSetRole(userEmail, 'user')} className="font-bold hover:bg-cyan-400 hover:text-white hover:rounded-3xl  p-2 border">User</li>
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
        </>
    );
};


export default ManageUsers;
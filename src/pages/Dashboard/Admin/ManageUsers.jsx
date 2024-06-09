import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import toast from "react-hot-toast";

const ManageUsers = () => {
    const { data: users = [] ,refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const { data } = await axiosSecure('users')
            console.log(data)
            return data

        }
    })

    const handleDeleteUser = async (id) => {
        const { data } = await axiosSecure.delete(`users/${id}`)
        console.log(data)
        if (data.deletedCount > 0) {
            refetch()
            toast.success('The user has been successfully deleted from your')

        }
    }
    return (
        <div className="">
            <h1 className="text-3xl uppercase text-center py-10">Manage All Users</h1>

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
                            users?.map((user, index) => <tr  key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <th>
                                    <button  className="btn btn-ghost btn-xs text-2xl text-orange-300"><FaUsers /></button>
                                </th>
                                {/* <th>
                                    {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakingAdmin(user._id)} className="btn btn-ghost btn-xs text-2xl text-orange-300"><FaUsers /></button>}
                                </th> */}
                                <th>
                                    <button onClick={()=>handleDeleteUser(user._id)} className="btn btn-ghost btn-xs text-xl text-red-600"><FaTrashAlt /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default ManageUsers;
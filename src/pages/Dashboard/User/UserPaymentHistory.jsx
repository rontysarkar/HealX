import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { Helmet } from "react-helmet-async";

const UserPaymentHistory = () => {
    const { user } = useAuth()
    const axiosPrivate = useAxiosPrivate()

    const { data: paymentsData = [] } = useQuery({
        queryKey: ["payments",user?.email],
        queryFn: async () => {
            const res = await axiosPrivate(`payments/${user?.email}`)
            return res.data
        }
    })

    return (
        <>
        <Helmet><title>HealX || Payment History </title></Helmet>
            <h1 className="text-3xl uppercase text-center py-8 font-semibold text-cyan-300">Payments History</h1>

            <div className="lg:w-[1200px] mx-auto overflow-x-auto mt-10">
                <h1 className="text-2xl font-bold uppercase py-4">Total Payments :{paymentsData?.length}</h1>
                <table className="table table-zebra shadow-2xl p-20">
                    {/* head */}
                    <thead>
                        <tr className="text-base uppercase bg-cyan-200">
                            <th></th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            paymentsData?.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.price}</td>

                                <th className="text-xs">{payment.transactionId}</th>

                                <th className={` uppercase ${payment.status === 'paid'? 'text-green-400 pl-6'  : 'text-red-400'}`}>
                                    {payment.status}
                                </th>


                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserPaymentHistory;
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import usePayments from "../../Hooks/usePayments";

const Invoice = () => {
    const { user } = useAuth()
    const [paymentsData] = usePayments()
    const myPayments = paymentsData.filter(p=>p.email === user?.email)

    return (
        <div>
            <Helmet><title>HealX || Invoice </title></Helmet>
            <div className="mx-auto  ">
                <div className="w-40 mx-auto  rounded-full">
                    <img className="mx-auto " src="logo.png" alt="" />
                </div>
                <h1 className="text-3xl uppercase text-center py-4 font-semibold text-cyan-300">Your Information</h1>

            <div className="lg:w-[1200px] mx-auto overflow-x-auto mt-10">
                <h1 className="text-2xl font-bold uppercase py-4">Total Payments :{myPayments?.length}</h1>
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
                            myPayments?.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.price}$</td>

                                <th className="text-xs">{payment.transactionId}</th>

                                <th className={` uppercase ${payment.status === 'paid'? 'text-green-400 pl-6'  : 'text-red-400'}`}>
                                    {payment.status}
                                </th>


                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
                
            </div>

        </div>
    );
};

export default Invoice;
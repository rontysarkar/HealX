import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import usePayments from "../../../Hooks/usePayments";

const PaymentManagement = () => {
    const axiosPrivate = useAxiosPrivate()
    const [paymentsData,refetch] = usePayments()
    

    const handlePaid = async (id) =>{
        const {data} = await axiosPrivate.patch(`payments/${id}`)
        console.log(data)
        if(data.modifiedCount > 0){
            refetch()
        }
    }
    return (
        <>
        <h1 className="text-3xl uppercase text-center py-8 font-semibold text-cyan-300">Payments Management</h1>

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
                        <th>Action</th>
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
                            <th >
                            {
                                payment.status === 'pending' ? <button onClick={()=>handlePaid(payment._id)} ><FaRegCheckCircle className="text-3xl ml-3 hover:text-green-500" /></button> : <button><FaCircleCheck className="text-3xl ml-3 text-green-400" /></button>
                            }
                            
                            

                            </th>


                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </>
    );
};

export default PaymentManagement;
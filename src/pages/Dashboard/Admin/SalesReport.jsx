import { Helmet } from "react-helmet-async";
import useSalesMedicine from "../../../Hooks/useSalesMedicine";

const SalesReport = () => {
    const [salesData] = useSalesMedicine()
    console.log(salesData)
    const totalPrice = salesData?.reduce((total,sales)=>total + sales?.price,0)

    return (
        <>
            <Helmet><title>HealX || Payment </title></Helmet>
            <h1 className="text-3xl uppercase text-center py-8 font-semibold text-cyan-300">Payments Management</h1>

            <div className="lg:w-[1200px] mx-auto overflow-x-auto mt-10">
                <h1 className="text-2xl font-bold uppercase py-4">Total Sales :{salesData?.length}</h1>
                <table className="table table-zebra shadow-2xl p-20">
                    {/* head */}
                    <thead>
                        <tr className="text-base uppercase bg-cyan-200">
                            <th></th>
                            <th>Medicine Name</th>
                            <th>Seller Email</th>
                            <th>Total Price</th>
                            <th>categoryName</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            salesData?.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.name}</td>
                                <td>{payment.sellerEmail}</td>

                                <th className="text-lg">{totalPrice}</th>

                                
                                <th >{payment.categoryName}</th>


                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SalesReport;
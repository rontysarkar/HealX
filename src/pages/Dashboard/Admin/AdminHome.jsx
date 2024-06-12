import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import useAuth from "../../../Hooks/useAuth";
import { MdOutlinePayments } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import usePayments from "../../../Hooks/usePayments";

const AdminHome = () => {
    const { user } = useAuth()
    const axiosPrivate = useAxiosPrivate()
    const [paymentsData] = usePayments()

    const paid = paymentsData.filter(payment => payment.status === 'paid')
    const pending  = paymentsData.filter(payment => payment.status === 'pending')


    const { data: stats } = useQuery({
        queryKey: ['admin-status'],
        queryFn: async () => {
            const res = await axiosPrivate.get('admin-status')
            return res.data
        }
    })

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl p-20 font-bold ">
                <span> Hi , Welcome </span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </h1>
            <div className="stats shadow w-full">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <MdOutlinePayments className="text-3xl" />

                    </div>
                    <div className="stat-title font-bold">Revenue</div>
                    <div className="stat-value">{stats?.revenue} $</div>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl" />
                    </div>
                    <div className="stat-title font-bold ">Users</div>
                    <div className="stat-value">{stats?.users}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title font-bold">Paid Total  </div>
                    <div className="stat-value">{paid?.length}</div>

                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <TbTruckDelivery className="text-3xl" />

                    </div>
                    <div className="stat-title font-bold">Pending Total</div>
                    <div className="stat-value">{pending?.length}</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;
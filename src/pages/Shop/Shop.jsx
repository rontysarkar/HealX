import ShopRow from "./ShopRow";
import useMedicine from "../../Hooks/useMedicine";
import useAuth from "../../Hooks/useAuth";
import { axiosCommon } from "../../Hooks/useAxiosCommon";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";





const Shop = () => {
  const {user} = useAuth()
  const [,refetch] =useCart()
  const [medicines] = useMedicine()
  
  const handleAddCart = async(medicine) =>{
    console.log("clicking medicine",medicine)
    
    const medicineData = {
      userName:user?.displayName,
      userEmail:user?.email,
      medicineName:medicine.name,
      medicinePrice:medicine.price,
      medicineId:medicine._id,
    }

    const {data} = await axiosCommon.post('cart',medicineData)
    console.log(data)
    if(data.insertedId){
      toast.success(`${medicine.name} has been added to your cart`)
      refetch()
    }

    
  }




 
  return (
    <>
      <div className='w-[1200px] mx-auto px-4 sm:px-8'>

        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    {/* <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >

                    </th> */}
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Medicines Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Medicines Category
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Select
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>{/* User data table row */}
                  {
                    medicines?.map(medicine => <ShopRow key={medicine._id} medicine={medicine} handleAddCart={handleAddCart}  />)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
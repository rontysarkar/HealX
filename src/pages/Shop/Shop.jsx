import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShopRow from "./ShopRow";





const Shop = () => {
  
    const {data,refetch} = useQuery({
        queryKey:['shop'],
        queryFn:async() =>{
            const res = await axios('products.json')
            return res.data
        }
    })


    

    console.log(data)
    return (
        <>
        <div className='container mx-auto px-4 sm:px-8'>
          
          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        
                      </th>
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
                    data?.map(medicine=><ShopRow key={medicine.name} medicine={medicine}   refetch={refetch}/>)
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
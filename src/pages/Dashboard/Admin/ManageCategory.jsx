import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { Fragment, useState } from 'react'
import toast from 'react-hot-toast';
import { FadeLoader } from 'react-spinners';
import useCategory from '../../../Hooks/useCategory';
import CategoryRow from '../../../components/CategoryRow';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';
const ManageCategory = () => {
    const [loading,setLoading] = useState(false)
    let [isOpen, setIsOpen] = useState(false)
    const [category,refetch] = useCategory()
    const axiosPrivate = useAxiosPrivate()

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleSubmit =async e =>{
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const formData = new FormData()
        formData.append("image",form.elements.image.files[0])

        const {data :imageBB} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageBB_hosting_key}`,formData)
        console.log(imageBB)

        const categoryInfo = {
            categoryName :form.name.value,
            categoryImage:imageBB.data.display_url,
        }
        console.log(categoryInfo)
        const {data} = await axiosPrivate.post('category',categoryInfo)
        console.log(data)
        if(data.insertedId){
            refetch()
            setLoading(false)
            closeModal()
            toast.success(`${form.name.value} Category Added Successfully`)
        }
    }

    const handleDeleteCategory = async(id) =>{
        console.log(id)
        const {data} = await axiosPrivate.delete(`category/${id}`)
        console.log(data)
        if(data.deletedCount > 0){
            refetch()
            toast.success('Category deleted Successfully')
        }

    }
    
    return (
        <>
            <h1 className="text-3xl uppercase text-center py-8 font-semibold text-cyan-300">Manage Category</h1>
            <div className="flex flex-col max-w-6xl p-6 space-y-4 sm:p-10  dark:text-gray-800 mx-auto">
                {/* <h2 className="text-xl font-semibold">Your cart</h2> */}



                <div className="space-y-2  text-right">
                    <p className="uppercase font-bold text-xl ">Total Category : {category?.length}</p>
                    {/* <button  className=" mt-2 px-4 mx-4 bg-red-400 text-white py-1 rounded-sm">Clear</button> */}
                    <button onClick={openModal} className=" mt-2 px-4 bg-cyan-400 hover:bg-cyan-800 text-white py-1 rounded-sm">Add Category</button>

                </div>

                <ul className="flex flex-col divide-y dark:divide-gray-300 ">
                {
                   category?.map(cat=><CategoryRow key={cat._id} cat={cat} handleDeleteCategory={handleDeleteCategory}/>) 
                }
            </ul>
                

            </div>
            

            {/* modal  */}

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
                                        className="text-lg font-medium leading-6 text-gray-900 text-center my-2"
                                    >
                                        Add Category
                                    </Dialog.Title>
                                    <div className='relative'>
                                        {loading && <div className='absolute top-[30%] right-[40%]'><FadeLoader  color="#36d7b7" /></div>}
                                        <form onSubmit={handleSubmit} className=' space-y-4 '>
                                            <div className="space-y-2 ">
                                                <label  className="text-sm">Category Name :</label>
                                                <input name='name' type="text" placeholder="Category Name" className="input input-bordered w-full  mx-auto px-auto" />
                                            </div>
                                            <div>
                                                <label  className="block text-sm  ">Category Image:</label>
                                                <input required name='image' type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  " />
                                            </div>
                                            
                                            <button type="submit" className="w-full py-2 font-semibold rounded bg-cyan-400 dark:text-gray-50  btn">Add </button>
                                        </form>
                                    </div>

                                    {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default ManageCategory;
import useCategory from "../../../Hooks/useCategory";
import CategoryCard from "./CategoryCard";

const Category = () => {
    // const [medicines] = useMedicine()
    const [category] = useCategory()


   
    return (
        <div className=" md:my-24 lg:pl-20 mx-auto">
            <h1 className=" text-2xl md:text-3xl py-20 font-semibold">Find Your Medicine by Category</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6  ">
                {
                    category?.map(category => <CategoryCard key={category._id} category={category}  />).slice(0,6)
                }
            </div>
        </div>
    );
};

export default Category;
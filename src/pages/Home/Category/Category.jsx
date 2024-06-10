import useCategory from "../../../Hooks/useCategory";
import CategoryCard from "./CategoryCard";

const Category = () => {
    // const [medicines] = useMedicine()
    const [category] = useCategory()
    console.log(category)

    // const categories = [{
    //     categoryName: "Tablet",
    //     categoryImage: "https://i.ibb.co/gRnTL8t/Pngtree-pill-flat-multi-color-icon-3777200.png",
        
    // },
    // {
        
    //     categoryName: "Syrup",
    //     categoryImage: "https://i.ibb.co/GWzjb3T/pngwing-com-1.png",
        
    // },
    // {
       
    //     categoryName: "Capsule",
    //     categoryImage: "https://i.ibb.co/GWzjb3T/pngwing-com-1.png",
        
    // },
    // {
        
    //     categoryName: "Injection",
    //     categoryImage: "https://i.ibb.co/GWzjb3T/pngwing-com-1.png",
        
    // },
    // {
        
    //     categoryName: "Vitamins",
    //     categoryImage: "https://i.ibb.co/GWzjb3T/pngwing-com-1.png",
        
    // },
    // {
        
    //     categoryName: "Others",
    //     categoryImage: "https://i.ibb.co/GWzjb3T/pngwing-com-1.png",
        
    // },

    // ];

    return (
        <div className=" my-24 pl-20">
            <h1 className="text-3xl py-20">Find Your Medicine by Category</h1>
            <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6  ">
                {
                    category?.map(category => <CategoryCard category={category} key={category.id} />).slice(0,6)
                }
            </div>
        </div>
    );
};

export default Category;
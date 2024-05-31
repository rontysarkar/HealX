import CategoryCard from "./CategoryCard";

const Category = () => {
    const categories = [
        {
            category: "Tablet",
            image: "https://i.ibb.co/gRnTL8t/Pngtree-pill-flat-multi-color-icon-3777200.png",
            medicineCount: 3
        },
        {
            category: "Syrup",
            image: "https://i.ibb.co/GWzjb3T/pngwing-com-1.png",
            medicineCount: 3
        },
        {
            category: "Capsule",
            image: "https://i.ibb.co/GWzjb3T/pngwing-com-1.png",
            medicineCount: 3
        },
        {
            category: "Injection",
            image: "https://i.ibb.co/GWzjb3T/pngwing-com-1.png",
            medicineCount: 3
        },
        {
            category: "Vitamins",
            image: "https://i.ibb.co/GWzjb3T/pngwing-com-1.png",
            medicineCount: 3
        },
        {
            category: "Others",
            image: "https://i.ibb.co/GWzjb3T/pngwing-com-1.png",
            medicineCount: 3
        },

    ];

    return (
        <div className="container mx-auto my-20 pl-20">
            <h1 className="text-3xl py-10">Find Your Medicine by Category</h1>
            <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6  ">
                {
                    categories.map(category => <CategoryCard category={category} key={category.category} />)
                }
            </div>
        </div>
    );
};

export default Category;
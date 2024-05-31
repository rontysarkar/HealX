import PropTypes from 'prop-types'
const CategoryCard = ({category}) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10  ">
                <img src={category.image} alt="Shoes" className="rounded-xl w-40 " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category.category} ({category.medicineCount})</h2>
                
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category:PropTypes.object
}

export default CategoryCard;
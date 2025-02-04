import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const CategoryCard = ({category}) => {
    return (
        <Link to={`categoryDetails/${category.categoryName}`}>
        <div className=" mx-auto card w-80 h-80 p-10 bg-base-100 shadow-md hover:shadow-2xl">
            <figure className="px-10  ">
                <img src={category.categoryImage} alt="Shoes" className="rounded-xl w-40 " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category.categoryName}</h2>
                
            </div>
        </div></Link>
    );
};

CategoryCard.propTypes = {
    category:PropTypes.object
}

export default CategoryCard;
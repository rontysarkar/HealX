import { Link } from 'react-router-dom';
import depression from '../../../assets/image/depression.png'
import Hair from '../../../assets/image/Hair.png'
import pain from '../../../assets/image/pain.png'
import Sick from '../../../assets/image/Sick.png'
const HealthSection = () => {
    return (
        <div className=" my-24 pl-20">
            <h1 className="text-3xl py-20 font-semibold">Shop by Health Concerns <Link to={'/shop'}><span className='text-sm pl-4 text-cyan-300'>Sell All</span></Link></h1>
            <div className="  grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                <div className="card w-80 h-60 p-10 bg-base-100 shadow-md hover:shadow-2xl">
                    <div className='relative'>
                    <figure className="pr-20  ">
                        <img src={depression} alt="Shoes" className="rounded-xl w-40 h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className=" absolute right-0 top-0 card-title text-cyan-300 ">Depression</h2>

                    </div>
                    </div>
                </div>
                <div className="card w-80 h-60 p-10 bg-base-100 shadow-md hover:shadow-2xl">
                    <div className='relative'>
                    <figure className="pr-20  ">
                        <img src={Hair} alt="Shoes" className="rounded-xl w-40 h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className=" absolute right-0 top-0 card-title text-cyan-300 ">Hair Loss</h2>

                    </div>
                    </div>
                </div>
                <div className="card w-80 h-60 p-10 bg-base-100 shadow-md hover:shadow-2xl">
                    <div className='relative'>
                    <figure className="pr-20  ">
                        <img src={pain} alt="Shoes" className="rounded-xl w-40 h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className=" absolute -right-3 top-0 card-title text-cyan-300 ">Stomach Pain</h2>

                    </div>
                    </div>
                </div>
                <div className="card w-80 h-60 p-10 bg-base-100 shadow-md hover:shadow-2xl">
                    <div className='relative'>
                    <figure className="pr-20  ">
                        <img src={Sick} alt="Shoes" className="rounded-xl w-40 h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className=" absolute right-0 top-0 card-title text-cyan-300 ">Sick</h2>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthSection;
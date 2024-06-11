const Slider = ({ banner }) => {
   
    return (
        
        <div className={` w-full bg-center bg-cover h-[40rem] bg-no-repeat `}
        style={
            {
                backgroundImage: `url(${banner.medicineImage})`
            }
        }
        >
            {/* <img className="w-full h-full" src={banner.medicineImage} alt="" /> */}
            
        </div>
        
    );
};



export default Slider;
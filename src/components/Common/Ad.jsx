function Ad({className, image}) {
    return (
        <div className={`ad ${className} m-4 p-4 ml-20 bg-white shadow-lg rounded-lg w-50 relative`}>
            {image && <img src={image} alt="Ad" className="ad-image blur-sm" />}
            <p className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-800">Ad</p>
        </div>
    );
}
export default Ad;
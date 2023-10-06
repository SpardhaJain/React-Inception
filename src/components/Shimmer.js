
const styleCard = {
    width: '332px',
    border: 'none'
};

const Shimmer = () => {
    return (
        // <div className="shimmer-container food-body">
        //     <div className="res-container d-flex">
        //         <div className="card res-card" style={styleCard}>
        //             <div className="res-card-wrapper">
        //                 <div className="card-body"></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="shimmer-container food-body d-flex">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
    )
};

export default Shimmer;
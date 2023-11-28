

const GalleryBig = ( { imgItem,data }) => {
    const { imgurl , title,id } = imgItem 
    const total = data.length
    return (
        <div className="bigimg">
            <img src={imgurl} alt={title} />
            <h2> {title} </h2>
            <p>
                현재
                <span>{id}</span>
                /
                총개수
                <span>{total}</span>
            </p>
        </div>
    );
};

export default GalleryBig;
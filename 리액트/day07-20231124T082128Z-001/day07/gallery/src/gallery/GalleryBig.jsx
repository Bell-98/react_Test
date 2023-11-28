

const GalleryBig = ( { imgItem }) => {
    const { imgurl , title } = imgItem 
    return (
        <div className="bigimg">
            <img src={imgurl} alt={title} />
            <h2> {title} </h2>
            <p>현재 ?? / 총개수 ??</p>
        </div>
    );
};

export default GalleryBig;
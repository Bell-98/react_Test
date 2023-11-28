import { useState } from "react";
import galleryData from "../assets/api/galleryData";
import './style.scss'
import GalleryBig from "./GalleryBig";
import GalleryList from "./GalleryList";
import GalleryArrow from "./GalleryArrow";

const Gallery = () => {
    const [ data , setData ] = useState( galleryData )
    const [ imgItem , setImgItem ] = useState( data[0] )
    const total = data.length 

    const onView = ( id )  => {    
        setImgItem( data.find( item => item.id === id ) )

        setData( data.map( item => item.id === id ? 
           {...item, isClass:true } : {...item, isClass:false } ))
    }

    return (
        <div className="wrap">
            <h1> React Gallery </h1>
            <GalleryBig imgItem={imgItem} />
            <GalleryList data={data} onView={onView} />
            <GalleryArrow /> 
        </div>
    );
};

export default Gallery;
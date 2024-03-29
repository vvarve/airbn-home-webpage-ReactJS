import React from "react";

export const Bodybuttom = ({image, star, rating, ubication, textOne, textTwo, textPerson, stock}) => {
    return (
        <div className="div-image-principal2">   
                <div className="div-image">
                    <img className="images-card" src={image}></img>
                    {stock && <span className="span-image">{stock}</span>}
                </div>
            <div className="div-Bodybuttom-inside">
                <div className="div-Bodybuttom-inside1">
                    <img src={star}></img>
                    <strong className="rating">{rating} </strong>
                    <p className="p-div-Bodybuttom">{ubication}</p>
                    <p className="p-div-Bodybuttom2">{textOne}</p>
                    <strong className="p-price">{textTwo}</strong>
                    <p className="p-person">{textPerson}</p>
                </div>    
            </div>

        </div>
    )
}
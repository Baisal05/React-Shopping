import React from 'react'






 function Card({onFavorite, title, imgUrl,price, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
      onPlus({title, imgUrl,price});
      setIsAdded(!isAdded);
    }

  return (
    <div className="card">
    <div className="favorite" onClick={onFavorite}> 
    <img className="pp" widht={23} height={23} src=" /img/serdse.svg" alt="" />
    </div>
             <img width={150} height={150} src={imgUrl}  />
            <h4 className="mb-10">{title}</h4>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span> Цена:</span>
                <b>{price} ₽</b>
              </div>
              

                <img className="ico" onClick={onClickPlus} width={32} height={32} src={isAdded ? '/img/check (1).png' : '/img/plus.svg' } alt="x" />
            
            </div>
          </div>
  )
}export default Card;
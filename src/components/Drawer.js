import React from 'react'

function Drawer({onCloseCart, onRemove, obj, items = []}) {
	return (
		<><div className="overlay">

			<div className="drawer">
				<h2 className="d-flex justify-between mb-30">
					Корзина <img className="cu-p" onClick={onCloseCart} width={28} height={28} src="/img/plus.png" />
				</h2>

				{items.length > 0 ? (
					<div className="items">
						{items.map((obj) => (



							<button className="greenButton">Оформить заказ <img className="right-icons" width={18} height={18} src="/img/strelka.png"  /></button>))}
					</div>
	):
				
			
		<div className="cartItem d-flex align-center mb-20">

				<img className="mr-20" width={80} height={80} src={obj.imgUrl} />
				<div className="mr-20 flex">
					<p>{obj.title}</p>
					<b>{obj.price} ₽</b>
				</div>
				<img onClick={() => onRemove(obj.id)} className="cross" src="/img/cross circle.svg" alt="" />
			</div>
}
			
				</div>	
		<div className="cartTotalBlock">
		<ul>

		<li >
		<p>  Итого:</p>
		<div className="b"> </div>
		<b> 1200</b>
		</li>
		<li >
		<p>Налог: 5%  </p>
		<div className="b"> </div>
		<b>107587 рубль.</b>
		</li>
		</ul>
				)
					</div>	
	

				): (


				<div className="cartEmpty d-flex align-center justify-center flex-column flex">	
					<img className="mb 20" width="120" height="120" src="	/img/korzina.png" alt="" />
					<h2>	Корзина пустая</h2>
					<p> Добавьте хотя бы один товар чтобы оформить заказ.</p>
					<button className='greenButton'>	
					Вернуться назад
						<img src="/img/strelka.png" alt="" />
					</button>
				</div>	


				

				
			
					</div>
					</>
					
				

		)
	}
	export default Drawer;
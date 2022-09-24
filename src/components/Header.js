import React from 'react'

function Header(props) {

	return (
		<header>  
		<div  className="headerLeft"> 
		<img width = {60} height = {60} src="/img/blunted cone.svg" alt="" />
		<div className="headerInfo"> 
		<h3 className="text-uppercase">React-shopping</h3>
		<p className="opacity-6">Магазин лучших товаров!</p>
		</div>
		</div> 
		<ul className="headerRight d-flex mt-10" >  
		<li className="mr-30 cu-p"
			onClick = {props.onClickCart}
		>
		<span>  1205 руб.</span>
		</li>
		<li>
		<img className="remove" width = {20} height = {20} src="/img/cart remove.svg"/>
		<img width = {20} height = {20} src="/img/wifi.svg"/>
		</li>
		</ul> 
		</header> 
		)
	}
	export default Header;
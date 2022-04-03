import React from 'react'
import './Coin.css'

const coin = ({name, image, symbol, price, volume, priceChange, marketCap}) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt='crypto'/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>${price}</p>
                {priceChange < 0 ? (
                    <p className='price-neg-change'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='price-pos-change'>+{priceChange.toFixed(2)}%</p>
                )}
                <p className='coin-volume'>${volume.toLocaleString()}</p>
                
                <p className='coin-market-cap'>Mkt Cap: ${marketCap.toLocaleString()}</p>
            </div>
        </div>
    </div>
  )
}

export default coin
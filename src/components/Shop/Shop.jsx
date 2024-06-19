import React from 'react'

import GoodItem from "../../components/GoodItem/GoodItem";
import Cart from "../../components/Cart/Cart";


const Shop = ({goods}) => {

  
  return (
    <div>
      <GoodItem goods={goods}/>
    </div>
  )
}

export default Shop







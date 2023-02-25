import React from 'react'
import Chance from 'chance'

const fackData = () => {
    const chance = Chance();
//    const name =  chance.name({ middle: true });
console.log( chance.name({ middle: true }));
  return (
    chance.name({ middle: true })
  )
}

export default fackData
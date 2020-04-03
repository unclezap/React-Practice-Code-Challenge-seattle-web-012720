import React from 'react'




const MoreButton = (props) => { 
  // const INITIAL_STATE = {
    // props
  // }

  // const state = INITIAL_STATE

  const handleMoreSushi = () => {
    for(let i=0; i<4; i++) {
      props.onMoreSushi()
    }
  }

return <button onClick={handleMoreSushi}>
            More sushi!
          </button>
}

export default MoreButton
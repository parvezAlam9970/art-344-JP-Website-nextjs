import React from 'react'

const ButtonOne = ({text, onClick}) => {
  return (
    <button onClick={onClick} className=" border border-primary py-2 px-5 rounded-[5px] bg-white text-primary">
              {text}
            </button>
  )
}

export default ButtonOne
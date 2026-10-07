import React from 'react'

const AnniversaryBlock = (props) => {

    const style_1 = {
        margin:"0px 0px",
        fontWeight: "700",
        color: "black"
    }
  return (
    <>
      <style>
        {`
                    .anniversaryblock {
                        height: 90px;
                        width: 240px;
                        background-color: white;
                        margin-right: 40px;
                        border-radius: 15px;
                        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
                        transition: transform 0.3s ease-in-out,
                                    box-shadow 0.3s ease-in-out;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        padding: 10px 20px;
                    }
                    .anniversaryblock:hover {
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
                        transform: translateY(-5px);
                    }
        `}
      </style>
        <div className='anniversaryblock'>
          <p style={style_1}>{props.gift.gift_suggestion}</p>
        </div>
    </>
  )
}

export default AnniversaryBlock
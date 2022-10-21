import React from 'react'
import { useState } from 'react'
import './Test.css'

const Test = () => {
    const [div1, setdiv1] = useState(false)
    const [div2, setdiv2] = useState(false)
    const [div3, setdiv3] = useState(false)

    return (
        <>
            <div className="main_containter">
                <div className={div1 ? "changeDiv" : "child_1"}
                    onClick={() => {
                        setdiv1(!div1)
                        setdiv2(false)
                        setdiv3(false)
                    }}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem optio assumenda asperiores fugiat, nam sit porro iusto perspiciatis. Eveniet suscipit in vero sed placeat nobis aliquid esse sapiente fuga nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, at?</p>
                </div>
                <div className={div2 ? "changeDiv" : "child_2"}
                    onClick={() => {
                        setdiv2(!div2)
                        setdiv1(false)
                        setdiv3(false)
                    }}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem optio assumenda asperiores fugiat, nam sit porro iusto perspiciatis. Eveniet suscipit in vero sed placeat nobis aliquid esse sapiente fuga nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, at?</p>
                </div>
                <div className={div3 ? "changeDiv" : "child_3"}
                    onClick={()=>{
                        setdiv3(!div3)
                        setdiv2(false)
                        setdiv1(false)
                    }}
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem optio assumenda asperiores fugiat, nam sit porro iusto perspiciatis. Eveniet suscipit in vero sed placeat nobis aliquid esse sapiente fuga nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, at?</p>
                </div>
            </div>
        </>
    )
}

export default Test
import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function CryptoSearch() {

    const [InputCoin, setInputCoin] = useState("")
    const [InputCurrency, setInputCurrency] = useState("")
    const [Coin, setCoin] = useState({
        USD:""
    })

    useEffect(() => {
      
    })

    const handleCoin=(e)=>{
        setInputCoin(e.target.value)
    }

    const handleCurrency=(e)=>{
        setInputCurrency(e.target.value)
    }

    const HandleSearch=()=>{
        axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${InputCoin.toUpperCase()}&tsyms=USD`)
        .then((res)=>
          setCoin(res.data)
        )
        .catch((err)=>console.log(err.data))
    }

    return (
        <div>
            <hr/>
            <div>
                <h3>Search a bitcoin</h3>
               <input type="text" placeholder="Enter Coin" value={InputCoin} onChange={handleCoin}></input> 
               {/* <input type="text"  placeholder="Enter Currency" value={InputCurrency} onChange={handleCurrency}></input>  */}
               <button className="btn btn-primary ml-2" onClick={HandleSearch}>Search</button>

               <h2>$ {Coin.USD} </h2>
            </div>
            <hr/>
        </div>
    )
}

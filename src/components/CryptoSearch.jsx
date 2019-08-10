import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function CryptoSearch() {

    const [InputCoin, setInputCoin] = useState("")
    const [InputCurrency, setInputCurrency] = useState("")
    const [FilterItems, setFilterItems] = useState([])
    const [Coin, setCoin] = useState({
        USD:"Result"
    })

    const [Coins, setCoins] = useState(["ETH","BTC", "TRX"])

 

    const handleCoin=(e)=>{
        setInputCoin(e.target.value)

        let val=e.target.value
        const filteredData = Coins.filter(element => {
        return element.toLowerCase().trim().includes(val.toLowerCase().trim());
        })
        setFilterItems(filteredData)
    }



    const HandleSearch=(data)=>{
        axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${data.toUpperCase()}&tsyms=USD`)
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
             

               <h2>{FilterItems.map((data)=>
                 <ul className="list-inline">
                 <li className="list-inline-item" onClick={()=>HandleSearch(data)}>{data}</li>

                 </ul>
               )}</h2>

               <h3 style={{border:"1px solid green", display:"inline"}}>{Coin.USD}</h3>
            </div>
            <hr/>
        </div>
    )
}

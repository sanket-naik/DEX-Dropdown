import React,{useState} from 'react';
import './App.css';
import Search from './components/Search'
import ListItems from './components/ListItems'
import CryptoSearch from './components/CryptoSearch'

function App() {

  const [FilterString, setFilterString] = useState([])

  const [FilterItems, setFilterItems] = useState([])

  const [Added, setAdded] = useState([])

  const [Data, setData] = useState([
    {
      id:1,
      img:"img",
      name:"Sanket",
      description:"description.."
    },
    {
      id:2,
      img:"img",
      name:"Sudheer",
      description:"description.."
    },
    {
      id:3,
      img:"img",
      name:"Abhin",
      description:"description.."
    },
    {
      id:4,
      img:"img",
      name:"Nagraj",
      description:"description.."
    }
  ])

  const HandleFilter=(e)=>{
    setFilterString(e.target.value)
    let val=e.target.value
    const filteredData = Data.filter(element => {
    return element.name.toLowerCase().trim().includes(val.toLowerCase().trim());
    })
    setFilterItems(filteredData)
}

  const addItem=(data)=>{
    const pro=Added.find((item)=>item.id==data.id)
    if(!pro){
    console.log(pro)
    setAdded([...Added, data])
    }else{
      alert("Duplicate found!!!")
    }
  }

  const handleDelete=(id)=>{
    const data=Added.filter((item)=>item.id!==id)
    setAdded(data)
  }

  return (
    <div className="App">
      <Search 
        ItemValue={FilterString} 
        onChangeFilter={HandleFilter} 
        added={Added} 
        delete={handleDelete}
        items={FilterItems}
        handleItemClick={addItem}/>
      
      <CryptoSearch/>
{/* 
      <div>
        {FilterItems.map((item)=><ListItems key={item.id} data={item} handleItemClick={addItem}/>)}
      </div> */}
    </div>
  );
}

export default App;

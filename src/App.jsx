import AllCards from "./component/allCards";
import { useState } from "react";
import { data } from "./utilies/data";

function App() {

  const [val, setVal] = useState('');
  const [filterData, setFilterData] = useState(data);

  function filterHandler(){
    let res = data.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
    setFilterData(res);
  }

  return (
    <div>
      <h1>Raste ka Maal Saste Mai</h1>
      <div>
        <input type="text" placeholder="Kya chahiye?..." onChange={(e) => setVal(e.target.value)} />
        <button onClick={filterHandler()}>Search</button>
      </div>
      <AllCards data={filterData}/>


    </div>
  )
}

export default App

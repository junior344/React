import React,{useState, useEffect} from 'react'

 function FunctionCount() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('useEffect');
        document.title = `vous avez cliquez : ${count}`;
    }, [count]);
  return (
    <div className="flex justify-center flex-col items-center">
        <h1 >count : {count}</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default FunctionCount

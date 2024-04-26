//useEffect
useEffect(() => {
  // Perform side effects or subscribe to events
  // Clean up any resources when the component unmounts (optional)
}, [dependencies]);

//useEffect Fetching Data
const [data, setData] = useState<string>("");
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    // Update component state with fetched data
    console.log(data);
    setData(JSON.stringify(data))
    
  };

  fetchData();
}, []);

//useEffect Cleanup
const [time, setTime] = useState<number>(0);

useEffect(() => {
  let interval = setInterval(() => setTime(1), 5000); 
      
  return () => {
      clearInterval(interval);
  };
}, []);

Reference: 

//useMemo
const memoizedValue = useMemo(() => {
  // Compute and return a value
}, [dependencies]);

//useMemo example
import React, { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const expensiveResult = useMemo(() => {
    // Perform expensive computation using 'data'
    // Return the result
  }, [data]);

  return (
    <div>
      <p>Expensive Result: {expensiveResult}</p>
      {/* Render the rest of the component */}
    </div>
  );
}

// live coding
function Home() {
    const [toogle, setToogle] = useState(false);

    return (
        <> 
        <h1>Home</h1>
        <ChildComponent num={1} />
        <button onClick={() => setToogle(!toogle)}>{toogle.toString()}</button>
        </>
        
    )
}

export default Home;

function ChildComponent(props: {num: number}) {
    const num = props.num;

    function expensive(num: number) {
      console.log("running expensive function!");
      return num + num;
    }

    const result = useMemo(()=> expensive(num), [num]);
    return (
        <h1> {result}</h1>
    )
}


//useCallback
const memoizedCallback = useCallback(() => {
  // Callback logic
}, [dependencies]);


//useCallback example
import React, { useCallback } from 'react';

function ParentComponent() {
  const handleButtonClick = useCallback(() => {
    // Handle button click
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleButtonClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  // Render child component using the callback
}


//useRef
const ref = useRef(initialValue);


//useRef example
import React, { useRef, useEffect } from 'react';

function TextInput() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleButtonClick = () => {
    if (inputRef.current == null) return;
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Clear and Focus</button>
    </div>
  );
}

// API 
// Article Reference: https://dev.to/duhbhavesh/how-to-use-fetch-api-for-crud-operations-57a0

// Example using API Post:
       try {
            const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": name,
                    "email": email,
                    "password": password
                })
            };
         
            const response = await fetch('https://library-crud-sample.vercel.app/api/user/register', options);
            // handle kalo error harus ngapain
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            // next move
            setTimeout(() => {
                alert("Register Success");
                navigate("/login");
            }, 1000);

        } catch (error) {
            console.error('Error:', error);
        }




// 1. Tentuin dulu value yang mau di share lalu buat contextnya
export const MyContext = createContext<string>("");

// 2. Buat Providernya
export const Provider = (props: { children: any }) => {
    const sharedValue = 'Hello from Context';
    return (
      <MyContext.Provider value={sharedValue}>
        {props.children}
      </MyContext.Provider>
    );
};

// 3. Pakai di komponent yang diinginkan pake useContext
const ChildComponent = () => {
    const sharedValue = useContext(MyContext)
    return (
      <div>
        <> {sharedValue} </>
      </div>
    );
}; 


//useContext
import React, { createContext, useContext } from 'react';

// Create a context
const MyContext = createContext();

// Parent component that provides the context
const ParentComponent = () => {
  const sharedValue = 'Hello from Context';

  return (
    <MyContext.Provider value={sharedValue}>
      {/* Components consuming the context */}
      <ChildComponent />
    </MyContext.Provider>
  );
};
// Child component that consumes the context
const ChildComponent = () => {
  const value = useContext(MyContext);

  return <div>{value}</div>;
};

// Usage
const App = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

export default App;

//createContext
import React, { createContext } from 'react';

// Create a context
const MyContext = createContext();

// Usage
const ParentComponent = () => {
  const sharedValue = 'Hello from Context';

  return (
    <MyContext.Provider value={sharedValue}>
      {/* Components consuming the context */}
    </MyContext.Provider>
  );
};
const ChildComponent = () => {
  return (
    <MyContext.Consumer>
      {value => <div>{value}</div>}
    </MyContext.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <ParentComponent />
      <ChildComponent />
    </div>
  );
};

export default App;


// Higher Order Component Example
import React, { useState, useEffect } from 'react';

const withDataFetching = (WrappedComponent: any, apiUrl: string) => {
  return () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setIsLoading(true);
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setData(data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
    }, [apiUrl]);

    return (
        <WrappedComponent
          data={data}
          isLoading={isLoading}
          error={error}
        />
      );
    };
  };
  
 export default withDataFetching;


// Higher Order Component
import React from 'react';
import withDataFetching from './withDataFetching';

export interface UserData {
    id: number,
    name: string
}

const DemoComponentOne = (props: { data: UserData[], isLoading: boolean, error: any }) => {
  const {data, isLoading, error} = props
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default withDataFetching(DemoComponentOne, 'https://jsonplaceholder.typicode.com/users');




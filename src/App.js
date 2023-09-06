//import logo from './logo.svg';

//import paper from './paper.jpg';
import { useState,useCallback,useMemo } from 'react'

import Title from './components/Title'
import MyForm from './components/Forms/MyForm'
import MyList from './components/Lists/MyList'
import Background from './components/Background'
import Container from './components/Container'

function App() {
  const [valores, setValores] = useState([])
  const handleSubmit =useCallback((values) => {
    setValores(data=>([
      ...data,
      values
    ]))
  },[] )
  const iterador=5000000
  console.time('memo')

  const memoized=useMemo(()=>{
    let total=0
    for (let i=0; i<iterador; i++){
      total=total*iterador
    }
    return total

  },[iterador])
  console.timeEnd('memo')
  return (
  <Background title="background made with https://app.leonardo.ai/">
    <Container>
      <div>
      <Title>Optimizando React con memo y lodash</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
      
    </div>
    </Container>
    
  </Background>
    
  );
}

export default App;

import Header from './components/Header'
//import Slide from './components/Slide'
import Slider from './components/sliderbanner/Slider'
import Prod1 from './components/Prod1'
import Novidades from './components/Novidades'
import Footer from './components/Footer'
import { useState } from 'react'
import { getCarrinho} from './helpers/session'

function App() {

  let atual = parseInt(getCarrinho)
  
  const [carrinho, setCarrinho ] = useState(atual)

  const onAdd = () => {
    setCarrinho(carrinho + 1)
    
    localStorage.setItem('carrinho', carrinho+1)
  }

  return (
    
    <>
      <Header quantidade={carrinho}/>
      
      <Slider/>
      <Prod1 onAdd={onAdd}/>
      <Novidades />
      <Footer />
    </>
  )
}

export default App;

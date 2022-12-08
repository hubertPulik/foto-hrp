import './App.css'

import Header from './components/Header'
import Akapit01 from './components/Akapit01'
import Galery01 from './components/Galery01'
import Separator from './components/Separator'
import Icons from './components/Icons'
import Counters from './components/Counters'
import Offer from './components/Offer'

export default function App() {
  return (
    <main>
		<Header />
    <Akapit01 />
    <Galery01 />
    <Separator />
    <Icons />
    <Counters />
    <Offer />
    </main>
  )
}
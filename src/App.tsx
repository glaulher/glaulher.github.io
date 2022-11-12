import Post from './components/Post'

import { LogoIcon } from './assets/icons'
import './styles/App.css'

const App = () => {
  return (
    <>
      <header className='header'>
        <div className='header__content'>
          <div className='logo'><LogoIcon /><strong>My Blog Tutorials teste</strong><LogoIcon /></div>
        </div>
      </header>
      <main className='main'>
        <Post />
      </main>
    </>
  )
}

export default App
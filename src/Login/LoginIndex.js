
import { Products } from '../DataBinding/Products';
import { LoginHeader } from './LoginHeader';
import './LoginIndex.css';
import { Loginmain } from './Loginmain';

export function LoginIndex(){

  return (
    <div className="img">
      <div className='box'>
          <header>
            <LoginHeader/>
          </header>

          <main className='mt-5'>
            {/* <Loginmain/> */}
            <Products/>
          </main>
      </div>

    </div>
  )
}
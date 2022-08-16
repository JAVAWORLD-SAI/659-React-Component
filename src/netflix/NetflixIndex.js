import './NetflixIndex.css';
import { NetflixHeader } from './NetflixHeader';
import { NetflixMain } from './NetflixMain';

export function NetflixIndex()
{
    return(
        <div className="container-fluid">
          <div className="box">
            <header>
                <NetflixHeader />
            </header>
            <main>
                <NetflixMain />
            </main>
          </div>
        </div>
    )
}
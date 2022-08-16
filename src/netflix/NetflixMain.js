import './NetflixMain.css';
import { NetflixRegister } from './NetflixRegister';

export function NetflixMain(){
    return(
        <div className="text-white">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <div className="register">
             <NetflixRegister />
            </div>
            <div className="section">
            </div>
        </div>
    )
}
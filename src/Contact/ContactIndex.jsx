

import { ContactNavbar } from "./ContactNavbar";
import {ContactList} from './ContactList';

export  function ContactIndex(){

    return(
        <div className="container-fluid">
            <header>
                <ContactNavbar/>      
            </header>
            <main>
                <ContactList/>
            </main>
           

        </div>
    )
}
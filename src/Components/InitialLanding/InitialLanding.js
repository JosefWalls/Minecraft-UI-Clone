import React from 'react';
import "./InitialLanding.css";
import {Link} from "react-router-dom";

class InitialLanding extends React.Component {
    constructor(){
        super()
    }


    render(){
        return (
            <div className="InitialLanding">
                    <img src={'https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png'}className="InitialLanding__logo"></img>
                    <div className="IntialLanding__Clickables">
                        <section>
                            <button>
                                Chat
                            </button>
                        </section>
                        <section>
                            <Link to="/Worlds">
                                <button>Play</button>
                            </Link>
                            <button>Settings</button>
                            <button>Marketplace</button>
                        </section>
                        <section>
                            <h1>Steveo</h1>
                            <img></img>
                            <button>Profile</button>
                        </section>
                    </div>
            </div>
        )
    }
}

export default InitialLanding;
import React from 'react';
import WorldSelectionHeader from './Header';
import "./SelectionMenus.css";

class WorldSelection extends React.Component {
    constructor(){
        super()
    }


    render(){
        return (
            <div className="WorldSelection">
                <main>
                    <WorldSelectionHeader/>
                    <button>Create New World</button>
                    <div className="WorldSelection__Realms">
                        <header>Realms</header>
                        <p>You cannot play Realms becuase of how your
                            microsoft account is set up. Please ensure your online safety
                            settings allow multiplayer and clubs and have an active Xbox Live
                            Gold subscription. See instructions for changing these settings at
                            aka.ms/MCMultiplayerHelp
                        </p>
                        <button>Get Help Fixing This</button>
                    </div>
                    <div className="WorldSelection__Worlds">
                        <header>Worlds</header>
                    </div>
                </main>
            </div>
        )
    }
}

export default WorldSelection;
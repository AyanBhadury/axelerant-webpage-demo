import React, { useState } from 'react'
import Navigation from './Navigation'


function Header() {

    const [show, showMenu] = useState(false)

    return (
        <>
            <article>
                <header>
                    <div className="menu-icon">
                        {/* <img src="assets/images/hamburger-menu-icon.png" alt="" (click)="showMenu = !showMenu"> */}
                        <img src="/assets/images/hamburger-menu-icon.png" alt="" onClick={() => { showMenu(!show) }} />

                    </div>
                    <div className="company-logo">
                        <img src="/assets/images/company-logo.png" alt="company logo" />
                    </div>
                    <Navigation />
                </header>
            </article>
        </>
    )
}

export default Header

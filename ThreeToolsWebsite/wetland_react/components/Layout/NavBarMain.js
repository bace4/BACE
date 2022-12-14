import React from 'react'
import Link from 'next/link'

export default function NavBarMain() {
    return (
        <nav>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li> {/* main page introducing our product */}
                <li className="has-dropdown">
                    <Link href="/about"><a>Our Story</a></Link> {/* Documentation */}
                    <ul className="submenu">
                        <li><Link href="/about"><a>About Us</a></Link></li>
                        <li><Link href="/team"><a>Meet the Team</a></Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link href="/services"><a>Documentation</a></Link> {/* Documentation */}
                    <ul className="submenu">
                        <li><Link href="/services"><a>Overview</a></Link></li>
                        <li><Link href="/services-details"><a>Details</a></Link></li>
                        <li><Link href="/demo"><a>Demo</a></Link></li>
                    </ul>
                </li>
                <li><a href="https://medium.com/@bacetools/451344c5b697" target="_blank">Blog</a></li>
                        {/* <li><Link href="/faq"><a>Faq</a></Link></li>
                        <li><Link href="/team"><a>Team</a></Link></li>
                        <li><Link href="/team-details"><a>Team Details</a></Link></li> */}
                <li><Link href="/contact"><a>Contact</a></Link></li> {/* BACE email */}
                {/* <li><a href="https://github.com/oslabs-beta/BACE#readme" target="_blank">GitHub</a></li> Medium Blog */}
                <li><a href="https://github.com/oslabs-beta/BACE#readme" target="_blank">GitHub</a></li>
            </ul>
        </nav>


    )
}

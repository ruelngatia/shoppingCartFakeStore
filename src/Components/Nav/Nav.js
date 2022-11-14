import React from 'react'
import './Nav.css'
import { Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to={'/'} >Store</Link></li>
                <li>About</li>
                <li><Link to={'/'}>Shop</Link></li>
                <li>Team</li>
                <li>Contact</li>
                <li><Link to={'/addingProducts'}>Add</Link></li>
            </ul>
        </nav>
    </div>
  )
}

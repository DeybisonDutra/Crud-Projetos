import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import log from '../../img/costs_log.png'

function Navbar() {
    return (
        <nav className={styles.Navbar}>
          <Container>
            <Link to='/'>
                <img src={log} alt='costs'/>
             </Link>
            <ul className={styles.list}>
              <li className={styles.item}>
              <Link to="/">Home</Link>
              </li>
              <li className={styles.item}>
              <Link to="/projects">Projetos</Link>
              </li>
              <li className={styles.item}>
              <Link to="/company">Empresa</Link>
              </li>
              <li className={styles.item}>
              <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </Container>
        </nav>
    )
}

export default Navbar
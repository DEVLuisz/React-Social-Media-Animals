import React from 'react'
import styles from './Footer.module.css'
import {ReactComponent as Dogs} from '../Assets/Img/dogs-footer.svg'

const Footer = () => {

  const openInstagram = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className={styles.footer}>
      <Dogs />
      <p onClick={() => openInstagram('https://instagram.com/shrieker_?igshid=YmMyMTA2M2Y=')}> 
      Desenvolvido por &copy; Shrieker | Alguns direitos reservados.
      </p>
    </footer>
  )
}

export default Footer

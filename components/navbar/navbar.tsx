import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MouseEventHandler, MouseEvent, EventHandler, useState } from 'react'
import styles from './navbar.module.css'
const NavBar = (props: { username: string }) => {
  const router = useRouter()
  const [showSignOut, setShowSignOut] = useState(false)
  const clickHome: MouseEventHandler = (event: MouseEvent) => {
    event.preventDefault()
    router.push('/')
  }
  const clickList: MouseEventHandler = (event: MouseEvent) => {
    event.preventDefault()
    router.push('/list')
  }
  const signOutHandler: MouseEventHandler = (event: MouseEvent) => {
    event.preventDefault()
    setShowSignOut(!showSignOut)
  }
  return (
    <div className={styles.container}>
      <p> {props.username}</p>
      <ul>
        <li onClick={clickHome}>Home</li>
        <li onClick={clickList}>My List</li>
      </ul>
      <nav>
        <div>
          <button onClick={signOutHandler}>
            <p>{props.username}</p>
            <Image src={'/static/expand_more.svg'} alt='Expand Dropdown' width='20px' height='20px'/>
          </button>
          {
            showSignOut && <div>
            <Link href={'/login'}><a>Sign out</a>
            </Link>
          </div>
          }
         
        </div>
      </nav>
    </div>
  )
}
export default NavBar
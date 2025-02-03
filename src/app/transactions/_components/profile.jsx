import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export const ProfileUser = () => {
  return (
    <div className="flex flex-col items-center text-center md:text-left  md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <img
        src="https://media.tenor.com/XS4RFFT9SmoAAAAe/angry-girl.png"
        alt="angry-kids"
        className="rounded-full w-24 h-24 md:w-36 md:h-36"
      />
      <div className="space-y-2 md:space-y-4">
        <h3 className="font-semibold text-xl md:text-2xl font-mono">
          lukirizki{' '}
          <span>
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: '#1959c8' }}
            />
          </span>
        </h3>
        <div className="space-x-4 text-xl md:text-2xl cursor-pointer pl-2">
          <Link href="https://github.com/xrzky" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link href="https://x.com/warung_premium" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
        </div>
        <p className="tracking-tight font-mono text-sm md:text-base">
          Thank you for making me richer than you! Much love from me xx
          lukirizki
        </p>
      </div>
    </div>
  )
}

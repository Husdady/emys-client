// Librarys
import { memo } from 'react'

function HomeWelcomeBottomWave() {
  return (
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      className="home-welcome-bottom-wave"
    >
      <path
        fillOpacity="1"
        className="fill-pink-200"
        d="M0,224L48,186.7C96,149,192,75,288,58.7C384,43,480,85,576,90.7C672,96,768,64,864,80C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  )
}

export default memo(HomeWelcomeBottomWave)

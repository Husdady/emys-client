// Librarys
import { memo } from 'react'

function WelcomeTopWave() {
  return (
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 h-full welcome-top-wave"
    >
      <path
        fillOpacity="1"
        className="fill-pink-100"
        d="M0,288L30,266.7C60,245,120,203,180,208C240,213,300,267,360,266.7C420,267,480,213,540,176C600,139,660,117,720,112C780,107,840,117,900,133.3C960,149,1020,171,1080,186.7C1140,203,1200,213,1260,218.7C1320,224,1380,224,1410,224L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
      ></path>
    </svg>
  )
}

export default memo(WelcomeTopWave)

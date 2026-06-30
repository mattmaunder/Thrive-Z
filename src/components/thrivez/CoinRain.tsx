import { motion, useReducedMotion, type Transition } from 'motion/react'
import { COIN_POSITIONS } from '../../lib/thrivez/constants'

const FRAME_WIDTH = 402
const COIN_SIZE = 32
const FALL_DISTANCE = 937

const scaleXKeyframes = [1, 0.05, 1, 0.05, 1, 0.05, 1, 0.05, 1, 0.05, 1, 0.05, 1, 1] as const
const scaleXTimes = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 1] as const
const scaleXEase = [
  'easeInOut',
  'easeInOut',
  'easeInOut',
  'easeInOut',
  'easeInOut',
  'easeInOut',
  'easeInOut',
  'easeInOut',
  'easeInOut',
  'easeInOut',
  'easeInOut',
  'easeInOut',
  'linear',
] as const

const coinTransition = (delay: number): Transition => ({
  scaleX: {
    duration: 3.5,
    times: [...scaleXTimes],
    ease: [...scaleXEase],
    repeat: Infinity,
    delay,
  },
  y: {
    duration: 3.5,
    times: [0, 0.5714, 1],
    ease: ['easeIn', 'linear'],
    repeat: Infinity,
    delay,
  },
})

function ThriveCoin() {
  return (
    <div
      className="relative size-8 overflow-hidden rounded-full shadow-[0_2px_8px_rgba(100,0,45,0.35)]"
      style={{
        background: 'linear-gradient(145deg, #ffe566 0%, #f5b800 45%, #d4920a 100%)',
      }}
    >
      <div
        className="absolute inset-[3px] rounded-full border border-[#fff5c0]/60"
        style={{ background: 'linear-gradient(160deg, #fff9d6 0%, #f0c020 100%)' }}
      />
    </div>
  )
}

type CoinRainProps = {
  active?: boolean
}

export function CoinRain({ active = true }: CoinRainProps) {
  const reduceMotion = useReducedMotion()

  if (!active || reduceMotion) return null

  return (
    <div
      className="pointer-events-none absolute inset-0 z-50 overflow-hidden"
      aria-hidden
      data-node-id="131:2105"
    >
      {COIN_POSITIONS.map((coin) => (
        <motion.div
          key={coin.id}
          className="absolute top-0"
          style={{
            left: `${(coin.left / FRAME_WIDTH) * 100}%`,
            width: COIN_SIZE,
            height: COIN_SIZE,
            marginLeft: -COIN_SIZE / 2,
          }}
          initial={{ scaleX: 1, scaleY: 1, x: 0, y: 0 }}
          animate={{
            scaleX: [...scaleXKeyframes],
            y: [0, FALL_DISTANCE, FALL_DISTANCE],
          }}
          transition={coinTransition(coin.delay)}
        >
          <ThriveCoin />
        </motion.div>
      ))}
    </div>
  )
}

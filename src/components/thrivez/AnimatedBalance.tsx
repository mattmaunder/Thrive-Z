import { motion, useReducedMotion, type Transition } from 'motion/react'

type DigitConfig = {
  char: string
  slotClass: string
  opacityTimes: [number, number, number, number]
  yTimes: [number, number, number, number]
  textClass: string
}

const DIGITS: DigitConfig[] = [
  {
    char: '1',
    slotClass: 'left-[32px] w-[25px]',
    opacityTimes: [0, 0.0171, 0.0571, 1],
    yTimes: [0, 0.0171, 0.1886, 1],
    textClass: 'text-[64px] leading-[64px] font-semibold',
  },
  {
    char: '9',
    slotClass: 'left-[57px] w-[34px]',
    opacityTimes: [0, 0.0457, 0.0857, 1],
    yTimes: [0, 0.0457, 0.2171, 1],
    textClass: 'text-[64px] leading-[64px] font-semibold',
  },
  {
    char: '4',
    slotClass: 'left-[91px] w-[33px]',
    opacityTimes: [0, 0.0743, 0.1143, 1],
    yTimes: [0, 0.0743, 0.2457, 1],
    textClass: 'text-[64px] leading-[64px] font-semibold',
  },
  {
    char: '.',
    slotClass: 'left-0 w-[10px]',
    opacityTimes: [0, 0.1029, 0.1429, 1],
    yTimes: [0, 0.1029, 0.2743, 1],
    textClass: 'text-[46.08px] leading-[47px] font-medium',
  },
  {
    char: '7',
    slotClass: 'left-[10px] w-[20px]',
    opacityTimes: [0, 0.1314, 0.1714, 1],
    yTimes: [0, 0.1314, 0.3029, 1],
    textClass: 'text-[46.08px] leading-[47px] font-medium',
  },
  {
    char: '0',
    slotClass: 'left-[30px] w-[25px]',
    opacityTimes: [0, 0.16, 0.2, 1],
    yTimes: [0, 0.16, 0.3314, 1],
    textClass: 'text-[46.08px] leading-[47px] font-medium',
  },
]

function digitTransition(config: DigitConfig, reduceMotion: boolean): Transition {
  if (reduceMotion) {
    return { duration: 0 }
  }

  return {
    opacity: {
      duration: 3.5,
      times: config.opacityTimes,
      ease: ['linear', 'easeOut', 'linear'],
      repeat: Infinity,
    },
    y: {
      duration: 3.5,
      times: config.yTimes,
      ease: ['linear', [0.34, 1.45, 0.64, 1], 'linear'],
      repeat: Infinity,
    },
  }
}

export function AnimatedBalance() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="absolute left-4 top-11 h-16 w-[179px]" data-node-id="90:12520">
      <p className="absolute left-0 top-0 font-['Oswald'] text-[64px] font-semibold leading-[64px] text-[#b0fe00]">
        $
      </p>

      <div className="absolute left-0 top-0 h-16 w-[124px]">
        {DIGITS.slice(0, 3).map((digit) => (
          <motion.div
            key={digit.char + digit.slotClass}
            className={`absolute top-0 h-16 overflow-hidden ${digit.slotClass}`}
            data-node-id={`balance-${digit.char}`}
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 64 }}
            animate={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: [0, 0, 1, 1], y: [64, 64, 0, 0] }
            }
            transition={digitTransition(digit, !!reduceMotion)}
          >
            <p
              className={`absolute left-0 top-0 whitespace-nowrap font-['Oswald'] text-[#b0fe00] ${digit.textClass}`}
            >
              {digit.char}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="absolute left-[124px] top-0 h-[47px] w-[55px]">
        {DIGITS.slice(3).map((digit) => (
          <motion.div
            key={digit.char + digit.slotClass}
            className={`absolute top-0 h-[47px] overflow-hidden ${digit.slotClass}`}
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 47 }}
            animate={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: [0, 0, 1, 1], y: [47, 47, 0, 0] }
            }
            transition={digitTransition(digit, !!reduceMotion)}
          >
            <p
              className={`absolute left-0 top-0 whitespace-nowrap font-['Oswald'] text-[#b0fe00] ${digit.textClass}`}
            >
              {digit.char}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

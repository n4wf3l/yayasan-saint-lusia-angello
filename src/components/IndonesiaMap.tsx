import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { geoMercator, geoPath } from 'd3-geo'
import type { Feature, MultiPolygon, Polygon } from 'geojson'
import indonesiaData from '../data/indonesia.json'

const indonesiaFeature = indonesiaData as Feature<
  Polygon | MultiPolygon,
  { name: string }
>

type City = { name: string; lngLat: [number, number]; nickname?: string }

const JAKARTA: City = {
  name: 'Jakarta',
  lngLat: [106.845599, -6.208763],
  nickname: 'Rumah Kami',
}

const PIN_DELAY = 2.7
const NICKNAME_DELAY_MS = 3400
const TYPE_INTERVAL_MS = 70

interface Props {
  className?: string
  cities?: City[]
  pinColor?: string
  strokeColor?: string
  fillColor?: string
  fillOpacity?: number
  strokeWidth?: number
  width?: number
  height?: number
  padding?: number
}

export function IndonesiaMap({
  className = '',
  cities = [],
  pinColor = '#f06108',
  strokeColor = 'currentColor',
  fillColor,
  fillOpacity = 0.2,
  strokeWidth = 1.4,
  width = 1200,
  height = 460,
  padding = 20,
}: Props) {
  const { projection, pathD } = useMemo(() => {
    const proj = geoMercator().fitExtent(
      [
        [padding, padding],
        [width - padding, height - padding],
      ],
      indonesiaFeature,
    )
    const pathGen = geoPath(proj)
    return { projection: proj, pathD: pathGen(indonesiaFeature) ?? '' }
  }, [width, height, padding])

  const allCities: City[] = useMemo(() => [JAKARTA, ...cities], [cities])
  const fill = fillColor ?? strokeColor

  const nickname = allCities[0]?.nickname ?? ''
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (!nickname) return
    setTyped('')
    let i = 0
    const kick = window.setTimeout(() => {
      const int = window.setInterval(() => {
        i += 1
        setTyped(nickname.slice(0, i))
        if (i >= nickname.length) window.clearInterval(int)
      }, TYPE_INTERVAL_MS)
    }, NICKNAME_DELAY_MS)
    return () => window.clearTimeout(kick)
  }, [nickname])

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      className={`block ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Jakarta on the map of Indonesia"
    >
      <motion.path
        d={pathD}
        fill={fill}
        stroke="none"
        initial={{ fillOpacity: 0 }}
        animate={{ fillOpacity }}
        transition={{ duration: 0.6, delay: 2.4, ease: 'easeOut' }}
      />

      <motion.path
        d={pathD}
        fill="none"
        stroke={strokeColor}
        strokeOpacity={0.95}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.6, ease: [0.65, 0, 0.35, 1] }}
      />

      {allCities.map((city, i) => {
        const projected = projection(city.lngLat)
        if (!projected) return null
        const [cx, cy] = projected
        const isPrimary = i === 0
        return (
          <motion.g
            key={city.name}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: PIN_DELAY + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            <motion.circle
              cx={cx}
              cy={cy}
              r={16}
              fill={pinColor}
              initial={{ opacity: 0.4, scale: 0.5 }}
              animate={{
                opacity: [0.4, 0, 0.4],
                scale: [0.5, 1.8, 0.5],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2.9 + i * 0.1,
              }}
            />
            <circle cx={cx} cy={cy} r={8} fill={pinColor} />
            <circle cx={cx} cy={cy} r={3} fill="#fff" fillOpacity={0.9} />

            {isPrimary && city.nickname && typed && (
              <text
                x={cx + 20}
                y={cy + 6}
                fontSize={22}
                fontFamily="'Fraunces', 'Georgia', serif"
                fontStyle="italic"
                fontWeight={500}
                fill="#9a3b10"
              >
                {typed}
                {typed.length < (city.nickname?.length ?? 0) && (
                  <tspan className="animate-pulse" fontWeight={400}>
                    |
                  </tspan>
                )}
              </text>
            )}
          </motion.g>
        )
      })}
    </svg>
  )
}

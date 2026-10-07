type Props = {
  className?: string
  showJakartaLabel?: boolean
}

/**
 * Simplified silhouette of the Indonesian archipelago.
 * Not cartographically precise — the main islands (Sumatra, Java,
 * Kalimantan, Sulawesi, Papua, Nusa Tenggara) are stylised blobs
 * placed in roughly the right positions. Jakarta is marked at (155, 164).
 */
export function IndonesiaMap({ className = '', showJakartaLabel = false }: Props) {
  return (
    <svg
      viewBox="0 0 480 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <g fill="currentColor">
        {/* Sumatra */}
        <path d="M 18 58 Q 32 42, 58 50 Q 92 62, 128 92 Q 160 118, 190 148 Q 195 155, 188 158 Q 170 155, 142 142 Q 108 125, 78 102 Q 42 78, 18 58 Z" />
        {/* Java */}
        <path d="M 150 162 Q 190 158, 232 161 Q 272 165, 302 172 Q 268 178, 230 177 Q 190 176, 158 172 Q 146 168, 150 162 Z" />
        {/* Kalimantan (Borneo) */}
        <path d="M 196 52 Q 236 42, 282 54 Q 308 70, 312 100 Q 306 128, 282 140 Q 250 144, 222 134 Q 196 118, 188 92 Q 184 70, 196 52 Z" />
        {/* Sulawesi */}
        <path d="M 322 70 Q 338 68, 342 86 L 352 80 Q 362 86, 358 104 L 342 110 Q 338 120, 342 134 Q 350 142, 346 150 Q 332 148, 328 132 L 322 118 Q 316 110, 320 100 L 312 96 Q 310 82, 322 70 Z" />
        {/* Papua (western half shown) */}
        <path d="M 362 76 Q 400 68, 440 82 Q 470 100, 470 142 Q 462 174, 428 180 Q 396 178, 376 162 Q 356 140, 358 108 Q 358 90, 362 76 Z" />
        {/* Bali */}
        <circle cx="286" cy="178" r="3.5" />
        {/* Nusa Tenggara (Lombok, Sumbawa, Flores, etc.) */}
        <ellipse cx="305" cy="180" rx="7" ry="2.5" />
        <ellipse cx="322" cy="182" rx="6" ry="2" />
        <ellipse cx="340" cy="183" rx="9" ry="2.5" />
        <ellipse cx="360" cy="186" rx="4" ry="2" />
        {/* Maluku */}
        <circle cx="368" cy="118" r="4" />
        <circle cx="378" cy="128" r="3" />
      </g>

      {/* Jakarta marker */}
      <g transform="translate(155 164)">
        <circle r="11" fill="#f06108" fillOpacity="0.15">
          <animate
            attributeName="r"
            values="7;13;7"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            values="0.25;0.05;0.25"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3.5" fill="#f06108" stroke="#ffffff" strokeWidth="1.2" />
        {showJakartaLabel && (
          <text
            x="8"
            y="-6"
            fontSize="11"
            fontWeight="600"
            fill="#0f172a"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            Jakarta
          </text>
        )}
      </g>
    </svg>
  )
}

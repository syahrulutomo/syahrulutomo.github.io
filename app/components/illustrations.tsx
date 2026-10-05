/* Flat line-art illustrations, orange accent to match the brand. */

export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Developer sitting on a bean bag with a laptop"
    >
      <defs>
        <clipPath id="screen">
          <rect x="196" y="250" width="92" height="60" rx="4" />
        </clipPath>
      </defs>

      {/* Hanging lamp */}
      <line x1="120" y1="0" x2="120" y2="70" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M92 118c0-20 12-48 28-48s28 28 28 48Z" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
      <ellipse cx="120" cy="118" rx="28" ry="7" fill="#fff2ec" stroke="#1a1a1a" strokeWidth="2.5" />
      <circle cx="120" cy="124" r="6" fill="#ff5b2e" />
      <g stroke="#ff5b2e" strokeWidth="2.2" strokeLinecap="round">
        <line x1="98" y1="138" x2="94" y2="148" />
        <line x1="120" y1="142" x2="120" y2="153" />
        <line x1="142" y1="138" x2="146" y2="148" />
      </g>

      {/* Floating shelf with books + plant */}
      <line x1="372" y1="104" x2="500" y2="104" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <g stroke="#1a1a1a" strokeWidth="2.5">
        <rect x="384" y="74" width="12" height="30" fill="#fff" />
        <rect x="398" y="68" width="12" height="36" fill="#fff2ec" />
        <rect x="412" y="78" width="12" height="26" fill="#fff" />
      </g>
      {/* plant pot */}
      <path d="M452 104v-16h28v16Z" fill="#ff5b2e" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M466 88c0-16 10-26 22-30-4 14-10 24-22 30Z" fill="#fff2ec" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M466 90c-2-14-10-22-20-24 2 12 8 20 20 24Z" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />

      {/* Floor shadow */}
      <ellipse cx="250" cy="410" rx="190" ry="16" fill="#fff2ec" />

      {/* Bean bag */}
      <path
        d="M150 360c-14-40 6-92 60-104 44-10 92 0 118 34 22 28 20 60 0 76-28 22-158 34-178-6Z"
        fill="#ff5b2e"
        stroke="#1a1a1a"
        strokeWidth="2.5"
      />
      <path d="M176 392c40 10 112 6 150-14" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" opacity="0.5" />

      {/* Person */}
      {/* legs */}
      <path d="M196 356c22-6 60-4 86 10l34 20" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M196 356c20 20 60 24 96 30" fill="#1a1a1a" opacity="0" />
      <path d="M232 352l78 34" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" />
      {/* shoes */}
      <path d="M308 384c8-2 18 2 22 10 2 6-2 10-10 10-10 0-18-6-18-12Z" fill="#ff5b2e" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M286 374c8-2 18 2 22 10 2 6-2 10-10 10-10 0-18-6-18-12Z" fill="#ff5b2e" stroke="#1a1a1a" strokeWidth="2.5" />

      {/* torso */}
      <path d="M214 300c-6-34 8-58 36-62 30-4 48 16 50 44 2 20-6 36-6 36l-66 6c-8-6-12-14-14-24Z" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* arm to laptop */}
      <path d="M224 300c-10 10-20 20-18 34" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />

      {/* laptop */}
      <rect x="190" y="306" width="104" height="12" rx="3" fill="#1a1a1a" />
      <rect x="196" y="250" width="92" height="62" rx="5" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
      <g clipPath="url(#screen)">
        <rect x="196" y="250" width="92" height="60" fill="#fff2ec" />
        <circle cx="242" cy="280" r="12" fill="#ff5b2e" />
      </g>

      {/* head */}
      <circle cx="262" cy="214" r="26" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M238 210c-2-20 12-34 28-32 16 2 24 12 24 22-8-4-16-4-24-2-10 2-20 6-28 12Z" fill="#1a1a1a" />
      {/* glasses */}
      <circle cx="254" cy="216" r="6" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="272" cy="216" r="6" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="260" y1="216" x2="266" y2="216" stroke="#1a1a1a" strokeWidth="2" />
      {/* smile */}
      <path d="M256 228c3 3 9 3 12 0" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function AboutIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 440 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Person relaxing with a mug beside a window and books"
    >
      {/* window */}
      <rect x="30" y="34" width="150" height="150" rx="6" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
      <line x1="105" y1="34" x2="105" y2="184" stroke="#1a1a1a" strokeWidth="2.5" />
      <line x1="30" y1="109" x2="180" y2="109" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* clouds */}
      <path d="M48 74c0-8 8-12 14-10 2-8 16-8 18 0 8-2 14 4 12 12H48Z" fill="#fff2ec" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M120 150c0-7 7-10 12-8 2-7 14-7 16 0 7-2 12 3 10 10h-38Z" fill="#fff2ec" stroke="#1a1a1a" strokeWidth="2" />

      {/* floor shadow */}
      <ellipse cx="250" cy="330" rx="170" ry="14" fill="#fff2ec" />

      {/* books */}
      <g stroke="#1a1a1a" strokeWidth="2.5">
        <rect x="300" y="286" width="96" height="16" rx="2" fill="#fff" />
        <rect x="312" y="270" width="80" height="16" rx="2" fill="#fff2ec" />
        <rect x="322" y="254" width="64" height="16" rx="2" fill="#fff" />
      </g>

      {/* person */}
      <path d="M150 330c-10-54 16-96 64-96s74 40 66 96Z" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* arm + mug */}
      <path d="M196 300c16 12 38 12 54-2" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M236 286h34v22a10 10 0 0 1-10 10h-14a10 10 0 0 1-10-10Z" fill="#ff5b2e" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M270 292h8a7 7 0 0 1 0 14h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
      <g stroke="#ff5b2e" strokeWidth="2" strokeLinecap="round">
        <path d="M246 278c-3-5 3-9 0-14" />
        <path d="M258 278c-3-5 3-9 0-14" />
      </g>

      {/* head */}
      <circle cx="214" cy="212" r="30" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M186 206c-2-24 14-40 32-38 18 2 28 16 26 28-10-6-20-6-30-2-12 2-20 6-28 12Z" fill="#1a1a1a" />
      <path d="M210 224c4 3 10 3 14 0" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="226" cy="212" r="2" fill="#1a1a1a" />
    </svg>
  );
}

export const Spinner = () => (
  <div className="flex flex-col items-center justify-center w-full h-full">
    <div className="w-16 h-16 mb-4">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          r="34"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(325.906 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.25s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
    <p className="text-center text-neutral-600 dark:text-neutral-400">Loading Spotify Tracker...</p>
  </div>
);

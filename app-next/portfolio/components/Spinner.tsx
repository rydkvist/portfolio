export const Spinner = () => (
  <div className="h-16 w-16" role="status" aria-live="polite">
    <span className="sr-only">Loading...</span>
    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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
);
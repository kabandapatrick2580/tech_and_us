"use client";

// Decorative full-screen signal lines — fixed layer behind all content.
// Each entry defines one horizontal track with one or more pulses traveling it.
const tracks = [
  {
    top: "8%",
    lineOpacity: 0.04,
    pulses: [
      { color: "59,130,246",  width: 130, duration: 4800, delay: 0     },
      { color: "59,130,246",  width: 80,  duration: 4800, delay: 2400  },
    ],
  },
  {
    top: "21%",
    lineOpacity: 0.03,
    pulses: [
      { color: "139,92,246",  width: 160, duration: 7200, delay: 1100  },
      { color: "139,92,246",  width: 90,  duration: 7200, delay: 4700  },
    ],
  },
  {
    top: "37%",
    lineOpacity: 0.04,
    pulses: [
      { color: "59,130,246",  width: 110, duration: 5600, delay: 600   },
    ],
  },
  {
    top: "52%",
    lineOpacity: 0.03,
    pulses: [
      { color: "16,185,129",  width: 140, duration: 8400, delay: 2000  },
      { color: "16,185,129",  width: 70,  duration: 8400, delay: 5200  },
    ],
  },
  {
    top: "66%",
    lineOpacity: 0.04,
    pulses: [
      { color: "139,92,246",  width: 120, duration: 5200, delay: 300   },
      { color: "59,130,246",  width: 85,  duration: 5200, delay: 2900  },
    ],
  },
  {
    top: "80%",
    lineOpacity: 0.03,
    pulses: [
      { color: "59,130,246",  width: 150, duration: 6600, delay: 900   },
    ],
  },
  {
    top: "92%",
    lineOpacity: 0.025,
    pulses: [
      { color: "139,92,246",  width: 100, duration: 9000, delay: 3500  },
    ],
  },
];

export default function PulseSignals() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {tracks.map((track, ti) => (
        <div
          key={ti}
          className="absolute left-0 right-0 h-px"
          style={{
            top: track.top,
            background: `rgba(255,255,255,${track.lineOpacity})`,
          }}
        >
          {track.pulses.map((pulse, pi) => (
            <div
              key={pi}
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                width: `${pulse.width}px`,
                height: "1px",
                background: `linear-gradient(to right,
                  transparent 0%,
                  rgba(${pulse.color},0.15) 20%,
                  rgba(${pulse.color},0.9) 50%,
                  rgba(${pulse.color},0.15) 80%,
                  transparent 100%
                )`,
                boxShadow: `0 0 6px 1px rgba(${pulse.color},0.4), 0 0 14px 2px rgba(${pulse.color},0.15)`,
                animation: `signal-travel ${pulse.duration}ms ${pulse.delay}ms linear infinite`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

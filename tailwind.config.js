module.exports = {
	content: {
		relative: true,
		transform: (content) => content.replace(/taos:/g, ""),
		files: ["index.html"],
	},
	content: ["index.html"],
	safelist: [
		"!duration-[0ms]",
		"!delay-[0ms]",
		'html.js :where([class*="taos:"]:not(.taos-init))',
	],
	darkMode: "class",
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			colors: {
				primary: "#14b8a6",
				secondary: "#64748b",
				dark: "#0f172a",
			},
			screens: {
				"2xl": "1320px",
			},
			animation: {
				wavingHand: "wavingHand 2s linear infinite",
				"bounce-slow": "bounce 1.2s ease-out infinite",
				"infinite-scroll": "infinite-scroll 25s linear infinite",
				gradient: "gradient 2s linear infinite",
			},
			keyframes: {
				wavingHand: {
					"0%": { transform: "rotate(0deg) " },
					"10%": { transform: "rotate(14deg)" },
					"20%": { transform: "rotate(-8deg)" },
					"30%": { transform: "rotate(14deg)" },
					"40%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(10deg)" },
					"60%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
				gradient: {
					to: { "background-position": "200% center" },
				},
			},
		},
	},
	plugins: [],
};

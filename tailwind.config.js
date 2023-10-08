module.exports = {
	content: ["index.html"],
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
			keyframes: {
				wavingHand: {
					"0%": { transform: "rotate(0deg)" },
					"10%": { transform: "rotate(14deg)" },
					"20%": { transform: "rotate(-8deg)" },
					"30%": { transform: "rotate(14deg)" },
					"40%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" },
				},
			},
			animation: {
				wavingHand: "wavingHand 2s linear infinite",
			},
		},
	},
	plugins: [],
};

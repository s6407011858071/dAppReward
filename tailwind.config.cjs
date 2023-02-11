module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require("@tailwindcss/typography"), require('daisyui')],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
    },
};

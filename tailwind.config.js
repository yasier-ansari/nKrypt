/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            mont: ['Montserrat', 'sans-serif'],
            jak: ['Plus Jakarta Sans', 'sans-serif'],
            pop: ['Poppins', 'sans-serif'],
            krona: ['Krona One', 'sans-serif'],
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        "gilroy-regular": ["gilroy-regular"],
        "gilroy-medium": ["gilroy-medium"],
        "gilroy-bold": ["gilroy-bold"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        "default-white": "#F9FBFD",
        "white-50": "#B5B5B5",
        300: "#CBD5E1",
        purple: "#40337A",
        "purple-opacity": "#ABA9D8",
        "purple-opacity-2": "#232250",
        garnet: "#331E36",
        black: "#0F172A",
        "gray-1": "#64748B",
        "gray-2": "#F4F4F4",
        "gray-3": "#666666",
        "gray-4": "#7D7D7D",
        red: "#F24E1E",
        green: "#0BED9C",
        
      },
      screens: {
        smartphone: "481px",
        tablet: "577px",
        laptop: "769px",
        desktop: "1025px",
        "large-width": "1441px",
        "extra-width": "1921px",
      },
      margin: {
        sidebar: "300px",
      },
      width: {
        sidebar: "300px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

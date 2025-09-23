/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // GMAO Brand Colors (based on logo and dashboard theme)
        "gmao-primary": "#6366F1", // Main purple/indigo from logo
        "gmao-primary-dark": "#4F46E5", // Darker shade of primary
        "gmao-primary-light": "#8B5CF6", // Lighter shade of primary
        "gmao-secondary": "#06B6D4", // Cyan accent from dashboard
        "gmao-secondary-dark": "#0891B2", // Darker cyan
        "gmao-secondary-light": "#22D3EE", // Lighter cyan
        "gmao-success": "#10B981", // Green for success states
        "gmao-warning": "#F59E0B", // Orange for warnings
        "gmao-error": "#EF4444", // Red for errors
        "gmao-info": "#3B82F6", // Blue for info

        // Background and Surface Colors
        "gmao-bg-primary": "#FAFAFB", // Light background
        "gmao-bg-secondary": "#F8FAFC", // Slightly darker background
        "gmao-surface": "#FFFFFF", // Card/surface background
        "gmao-surface-hover": "#F1F5F9", // Hover states

        // Text Colors
        "gmao-text-primary": "#1E293B", // Main text color
        "gmao-text-secondary": "#64748B", // Secondary text
        "gmao-text-muted": "#94A3B8", // Muted text
        "gmao-text-light": "#CBD5E1", // Light text

        // Border Colors
        "gmao-border": "#E2E8F0", // Default border
        "gmao-border-light": "#F1F5F9", // Light border
        "gmao-border-dark": "#CBD5E1", // Darker border

        // Dashboard Specific Colors
        "gmao-chart-purple": "#8B5CF6",
        "gmao-chart-green": "#10B981",
        "gmao-chart-cyan": "#06B6D4",
        "gmao-chart-orange": "#F59E0B",
        "gmao-chart-blue": "#3B82F6",
        "gmao-chart-pink": "#EC4899",

        // Status Colors for Maintenance
        "gmao-status-pending": "#F59E0B", // Orange
        "gmao-status-in-progress": "#3B82F6", // Blue
        "gmao-status-completed": "#10B981", // Green
        "gmao-status-cancelled": "#6B7280", // Gray
        "gmao-status-urgent": "#EF4444", // Red

        // Legacy colors (keeping for backward compatibility)
        "mivoyage-primary": "#126A32",
        "mivoyage-primary-dark": "#0F5529",
        "mivoyage-primary-light": "#1A7A3F",
        "mivoyage-accent": "#ED2C2C",
        "mivoyage-accent-dark": "#D12525",
        "mivoyage-accent-light": "#F24A4A",
        "mivoyage-dark": "#020817",
        "mivoyage-gray": "#4D805F",
        "mivoyage-light-gray": "#F3F4F6",
        "mivoyage-white": "#FFFFFF",
        "app-primary-purple": "#8c52ff",
        "app-secondary-purple": "#cb6ce6",
        "app-fird-purple": "#d2abc9",
        "app-primay-dark": "#362E75",
        "app-secondary-dark": "#7263D8",
        "app-accent-light": "#CDB9FD",
        "app-accent-lighter": "rgba(213,217,254,0.5)",
        "app-highlight-dar": "#2000E5",
        "custom-opacity": "rgb(0, 0, 0, 0.5)",
        "app-primary-dark": "#362E75",
      },
      backgroundImage: {
        // GMAO specific gradients
        "gmao-gradient": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        "gmao-hero-gradient":
          "linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)",
        "gmao-card-gradient":
          "linear-gradient(135deg, #FAFAFB 0%, #FFFFFF 100%)",
        "gmao-dashboard-gradient":
          "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
        "gmao-success-gradient":
          "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        "gmao-warning-gradient":
          "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
        "gmao-error-gradient":
          "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",

        // Legacy gradients
        "mivoyage-gradient":
          "linear-gradient(135deg, #126A32 0%, #1A7A3F 100%)",
        "mivoyage-hero-gradient":
          "linear-gradient(135deg, rgba(18, 106, 50, 0.9) 0%, rgba(26, 122, 63, 0.9) 100%)",
        "mivoyage-card-gradient":
          "linear-gradient(135deg, #F8FAF9 0%, #FFFFFF 100%)",
      },
      padding: {
        "app-primary-padding": "3.8rem",
        "app-secondary-padding": "2rem",
        "gmao-section": "3rem",
        "gmao-card": "1.5rem",
        "gmao-dashboard": "2rem",
        "gmao-widget": "1rem",
        "mivoyage-section": "4rem",
        "mivoyage-card": "1.5rem",
      },
      margin: {
        "gmao-section": "2rem",
        "gmao-widget": "1rem",
        "mivoyage-section": "3rem",
      },
      fontSize: {
        customInherit: "inherit",
        "gmao-hero": ["2.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "gmao-title": ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
        "gmao-subtitle": ["1.5rem", { lineHeight: "1.3", fontWeight: "500" }],
        "gmao-body": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        "gmao-caption": ["0.875rem", { lineHeight: "1.4", fontWeight: "400" }],
        "gmao-small": ["0.75rem", { lineHeight: "1.3", fontWeight: "400" }],
        "mivoyage-hero": ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        "mivoyage-title": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        "mivoyage-subtitle": [
          "1.25rem",
          { lineHeight: "1.4", fontWeight: "500" },
        ],
      },
      fontFamily: {
        gmao: ['"Public Sans"', "sans-serif"],
      },
      borderRadius: {
        gmao: "0.5rem",
        "gmao-card": "0.75rem",
        "gmao-button": "0.375rem",
        "gmao-widget": "0.5rem",
        "gmao-large": "1rem",
        mivoyage: "0.75rem",
        "mivoyage-card": "1rem",
        "mivoyage-button": "0.5rem",
      },
      gridTemplateColumns: {
        autoFit: "repeat(auto-fit, minmax(min(400px,100%), 1fr))",
        autoFitSM: "repeat(auto-fit, minmax(min(350px,100%), 1fr))",
        "gmao-dashboard": "repeat(auto-fit, minmax(300px, 1fr))",
        "gmao-widgets": "repeat(auto-fit, minmax(250px, 1fr))",
        "gmao-cards": "repeat(auto-fit, minmax(320px, 1fr))",
        "mivoyage-services": "repeat(auto-fit, minmax(280px, 1fr))",
        "mivoyage-features": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      boxShadow: {
        headerLinksShadow:
          "0px 6px 18px -1px rgba(0, 0, 0, 0.04),0px 2px 6px -1px rgba(0, 0, 0, 0.07)",
        custom: "0 8px 20px rgba(0, 0, 0, 0.4)",
        "gmao-card":
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "gmao-card-hover":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "gmao-button": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "gmao-button-hover": "0 2px 4px 0 rgba(99, 102, 241, 0.2)",
        "gmao-widget":
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "gmao-elevation-1":
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "gmao-elevation-2":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "gmao-elevation-3":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "mivoyage-card": "0 4px 20px rgba(18, 106, 50, 0.1)",
        "mivoyage-button": "0 2px 8px rgba(18, 106, 50, 0.2)",
        "mivoyage-hover": "0 8px 32px rgba(18, 106, 50, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "slide-left": "slideLeft 0.3s ease-out",
        "slide-right": "slideRight 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
        "gmao-float": "gmaoFloat 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
        gmaoFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      screens: {
        "custom-1024": { max: "1024px" },
        "custom-952": { max: "952px" },
        "custom-650": { max: "650px" },
        "custom-450": { max: "450px" },
        "gmao-mobile": { max: "768px" },
        "gmao-tablet": { min: "769px", max: "1024px" },
        "gmao-desktop": { min: "1025px" },
        "gmao-wide": { min: "1440px" },
        "mivoyage-mobile": { max: "768px" },
        "mivoyage-tablet": { min: "769px", max: "1024px" },
        "mivoyage-desktop": { min: "1025px" },
      },
      lineHeight: {
        "62px": "62px",
      },
      spacing: {
        "gmao-xs": "0.25rem", // 4px
        "gmao-sm": "0.5rem", // 8px
        "gmao-md": "1rem", // 16px
        "gmao-lg": "1.5rem", // 24px
        "gmao-xl": "2rem", // 32px
        "gmao-2xl": "3rem", // 48px
        "gmao-3xl": "4rem", // 64px
        "mivoyage-xs": "0.5rem",
        "mivoyage-sm": "1rem",
        "mivoyage-md": "1.5rem",
        "mivoyage-lg": "2rem",
        "mivoyage-xl": "3rem",
        "mivoyage-2xl": "4rem",
      },
      backdropBlur: {
        gmao: "8px",
      },
      opacity: {
        "gmao-overlay": "0.8",
        "gmao-disabled": "0.5",
      },
    },
  },
  plugins: [],
};

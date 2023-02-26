export function useBreakpoints() {

    const breakpoints = {
        tablet: 640,
        laptop: 1024,
        desktop: 1280
    }

    function getValue(value, delta = 0) {
        return `${value + delta}px`;
    }

    function match(query) {
        if (! window) {
            return false
        }

        return window.matchMedia(query).matches
    }

    return {
        isMobile() {
            return match(`(max-width: ${getValue(breakpoints.tablet, -0.1)})`)
        },

        isTablet() {
            return match(`(min-width: ${getValue(breakpoints.tablet)}) and (max-width: ${getValue(breakpoints.laptop, -0.1)})`)
        },

        isLaptop() {
            return match(`(min-width: ${getValue(breakpoints.laptop)}) and (max-width: ${getValue(breakpoints.desktop, -0.1)})`)
        },

        isDesktop() {
            return match(`(min-width: ${getValue(breakpoints.desktop)})`)
        },

        isGreaterThan(width) {
            return match(`(min-width: ${getValue(width)})`)
        },

        isSmallerThan(width) {
            return match(`(max-width: ${getValue(width, -0.1)})`)
        },

        breakpoints
    }
}

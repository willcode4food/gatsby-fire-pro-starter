import styled from '@emotion/styled'
import { COLORS, MQ } from 'utils/styleHelpers'

export const Wrapper = styled.button`
    /*
		both padding and appearance are here to help
		Mobile Safari rendering correctly, at least on
		older iOS versions — tested on iOS 12.4.2 / iPhone 5s
	*/
    padding: 0;
    appearance: none;
    align-items: center;
    background: transparent;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    height: 30px;
    justify-content: center;
    /*
		roughly compensates for the additional whitespace of this specific
		"icon button" in relation to its "social icon" siblings;
		leave the left untouched for some separation from the aforementioned
	*/
    margin-right: -11px;
    opacity: 0.75;
    /*
    allows us to use the default :focus
    outline without the "moon mask" being taken into account
    by the browser when rendering the outline —
    not an ideal solution, but good for now
  */
    overflow: hidden;
    position: relative;
    /*
    scaling to 75% of the original size
    scales the "moon" shape from 24px to 18px,
    aligning it with the rest of the main nav's
    "social icons"; sun and its rays are slightly larger;
    good for now, too ;-)
  */
    transform: scale(0.75);
    transition: opacity 0.3s ease;
    width: 30px;
    opacity: 1;
`
export const MoonOrSun = styled.div`
    border: ${(p) => (p.isDark ? `4px` : `2px`)} solid ${(p) => (p.isDark ? p.darkColor : p.color)};
    background: ${(p) => (p.isDark ? p.darkColor : p.color)};
    border-radius: 50%;
    height: 24px;
    overflow: ${(p) => (p.isDark ? `visible` : `hidden`)};
    position: relative;
    transform: scale(${(p) => (p.isDark ? 0.55 : 1)});
    transition: all 0.45s ease;
    width: 24px;
    &::before {
        border-radius: 50%;
        border: 2px solid ${(p) => (p.isDark ? p.darkColor : p.color)};
        content: '';
        height: 24px;
        opacity: ${(p) => (p.isDark ? 0 : 1)};
        position: absolute;
        right: -9px;
        top: -9px;
        transform: translate(${(p) => (p.isDark ? `14px, -14px` : `0, 0`)});
        transition: transform 0.45s ease;
        width: 24px;
    }
    &::after {
        border-radius: 50%;
        box-shadow: 0 -23px 0 ${(p) => (p.isDark ? p.darkColor : p.color)},
            0 23px 0 ${(p) => (p.isDark ? p.darkColor : p.color)}, 23px 0 0 ${(p) => (p.isDark ? p.darkColor : p.color)},
            -23px 0 0 ${(p) => (p.isDark ? p.darkColor : p.color)},
            15px 15px 0 ${(p) => (p.isDark ? p.darkColor : p.color)},
            -15px 15px 0 ${(p) => (p.isDark ? p.darkColor : p.color)},
            15px -15px 0 ${(p) => (p.isDark ? p.darkColor : p.color)},
            -15px -15px 0 ${(p) => (p.isDark ? p.darkColor : p.color)};
        content: '';
        height: 8px;
        left: 50%;
        margin: -4px 0 0 -4px;
        position: absolute;
        top: 50%;
        width: 8px;
        transform: scale(${(p) => (p.isDark ? 1 : 0)});
        transition: all 0.35s ease;
        ${MQ.M} {
            transform: scale(${(p) => (p.isDark ? 0.92 : 0)});
        }
    }
`

export const MoonMask = styled.div`
    background: ${COLORS.PRIMARY};
    border-radius: 50%;
    border: 0;
    height: 19px;
    opacity: ${(p) => (p.isDark ? 0 : 1)};
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(${(p) => (p.isDark ? `14px, -14px` : `0, 0`)});
    transition: background 0.5s ease, transform 0.5s ease;
    width: 19px;
    .dark & {
        background: ${COLORS.SECONDARY_DARK};
    }
`

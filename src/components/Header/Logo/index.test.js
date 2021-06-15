import React from 'react'
import renderer from 'react-test-renderer'

import Logo from './'

describe('Logo', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<Logo />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
.emotion-1 {
  -webkit-transition: fill 1.5s;
  transition: fill 1.5s;
}

.dark .emotion-1 {
  fill: #fff;
}

<svg
  className="emotion-0"
  height="100%"
  viewBox="0 0 320 45.28847776143346"
  width="100%"
>
  <defs
    id="SvgjsDefs1404"
  />
  <g
    featurekey="tgvQcv-0"
    fill="#231f20"
    id="SvgjsG1405"
    transform="matrix(1.7713808843254712,0,0,1.7713808843254712,-2.479932562327478,-10.575145197093017)"
  >
    <path
      className="emotion-1 emotion-2"
      d="M7.02 6.42 c1.36 0.86 1.78 2.38 1.76 3.92 c-0.02 1.28 -0.2 2.56 -1.46 3.5 c-1.06 0.82 -2.38 0.64 -3.64 0.64 l0 5.08 c0 0.6 -2.28 0.6 -2.28 0 l0 -12.3 c0 -0.94 0.02 -1.24 1.42 -1.26 l2.06 0 c0.72 0 1.52 0.02 2.14 0.42 z M6.5 10.76 c0.02 -0.22 0.02 -1.02 -0.02 -1.4 c-0.08 -0.74 -0.36 -1.12 -1.28 -1.12 l-1.52 0 l0 3.96 l1.72 0 c0.92 0 1.06 -1.12 1.1 -1.44 z M17.42 8.82 c0.06 0.22 0.02 8.34 -0.06 8.64 c-0.36 1.54 -1.44 2.54 -3.14 2.54 l-0.52 0 c-1.68 0 -2.76 -1 -3.14 -2.54 c-0.08 -0.3 -0.1 -8.42 -0.06 -8.64 c0.28 -1.68 1.32 -2.78 3.2 -2.82 l0.52 0 c1.9 0.04 2.92 1.14 3.2 2.82 z M13.4 17.6 c0.34 0.18 0.78 0.18 1.12 0 c0.58 -0.28 0.68 -0.98 0.7 -1.46 l0 -6.26 c0 -0.48 -0.12 -1.18 -0.7 -1.46 c-0.34 -0.18 -0.78 -0.18 -1.12 0 c-0.58 0.28 -0.7 0.98 -0.7 1.46 l0 6.26 c0.02 0.48 0.12 1.18 0.7 1.46 z M24.98 13.6 l0 -7.18 c0 -0.6 2.2 -0.6 2.2 0 l0 12.74 c0 1 -1.92 1.02 -2.12 0.52 l-3 -7.36 l0 7.24 c0 0.6 -2.22 0.6 -2.22 0 l0 -12.5 c0 -1.56 1.9 -1.08 2.2 -0.48 z M31.180000000000003 6 l2.7 0 c3.34 0 3.44 14 0.2 14 l-2.84 0 c-1.26 0 -1.26 0 -1.26 -1.1 l0 -11.8 c0 -1.08 0 -1.08 1.2 -1.1 z M33.06 8.26 l-0.02 0 c-0.8 0 -0.8 0 -0.8 0.76 l0 7.96 c0 0.74 0 0.74 0.84 0.74 l0.12 0 c1.3 0 1.24 -9.46 -0.14 -9.46 z M51.540000000000006 16.42 c0.04 0.68 -0.14 1.44 -0.52 2 c-0.18 0.26 -0.38 0.52 -0.64 0.74 c-0.16 0.12 -0.32 0.26 -0.5 0.36 s-0.38 0.18 -0.56 0.26 c-0.6 0.26 -1.32 0.28 -1.94 0.12 c-0.32 -0.08 -0.62 -0.2 -0.9 -0.38 c-0.26 -0.16 -0.54 -0.36 -0.74 -0.6 c-0.22 -0.24 -0.42 -0.5 -0.56 -0.8 c-0.08 -0.18 -0.18 -0.38 -0.24 -0.58 c-0.04 -0.2 -0.1 -0.72 -0.1 -0.92 c0 -0.6 2.24 -0.6 2.24 0 c0 0.5 0.78 1.84 1.98 0.64 c0.5 -0.72 0.04 -1.54 -0.4 -2.14 c-0.68 -0.84 -1.56 -1.48 -2.28 -2.28 c-0.42 -0.46 -0.84 -0.98 -1.1 -1.56 c-0.14 -0.32 -0.26 -0.64 -0.34 -1 c-0.3 -1.66 0.22 -4.62 3.84 -4.28 c1.82 0.18 2.62 1.74 2.62 2.8 c0 0.6 -2.28 0.6 -2.28 0 c0 -0.8 -2.26 -0.9 -1.98 0.86 c0.04 0.18 0.08 0.36 0.16 0.54 c0.12 0.26 0.26 0.48 0.42 0.7 c0.2 0.26 0.4 0.48 0.64 0.7 c0.88 0.86 1.88 1.64 2.52 2.74 c0.38 0.64 0.6 1.34 0.66 2.08 z M53.580000000000005 6 l7.96 0 c0.6 0 0.6 2.24 0 2.24 l-2.84 0.04 l0 11.28 c0 0.6 -2.28 0.6 -2.28 0 l0 -11.28 l-2.84 -0.04 c-0.6 0 -0.6 -2.24 0 -2.24 z M71.50000000000001 18.86 c0.42 1 -1.82 1.48 -2.08 0.88 l-0.12 -0.28 c-0.66 -1.58 -1.38 -3.38 -2.04 -4.98 l-0.98 0 l0 5.08 c0 0.6 -2.28 0.6 -2.28 0 l0 -12.3 c0 -0.94 0.02 -1.24 1.42 -1.26 l2.06 0 c0.72 0 1.52 0.02 2.14 0.42 c1.36 0.86 1.78 2.38 1.76 3.92 c-0.02 1.28 -0.2 2.56 -1.46 3.5 c-0.14 0.08 -0.26 0.16 -0.38 0.24 c0.64 1.52 1.34 3.26 1.96 4.78 z M66.28000000000002 12.2 l1.72 0 c0.92 0 1.06 -1.12 1.1 -1.44 c0.02 -0.22 0.02 -1.02 -0.02 -1.4 c-0.08 -0.74 -0.36 -1.12 -1.28 -1.12 l-1.52 0 l0 3.96 z M76.64000000000001 17.72 l2.86 0 c0.6 0 0.6 2.28 0 2.28 l-3.86 0 c-1.28 0 -1.28 0 -1.28 -1.08 l0 -11.84 c0 -1.08 0 -1.08 1.22 -1.1 l3.9 0.02 c0.6 0 0.6 2.28 0 2.28 l-2.84 0 l0 3.64 l2 0 c0.6 0 0.6 2.3 0 2.3 l-2 0 l0 3.5 z M85.04000000000002 17.72 l2.86 0 c0.6 0 0.6 2.28 0 2.28 l-3.86 0 c-1.28 0 -1.28 0 -1.28 -1.08 l0 -11.84 c0 -1.08 0 -1.08 1.22 -1.1 l3.9 0.02 c0.6 0 0.6 2.28 0 2.28 l-2.84 0 l0 3.64 l2 0 c0.6 0 0.6 2.3 0 2.3 l-2 0 l0 3.5 z M90.80000000000003 6 l7.96 0 c0.6 0 0.6 2.24 0 2.24 l-2.84 0.04 l0 11.28 c0 0.6 -2.28 0.6 -2.28 0 l0 -11.28 l-2.84 -0.04 c-0.6 0 -0.6 -2.24 0 -2.24 z M113.52000000000002 16.42 c0.04 0.68 -0.14 1.44 -0.52 2 c-0.18 0.26 -0.38 0.52 -0.64 0.74 c-0.16 0.12 -0.32 0.26 -0.5 0.36 s-0.38 0.18 -0.56 0.26 c-0.6 0.26 -1.32 0.28 -1.94 0.12 c-0.32 -0.08 -0.62 -0.2 -0.9 -0.38 c-0.26 -0.16 -0.54 -0.36 -0.74 -0.6 c-0.22 -0.24 -0.42 -0.5 -0.56 -0.8 c-0.08 -0.18 -0.18 -0.38 -0.24 -0.58 c-0.04 -0.2 -0.1 -0.72 -0.1 -0.92 c0 -0.6 2.24 -0.6 2.24 0 c0 0.5 0.78 1.84 1.98 0.64 c0.5 -0.72 0.04 -1.54 -0.4 -2.14 c-0.68 -0.84 -1.56 -1.48 -2.28 -2.28 c-0.42 -0.46 -0.84 -0.98 -1.1 -1.56 c-0.14 -0.32 -0.26 -0.64 -0.34 -1 c-0.3 -1.66 0.22 -4.62 3.84 -4.28 c1.82 0.18 2.62 1.74 2.62 2.8 c0 0.6 -2.28 0.6 -2.28 0 c0 -0.8 -2.26 -0.9 -1.98 0.86 c0.04 0.18 0.08 0.36 0.16 0.54 c0.12 0.26 0.26 0.48 0.42 0.7 c0.2 0.26 0.4 0.48 0.64 0.7 c0.88 0.86 1.88 1.64 2.52 2.74 c0.38 0.64 0.6 1.34 0.66 2.08 z M122.46000000000002 8.82 c0.06 0.22 0.02 8.34 -0.06 8.64 c-0.36 1.54 -1.44 2.54 -3.14 2.54 l-0.52 0 c-1.68 0 -2.76 -1 -3.14 -2.54 c-0.08 -0.3 -0.1 -8.42 -0.06 -8.64 c0.28 -1.68 1.32 -2.78 3.2 -2.82 l0.52 0 c1.9 0.04 2.92 1.14 3.2 2.82 z M118.44000000000003 17.6 c0.34 0.18 0.78 0.18 1.12 0 c0.58 -0.28 0.68 -0.98 0.7 -1.46 l0 -6.26 c0 -0.48 -0.12 -1.18 -0.7 -1.46 c-0.34 -0.18 -0.78 -0.18 -1.12 0 c-0.58 0.28 -0.7 0.98 -0.7 1.46 l0 6.26 c0.02 0.48 0.12 1.18 0.7 1.46 z M126.02000000000002 6 l4 0 c0.6 0 0.6 2.28 0 2.28 l-2.86 0 l0 3.64 l2 0 c0.6 0 0.6 2.3 0 2.3 l-2 0 l0 5.34 c0 0.6 -2.28 0.6 -2.28 0 l0 -12.46 c0 -1.1 0 -1.1 1.14 -1.1 z M132.52 6 l7.96 0 c0.6 0 0.6 2.24 0 2.24 l-2.84 0.04 l0 11.28 c0 0.6 -2.28 0.6 -2.28 0 l0 -11.28 l-2.84 -0.04 c-0.6 0 -0.6 -2.24 0 -2.24 z M150.74 12.98 l1.12 -6.56 c0.1 -0.62 2.44 -0.6 2.26 0.4 l-2.16 12.52 c-0.2 1 -2.14 0.7 -2.26 0.1 l-1.36 -6.96 l-1.38 6.96 c-0.1 0.6 -2.08 0.9 -2.26 -0.1 l-2.16 -12.52 c-0.18 -1 2.16 -1.02 2.26 -0.4 l1.12 6.56 l1.26 -6.54 c0.2 -0.6 2.1 -0.6 2.3 0 z M161.62000000000003 6.42 l2.08 12.7 c0.16 1 -2.1 1.1 -2.22 0.38 l-0.4 -2.4 l-2.34 0 l-0.4 2.4 c-0.1 0.6 -2.38 0.62 -2.22 -0.38 l2.1 -12.7 c0.1 -0.6 3.32 -0.54 3.4 0 z M160.70000000000005 14.84 l-0.78 -4.78 l-0.8 4.78 l1.58 0 z M173.60000000000005 18.86 c0.42 1 -1.82 1.48 -2.08 0.88 l-0.12 -0.28 c-0.66 -1.58 -1.38 -3.38 -2.04 -4.98 l-0.98 0 l0 5.08 c0 0.6 -2.28 0.6 -2.28 0 l0 -12.3 c0 -0.94 0.02 -1.24 1.42 -1.26 l2.06 0 c0.72 0 1.52 0.02 2.14 0.42 c1.36 0.86 1.78 2.38 1.76 3.92 c-0.02 1.28 -0.2 2.56 -1.46 3.5 c-0.14 0.08 -0.26 0.16 -0.38 0.24 c0.64 1.52 1.34 3.26 1.96 4.78 z M168.38000000000005 12.2 l1.72 0 c0.92 0 1.06 -1.12 1.1 -1.44 c0.02 -0.22 0.02 -1.02 -0.02 -1.4 c-0.08 -0.74 -0.36 -1.12 -1.28 -1.12 l-1.52 0 l0 3.96 z M178.74000000000007 17.72 l2.86 0 c0.6 0 0.6 2.28 0 2.28 l-3.86 0 c-1.28 0 -1.28 0 -1.28 -1.08 l0 -11.84 c0 -1.08 0 -1.08 1.22 -1.1 l3.9 0.02 c0.6 0 0.6 2.28 0 2.28 l-2.84 0 l0 3.64 l2 0 c0.6 0 0.6 2.3 0 2.3 l-2 0 l0 3.5 z"
    />
  </g>
  <g
    featurekey="ZpTWfr-0"
    fill="#c60028"
    id="SvgjsG1406"
    transform="matrix(0.6460452510504043,0,0,0.6460452510504043,26.927578151330824,32.17032172646522)"
  >
    <path
      className="emotion-1 emotion-2"
      d="M11.4 20.3 c-0.33334 0 -0.58668 -0.14 -0.76002 -0.42 l-7.22 -11.44 l0 10.98 c0 0.24 -0.08334 0.44666 -0.25 0.62 s-0.37666 0.26 -0.63 0.26 c-0.24 0 -0.44666 -0.08666 -0.62 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 c0.33334 0 0.58668 0.13334 0.76002 0.4 l7.22 11.44 l0 -10.96 c0 -0.24 0.08334 -0.44666 0.25 -0.62 s0.37666 -0.26 0.63 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 l0 14.02 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 z M39.099999999999994 20.3 c-1.0933 0 -2.12 -0.20666 -3.08 -0.62 s-1.7967 -0.97668 -2.51 -1.69 s-1.2767 -1.55 -1.69 -2.51 s-0.62 -1.9867 -0.62 -3.08 c0 -1.08 0.20666 -2.1 0.62 -3.06 s0.97668 -1.7967 1.69 -2.51 s1.55 -1.2767 2.51 -1.69 s1.9867 -0.62 3.08 -0.62 c1.08 0 2.1 0.20666 3.06 0.62 s1.7967 0.97668 2.51 1.69 s1.2767 1.55 1.69 2.51 s0.62 1.98 0.62 3.06 c0 1.0933 -0.20666 2.12 -0.62 3.08 s-0.97668 1.7967 -1.69 2.51 s-1.55 1.2767 -2.51 1.69 s-1.98 0.62 -3.06 0.62 z M39.099999999999994 6.279999999999999 c-0.84 0 -1.6333 0.16 -2.38 0.48 s-1.4 0.75666 -1.96 1.31 s-1 1.2033 -1.32 1.95 s-0.48 1.54 -0.48 2.38 s0.16 1.6333 0.48 2.38 s0.76 1.4 1.32 1.96 s1.2133 1 1.96 1.32 s1.54 0.48 2.38 0.48 s1.6333 -0.16 2.38 -0.48 s1.3967 -0.76 1.95 -1.32 s0.99 -1.2133 1.31 -1.96 s0.48 -1.54 0.48 -2.38 s-0.16 -1.6333 -0.48 -2.38 s-0.75666 -1.3967 -1.31 -1.95 s-1.2033 -0.99 -1.95 -1.31 s-1.54 -0.48 -2.38 -0.48 z M83.88 12.219999999999999 c-0.32 0.85334 -0.6333 1.6967 -0.93996 2.53 s-0.59 1.5933 -0.85 2.28 s-0.47666 1.27 -0.65 1.75 s-0.28668 0.79334 -0.34002 0.94 c-0.06666 0.17334 -0.17666 0.31334 -0.33 0.42 s-0.32334 0.16 -0.51 0.16 s-0.35666 -0.05334 -0.51 -0.16 s-0.26334 -0.24666 -0.33 -0.42 l-4.36 -11.88 l-4.38 11.88 c-0.06666 0.17334 -0.17332 0.31334 -0.31998 0.42 s-0.31332 0.16 -0.49998 0.16 s-0.35666 -0.05334 -0.51 -0.16 s-0.26334 -0.24666 -0.33 -0.42 c-0.05334 -0.14666 -0.17 -0.46 -0.35 -0.94 s-0.39666 -1.0633 -0.65 -1.75 s-0.53334 -1.4467 -0.84 -2.28 s-0.62 -1.6767 -0.94 -2.53 c-0.30666 -0.84 -0.61 -1.6633 -0.91 -2.47 s-0.56666 -1.5333 -0.8 -2.18 s-0.42 -1.18 -0.56 -1.6 s-0.21 -0.65666 -0.21 -0.71 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 c0.18666 0 0.35666 0.05334 0.51 0.16 s0.26334 0.24666 0.33 0.42 l4.38 11.88 l4.36 -11.88 c0.06666 -0.17334 0.17666 -0.31334 0.33 -0.42 s0.32334 -0.16 0.51 -0.16 s0.35332 0.05334 0.49998 0.16 s0.25332 0.24666 0.31998 0.42 l4.38 11.88 l4.36 -11.88 c0.06666 -0.17334 0.17666 -0.31334 0.33 -0.42 s0.32334 -0.16 0.51 -0.16 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 c0 0.05334 -0.07 0.29 -0.21 0.71 s-0.32666 0.95334 -0.56 1.6 s-0.49668 1.3733 -0.79002 2.18 s-0.59334 1.63 -0.9 2.47 z M144.56 12.219999999999999 c-0.32 0.85334 -0.6333 1.6967 -0.93996 2.53 s-0.59 1.5933 -0.85 2.28 s-0.47666 1.27 -0.65 1.75 s-0.28668 0.79334 -0.34002 0.94 c-0.06666 0.17334 -0.17666 0.31334 -0.33 0.42 s-0.32334 0.16 -0.51 0.16 s-0.35666 -0.05334 -0.51 -0.16 s-0.26334 -0.24666 -0.33 -0.42 l-4.36 -11.88 l-4.38 11.88 c-0.06666 0.17334 -0.17332 0.31334 -0.31998 0.42 s-0.31332 0.16 -0.49998 0.16 s-0.35666 -0.05334 -0.51 -0.16 s-0.26334 -0.24666 -0.33 -0.42 c-0.05334 -0.14666 -0.17 -0.46 -0.35 -0.94 s-0.39666 -1.0633 -0.65 -1.75 s-0.53334 -1.4467 -0.84 -2.28 s-0.62 -1.6767 -0.94 -2.53 c-0.30666 -0.84 -0.61 -1.6633 -0.91 -2.47 s-0.56666 -1.5333 -0.8 -2.18 s-0.42 -1.18 -0.56 -1.6 s-0.21 -0.65666 -0.21 -0.71 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 c0.18666 0 0.35666 0.05334 0.51 0.16 s0.26334 0.24666 0.33 0.42 l4.38 11.88 l4.36 -11.88 c0.06666 -0.17334 0.17666 -0.31334 0.33 -0.42 s0.32334 -0.16 0.51 -0.16 s0.35332 0.05334 0.49998 0.16 s0.25332 0.24666 0.31998 0.42 l4.38 11.88 l4.36 -11.88 c0.06666 -0.17334 0.17666 -0.31334 0.33 -0.42 s0.32334 -0.16 0.51 -0.16 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 c0 0.05334 -0.07 0.29 -0.21 0.71 s-0.32666 0.95334 -0.56 1.6 s-0.49668 1.3733 -0.79002 2.18 s-0.59334 1.63 -0.9 2.47 z M165.12 20.3 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 l0 14.02 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 z M192.95999999999998 6.279999999999999 l-3.24 0 l0 13.14 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -13.14 l-3.24 0 c-0.24 0 -0.44666 -0.08334 -0.62 -0.25 s-0.26 -0.37666 -0.26 -0.63 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 l8.26 0 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 c0 0.25334 -0.08666 0.46334 -0.26 0.63 s-0.38 0.25 -0.62 0.25 z M222.18 20.3 c-0.24 0 -0.44666 -0.08666 -0.62 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -6.78 l-7.86 0 l0 6.78 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 l0 5.46 l7.86 0 l0 -5.46 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38 0.26 0.62 l0 14.02 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38668 0.26 -0.64002 0.26 z M271.71999999999997 20.3 l-5.34 0 c-0.24 0 -0.44666 -0.08666 -0.62 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.25334 0.08666 -0.46334 0.26 -0.63 s0.38 -0.25 0.62 -0.25 c0.25334 0 0.46334 0.08334 0.63 0.25 s0.25 0.37666 0.25 0.63 l0 13.14 l4.46 0 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38 0.26 0.62 s-0.08666 0.44666 -0.26 0.62 s-0.38668 0.26 -0.64002 0.26 z M302.17999999999995 20.22 c-0.10666 0.05334 -0.21992 0.08 -0.33992 0.08 c-0.17334 0 -0.33668 -0.04666 -0.49002 -0.14 s-0.26334 -0.22668 -0.33 -0.40002 l-1.58 -3.72 l-7.26 0 l-1.58 3.72 c-0.09334 0.22666 -0.25334 0.38666 -0.48 0.48 s-0.45332 0.08668 -0.67998 -0.01998 c-0.22666 -0.09334 -0.38666 -0.25334 -0.48 -0.48 s-0.08668 -0.45332 0.01998 -0.67998 l1.8 -4.26 l4.22 -9.88 c0.06666 -0.17334 0.17332 -0.30668 0.31998 -0.40002 s0.31332 -0.14 0.49998 -0.14 c0.17334 0 0.33334 0.04666 0.48 0.14 s0.25332 0.22668 0.31998 0.40002 c1.0133 2.3734 2.02 4.73 3.02 7.07 s2.0066 4.6966 3.02 7.07 c0.09334 0.22666 0.09334 0.45332 0 0.67998 s-0.25334 0.38666 -0.48 0.48 z M295.81999999999994 7.539999999999999 l-2.88 6.72 l5.74 0 z M324.73999999999995 20.3 c-0.61334 0 -1.1867 -0.11668 -1.72 -0.35002 s-1 -0.55 -1.4 -0.95 s-0.71666 -0.86666 -0.95 -1.4 s-0.35 -1.1067 -0.35 -1.72 c0 -0.25334 0.08666 -0.46668 0.26 -0.64002 s0.38668 -0.26 0.64002 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38668 0.26 0.64002 c0 0.36 0.07 0.7 0.21 1.02 s0.33 0.6 0.57 0.84 s0.52 0.43 0.84 0.57 s0.66 0.21 1.02 0.21 s0.70334 -0.07 1.03 -0.21 s0.61 -0.33 0.85 -0.57 s0.43 -0.52 0.57 -0.84 s0.21 -0.66 0.21 -1.02 c0 -0.44 -0.08666 -0.80334 -0.26 -1.09 s-0.41334 -0.53666 -0.72 -0.75 c-0.14666 -0.10666 -0.31332 -0.20332 -0.49998 -0.28998 s-0.38 -0.17666 -0.58 -0.27 c-0.2 -0.08 -0.40666 -0.16 -0.62 -0.24 s-0.43334 -0.16 -0.66 -0.24 c-0.44 -0.16 -0.88334 -0.34 -1.33 -0.54 s-0.84666 -0.45 -1.2 -0.75 s-0.64334 -0.67334 -0.87 -1.12 s-0.34 -0.99666 -0.34 -1.65 c0 -0.61334 0.11666 -1.1867 0.35 -1.72 s0.55 -1 0.95 -1.4 s0.86666 -0.71666 1.4 -0.95 s1.1067 -0.35 1.72 -0.35 s1.19 0.11666 1.73 0.35 s1.01 0.55 1.41 0.95 s0.71666 0.86666 0.95 1.4 s0.35 1.1067 0.35 1.72 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38668 0.26 -0.64002 0.26 c-0.24 0 -0.44666 -0.08666 -0.62 -0.26 s-0.26 -0.38 -0.26 -0.62 c0 -0.36 -0.07 -0.70334 -0.21 -1.03 s-0.33 -0.61 -0.57 -0.85 s-0.52334 -0.43 -0.85 -0.57 s-0.67 -0.21 -1.03 -0.21 s-0.7 0.07 -1.02 0.21 s-0.6 0.33 -0.84 0.57 s-0.43 0.52334 -0.57 0.85 s-0.21 0.67 -0.21 1.03 c0 0.4 0.08334 0.73334 0.25 1 s0.40332 0.5 0.70998 0.7 c0.32 0.2 0.68 0.38 1.08 0.54 l0.64 0.24 l0.66 0.24 c0.44 0.16 0.88334 0.34334 1.33 0.55 s0.84666 0.46666 1.2 0.78 s0.64334 0.70334 0.87 1.17 s0.34 1.04 0.34 1.72 c0 0.61334 -0.11666 1.1867 -0.35 1.72 s-0.55 1 -0.95 1.4 s-0.87 0.71666 -1.41 0.95 s-1.1167 0.35 -1.73 0.35 z M355.87999999999994 20.3 l-6.88 -0.000019531 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -0.04 l0 -0.04 l0 -13.94 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 l6.88 0 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38 0.26 0.62 c0 0.25334 -0.08666 0.46334 -0.26 0.63 s-0.38668 0.25 -0.64002 0.25 l-6 0 l0 5.1 l5.06 0 c0.24 0 0.44666 0.08334 0.62 0.25 s0.26 0.37666 0.26 0.63 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 l-5.06 0 l0 5.38 l6 0 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38668 0.26 0.64002 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38668 0.26 -0.64002 0.26 z M379.3999999999999 13.36 l-0.24 -0.000039062 l0.26 -0.46 l3.62 6.06 c0.08 0.14666 0.12 0.3 0.12 0.46 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.16 0 -0.31 -0.04 -0.45 -0.12 s-0.25 -0.18666 -0.33 -0.32 l-3.88 -6.5 l-0.86 0 l0 6.06 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 l3.52 0 c0.61334 0 1.19 0.11666 1.73 0.35 s1.01 0.55 1.41 0.95 s0.71666 0.86666 0.95 1.4 s0.35 1.1067 0.35 1.72 s-0.11666 1.1867 -0.35 1.72 s-0.55 1 -0.95 1.4 s-0.87 0.71666 -1.41 0.95 s-1.1167 0.35 -1.73 0.35 z M379.3999999999999 6.279999999999999 l-2.64 0 l0 5.3 l2.64 0 c0.36 0 0.70334 -0.07 1.03 -0.21 s0.61 -0.33 0.85 -0.57 s0.43 -0.52 0.57 -0.84 s0.21 -0.66 0.21 -1.02 s-0.07 -0.70334 -0.21 -1.03 s-0.33 -0.61 -0.57 -0.85 s-0.52334 -0.43 -0.85 -0.57 s-0.67 -0.21 -1.03 -0.21 z M405.8599999999999 20.3 c-0.61334 0 -1.1867 -0.11668 -1.72 -0.35002 s-1 -0.55 -1.4 -0.95 s-0.71666 -0.86666 -0.95 -1.4 s-0.35 -1.1067 -0.35 -1.72 c0 -0.25334 0.08666 -0.46668 0.26 -0.64002 s0.38668 -0.26 0.64002 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38668 0.26 0.64002 c0 0.36 0.07 0.7 0.21 1.02 s0.33 0.6 0.57 0.84 s0.52 0.43 0.84 0.57 s0.66 0.21 1.02 0.21 s0.70334 -0.07 1.03 -0.21 s0.61 -0.33 0.85 -0.57 s0.43 -0.52 0.57 -0.84 s0.21 -0.66 0.21 -1.02 c0 -0.44 -0.08666 -0.80334 -0.26 -1.09 s-0.41334 -0.53666 -0.72 -0.75 c-0.14666 -0.10666 -0.31332 -0.20332 -0.49998 -0.28998 s-0.38 -0.17666 -0.58 -0.27 c-0.2 -0.08 -0.40666 -0.16 -0.62 -0.24 s-0.43334 -0.16 -0.66 -0.24 c-0.44 -0.16 -0.88334 -0.34 -1.33 -0.54 s-0.84666 -0.45 -1.2 -0.75 s-0.64334 -0.67334 -0.87 -1.12 s-0.34 -0.99666 -0.34 -1.65 c0 -0.61334 0.11666 -1.1867 0.35 -1.72 s0.55 -1 0.95 -1.4 s0.86666 -0.71666 1.4 -0.95 s1.1067 -0.35 1.72 -0.35 s1.19 0.11666 1.73 0.35 s1.01 0.55 1.41 0.95 s0.71666 0.86666 0.95 1.4 s0.35 1.1067 0.35 1.72 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38668 0.26 -0.64002 0.26 c-0.24 0 -0.44666 -0.08666 -0.62 -0.26 s-0.26 -0.38 -0.26 -0.62 c0 -0.36 -0.07 -0.70334 -0.21 -1.03 s-0.33 -0.61 -0.57 -0.85 s-0.52334 -0.43 -0.85 -0.57 s-0.67 -0.21 -1.03 -0.21 s-0.7 0.07 -1.02 0.21 s-0.6 0.33 -0.84 0.57 s-0.43 0.52334 -0.57 0.85 s-0.21 0.67 -0.21 1.03 c0 0.4 0.08334 0.73334 0.25 1 s0.40332 0.5 0.70998 0.7 c0.32 0.2 0.68 0.38 1.08 0.54 l0.64 0.24 l0.66 0.24 c0.44 0.16 0.88334 0.34334 1.33 0.55 s0.84666 0.46666 1.2 0.78 s0.64334 0.70334 0.87 1.17 s0.34 1.04 0.34 1.72 c0 0.61334 -0.11666 1.1867 -0.35 1.72 s-0.55 1 -0.95 1.4 s-0.87 0.71666 -1.41 0.95 s-1.1167 0.35 -1.73 0.35 z"
    />
  </g>
</svg>
`)
        })
    })
})

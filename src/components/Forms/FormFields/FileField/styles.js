import styled from '@emotion/styled'
import { COLORS, SPACERS, MQ } from 'utils/styleHelpers'

export const FileFieldWrapper = styled.div`
	margin-top: ${SPACERS.L};
	margin-bottom: ${SPACERS.L};
`

export const FileFieldInput = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
	& + label {
		background-color: ${({ bg }) => {
			return bg || COLORS.PRIMARY_DARK
		}};
		border: none;
		border-radius: 4px;
		color: ${COLORS.PRIMARY};
		cursor: pointer;
		font-size: 16px;
		padding: 14px 28px;
		text-align: center;
		width: 100%;
		${MQ.L} {
			width: 50%;
		}
		${MQ.M} {
			width: 50%;
		}
	}

	& + label * {
		pointer-events: none;
	}
	&:focus + label {
		outline: 1px dotted #000;
		outline: -webkit-focus-ring-color auto 5px;
	}
`
export const FileFieldLabel = styled.label`
	background: ${COLORS.PRIMARY_DARK};
	transition: background 0.5s;
	.dark & {
		background: ${COLORS.SECONDARY_DARK};
	}
`

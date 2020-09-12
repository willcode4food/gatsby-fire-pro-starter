import { LOGIN_FLAG_STORAGE } from 'utils/constants'

export const BUTTON_MX = [0, 0, 2]

export const BUTTON_MY = [2, 2, 2]

export const BUTTON_WIDTH = '100%'

export const BUTTON_WIDTH_FULL = '50%'

export const INPUT_WIDTH = [1, 2 / 3, 1]

export const setLoginFlag = () => {
	window.localStorage.setItem(LOGIN_FLAG_STORAGE, true)
}
export const getLoginFlag = () => {
	return window.localStorage.getItem(LOGIN_FLAG_STORAGE)
}
export const unsetLoginFlag = () => {
	window.localStorage.removeItem(LOGIN_FLAG_STORAGE)
}

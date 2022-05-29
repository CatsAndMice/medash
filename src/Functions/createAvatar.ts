// @ts-nocheck
import isBrowser from "./isBrowser"
import isEmpty from "./isEmpty"

type configType = {
    bg: string
    w: number
    h: number
    font: string
    fillStyle: string
}
const options = {
    w: 96,
    h: 96,
    bg: 'RGB(51, 150, 251)',
    font: 'bold 35px 苹方',
    fillStyle: '#FFF'
}
export default (name: string, config: configType = options) => {
    if (!isBrowser()) return
    if (isEmpty(name)) return
    const bg = config.bg
    const w = config.w
    const h = config.h
    const canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, w, h)
    ctx.font = config.font
    ctx.fillStyle = config.fillStyle
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(name.slice(-2), w / 2, h / 2)
    return canvas.toDataURL()
}
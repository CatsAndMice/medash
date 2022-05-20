import isBrowser from "./isBrowser"
import isEmpty from "./isEmpty"
export default (name: string) => {
    if (!isBrowser()) return
    if (isEmpty(name)) return
    const bg = 'RGB(51, 150, 251)'
    const w = 96
    const h = 96
    const canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = bg
    ctx.fillRect(0,0,w,h)
    ctx.font = 'bold 35px 苹方'
    ctx.fillStyle = '#FFF'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(name.slice(-2), w / 2, h / 2)
    return canvas.toDataURL()
}
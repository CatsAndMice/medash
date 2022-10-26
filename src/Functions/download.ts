import isBrowser from "./isBrowser"
/**
 * @use medash.download(blob:Blob,filename:sting):void
 * @desc 浏览器下载文件
 * @version v3.5.0
 * @param blob(Blob):二进制文件
 * @param filename(sting):文件名
 */
export default (blob:Blob,filename:string) => {
    if (!isBrowser()) return
    const a = document.createElement('a')
    a.download = filename
    const blobUrl = URL.createObjectURL(blob)
    a.href = blobUrl
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(blobUrl)
}
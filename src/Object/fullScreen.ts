import isBrowser from "../Function/isBrowser";
interface Document {
    requestFullScreen?: () => void;
    webkitRequestFullScreen?: () => void;
    mozRequestFullScreen?: () => void;
    msRequestFullScreen?: () => void;
    fullscreen?: boolean;
    mozFullScreen?: boolean;
    webkitIsFullScreen?: boolean;
    webkitFullScreen?: boolean;
    msFullScreen?: boolean
}

declare const document: Document;

const isFullScreen = () => {
    return isBrowser() ? !!(document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.webkitFullScreen || document.msFullScreen) : false;
}
const requestFullScreen = (dom: Document) => {
    if (!isBrowser()) return;
    dom = dom || document;
    const requestMethod = dom.requestFullScreen || dom.webkitRequestFullScreen || dom.mozRequestFullScreen || dom.msRequestFullScreen;
    (requestMethod as () => void).call(dom);
}

const exitFullScreen = () => {

}


export default () => { }
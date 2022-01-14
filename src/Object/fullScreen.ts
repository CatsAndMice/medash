// @ts-nocheck
import isFunc from "../Function/isFunc";
import isBrowser from "../Function/isBrowser";

let isReEvent = false;//防止重复监听事件

//当前文档是否可以全屏
const isFullscreenEnabled = () => {
    return (document.fullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.msFullscreenEnabled
    );
}

//获取已全屏的元素
const getFullscreenElement = () => {
    return (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullScreenElement ||
        document.webkitFullscreenElement || null
    );
}

const requestFullscreen = (ele) => {
    if (!isFullscreenEnabled()) {
        console.warn('当前文档不支持全屏!');
        return;
    }
    ele = ele ?? document.documentElement;
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
    } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
    }
}

const exitFullscreen = () => {
    if (document.exitFullScreen) {
        document.exitFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

const isFullScreen = () => {
    return !!(
        document.fullscreen ||
        document.mozFullScreen ||
        document.webkitIsFullScreen ||
        document.webkitFullScreen ||
        document.msFullScreen
    );
}

const trigger = () => {
    isFullScreen() ? exitFullscreen() : requestFullscreen();
}


//监听是否全屏
const addEventListener = (success, fail) => {
    if (isBrowser() && !isReEvent) {
        ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange'].forEach((item) => {
            window.addEventListener(item, () => {
                isFullScreen() ? isFunc(success) && success() : isFunc(fail) && fail();
            });
        })
        isReEvent = true;
    }
}

export default {
    isFullScreen,
    exitFullscreen,
    requestFullscreen,
    getFullscreenElement,
    addEventListener,
    trigger
}

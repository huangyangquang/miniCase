var nameArr = [
    'huang Qengiuan',
    'huang Qengiuan',
    'huang Qengiuan',
    'huang Qengiuan',
    'huang Qengiuan',
    'huang Qengiuan',
    'huang Qengiuan',
    'huang Qengiuan',
    'huang Qengiuan',
    'huang Qengiuan',
    'huang Qengiuan',
    'huang Qengiuan',
]

var len = nameArr.length

var timer = null
var _pre

var wrapperDom = document.getElementsByClassName('wrapper')[0]
var startBtn = document.getElementsByClassName('startBtn')[0]
var endBtn = document.getElementsByClassName('endBtn')[0]
var nameBoxDom = document.getElementsByClassName('nameBox')[0]
var nameList = nameBoxDom.getElementsByClassName('name')

init()

// 获取[0, max)之间的随机数
function getRandomNumber(max) {
    var cur = Math.floor( Math.random() * max )
    if(cur === _pre && cur === max) {
        _pre = cur - 1
        return cur - 1
    } else if (cur === _pre && cur >= 0) {
        _pre = cur + 1
        return cur + 1
    }
    _pre = cur
    return cur
}

// 重置类名
function resetCLassName(dom, className) {
    if(dom === null || typeof className !== 'string') return null

    var bgRedDom = nameBoxDom.getElementsByClassName(className)[0]
    bgRedDom && bgRedDom.classList.remove(className)

    dom.classList.add(className)
    return dom
}

// 添加内容
function setNameBoxContent(dom, nameArr) {
    var str = nameArr.reduceRight((preVal, name) => {
        preVal += `<li class="name">${name}</li>`
        return preVal
    }, '')
    
    dom.innerHTML = str
    return dom
}

// 注册事件
function registerEvent (dom, eventName, callback) {
    dom.addEventListener(eventName, callback)
}

// 点击开始的回调
function start () {
    clearInterval(timer)
    timer = setInterval(() => {
        var n = getRandomNumber(len - 1)
        resetCLassName(nameList[n], 'redBg')
    }, 50);
} 

// 点击结束的回调
function end () {
    clearInterval(timer)
}

// 初始化
function init () {
    setNameBoxContent(nameBoxDom, nameArr)
    registerEvent(startBtn, 'click', start)
    registerEvent(endBtn, 'click', end)
}


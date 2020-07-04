function detectScrollToBottom() {
    var main = document.getElementById('main')
    if (!main) return

    var container = document.createElement('div')
    container.id = 'scroll-shadow-container'
    document.body.appendChild(container)

    main.addEventListener('scroll', function (e) {
        var scrollHeight = main.scrollHeight
        var clientHeight = main.clientHeight
        var scrollTop = main.scrollTop
        if (scrollHeight - clientHeight === scrollTop) {
            showBottomShadow()
        }
    })
}

function showBottomShadow() {
    var showClassName = 'scroll-shadow--show'
    var container = document.getElementById('scroll-shadow-container')
    if (container) {
        container.classList.add(showClassName)
    }
}

detectScrollToBottom()
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

    ; (function () {
        document.body.addEventListener('contextmenu', function (e) {
            e.preventDefault()
        })

        var duration = 0.5 * 1000

        window.addEventListener('DOMContentLoaded', function () {
            document.body.style.transitionDuration = duration + 'ms'
            document.body.classList.add('body-show')
        })
        var links = document.getElementsByTagName('a')
        Array.from(links).forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault()
                document.body.classList.remove('body-show')
                setTimeout(function () {
                    location.href = link.href
                }, duration)
            })
        })
    })()
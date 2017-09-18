
window.onload = function(argument) {

    // 根据class 获取元素
    var getElement = function(selector) {
            return document.querySelector(selector);
        }
        // 根据class 获取所有class 的元素
    var getAllElement = function(selector) {
            return document.querySelectorAll(selector);
        }
        // 获取元素class
    var getClass = function(element) {
            return element.getAttribute("class");
        }
        // 给元素设置class
    var setClass = function(element, cls) {

            return element.setAttribute("class", cls);
        }
        // 给元素添加样式
    var addClass = function(element, cls) {
            var baseCls = getClass(element);
            if (baseCls.indexOf(cls) === -1) {
                setClass(element, baseCls + " " + cls);
            }
        }
        // 元素删除指定样式

    var delClass = function(element, cls) {
        var baseCls = getClass(element);
        if (baseCls.indexOf(cls) != -1) {
            setClass(element, baseCls.split(cls).join(' ').replace(/\s+/g, ' '));
        }
    }

    function updateDate() {
        var h_Hours = getElement("#hours");
        if (h_Hours) {
            var h_Minutes = getElement("#minutes");
            var h_Seconds = getElement("#seconds");
            if (h_Hours) {
                var _date = new Date();
                var Hours = _date.getHours();
                var Minutes = _date.getMinutes();
                var Seconds = _date.getSeconds();
                h_Hours.innerHTML = Hours + "&nbsp:&nbsp";
                h_Minutes.innerHTML = Minutes + "&nbsp:&nbsp ";
                h_Seconds.innerHTML = Seconds;

            }
        }

    };
    updateDate();
    setInterval(updateDate, 1000);
}

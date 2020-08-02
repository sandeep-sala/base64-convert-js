window.addEventListener('DOMContentLoaded', function() {
    try {

    } catch (error) {
        console.log('%cError', 'background: red;padding:5px;border-radius:5px;color:white;display: block;', error);
    }
}, true);

function openTabs(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();



function base64() {
    try {
        var type = document.getElementById('code_type').value
        var input = document.getElementById('input1')
        var output = document.getElementById('output1')
        if (type == '1') {
            output.value = btoa(input.value);
        } else {
            output.value = atob(input.value);
        }

    } catch (error) {
        console.log('%cError', 'background: red;padding:5px;border-radius:5px;color:white;display: block;', error);
    }
}
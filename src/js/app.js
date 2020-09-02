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

function encodeImageFileAsURL() {
    var element = document.getElementById('image_input1')
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        document.getElementById('image_output1').value = reader.result;
    }
    reader.readAsDataURL(file);
}

function decodeImage(){
    s = document.getElementById('encode_input01').value
    var image = new Image();
    image.src = s ;
    document.querySelector('#image_display').href = s
    document.querySelector('#image_display').setAttribute('download','image')
    document.getElementById('image_display').appendChild(image)
}

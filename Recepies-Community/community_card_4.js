document.getElementById("btn-1").addEventListener("click", changeState)

var count = 0

function changeState(e){
    e.preventDefault()
    if(count === 0){
        count++
        document.getElementById("btn-1").style.background = "#fefbdf"
        document.getElementById("btn-1").style.border = "none"
        document.getElementById("btn-2").style.background = "#fefbdf"
        document.getElementById("follow__p").innerHTML = "Requested"
        document.getElementById("follow__p").style.color = "black"
        alert("A follow request has been sent to GP")
    } else{
        count = 0
        setTimeout(function(){ location.reload(true)
            alert("Remove this follow request")
            document.getElementById("btn-1").style.background = "#3a8dc4"
            document.getElementById("btn-1").style.border = "none"
            document.getElementById("btn-2").style.background = "#3a8dc4"
            document.getElementById("follow__p").innerHTML = "Follow"
            document.getElementById("follow__p").style.color = "white"
            callback()
             },1000)
    }
}

function callback(){
    alert("GP follow request removed")
}
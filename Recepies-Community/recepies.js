document.getElementById("review__btn").addEventListener("click", reveiwMessage)

function reveiwMessage(e){
    e.preventDefault()
    var data = document.getElementById("review_text").value
    console.log(data)
    if(data === ""){
        alert("Invalid")
    } else{
        data = JSON.stringify(data)
        localStorage.setItem("message", data)
        alert("Message Sent Sucessfully")
        location.reload()
    }
}
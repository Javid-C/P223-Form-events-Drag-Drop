// let container = document.querySelector(".container")
// let wrapper = document.querySelector(".wrapper")
// let button = document.querySelector(".btn")



// button.onclick = function(e) {
//     console.log(e.target);
// }


// wrapper.onclick = function(e) {
//     console.log("wrapper clicked");
// }



// container.onclick = function(e) {
//     console.log(e.target);
// }


// let input = document.querySelector(".myInput")

// let select = document.querySelector(".mySelect")

// let list = document.querySelector(".list")

// let form = document.querySelector("form")

// input.onblur = function() {
//     console.log("this is blur event");
// }


// input.onfocus = function() {
//     console.log("this is focus event");
// }

// select.onchange = function(e) {
//     console.log(e.target);
// }


// input.oninput = function() {

//     let li = document.createElement("li")

//     li.className = "list-group-item";
//     li.innerText = this.value;
//     if (this.value != "") {
//         list.appendChild(li);
//     }
// }

// form.onsubmit = function(e) {
//     e.preventDefault();
//     console.log("Ben kacamadim beyler");
// }


let items = Array.from(document.querySelectorAll(".item"))
let dropZones = Array.from(document.querySelectorAll(".dropZone"))
    // let dropList = document.querySelector(".dropList")

items.forEach(item => {
    // item.addEventListener("drag", () => {
    //     console.log("drag is started by me");
    // })
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id)
            // console.log(e.target.id);
        console.log("drag is started by me");
    })
    item.addEventListener("dragend", () => {
        console.log("drag end");
    })
})

dropZones.forEach(zone => {
    zone.addEventListener("dragenter", () => {
        console.log("item enters the zone");
    })
    zone.addEventListener("dragleave", () => {
        console.log("item leave the zone");
        zone.style.boxShadow = "initial"

    })
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.style.boxShadow = "0px 0px 70px -8px rgba(0,0,0,0.75)"
            // console.log("item navigating on drop zone");
    })
    zone.addEventListener("drop", (e) => {
        // console.log(e.dataTransfer.getData("text"));
        let droppedItemId = e.dataTransfer.getData("text")
        let droppedItem = document.getElementById(droppedItemId)
        zone.append(droppedItem);
        zone.style.boxShadow = "initial"
        console.log("item is dropped");
    })
})
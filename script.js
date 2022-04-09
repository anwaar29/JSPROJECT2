function popup(){  // for adding popup
    document.getElementById("popup").style.display="block";
    document.getElementById("s2").style.display="none"
    

}
const tasklist = [] //array Of Objects from nowonwards upto complete mern stack
const add = () => {
    document.getElementById("popup").style.display = "none"
    const name = document.getElementById("card").value; //storing our value
     
    console.log(name); //Our user values are going to be 
    const tempObj = {

            taskName: name

        } //Creating  Objects Cards
    tasklist.push(tempObj)
    console.log(tasklist)
    addtaskonscreen() //For adding cards on screen 

}

function addtaskonscreen() {
    const element = document.createElement("div");   // making childs class
    element.setAttribute("id", "child")
    element.innerText = tasklist[tasklist.length - 1].taskName;
    const existingelement = document.getElementById("parent");
    existingelement.appendChild(element)

    let element2=document.createElement("hr")
    element2.setAttribute("id", "hr1")
    const existingelement2= document.getElementById("child");
    existingelement2.appendChild(element2)

    
}

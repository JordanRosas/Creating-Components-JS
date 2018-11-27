const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

/*with this small function we can create a h1 with a given CSS class*/
//declared a const of h1: the name of the function being defined
// title, and style are the parameters being passed to the function.
//then JS returns a string.
//in that string we specify where we want those parameters to lie
//PERTAINS TO ALL THREE FUNCTION DEFS
const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}
const section = (title, style) => {
    return `<section class= bordered dashed "${style}">${title}</section>`
}
const aside = (title, style) =>{
    return `<aside class = "${style}">${title}</aside>`
}

//targeting the #container article and changing the HTML with .innerHTML adding our h1 created above.
//our title parameter is "jordan" and the style parameter is the CSS class "xx-large"

//what do the ` ` do again? 
//why the ${h1()} line 98
document.querySelector("#container").innerHTML = `
    ${h1("Jordan Rosas", "xx-large")}
`

//COMPONENT STRUCTURE for the students 
//this is what the DOM will have generated form JS.

/* <div class="student">
    <h1>Student Name</h1>
    <section>Student class</section>
    <aside>Additional information</aside>
</div> */

//Student Component function.

const student = (name, className, info) => `

    <div id = "student">
        ${h1(name, "xx-large")}
        ${section(className, "section--padded")}
        ${aside(info, "pushRight")}
    
    </div>

`
const container = document.querySelector('#container');
container.innerHTML = student("Jordan Rosas", "Calculus", "Passing 150%")


//looping through students array and getting their name class and information 
for(let i = 0; i < students.length;i++){
    container.innerHTML += student(students[i].name, students[i].class, students[i].info)
}


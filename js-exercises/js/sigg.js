
const team4 = ["Kourtney Boston", "Christopher Cyr", "Michael Sigg", "Jonathan Zavala"];
const teamobj = [{
    name: "Kourtney Boston",
    title: "Application Development Associate",
    company: "Accenture",
    location: "Austin"
},
{
    name: "Christopher Cyr",
    title: "Application Development Associate",
    company: "Accenture",
    location: "Austin"
},
{
    name: "Michael Sigg",
    title: "Application Development Associate",
    company: "Accenture",
    location: "Austin"
},
{
    name: "Jonathan Zavala",
    title: "Application Development Associate",
    company: "Accenture",
    location: "Austin"
}]

const memberCards = teamobj.map(member => {
    return (`<div>
                <h2>${member.name}</h2>
                <p>${member.title}</p>
                <p>${member.company}</p>
                <p>${member.location}</p>
            </div>`)
})
document.body.innerHTML = memberCards.join('<hr>')


const students = [
    {
        name: "Akhil Khatri",
        image:"../IMAGES/akhil.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Anika Kaushik",
        image: "../IMAGES/anika.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Arsh Mittal",
        image: "../IMAGES/arsh.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Chhavi Singla",
        image: "../IMAGES/chhavi.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Vikram Kochar",
        image:"../IMAGES/vikramKochhar.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Kapish Garg",
        image:"../IMAGES/kapish.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Keshav",
        image:"../IMAGES/keshav.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Moksh Kulshrestha",
        image:"../IMAGES/moksh.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Sanchi Ahuja",
        image:"../IMAGES/sanchi.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Yashasvii Maheshwari",
        image:"../IMAGES/yashasvii.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Shreya Goyal",
        image:"../IMAGES/shreya.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Tannish Garg",
        image:"../IMAGES/tannishGarg.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Mitali Gupta",
        image:"../IMAGES/mitali.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Utkarsh Pal",
        image:"../IMAGES/utkarshPal.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Yen Wadhwa",
        image:"../IMAGES/yen.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Mukund Bansal",
        image:"../IMAGES/mukund.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Nandini Santoshi",
        image:"../IMAGES/nandini.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Simran Arora",
        image:"../IMAGES/simran.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Subhdeep Bhole",
        image:"../IMAGES/subhdeep.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Tanvi Aggarwal",
        image:"../IMAGES/tanvi.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Tanmay Khosla",
        image:"../IMAGES/tanmay.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    
    {
        name: "Vikram Rehni",
        image:"../IMAGES/vikram.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Xiena Vij",
        image:"../IMAGES/xiena.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    {
        name: "Yugveer Mehndiratta",
        image:"../IMAGES/yugveer.jpeg",
        details: "CSE AIFT, 1st Year"
    },
    
    
];

function displayStudents() {
    const studentsList = document.getElementById("studentsList");
    studentsList.innerHTML = "";

    students.forEach(student => {
        const studentCard = document.createElement("div");
        studentCard.classList.add("student-card");

        studentCard.innerHTML = `
            <img src="${student.image}" alt="${student.name}">
            <div class="student-info">
                <h2>${student.name}</h2>
                <p>${student.details}</p>
            </div>
        `;

        studentsList.appendChild(studentCard);
    });
}

document.addEventListener("DOMContentLoaded", displayStudents);
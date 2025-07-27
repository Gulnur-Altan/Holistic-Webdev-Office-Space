const text = `Welcome back, Officer Alex. 🌌

System status: Nominal
Mission: Maintain crew morale and optimize digital workflows.

Type 'help' to access crew intranet...`;

// Employee of the Month
const employees = [
    {
        name: "Commander Elara Nova",
        role: "Quantum Comms Specialist",
        quote: "Successfully debugged 27 interstellar signals and still made it to karaoke night.",
        img: "https://i.pravatar.cc/150?img=68"
    },
    {
        name: "Lieutenant Vega Ryn",
        role: "AI Ethics Officer",
        quote: "Prevented the coffee machine from starting a rebellion.",
        img: "https://i.pravatar.cc/150?img=32"
    },
    {
        name: "Chief Kepler Zao",
        role: "Zero-G UX Designer",
        quote: "Designed a hover-friendly interface... while hovering.",
        img: "https://i.pravatar.cc/150?img=12"
    }
];

function loadEmployee() {
    const random = employees[Math.floor(Math.random() * employees.length)];
    const container = document.getElementById("employeeCard");
    container.innerHTML = `
    <img src="${random.img}" alt="${random.name}" />
    <div class="employee-info">
      <h3>${random.name}</h3>
      <p>Role: ${random.role}</p>
      <p>"${random.quote}"</p>
    </div>
  `;
}

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    }
}

function updateStardate() {
    const baseDate = new Date("2323-01-01");
    const now = new Date();
    const diff = now - baseDate;
    const stardate = (diff / (1000 * 60 * 60 * 24)).toFixed(1);
    document.getElementById("stardate").textContent = `SD-${stardate}`;
}

window.onload = () => {
    typeWriter();
    loadEmployee();
    updateStardate();
};

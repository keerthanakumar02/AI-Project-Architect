alert("SCRIPT LOADED");

async function generateProject() {


const projectName = document.getElementById("projectName").value;

if (!projectName) {
    alert("Enter Project Name");
    return;
}

document.getElementById("loading").style.display = "block";

try {

    const response = await fetch(
        `http://127.0.0.1:8000/generate-project?project_name=${projectName}`
    );

    const data = await response.json();

    console.log(data);

    document.getElementById("result").innerHTML =
        `<pre>${data.result}</pre>`;

} catch (error) {

    alert("Error: " + error);

}

document.getElementById("loading").style.display = "none";

}
function downloadPDF() {


const projectName =
    document.getElementById("projectName").value;

window.open(
    `http://127.0.0.1:8000/download-pdf?project_name=${projectName}`,
    "_blank"
);


}

function copyResult() {

const text =
    document.getElementById("result").innerText;

navigator.clipboard.writeText(text);

alert("Copied Successfully");


}

function toggleDarkMode() {


document.body.classList.toggle("dark-mode");

localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode")
        ? "dark"
        : "light"
);


}

window.onload = function () {


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}


};

document
.getElementById("projectName")
.addEventListener("keypress", function (event) {


    if (event.key === "Enter") {
        generateProject();
    }

});


async function viewHistory() {

    const response = await fetch(
        "http://127.0.0.1:8000/history"
    );

    const data = await response.json();

    console.log(data);

    let html = "<h2>📜 Project History</h2>";

    for (let i = 0; i < data.length; i++) {
        html += `<p>📁 ${data[i].project_name}</p>`;
    }

    document.getElementById("historyBox").innerHTML = html;

    console.log("History Loaded");
}

window.viewHistory = viewHistory;
async function clearHistory() {

    const response = await fetch(
        "http://127.0.0.1:8000/clear-history",
        {
            method: "DELETE"
        }
    );

    const data = await response.json();

    alert(data.message);

    document.getElementById("historyBox").innerHTML = "";
}





function previewWebsite() {

    const code =
        document.getElementById("result").innerText;

    const frame =
        document.getElementById("previewFrame");

    frame.srcdoc = code;
}


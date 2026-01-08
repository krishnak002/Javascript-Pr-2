function handleSubmit() {
    let html = Number(document.getElementById("html").value);
    let js = Number(document.getElementById("javascript").value);
    let bs = Number(document.getElementById("bootstrap").value);
    let react = Number(document.getElementById("reactjs").value);

    let total = html + js + bs + react;
    let percent = (total / 400) * 100;

    document.getElementById("nameDisplay").innerText = document.getElementById("name").value;
    document.getElementById("rollDisplay").innerText = document.getElementById("rollno").value;

    document.getElementById("htmlD").innerText = html;
    document.getElementById("jsD").innerText = js;
    document.getElementById("bsD").innerText = bs;
    document.getElementById("reactD").innerText = react;
    document.getElementById("total").innerText = total;
    document.getElementById("percent").innerText = percent.toFixed(2) + "%";

    let grade = percent >= 80 ? "A" : percent >= 60 ? "B" : percent >= 40 ? "C" : "F";
    document.getElementById("grade").innerText = grade;
    document.getElementById("result").innerText = percent >= 35 ? "PASS" : "FAIL";
}

function toggleMarksheet() {
    document.getElementById("marksheet").classList.toggle("d-none");
}
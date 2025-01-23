const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const selectInput = e.target[3];
    const selectedValue = selectInput.value;

    if (selectedValue === "NA") {
        alert("Please select your PROFESSION");
    } else {
        window.open("./thank.html", "_self");
    }
};

const handleSelectProfession = (e) => {
    const selectedValue = e.target.value;
    const collegeNameInput = document.querySelector('input[name="college-name"]');
    const empEmailInput = document.querySelector('input[name="emp-email"]');
    const gstNumberInput = document.querySelector('input[name="gst-number"]');

    switch (selectedValue) {
        case "NA": {
            alert("Please select your PROFESSION");
            break;
        }
        case "std": {
            collegeNameInput.disabled = false;
            empEmailInput.disabled = true;
            gstNumberInput.disabled = true;
            break;
        }
        case "emp": {
            collegeNameInput.disabled = true;
            empEmailInput.disabled = false;
            gstNumberInput.disabled = true;
            break;
        }
        case "bsn": {
            collegeNameInput.disabled = true;
            empEmailInput.disabled = true;
            gstNumberInput.disabled = false;
            break;
        }
    }
};
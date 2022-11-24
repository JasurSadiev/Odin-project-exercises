const name = document.querySelector("#name");
const id = document.querySelector("#id");
const clinicType = document.querySelector("#clinic");
const fee = document.querySelector("#fee");
const time = document.querySelector("#time");

const choice = prompt("Enter your choice: ");
let clinic = "";
let userClinic = ""
function report() {
    if (choice.toLowerCase() == "book") {
        clinic = prompt(`Enter your choice: ${choice}\n     Enter I or i for ICU:\n     Enter R or r for Radiology:\n     Enter R or r for Radiology:\n     Enter R or r for Radiology:\nEnter your Choice: `);
        if (clinic.toLowerCase() === "i") {
            userClinic = "ICU";
        } else if (clinic.toLowerCase() === "r") {
            userClinic = "Radiology";
        } else if (clinic.toLowerCase() === "s") {
            userClinic = "Surgery";
        } else if (clinic.toLowerCase() === "d") {
            userClinic = "Dentistry";
        } else {
            alert("wrong selection")
            return 0;
        }
    } else {
        alert("wrong selection")
        return 0;
    }
    
    let time_table = "";
    let fee_table = "";

    const patientName = prompt("Enter the name: ");
    const patientID = prompt("Enter the national ID number: ");
    const patientTime = prompt("Enter preferred appointment time: ");

    if (userClinic == "ICU" && (parseInt(patientTime) >= 8  && parseInt(patientTime) <= 18)) {
        time_table = patientTime;
    } else if (userClinic == "Radiology" && (parseInt(patientTime) >= 9  && parseInt(patientTime) <= 15)) {
        time_table = patientTime;
    } else if (userClinic == "Surgery" && (parseFloat(patientTime) >= 9.30  && parseInt(patientTime) <= 17)) {
        time_table = patientTime;
    } else if (userClinic == "Dentistry" && (parseInt(patientTime) >= 10  && parseInt(patientTime) <= 16)) {
        time_table = patientTime;
    } else {
        alert("Wrong selection of the clinic timing... try again!");
        return 0;
    }

    if ( userClinic = "ICU") {
        fee_table = "100";
    } else if ( userClinic = "Radiology") {
        fee_table = "200";
    } else if ( userClinic = "Surgery") {
        fee_table = "350";
    } else {
        fee_table = "150";
    }

    let conf = confirm(`Enter your Choice: ${choice}\n      Enter I or i for ICU:\n     Enter R or r for Radiology:\n       Enter S or s for Surgery:\n     Enter D or d for Dentistry\nEnter your Choice: ${clinic}\n      Enter the name: ${patientName}\n Enter the national ID number: ${patientID}\nEnter preferred appointment time: ${patientTime}`);
    console.log(conf);

    if (conf == true) {
        name.innerText = patientName;
        id.innerText = patientID;
        clinicType.innerText = userClinic;
        fee.innerText = fee_table;
        time.innerText = time_table;
    }
}



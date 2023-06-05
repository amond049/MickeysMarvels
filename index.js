// These are the text descriptions for each service
var form = document.getElementById("booking-form");
function handleForm(event) {
    const valueMap = new Map();
    const specialistMap = new Map();
    const timeMap = new Map();

    // Setting all these maps because it's easier than replacing all the values
    // manually and easier than having if statements in the code
    valueMap.set("phone-repair", "Phone Repair (iOS, Android & Windows)");
    valueMap.set("computer-repair", "Computer Repair");
    valueMap.set("damage-control", "Damage Control");
    valueMap.set("data-recovery", "Data Recovery");
    valueMap.set("unlock-sim", "Unlock SIM Card");

    specialistMap.set("steve", "Steve");
    specialistMap.set("catherine", "Catherine");
    specialistMap.set("matt", "Matt");
    specialistMap.set("kim", "Kim");

    timeMap.set("8:30", "8:30 AM");
    timeMap.set("9:00", "9:00 AM");
    timeMap.set("9:30", "9:30 AM");
    timeMap.set("10:00", "10:00 AM");
    timeMap.set("10:30", "10:30 AM");
    timeMap.set("11:00", "11:00 AM");
    timeMap.set("11:30", "11:30 AM");
    timeMap.set("12:00", "12:00 PM");
    timeMap.set("12:30", "12:30 PM");
    timeMap.set("1:00", "1:00 PM");
    timeMap.set("1:30", "1:30 PM");
    timeMap.set("2:00", "2:00 PM");
    timeMap.set("2:30", "2:30 PM");
    timeMap.set("3:00", "3:00 PM");
    timeMap.set("3:30", "3:30 PM");
    timeMap.set("4:00", "4:00 PM");
    timeMap.set("4:30", "4:30 PM");
    timeMap.set("5:00", "5:00 PM");


    event.preventDefault();
    let fullName = document.getElementById("fullName").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let service = document.getElementById("serviceDropdown").value;
    let specialist = document.getElementById("specialistDropdown").value;
    let date = document.getElementById("dateInput").value;
    let time = document.getElementById("timeDropdown").value;


    // Input validation for the date
    let date1 = new Date(date).getTime();
    let date2 = new Date();

    if (date1 <= date2){
        alert("Cannot enter a date that has already passed, please try again!");
    } else {
        // Otherwise, everything looks good, can create the pop up here
        var closePopUp = document.getElementById("popupclose");
        // var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");

        closePopUp.onclick = function (){
            //overlay.style.display = "none";
            popup.style.display = "none";
            document.body.classList.remove("test");
            document.getElementById("fullName").disabled = false;
            document.getElementById("emailAddress").disabled = false;
            document.getElementById("serviceDropdown").disabled = false;
            document.getElementById("specialistDropdown").disabled = false;
            document.getElementById("dateInput").disabled = false;
            document.getElementById("timeDropdown").disabled = false;
            document.getElementById("comments").disabled = false;
            document.getElementById("booking-form").reset();
        };

        document.body.classList.add("test")
        // Need to disable the inputs
        document.getElementById("fullName").disabled = true;
        document.getElementById("emailAddress").disabled = true;
        document.getElementById("serviceDropdown").disabled = true;
        document.getElementById("specialistDropdown").disabled = true;
        document.getElementById("dateInput").disabled = true;
        document.getElementById("timeDropdown").disabled = true;
        document.getElementById("comments").disabled = true;
        //overlay.style.display = "block";
        popup.style.display = "block";

        // Displaying all of the booking details for confirmation
        let fullNameBuffer = "<strong>Name: </strong>" + fullName;
        let emailAddressBuffer = "<strong>Email: </strong>" + emailAddress;
        let serviceBuffer = "<strong>Service: </strong>" + valueMap.get(service);
        let specialistBuffer = "<strong>Specialist: </strong>" + specialistMap.get(specialist);
        let dateBuffer = "<strong>Date: </strong>" + date;
        let timeBuffer = "<strong>Time: </strong>" + timeMap.get(time);

        document.getElementById("nameSummary").innerHTML = fullNameBuffer;
        document.getElementById("emailSummary").innerHTML = emailAddressBuffer;
        document.getElementById("serviceSummary").innerHTML = serviceBuffer;
        document.getElementById("specialistSummary").innerHTML = specialistBuffer;
        document.getElementById("dateSummary").innerHTML = dateBuffer;
        document.getElementById("timeSummary").innerHTML = timeBuffer;


    }

}

form.addEventListener('submit', handleForm);

// Adding the onclick listeners so that we can flip between each state
document.getElementById("service-card-phone-repair").onclick = function(){
    document.getElementById("service-card-phone-repair").style.display = "none";
    document.getElementById("service-card-phone-repair-description").style.display = "block";
}

document.getElementById("service-card-phone-repair-description").onclick = function (){
    document.getElementById("service-card-phone-repair").style.display = "block";
    document.getElementById("service-card-phone-repair-description").style.display = "none";
}

document.getElementById("service-card-computer-repair").onclick = function(){
    document.getElementById("service-card-computer-repair").style.display = "none";
    document.getElementById("service-card-computer-repair-description").style.display = "block";
}

document.getElementById("service-card-computer-repair-description").onclick = function (){
    document.getElementById("service-card-computer-repair").style.display = "block";
    document.getElementById("service-card-computer-repair-description").style.display = "none";
}

document.getElementById("service-card-damage-control").onclick = function(){
    document.getElementById("service-card-damage-control").style.display = "none";
    document.getElementById("service-card-damage-control-description").style.display = "block";
}

document.getElementById("service-card-damage-control-description").onclick = function (){
    document.getElementById("service-card-damage-control").style.display = "block";
    document.getElementById("service-card-damage-control-description").style.display = "none";
}

document.getElementById("service-card-data-recovery").onclick = function(){
    document.getElementById("service-card-data-recovery").style.display = "none";
    document.getElementById("service-card-data-recovery-description").style.display = "block";
}

document.getElementById("service-card-data-recovery-description").onclick = function (){
    document.getElementById("service-card-data-recovery").style.display = "block";
    document.getElementById("service-card-data-recovery-description").style.display = "none";
}

document.getElementById("service-card-unlock-sim").onclick = function(){
    document.getElementById("service-card-unlock-sim").style.display = "none";
    document.getElementById("service-card-unlock-sim-description").style.display = "block";
}

document.getElementById("service-card-unlock-sim-description").onclick = function (){
    document.getElementById("service-card-unlock-sim").style.display = "block";
    document.getElementById("service-card-unlock-sim-description").style.display = "none";
}



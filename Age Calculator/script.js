let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge(){
let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;   // For storing year,month and days difference

    y3 = y2 - y1;  // For calculating year  difference

    if(m2  >= m1){   // when current month is greater than the DOB month
    m3 = m2 - m1;    // For calculating month difference
    }else{
        y3--;
        m3 = 12 + m2 - m1; // when current month is smaller than the DOB month
    }
    

if(d2 >= d1){   // when current Date is greater than the DOB Date
    d3 = d2 - d1;   // For calculating Date difference
}else{
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;   // Date difference
}

if(m3 < 0){   // When month is negative mns less than janaury 
    m3 = 11;
    y3--;
}
result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}
 // when current Date is smaller than the DOB Date then this function gets executed.

 // This function is used to find Exact number of days in that particular month. 
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
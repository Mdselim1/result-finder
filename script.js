
const a = document.getElementById('number1');
const b = document.getElementById('number2');
const c = document.getElementById('number3');
const d = document.getElementById('number4');
const e = document.getElementById('number5');
const f = document.getElementById('number6');
const totalPrint = document.querySelector('.printNumberTotal');
const avgPrint = document.querySelector('.printNumberAverage');
const gradePrint = document.querySelector('.printNumberGrade');

function resultFind() {
    const aa = parseInt(a.value);
    const bb = parseInt(b.value);
    const cc = parseInt(c.value);
    const dd = parseInt(d.value);
    const ee = parseInt(e.value);
    const ff = parseInt(f.value);

    const totalMark = aa + bb + cc + dd + ee + ff;
    totalPrint.innerText = "Total Mark = " + totalMark;
    const avgMark = (totalMark / 6).toFixed(2);
    avgPrint.innerText = "Average Mark = " + avgMark;
    if (avgMark > 100 && avgMark < 0) {
        gradePrint.innerText = "Please Enter number 1 - 100";
    }
    else if (avgMark <= 100 && avgMark >= 80) {
        gradePrint.innerText = "Your Grade is = A+ ";
    }
    else if (avgMark <= 79 && avgMark >= 70) {
        gradePrint.innerText = "Your Grade is = A ";
    }
    else if (avgMark <= 69 && avgMark >= 60) {
        gradePrint.innerText = "Your Grade is = A- ";
    }
    else if (avgMark <= 59 && avgMark >= 50) {
        gradePrint.innerText = "Your Grade is = B ";
    }
    else if (avgMark <= 49 && avgMark >= 45) {
        gradePrint.innerText = "Your Grade is = C ";
    }
    else if (avgMark <= 44 && avgMark >= 40) {
        gradePrint.innerText = "Your Grade is = D ";
    }
    else if (avgMark <= 39 && avgMark >= 33) {
        gradePrint.innerText = "Your Grade is = E ";
    } else {
        gradePrint.innerText = "Your Result is Failed"
    }


}

// defining a function to find student grade

function getResult()
{
    // local variables
    let rollno, name, html, css, javascript, bootstrap, total, average, grade, backlog = "";

    // data collection
    rollno = +rno.value;    // roll number
    name = sna.value;    // student name
    html = +htm.value;    // html marks
    css = +cs.value;   // css marks
    javascript = +js.value;    // javascript marks
    bootstrap = +bs.value;    // bootstrap marks

    //calc's
    total = html + css + javascript + bootstrap;
    average = total/4;

    //pass or fail checking
    if(html>39 && css>39 && javascript>39 && bootstrap>39)
    {
        //passed
        grade = average>=90?'A+' : average>=80?'A' : average>=70?'B+' : average>=60?'B' : average>=50?'C' : 'D';
    }
    else{
        grade = "Fail";
    
        //displayin fail subjects
        if(html<40)
            backlog += " HTML Fail ,";
        if(css<40)
            backlog += " CSS Fail ,";
        if(javascript<40)
            backlog += " JavaScript Fail ,";
        if(bootstrap<40)
            backlog += " BootStrap Fail ";
    }

    // displaying op's
    tot.innerHTML = "Total Marks : " + total;
    avg.innerHTML = "Average : " + average;
    grd.innerHTML = "Grade : " + grade;
    bl.innerHTML = "Backlogs : " + backlog;
}

// defining a function for clearing all inputs

function clearFields()
{
    rno.value = " ";
    sna.value = " ";
    htm.value = " ";
    cs.value = " ";
    js.value = " ";
    bs.value = " ";
    tot.innerHTML = "Total Marks : " ;
    avg.innerHTML = "Average : ";
    grd.innerHTML = "Grade : ";
    bl.innerHTML = "Backlogs : ";
    rno.focus();
}
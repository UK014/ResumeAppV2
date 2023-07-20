
function generate() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var doc = jsPDF();
    doc.setFillColor(50, 59, 76);
    doc.rect(0, 0, 60, 350, "F");
    doc.setFont("MathSansBoldItalic");
    doc.setFontSize(16);
    doc.setTextColor(256, 256, 256);
    doc.text("Personal Information", 10, 58);
    doc.setFillColor(128, 128, 128);
    doc.rect(10, 60, 50, 1, "F");
    doc.setFontSize(10);
    doc.text("Name-Surname",10,70);
    doc.text(name + " " + surname, 10, 75);
    doc.setFontSize(10);
    doc.text("Phone Number", 10, 80);
    doc.setFontSize(12);
    doc.text(phone, 10, 85);
    doc.setFontSize(10);
    doc.text("E-mail", 10, 90);
    doc.setFontSize(12);
    doc.text(email, 10, 95);
    

    doc.setFontSize(26);
    doc.setTextColor(50, 59, 76);
    doc.text("Education", 65, 200);
    doc.setFillColor(128, 128, 128);
    doc.rect(10, 125, 50, 1, "F");
    
    if (document.getElementById("bachelor").value === "on") {
        doc.setFontSize(10);
        doc.setTextColor(50, 59, 76);
        doc.text(document.getElementById("BEDSDate").value + " - ", 65, 210);
        doc.text(document.getElementById("BEDEDate").value, 85, 210);
        doc.setFontSize(14);
        doc.text(document.getElementById("BachelorDegree").value, 65, 220);
        doc.setFontSize(10);
        doc.text(document.getElementById("BachelorUniversity").value, 65, 225);
    }
    if (document.getElementById("master").value === "on") {
        doc.setFontSize(10);
        doc.setTextColor(50, 59, 76);
        doc.text(document.getElementById("BEDSDate").value + " - ", 65, 210);
        doc.text(document.getElementById("BEDEDate").value, 85, 210);
        doc.setFontSize(14);
        doc.text(document.getElementById("BachelorDegree").value, 65, 220);
        doc.setFontSize(10);
        doc.text(document.getElementById("BachelorUniversity").value, 65, 225);

        doc.setFontSize(10);
        doc.setTextColor(50, 59, 76);
        doc.text(document.getElementById("MEDSDate").value + " - ", 65, 235);
        doc.text(document.getElementById("MEDEDate").value, 85, 235);
        doc.setFontSize(14);
        doc.text(document.getElementById("MasterDegree").value, 65, 245);
        doc.setFontSize(10);
        doc.text(document.getElementById("MasterUniversity").value, 65, 250);
    }
    if (document.getElementById("phd").value === "on") {
        doc.setFontSize(10);
        doc.setTextColor(50, 59, 76);
        doc.text(document.getElementById("BEDSDate").value + " - ", 65, 210);
        doc.text(document.getElementById("BEDEDate").value, 85, 210);
        doc.setFontSize(14);
        doc.text(document.getElementById("BachelorDegree").value, 65, 220);
        doc.setFontSize(10);
        doc.text(document.getElementById("BachelorUniversity").value, 65, 225);

        doc.setFontSize(10);
        doc.setTextColor(50, 59, 76);
        doc.text(document.getElementById("MEDSDate").value + " - ", 65, 235);
        doc.text(document.getElementById("MEDEDate").value, 85, 235);
        doc.setFontSize(14);
        doc.text(document.getElementById("MasterDegree").value, 65, 245);
        doc.setFontSize(10);
        doc.text(document.getElementById("MasterUniversity").value, 65, 250);

        doc.setFontSize(10);
        doc.setTextColor(50, 59, 76);
        doc.text(document.getElementById("PEDSDate").value + " - ", 65, 260);
        doc.text(document.getElementById("PEDEDate").value, 85, 260);
        doc.setFontSize(14);
        doc.text(document.getElementById("PhDDegree").value, 65, 270);
        doc.setFontSize(10);
        doc.text(document.getElementById("PhDUniversity").value, 65, 275);

    }
    
    doc.setFontSize(26);
    doc.setTextColor(256, 256, 256);
    doc.text("Skills", 10, 200);
    doc.setFillColor(128, 128, 128);
    doc.rect(10, 202, 50, 1, "F");
    var i = 0;
    var j = 0;
    for (j = 0; j < document.getElementById("skillslist").childNodes.length;j++) {
        doc.setFontSize(16);
        doc.setTextColor(256, 256, 256);
        var value = document.getElementById("skillslist").childNodes[j].innerHTML;
        doc.text(value, 10, 210+i);
        i += 10;
    }
    

    doc.setFontSize(26);
    doc.setTextColor(50, 59, 76);
    doc.text("Experience", 65, 18);
    doc.setFillColor(128, 128, 128);
    doc.rect(65, 20, 350, 1, "F");

    if (document.getElementById("workexperience").value == "jobone") {
        doc.setFontSize(16);
        doc.setTextColor(50, 59, 76);
        doc.text(document.getElementById("Title").value, 65, 35);
        doc.text(document.getElementById("Company").value, 100, 35);
        doc.text(document.getElementById("EXSDate").value, 160, 35);
        doc.text(document.getElementById("EXEDate").value, 180, 35);
        doc.text(document.getElementById("Description1").value, 65, 50);
    }
    if (document.getElementById("workexperience").value == "jobtwo") {
        doc.setFontSize(16);
        doc.setTextColor(50, 59, 76);
        doc.text(document.getElementById("Title").value, 65, 35);
        doc.text(document.getElementById("Company").value, 100, 35);
        doc.text(document.getElementById("EXSDate").value, 160, 35);
        doc.text(document.getElementById("EXEDate").value, 180, 35);
        doc.text(document.getElementById("Description1").value, 65, 50);

        doc.setFontSize(16);
        doc.setTextColor(50, 59, 76);
        doc.text(document.getElementById("SecondTitle").value, 65, 100);
        doc.text(document.getElementById("SecondCompany").value, 100, 100);
        doc.text(document.getElementById("SecondEXSDate").value, 160, 100);
        doc.text(document.getElementById("SecondEXEDate").value, 180, 100);
        doc.text(document.getElementById("Description2").value, 65, 115);
    }

    

    doc.setFontSize(26);
    doc.setTextColor(256,256,256);
    doc.text("Language", 10, 123);
    doc.setFillColor(128, 128, 128);
    doc.rect(65, 202, 350, 1, "F");

    var k = 0;
    var l = 0;
    for (l = 0; l < document.getElementById("languagelist").childNodes.length; l++) {
        doc.setFontSize(16);
        doc.setTextColor(256, 256, 256);
        var value = document.getElementById("languagelist").childNodes[l].innerHTML;
        console.log(value);
        doc.text(value, 10, 135 + k);
        k += 10;
    }


    doc.save("Resume.pdf");

}


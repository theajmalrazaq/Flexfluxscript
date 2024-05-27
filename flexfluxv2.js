// Function to create and display the modal
function createModal() {
    // Get user picture and name
    var userPic = document.querySelector('.m-topbar__userpic img').getAttribute('src');
    var userName = document.querySelector('.m-link').textContent.trim();

    var modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.display = "none";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.height = "100vh";

    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.style.backgroundColor = "rgba(0,0,0,0.3)";
    modalContent.style.backdropFilter = "blur(10px)"
    modalContent.style.padding = "20px";
    modalContent.style.display = "flex";
    modalContent.style.width = "550px";
    modalContent.style.flexDirection = "column";
    modalContent.style.alignItems = "center";
    modalContent.style.color = "#fff";
    modalContent.style.textAlign = "center";
    modalContent.style.height = "100vh";
    modalContent.style.overflowY = "scroll";
    modalContent.style.fontFamily = "Arial, sans-serif";

    // Create close button
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";
    closeButton.style.backgroundColor = "blue";
    closeButton.style.float = "right";
    closeButton.style.fontSize = "12px";
    closeButton.style.padding = "10px 20px";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.marginBottom = "10px"; // Add margin bottom
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    var credits = "Welcome to Flex Flux!! These reports are based on estimations which rely on flex marks. There are some limitations to the script, such as considering only the best marks and its inability to calculate marks for subjects whose weightage has not been uploaded by the teacher.";
    modalContent.innerHTML += "<img src='" + userPic + "' alt='User Picture' style='max-width: 100px; height: auto; border-radius:50%;'>";
    modalContent.innerHTML += "<p style='font-size:22px;margin:12px;'>Heyy, " + userName + "</p>";
    modalContent.innerHTML += "<p style='margin:20px;'>" + credits + "</p>";

    // Get all tabs
    var tabs = document.querySelectorAll('.nav-tabs .nav-link');

    tabs.forEach(function(tab, index) {
        tab.click();
        

        var subjectName = document.querySelector('.tab-pane.active h5').textContent.trim();

        var activeElement = document.querySelector('.tab-pane.active');
        var obtMarks = activeElement.querySelectorAll('.totalColObtMarks');
        var ttlMarks = activeElement.querySelectorAll('.weightage');
        var avgMarks = activeElement.querySelectorAll('.AverageMarks');
        var avgTtlMarks = activeElement.querySelectorAll('.GrandTotal');
        var lengthObt = obtMarks.length;
        var lengthTtl = ttlMarks.length;
        var lengthAvg = avgMarks.length;
        var lengthAvgTtl = avgTtlMarks.length;
        var sumObt = 0;

        for (let i = 0; i < lengthObt; i++) {
            sumObt += parseFloat(obtMarks[i].innerHTML);
        }

        let sumTtl = 0;
        for (let i = 0; i < lengthTtl; i++) {
            sumTtl += parseFloat(ttlMarks[i].innerHTML);
        }

        let sumAvg = 0;
        for (let i = 0; i < lengthAvg; i++) {
            sumAvg += (parseFloat(avgMarks[i].innerHTML) / parseFloat(avgTtlMarks[i].innerHTML)) * parseFloat(ttlMarks[i].innerHTML);
        }

        sumObt = sumObt.toFixed(2);
        sumTtl = sumTtl.toFixed(2);
        sumAvg = sumAvg.toFixed(2);

        var check = sumObt < sumAvg;
        var msg = check ? "Your Marks Are " + ((sumAvg - sumObt)).toFixed(2) + " Below Class Average" : "Your Marks Are " + ((sumObt - sumAvg)).toFixed(2) + " Above Class Average";

        var table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        table.style.width = "100%";
        table.style.margin = "30px 0px";

        var row1 = document.createElement("tr");
        var row2 = document.createElement("tr");
        var row3 = document.createElement("tr");
        var row4 = document.createElement("tr");

        // Create table cells for row 1
        var cell11 = document.createElement("td");
        cell11.textContent = "Absolute Obtained:";
        cell11.style.border = "1px solid #ddd";
        var cell12 = document.createElement("td");
        cell12.textContent = sumObt;
        cell12.style.border = "1px solid #ddd";
        cell12.style.color = "#fff"; // Add text color

        // Create table cells for row 2
        var cell21 = document.createElement("td");
        cell21.textContent = "Total Absolute:";
        cell21.style.border = "1px solid #ddd";
        var cell22 = document.createElement("td");
        cell22.textContent = sumTtl;
        cell22.style.border = "1px solid #ddd";
        cell22.style.color = "#fff"; // Add text color

        // Create table cells for row 3
        var cell31 = document.createElement("td");
        cell31.textContent = "Class Average Absolute:";
        cell31.style.border = "1px solid #ddd";
        var cell32 = document.createElement("td");
        cell32.textContent = sumAvg;
        cell32.style.border = "1px solid #ddd";
        cell32.style.color = "#fff"; // Add text color

        // Create table cells for row 4 (Message)
        var cell41 = document.createElement("td");
        cell41.textContent = "Message:";
        cell41.style.border = "1px solid #ddd";
        var cell42 = document.createElement("td");
        cell42.textContent = msg;
        cell42.style.border = "1px solid #ddd";
        cell42.style.color = "#fff"; // Add text color

        // Append cells to rows
        row1.appendChild(cell11);
        row1.appendChild(cell12);
        row2.appendChild(cell21);
        row2.appendChild(cell22);
        row3.appendChild(cell31);
        row3.appendChild(cell32);
        row4.appendChild(cell41);
        row4.appendChild(cell42);

        // Append rows to table
        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);
        table.appendChild(row4);

        // Add subject name to the modal
        modalContent.innerHTML += "<h3>" + subjectName + "</h3>";

        // Append table to modal content
        modalContent.appendChild(table);
    });

    // Append modal content to modal
    modal.appendChild(modalContent);

    // Append modal to the document body
    document.body.appendChild(modal);

    function exportReport() {
        var userName = document.querySelector('.m-link').textContent.trim();
        var currentDate = new Date();
        var credits = "All rights reserved by Ajmal Razaq Bhatti.";
        var reportText = "Report generated for: " + userName + "\n";
        reportText += "Date: " + currentDate.toLocaleDateString() + "\n";
        reportText += "Time: " + currentDate.toLocaleTimeString() + "\n\n";

        // Iterate over tabs and add data to the report
        var tabs = document.querySelectorAll('.nav-tabs .nav-link');
        tabs.forEach(function(tab, index) {
            tab.click();

            var subjectName = document.querySelector('.tab-pane.active h5').textContent.trim();
            reportText += "Subject: " + subjectName + "\n";

            var activeElement = document.querySelector('.tab-pane.active');
            var obtMarks = activeElement.querySelectorAll('.totalColObtMarks');
            var ttlMarks = activeElement.querySelectorAll('.weightage');
            var avgMarks = activeElement.querySelectorAll('.AverageMarks');
            var avgTtlMarks = activeElement.querySelectorAll('.GrandTotal');
            var lengthObt = obtMarks.length;
            var lengthTtl = ttlMarks.length;
            var lengthAvg = avgMarks.length;
            var lengthAvgTtl = avgTtlMarks.length;
            var sumObt = 0;

            for (let i = 0; i < lengthObt; i++) {
                sumObt += parseFloat(obtMarks[i].innerHTML);
            }

            let sumTtl = 0;
            for (let i = 0; i < lengthTtl; i++) {
                sumTtl += parseFloat(ttlMarks[i].innerHTML);
            }

            let sumAvg = 0;
            for (let i = 0; i < lengthAvg; i++) {
                sumAvg += (parseFloat(avgMarks[i].innerHTML) / parseFloat(avgTtlMarks[i].innerHTML)) * parseFloat(ttlMarks[i].innerHTML);
            }

            sumObt = sumObt.toFixed(2);
            sumTtl = sumTtl.toFixed(2);
            sumAvg = sumAvg.toFixed(2);

            var check = sumObt < sumAvg;
            var msg = check ? "Your Marks Are " + ((sumAvg - sumObt)).toFixed(2) + " Below Class Average" : "Your Marks Are " + ((sumObt - sumAvg)).toFixed(2) + " Above Class Average";

            reportText += "Absolute Obtained: " + sumObt + "\n";
            reportText += "Total Absolute: " + sumTtl + "\n";
            reportText += "Class Average Absolute: " + sumAvg + "\n";
            reportText += "Message: " + msg + "\n\n";
        });

        reportText += "Credits: " + credits;

        return reportText;
    }
    // Show modal
    modal.style.display = "block";

    modalContent.appendChild(closeButton);

    var downloadLink = document.createElement("a");
    downloadLink.textContent = "Download Report";
    downloadLink.href = "data:text/plain;charset=utf-8," + encodeURIComponent(exportReport());
    downloadLink.download = "report.txt";
    downloadLink.style.backgroundColor = "blue";
    downloadLink.style.fontSize = "12px";
    downloadLink.style.padding = "10px 20px";
    downloadLink.style.color = "#fff";
    downloadLink.style.border = "none";
    downloadLink.style.textDecoration = "none"; // Remove underline
    downloadLink.style.marginBottom = "10px"; // Add margin bottom
    modalContent.appendChild(downloadLink);
}

// Call the createModal function
createModal();

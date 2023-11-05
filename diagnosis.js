document.addEventListener("DOMContentLoaded", function() {
    const diagnoseButton = document.getElementById("diagnose-btn");
    const diagnosisReport = document.getElementById("diagnosis-report");
    const downloadReport = document.getElementById("download-report");

    diagnoseButton.addEventListener("click", function() {
        const plantImage = document.getElementById("plant-image").files[0];
        const diagnosisDescription = document.getElementById("diagnosis-description").value;

        // In a real application, you'd need to send the image and description to a server for processing.
        // For this example, we'll just show a placeholder message.

        diagnosisReport.style.display = "block";
        diagnosisReport.innerHTML = "<h2>Diagnosis Report</h2>" +
            "<p>Image and description sent for processing.</p>" +
            "<p>Awaiting results...</p>";

        // Simulate a delay before showing the download message
        setTimeout(function() {
            downloadReport.style.display = "block";
        }, 4000);
    });
});


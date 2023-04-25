function projectsViewMore() {
    button = document.getElementById("projects-view-more");
    button.onclick = goToProjectsPage;
}

function leaveMessage() {
    button = document.getElementById("contact-message");
    button.onclick = goToMessagePage;
}

function goToProjectsPage() {
    window.location.href = "projects.html";
}

function goToMessagePage() {
    window.location.href = "message.html";
}

projectsViewMore();
leaveMessage();
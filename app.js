
const github = new Github;

const ui = new Ui;

const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e) => {
    const userText = e.target.value;

    if(userText !== "") {

        github.getUser(userText).then( data => {
            if(data.profile.message === "not found") {
                ui.showAlert("User cannot foound", "alert alert-danger");
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
       
    } else {
        ui.clearProfile();
    }
});
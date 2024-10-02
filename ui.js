class Ui {
    constructor() {
        this.profile = document.getElementById("profile");
    }
    showProfile(name) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${name.avatar_url}" alt="user-avatar"/>
                    <a href="${name.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">
                        View profile
                    </a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public repos: ${name.public_repos}</span>
                    <span class="badge badge-secondary">Public gists: ${name.public_gists}</span>
                    <span class="badge badge-success">Followers: ${name.followers}</span>
                    <span class="badge badge-info">Following: ${name.following}</span>
                    <br/><br/>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${name.company}</li>
                        <li class="list-group-item">Website/Blog: ${name.blog}</li>
                        <li class="list-group-item">Location: ${name.location}</li>
                        <li class="list-group-item">Member Since at: ${name.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class""page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>`;
    }

    showRepos(repos) {
        let output = "";

        repos.forEach(function(repo) {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazer_count}</span>
                        <span class="badge badge-Wat">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.form_count}</span>
                    </div>
                </div>
            </div>`;
        })
        document.getElementById("repos").innerHTML = output;
    }

    showAlert(message, className) {

        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".searchContainer");
        const search = document.querySelector(".search");

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }
}

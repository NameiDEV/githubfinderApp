class Github {
    constructor() {
        this.client_id = "Ov23liOUGp08kl8aMUL8";
        this.client_secret = "0eed94c3b21ff883be4d661b5ba0c92aace09b65";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = 
        await fetch(
            `https://api.github.com/users/${user}
            ?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        const repoResponse = 
        await fetch(
            `https://api.github.com/users/${user}/repos
            ?per_page=${this.repos_count}&sort=${this.repos_sort}
            &client_id=${this.client_id}
            &client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();
      
        const repos = await repoResponse.json();
        
        return {profile, repos};
    }

}


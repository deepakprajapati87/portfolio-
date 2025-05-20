
  const githubContent = document.getElementById("github-content");

  fetch("https://api.github.com/users/your-github-username/repos?sort=updated")
    .then(response => response.json())
    .then(repos => {
      githubContent.innerHTML = ""; // Clear loading message

      repos.slice(0, 6).forEach(repo => {
        githubContent.innerHTML += `
          <div class="col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="fab fa-github text-dark me-2"></i>${repo.name}
                </h5>
                <p class="card-text">${repo.description || "No description provided."}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                  <small class="text-muted">
                    <i class="fas fa-star text-warning"></i> ${repo.stargazers_count}
                    <span class="ms-2"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                  </small>
                  <a href="${repo.html_url}" target="_blank" class="btn btn-sm btn-outline-primary">View</a>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    })
    .catch(error => {
      githubContent.innerHTML = `<p class="text-danger">Unable to load repositories.</p>`;
      console.error(error);
    });


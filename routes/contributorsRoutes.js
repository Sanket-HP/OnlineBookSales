// contributors.js

// GitHub API URL to get contributors
const repoOwner = 'username'; // Replace with your GitHub username
const repoName = 'repo-name'; // Replace with your repository name
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;

const contributorsContainer = document.getElementById('contributors');

// Fetch contributors from the GitHub API
fetch(apiUrl)
  .then(response => response.json())
  .then(contributors => {
    contributors.forEach(contributor => {
      // Create the card for each contributor
      const contributorCard = document.createElement('div');
      contributorCard.classList.add('bg-white', 'p-5', 'shadow-lg', 'rounded-lg', 'text-center');

      // Create avatar
      const avatar = document.createElement('img');
      avatar.src = contributor.avatar_url;
      avatar.alt = `${contributor.login}'s avatar`;
      avatar.classList.add('rounded-full', 'h-20', 'w-20', 'mx-auto');

      // Create name
      const name = document.createElement('h2');
      name.textContent = contributor.login;
      name.classList.add('text-2xl', 'font-semibold', 'mt-4');

      // Create contribution count
      const contributions = document.createElement('p');
      contributions.textContent = `${contributor.contributions} Contributions`;
      contributions.classList.add('text-gray-500', 'mt-2');

      // Create GitHub profile link
      const profileLink = document.createElement('a');
      profileLink.href = contributor.html_url;
      profileLink.target = '_blank';
      profileLink.textContent = 'View GitHub Profile';
      profileLink.classList.add('text-blue-500', 'hover:text-blue-700', 'mt-4', 'block');

      // Append elements to the card
      contributorCard.appendChild(avatar);
      contributorCard.appendChild(name);
      contributorCard.appendChild(contributions);
      contributorCard.appendChild(profileLink);

      // Append the card to the container
      contributorsContainer.appendChild(contributorCard);
    });
  })
  .catch(error => {
    console.error('Error fetching contributors:', error);
    contributorsContainer.innerHTML = `<p class="text-center text-red-500">Failed to load contributors.</p>`;
  });

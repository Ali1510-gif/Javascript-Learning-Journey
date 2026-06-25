// ==============================
// GitHub Explorer
// ==============================

const userContainer = document.getElementById("userContainer");
const loader = document.getElementById("loader");
const errorBox = document.getElementById("error");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// ==============================
// Show Loader
// ==============================

function showLoader() {
  loader.classList.remove("d-none");
}

// ==============================
// Hide Loader
// ==============================

function hideLoader() {
  loader.classList.add("d-none");
}

// ==============================
// Show Error
// ==============================

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("d-none");
}

// ==============================
// Hide Error
// ==============================

function hideError() {
  errorBox.classList.add("d-none");
}

// ==============================
// Create User Card
// ==============================

function createUserCard(user) {
  return `
        <div class="col-lg-3 col-md-4 col-sm-6 fade-up">

            <div class="card user-card">

                <img src="${user.avatar_url}" class="card-img-top" alt="${user.login}">

                <div class="card-body text-center">

                    <h5 class="card-title">
                        ${user.login}
                    </h5>

                    <p class="card-text">

                        <span class="badge bg-primary">
                            ${user.type}
                        </span>

                    </p>

                    <div class="d-grid gap-2">

                        <a
                            href="${user.html_url}"
                            target="_blank"
                            class="btn btn-primary">

                            <i class="bi bi-github"></i>
                            View Profile

                        </a>

                    </div>

                </div>

            </div>

        </div>
    `;
}

// ==============================
// Fetch Default Users
// ==============================

async function fetchUsers() {
  showLoader();
  hideError();
  userContainer.innerHTML = "";

  try {
    const response = await fetch("https://api.github.com/users");

    if (!response.ok) {
      throw new Error("Unable to fetch GitHub users.");
    }

    const users = await response.json();

    users.forEach((user) => {
      userContainer.innerHTML += createUserCard(user);
    });
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoader();
  }
}

// ==============================
// Search GitHub User
// ==============================

async function searchUser(username) {
  if (username.trim() === "") {
    fetchUsers();
    return;
  }

  showLoader();
  hideError();
  userContainer.innerHTML = "";

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.status === 404) {
      throw new Error("User not found.");
    }

    if (!response.ok) {
      throw new Error("Something went wrong.");
    }

    const user = await response.json();

    userContainer.innerHTML = createUserCard(user);
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoader();
  }
}

// ==============================
// Search Button
// ==============================

searchBtn.addEventListener("click", () => {
  const username = searchInput.value;

  searchUser(username);
});

// ==============================
// Enter Key Search
// ==============================

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchUser(searchInput.value);
  }
});

// ==============================
// Load Users on Page Load
// ==============================

fetchUsers();

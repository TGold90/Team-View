const genHTML = (data) => {
  const manager = (arr) => {
    const managerText = [];
    arr.forEach((man) => {
      managerText.push(`<div class="card manager column is-3 m-2">
      <header class="card-header role-header man-header">
        <p class="card-header-title headTitle">Manager: ${man.name}</p>
        <button class="card-header-icon" aria-label="dragon">
                <span class="icon">
                  <i class="fas fa-dragon"></i>
                </span>
              </button>
      </header>
      <div class="card-content">
        <div class="content">
          <p>ID: ${man.id}</p>
          <p>
            Email:
            <a href="mailto: ${man.email}" target="_blank"
              >${man.email}</a
            >
          </p>
          <footer class="card-footer pt-3">
            <p>Office Number: ${man.officeNumber}</p>
          </footer>
        </div>
      </div>
    </div>`);
    });
    return managerText.join("");
  };
  const intern = (arr) => {
    const internText = [];
    arr.forEach((int) => {
      internText.push(`<div class="card intern column is-3 m-2">
      <header class="card-header role-header">
        <p class="card-header-title headTitle">Intern: ${int.name}</p>
        <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-edit"></i>
                </span>
              </button>
      </header>
      <div class="card-content">
        <div class="content">
          <p>ID: ${int.id}</p>
          <p>
            Email:
            <a href="mailto: ${int.email}" target="_blank"
              >${int.email}</a
            >
          </p>
          <footer class="card-footer pt-3">
            <p>School: ${int.school}</p>
          </footer>
        </div>
      </div>
    </div>`);
    });
    return internText.join("");
  };
  const engineer = (arr) => {
    const engineerText = [];
    arr.forEach((eng) => {
      engineerText.push(`<div class="card engineer column is-3 m-2">
      <header class="card-header role-header eng-header">
        <p class="card-header-title headTitle">Engineer: ${eng.name}</p>
        <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-file-code"></i>
                </span>
              </button>
      </header>
      <div class="card-content">
        <div class="content">
          <p>ID: ${eng.id}</p>
          <p>
            Email:
            <a href="mailto: ${eng.email}" target="_blank"
              >${eng.email}</a>
            
          </p>
          <footer class="card-footer pt-3">
            <p>GitHub: <a href="https://github.com/${eng.gitHub}" target="_blank"
              >${eng.gitHub}</a>
          </footer>
        </div>
      </div>
    </div>`);
    });
    return engineerText.join("");
  };
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Team View</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
    />
      <link rel="stylesheet" href="/dist/style.css" />
    </head>
    <body>
      <section class="section">
        <div class="container">
          <h1 class="title">Team View</h1>
          <p class="subtitle">Org chart <strong>Visualized!</strong></p>
          <div class="columns is-flex flex-wrap">
        ${manager(data.filter((member) => member.getRole() === "Manager"))}
        ${engineer(data.filter((member) => member.getRole() === "Engineer"))}
        ${intern(data.filter((member) => member.getRole() === "Intern"))}
        </div>
        </div>
      </section>
    </body>
  </html>`;
};

module.exports = genHTML;

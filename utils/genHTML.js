const genHTML = (data) => {
  const manager = (arr) => {
    const managerText = [];
    arr.forEach((man) => {
      managerText.push(`<div class="card manager column is-3 m-2">
      <header class="card-header role-header">
        <p class="card-header-title">Manager: ${man.name}</p>
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
        <p class="card-header-title">Intern: ${int.name}</p>
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
      <header class="card-header role-header">
        <p class="card-header-title">Engineer: ${eng.name}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <p>ID: ${eng.id}</p>
          <p>
            Email:
            <a href="mailto: ${eng.email}" target="_blank"
              >${eng.email}</a
            >
          </p>
          <footer class="card-footer pt-3">
            <p>GitHub: <a href="https://github.com/${eng.gitHub}" target="_blank"
              >${eng.gitHub}</a</p>
          </footer>
        </div>
      </div>
    </div>`);
    });
    return engineerText.join("");
  };
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team View</title>
    </head>
    <body>
        ${manager(data.filter((member) => member.getRole() === "Manager"))}
        ${engineer(data.filter((member) => member.getRole() === "Engineer"))}
        ${intern(data.filter((member) => member.getRole() === "Intern"))}
    </body>
    </html>`;
};

module.exports = genHTML;

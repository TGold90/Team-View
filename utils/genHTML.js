const genHTML = (data) => {
  const manager = (arr) => {
    const managerText = [];
    arr.forEach((man) => {
      managerText.push(`<div> name: ${man.name} </div>`);
    });
    return managerText.join("");
  };
  const intern = (arr) => {
    const internText = [];
    arr.forEach((int) => {
      internText.push(`<div> name: ${int.name} </div>`);
    });
    return internText.join("");
  };
  const engineer = (arr) => {
    const engineerText = [];
    arr.forEach((eng) => {
      engineerText.push(`<div> name: ${eng.name} </div>`);
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

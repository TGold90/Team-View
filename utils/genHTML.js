const genHTML = (data) => {
  const manager = (arr) => {
    const managerText = [];
    arr.forEach((man) => {
      managerText.push(`<div> name: ${man.name}`);
    });
    return managerText.join("");
  };
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${manager(data.filter((member) => member.getRole() === "Manager"))}
    </body>
    </html>`;
};

module.exports = genHTML;

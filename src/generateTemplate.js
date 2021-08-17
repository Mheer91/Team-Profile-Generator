//This function creates all of the team member cards, with specific parameters for each role type. 
function teamMembers(employees){
    var teamMember = ``;
    for(let i = 0; i < employees.length; i++){
        if(employees[i].getRole() === "Manager"){
            teamMember += `
            <div class="card order-1 shadow-lg mb-5" style="width: 18rem;">
            <div class="card-header bg-danger fs-5 text fw-bold">
                ${employees[i].getRole()}
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${employees[i].name}</li>
                    <li class="list-group-item">Employee ID: ${employees[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employees[i].email}" class="text-decoration-none">Click to email Me!</a></li>
                    <li class="list-group-item">Office: ${employees[i].officeNumber}</li>
                </ul>
            </div>`
        }
        else if(employees[i].getRole() === "Engineer"){
            teamMember += `
            <div class="card order-2 shadow-lg mb-5" style="width: 18rem;">
            <div class="card-header bg-warning fs-5 text fw-bold">
                ${employees[i].getRole()}
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${employees[i].name}</li>
                    <li class="list-group-item">Employee ID: ${employees[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employees[i].email}" class="text-decoration-none">Click to email Me!</a></li>
                    <li class="list-group-item">GitHub:  <a href="https://github.com/${employees[i].github}" class="text-decoration-none" target=_blank>Visit my GitHub!</a></li>
                </ul>
            </div>`
        }
        else if(employees[i].getRole() === "Intern"){
            teamMember += `
            <div class="card order-3 shadow-lg mb-5" style="width: 18rem;">
            <div class="card-header bg-info fs-5 text fw-bold">
                ${employees[i].getRole()}
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${employees[i].name}</li>
                    <li class="list-group-item">Employee ID: ${employees[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employees[i].email}" class="text-decoration-none">Click to email Me!</a></li>
                    <li class="list-group-item">University: ${employees[i].school}</li>
                </ul>
            </div>`
        }
    }
    return teamMember;
};

//This function creates the skeleton of the page and calls on the teamMembers function to populate the page with the team members.
function newTeamPage(employees){

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Team Profile</title>
</head>

<body class="bg-secondary">
    <nav class="navbar navbar-dark bg-dark mb-5"">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Team Profile</span>
        </div>
    </nav>
    <div class="container-fluid d-flex flex-wrap justify-content-evenly" id="teamCards">
    ${teamMembers(employees)}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
        crossorigin="anonymous"></script>
    <script src="/src/generateEmployee.js"></script>
</body>

</html>`
};

module.exports = newTeamPage;



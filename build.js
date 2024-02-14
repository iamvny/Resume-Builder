// =====================================Add new work Hobby===============================================================
function addNewHobby() {
    // Get the work experience container
    let hobbyContainer = document.getElementById("hobbyContainer");
  
    let NewHobby = document.createElement("div");
    NewHobby.classList.add("Hobbies");
  
    let hobbyinput = document.createElement("input");
    hobbyinput.type = "text";
    hobbyinput.classList.add("form-control", "hobbyInput");
    hobbyinput.placeholder = "ex:cricket,singing,compitative programming";
  
     // Create delete button
     let deleteButtonh = document.createElement("button");
     deleteButtonh.classList.add("deleteButtonh");
     deleteButtonh.innerHTML = "delete";
     deleteButtonh.addEventListener("click", function () {
      hobbyContainer.removeChild(NewHobby);
     });
      // Append the input elements and delete button to the new work experience div
    NewHobby.appendChild(hobbyinput);
    NewHobby.appendChild(deleteButtonh);
    NewHobby.appendChild(document.createElement("div")); // Clear float
  
    // Append the new work experience div to the container
    hobbyContainer.appendChild(NewHobby);
  }
  // Clear hobby delte button
  function clearhobby(btn) {
    // Get the parent element (.workExperience)
    let hobby = btn.parentElement;
  
    // Clear the input fields within the .eduExperience element
    let inputs = hobby.querySelectorAll('input, text');
    inputs.forEach(function (input) {
      input.value = '';
    });
  }
  // ===========================================Hobby section ends here ==================================================
  
  // =========================================Add new work experience======================================================
  function addNewExp() {
    // Get the work experience container
    let workExperienceContainer = document.getElementById(
      "workExperienceContainer"
    );
  
    // Create a new work experience div
    let newWorkExperience = document.createElement("div");
    newWorkExperience.classList.add("workExperience");
  
    // Create input elements
    let roleInput = document.createElement("input");
    roleInput.type = "text";
    roleInput.classList.add("form-control", "roleInput");
    roleInput.placeholder = "Role";
  
    let durationInput = document.createElement("input");
    durationInput.type = "text";
    durationInput.classList.add("form-control", "durationInput");
    durationInput.placeholder = "Duration";
  
    let companyInput = document.createElement("input");
    companyInput.type="text";
    companyInput.classList.add("form-control", "companyInput");
    companyInput.placeholder = "company name";
  
    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener("click", function () {
      workExperienceContainer.removeChild(newWorkExperience);
    });
  
    // Append the input elements and delete button to the new work experience div
    newWorkExperience.appendChild(roleInput);
    newWorkExperience.appendChild(companyInput);
    newWorkExperience.appendChild(durationInput);
    newWorkExperience.appendChild(deleteButton);
    newWorkExperience.appendChild(document.createElement("div")); // Clear float
  
    // Append the new work experience div to the container
    workExperienceContainer.appendChild(newWorkExperience);
  }
  function clearworkExperience(btn) {
    // Get the parent element (.workExperience)
    let workExperience = btn.parentElement;
  
    // Clear the input fields within the .eduExperience element
    let inputs = workExperience.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
      input.value = '';
    });
  }
  // =============================work experience section ends here===========================================
  
  // ==========================Education===========================================================
  function addNewEdu() {
    // Get the education experience container
    let eduExperienceContainer = document.getElementById(
      "eduExperienceContainer"
    );
  
    // Create a new education experience div
    let newEducation = document.createElement("div");
    newEducation.classList.add("eduExperience");
  
    // Create input elements
    let clgInput = document.createElement("input");
    clgInput.type = "text";
    clgInput.classList.add("form-control", "clgInput");
    clgInput.placeholder = "School/College";
  
    let degreeInput = document.createElement("input");
    degreeInput.type = "text";
    degreeInput.classList.add("form-control", "degInput");
    degreeInput.placeholder = "Degree/course";
  
    let durationInput = document.createElement("input");
    durationInput.type = "text";
    durationInput.classList.add("form-control", "startYearInput");
    durationInput.placeholder = "Start Year";
  
    let durationInput2 = document.createElement("input");
    durationInput2.type = "text";
    durationInput2.classList.add("form-control", "endYearInput");
    durationInput2.placeholder = "End Year";
  
    let percentageInput = document.createElement("input");
    percentageInput.type = "text";
    percentageInput.classList.add("form-control", "percentInput");
    percentageInput.placeholder = "CGPA/Percentage% ex:CGPA:7.2 or Percentage:90%";
  
    // Create delete button
    let deleteButtons = document.createElement("button");
    deleteButtons.classList.add("deleteButtons");
    deleteButtons.innerHTML = "delete";
    deleteButtons.addEventListener("click", function () {
      eduExperienceContainer.removeChild(newEducation);
    });
  
    // Append the input elements and delete button to the new education experience div
    newEducation.appendChild(clgInput);
    newEducation.appendChild(degreeInput);
    newEducation.appendChild(durationInput);
    newEducation.appendChild(durationInput2);
    newEducation.appendChild(percentageInput);
    newEducation.appendChild(deleteButtons);
    newEducation.appendChild(document.createElement("div")); // Clear float
  
    // Append the new education experience div to the container
    eduExperienceContainer.appendChild(newEducation);
  }
  // clear education delete button
  function clearEduExperience(btn) {
    // Get the parent element (.eduExperience)
    let eduExperience = btn.parentElement;
  
    // Clear the input fields within the .eduExperience element
    let inputs = eduExperience.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
      input.value = '';
    });
  }
  // =============================education section ends here===========================================
  
  // ===========================add new project details===================================================
  function addNewProj() {
    // Get the project details container
    let projectDetailsContainer = document.getElementById(
      "projectDetailsContainer"
    );
  
    // Create a new project details div
    let newProject = document.createElement("div");
    newProject.classList.add("projDetails");
  
    // Create input elements
    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.classList.add("form-control", "titleInput");
    titleInput.placeholder = "Project Title";
  
    let projdescriptionInput = document.createElement("input");
    projdescriptionInput.type = "text";
    projdescriptionInput.classList.add("form-control", "projdescriptionInput");
    projdescriptionInput.placeholder = "Degree/course";
  
  
    // Create delete button
    let deleteButtonP = document.createElement("button");
    deleteButtonP.classList.add("deleteButtonP");
    deleteButtonP.innerHTML = "delete";
    deleteButtonP.addEventListener("click", function () {
      projectDetailsContainer.removeChild(newProject);
    });
  
    // Append the input elements and delete button to the new project details div
    newProject.appendChild(titleInput);
    newProject.appendChild(projdescriptionInput);
    newProject.appendChild(deleteButtonP);
    newProject.appendChild(document.createElement("div")); // Clear float
  
    // Append the new project details div to the container
    projectDetailsContainer.appendChild(newProject);
  }
  // clear project details delete button
  function clearProjDetails(btn) {
    // Get the parent element (.projDetails)
    let projDetails = btn.parentElement;
  
    // Clear the input fields within the .eduExperience element
    let inputs = projDetails.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
      input.value = '';
    });
  }
  // =============================project details section ends here===========================================
  
  
    // ========================= Function to the generateResumeButton ===========================
    function generateResumeButton() {
      // Get values from the form
      const name = document.getElementById('namefield').value;
      const role = document.getElementById('desired-role').value;
      const age = document.getElementById('agefeild').value;
      const contact = document.getElementById('contactfield').value;
      const email = document.getElementById('emailfield').value;
      const github = document.getElementById('githubfield').value;
      const linkedin = document.getElementById('linkedinfield').value;
      const website = document.getElementById('websitefield').value;
      const objt = document.getElementById('objective').value;
      const languagesInput = document.getElementById('language').value;
      const toolsInput = document.getElementById('tool').value;
      const softwareInput = document.getElementById('softwares').value;
  
  
    
      //=====================Hobbies======================================
      let hobbiesInput = document.getElementsByClassName('hobbyInput');
      let hobbiesList = document.getElementById('Ht'); // Update to match the correct ID
      
      let hobbiesStr = "";
      for (let i = 0; i < hobbiesInput.length; i++) {
          hobbiesStr += `<li><p>${hobbiesInput[i].value}</p></li>`;
      }
      
      hobbiesList.innerHTML = hobbiesStr;
      // ======= Hobbies end ===================================================
  
      // =======work Experience=================================================
  let roles = document.getElementsByClassName('roleInput');
  let companies = document.getElementsByClassName('companyInput');
  let durations = document.getElementsByClassName('durationInput');
  
  let str = "";
  for (let i = 0; i < roles.length; i++) {
    str += `<li>
              <p><strong>${i + 1}. ${roles[i].value}</strong></p>
            </li>
            <li>
             <p>${companies[i].value}</p>
            </li>
            <li>
              <p>${durations[i].value}</p>
            </li>`;
            
  }
  
  document.getElementById('weT').innerHTML = str;
  // =======work Experience end==================================================================
  
  
  
  // =======================Education==========
  let clgs = document.getElementsByClassName('clgInput');
  let degrees = document.getElementsByClassName('degInput');
  let startYears = document.getElementsByClassName('startYearInput');
  let endYears = document.getElementsByClassName('endYearInput');
  let percentage = document.getElementsByClassName('percentInput');
  
  let eduStr = "";
  for (let i = 0; i < clgs.length; i++) {
    eduStr += `<li>
                  <p><strong>${clgs[i].value}</strong></p>
                </li>
                <li>
                  <p>${degrees[i].value}</p>
                </li>
                <li>
                 <p>${startYears[i].value} - ${endYears[i].value}</p>
                </li>
                <li>
                 <p>${percentage[i].value}</p>
                </li>`;
  }
  
  document.getElementById('edueT').innerHTML = eduStr;
  // ===============================Education end==========
      
  
      // ==========================project Details ==============================
      let title = document.getElementsByClassName('titleInput');
      let Description = document.getElementsByClassName('projdescriptionInput');
      
      
      let prjStr = "";
      for (let i = 0; i < title.length; i++) {
        prjStr += `<li>
                      <p><strong>${i + 1}.${title[i].value}</strong></p>
                    </li>
                    <li>
                      <p>${Description[i].value}</p>
                    </li>`;
      }
      
      document.getElementById('prodet').innerHTML = prjStr;
      // ======================= project Details End ==========================
  
      // =============================getting values from form ends here=============================
  
      //========================== Update the template with the entered values ===============================
      document.getElementById('nameT').innerText = name;
      document.getElementById('roleT').innerText = role;
      document.getElementById('ageT').innerText = `Age: ${age}`;
      document.getElementById('numberT').innerText = `Contact No. : ${contact}`;
      document.getElementById('EmailT').innerText = `Email Id: ${email}`;
      document.getElementById('githubT').href = github;
      document.getElementById('linkedinT').href = linkedin;
      document.getElementById('portfolioT').href = website;
      document.getElementById('objtT').innerText = objt;
      document.getElementById('langT').innerHTML = `<strong>Programming Languages: </strong>${languagesInput}`;
      document.getElementById('toolsT').innerHTML = `<strong>Development Tools: </strong>${toolsInput}`;
      document.getElementById('softwareT').innerHTML = `<strong>Softwares: </strong>${softwareInput}`;
      document.getElementById('ExRoleT').innerText = roles;
      document.getElementById('wdT').innerText = `Work Duration: ${durations}`;
      document.getElementById('clgT').innerText = clgs;
      document.getElementById('courseT').innerText = `Degree/Course: ${degrees}`;
      document.getElementById('eduT').innerText = `Education Duration: ${startYears} - ${endYears}`;
      document.getElementById('perct').innerText = percentage;
      document.getElementById('titleT').innerText = title;
      document.getElementById('projdescpT').innerText = Description;
  
      // Display the generated resume section
      document.querySelector('.generated-resume').style.display = 'block';
      document.getElementById('cv-form').style.display='none';
      document.getElementById('resume-template').style.display='block';
      
      
      
  }
  
  
  // =================Function to update the profile picture in the template ====================
  function updateProfilePicture(input) {
    const profilePicture = document.getElementById('profilePicture');
    const file = input.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        profilePicture.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
  }
  // ==============================Function to update the profile picture ends here ====================
  
  // =============================Function to remove the template footer ====================
  function toggleFooter() {
    var checkbox = document.getElementById("removeFooterCheckbox");
    var footer = document.querySelector('.resume footer');
  
    // Check if the checkbox is checked
    if (checkbox.checked) {
      // If checked, hide the footer
      footer.style.display = "none";
    } else {
      // If not checked, show the footer
      footer.style.display = "block";
    }
  }
  
  
  // Call the function when the checkbox state changes
  document.getElementById("removeFooterCheckbox").addEventListener("change", toggleFooter);
  // =============================Function to remove the template footer ends here ====================
  
  // ===============================Function to download the pdf ====================================
  document.getElementById("downloadButton").addEventListener("click", function () {
    // Select the element containing the resume template
    const element = document.getElementById("resume-template");
  
    // the screen width to adjust PDF format dynamically
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    // Generate the PDF from the element with custom options
    const options = {
      margin: [0, 0, 0, 0],
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "px", format: [1500, 1800], orientation: "portrait" } // Default size for larger screens
    };
  
    // Adjust format and orientation for smaller screens
    if (screenWidth <= 768) {
      options.jsPDF.format = [700, 900]; //  the format for smaller screens
      options.jsPDF.orientation = "portrait"; //  the orientation for smaller screens
    }
  
    html2pdf().set(options).from(element).toContainer().toCanvas().toPdf().save();
  });
  
  // ===============================Function to download the pdf ends here================================
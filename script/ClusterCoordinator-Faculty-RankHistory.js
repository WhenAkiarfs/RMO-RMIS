function toggleEdit(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('.editable');
    
    const isEditing = button.querySelector('i').classList.contains('fa-pen-to-square');

    if (isEditing) {
        cells.forEach((cell, index) => {
            const cellText = cell.textContent.trim();
            
            switch(index) {
                case 0: 
                    cell.innerHTML = `
                        <select class="form-select">
                            <option value="Associate Professor">Associate Professor</option>
                            <option value="Full/College/University Professor">Full/College/University Professor</option>
                        </select>`;
                    break;
                case 1: 
                    cell.innerHTML = `
                        <select class="form-select">
                            <option value="CAF">College of Accountancy and Finance (CAF)</option>
                            <option value="CADBE">College of Architecture, Design and the Built Environment (CADBE)</option>
                            <option value="CAL">College of Arts and Letters (CAL)</option>
                            <option value="CBA">College of Business Administration (CBA)</option>
                            <option value="COC">College of Communication (COC)</option>
                            <option value="CCIS">College of Computer and Information Sciences (CCIS)</option>
                            <option value="COED">College of Education (COED)</option>
                            <option value="CE">College of Engineering (CE)</option>
                            <option value="CHK">College of Human Kinetics (CHK)</option>
                            <option value="CL">College of Law (CL)</option>
                            <option value="CPSPA">College of Political Science and Public Administration (CPSPA)</option>
                            <option value="CSSD">College of Social Sciences and Development (CSSD)</option>
                            <option value="CS">College of Science (CS)</option>
                            <option value="CTHTM">College of Tourism, Hospitality and Transportation Management (CTHTM)</option>
                            <option value="ITECH"> Institute of Technology (ITECH)</option>
                        </select>`;
                    break;
                case 2: 
                    cell.innerHTML = `<input type="number" class="form-control" value="${cellText}">`;
                    break;
                case 3: 
                    cell.innerHTML = `<input type="date" class="form-control" value="${cellText}">`;
                    break;
                case 4: 
                    cell.innerHTML = `<input type="date" class="form-control" value="${cellText}">`;
                    break;
                default:
                    break;
            }
        });

        
        button.innerHTML = '<i class="fa-solid fa-floppy-disk fa-2xl" style="color: #850000;"></i>';
    } else {  
        cells.forEach((cell, index) => {
            const input = cell.querySelector('input, select');
            const inputValue = input.value;
            cell.textContent = inputValue; 
        });

       
        button.innerHTML = '<i class="fa-solid fa-pen-to-square fa-2xl" style="color: #850000;"></i>';

       
        const saveModal = new bootstrap.Modal(document.getElementById('saveModal'));
        saveModal.show();
    }
}
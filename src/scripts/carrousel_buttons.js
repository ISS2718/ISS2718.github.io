// Seleciona os botões
let project_left_btn = document.getElementById('project-left-button');
let project_right_btn = document.getElementById('project-right-button');
let contribution_left_btn = document.getElementById('contribution-left-button');
let contribution_right_btn = document.getElementById('contribution-right-button');

// Seleciona os inputs radio
let project_input_radio = document.getElementsByName('project-cards-carousel');
let contribution_input_radio = document.getElementsByName('contributions-cards-carousel');

// Variável para acompanhar o input radio atualmente selecionado
let project_radio_current_index = 0;
let contribution_radio_current_index = 0;


project_left_btn.addEventListener('click', function() {
    if(project_radio_current_index > 0) {
        project_radio_current_index--;
    } else {
        project_radio_current_index = (project_input_radio.length - 1);
    }
    
    project_input_radio[project_radio_current_index].checked = true;
});


project_right_btn.addEventListener('click', function() {
    if(project_radio_current_index < project_input_radio.length - 1) {
        project_radio_current_index++;
    } else {
        project_radio_current_index = 0;
    }
    
    project_input_radio[project_radio_current_index].checked = true;
});


contribution_left_btn.addEventListener('click', function() {
    if(contribution_radio_current_index > 0) {
        contribution_radio_current_index--;
    } else {
        contribution_radio_current_index = (contribution_input_radio.length - 1);
    }
    
    contribution_input_radio[contribution_radio_current_index].checked = true;
});

contribution_right_btn.addEventListener('click', function() {
    if(contribution_radio_current_index < contribution_input_radio.length - 1) {
        contribution_radio_current_index++;
    } else {
        contribution_radio_current_index = 0;
    }
    
    contribution_input_radio[contribution_radio_current_index].checked = true;
});
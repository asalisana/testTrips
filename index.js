document.addEventListener('DOMContentLoaded', function() {
    const dateInputContainer = document.getElementById('input');
    let dateInput = document.getElementById('date-to');
    const calendarIcon = dateInputContainer.querySelector('img');
    const dateFromContainer = document.getElementById('date-from-container');
    const dateFromInput = document.getElementById('date-from');

    function replaceInputAndOpenCalendar() {
        if (dateInput.type !== 'date') {
            const newDateInput = document.createElement('input');
            newDateInput.type = 'date';
            newDateInput.name = 'date-to';
            newDateInput.id = 'date-to';

            newDateInput.value = dateInput.value;
            newDateInput.placeholder = dateInput.placeholder;

            dateInputContainer.replaceChild(newDateInput, dateInput);
            dateInput = newDateInput;
        }

        dateInput.focus();
        dateInput.showPicker();
    }

    dateInput.addEventListener('focus', replaceInputAndOpenCalendar);
    calendarIcon.addEventListener('click', replaceInputAndOpenCalendar);

    dateFromContainer.addEventListener('click', function() {
        dateFromInput.focus();
        dateFromInput.showPicker();
    });
    const contentElements = document.querySelectorAll('.content');
    const maxLength = 580;

    contentElements.forEach(element => {
        if (element.scrollWidth > maxLength) {
            const originalText = element.textContent.trim();
            let truncatedText = originalText.slice(0, 127) + '...';
            element.textContent = truncatedText;

            const svgIcon = document.createElement('div');
            svgIcon.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM9 4C9 4.26522 8.89464 4.51957 8.70711 4.70711C8.51957 4.89464 8.26522 5 8 5C7.73478 5 7.48043 4.89464 7.29289 4.70711C7.10536 4.51957 7 4.26522 7 4C7 3.73478 7.10536 3.48043 7.29289 3.29289C7.48043 3.10536 7.73478 3 8 3C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4ZM7 7C6.73478 7 6.48043 7.10536 6.29289 7.29289C6.10536 7.48043 6 7.73478 6 8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9V12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H9C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11V8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7H7Z" fill="#84919A"/>
                    </svg>
                `;
            element.appendChild(svgIcon);

            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.textContent = originalText;

            svgIcon.appendChild(tooltip);

            svgIcon.addEventListener('mouseover', () => {
                tooltip.style.opacity = 1;
            });

            svgIcon.addEventListener('mouseleave', () => {
                tooltip.style.opacity = 0;
            });

            element.appendChild(svgIcon);
        }
    });
});
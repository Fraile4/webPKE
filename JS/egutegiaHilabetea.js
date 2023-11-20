
        const months = ['Urtarrila', 'Otsaila', 'Martxoa', 'Apirila', 'Maiatza', 'Ekaina', 'Uztaila', 'Abuztua', 'Iraila', 'Urria', 'Azaroa', 'Abendua'];

        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        function generateCalendar(year, month) {
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const daysInMonth = lastDay.getDate();

            const calendarBody = document.getElementById("calendar-body");
            const calendarHeader = document.getElementById("current-month-year");

            calendarHeader.innerHTML = `${months[month]} ${year}`;

            let date = 1;
            let day = firstDay.getDay();

            for (let i = 0; i < 6; i++) {
                let row = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    if (i === 0 && j < day) {
                        const cell = document.createElement("td");
                        cell.textContent = "";
                        row.appendChild(cell);
                    } else if (date <= daysInMonth) {
                        const cell = document.createElement("td");
                        cell.textContent = date;
                        row.appendChild(cell);
                        date++;
                    }
                }
                calendarBody.appendChild(row);
            }
        }

        function changeMonth(offset) {
            currentMonth += offset;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            } else if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }

            const calendarBody = document.getElementById("calendar-body");
            while (calendarBody.firstChild) {
                calendarBody.removeChild(calendarBody.firstChild);
            }

            generateCalendar(currentYear, currentMonth);
        }

        generateCalendar(currentYear, currentMonth);

        let currentYear = 2023;

        function changeYear(offset) {
            currentYear += offset;
            document.getElementsByTagName('th')[0].innerHTML = currentYear;

            // Puedes realizar aquí cualquier otra lógica relacionada con cambiar de año
        }
    
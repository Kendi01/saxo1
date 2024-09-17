//country rendering
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('country');

    countrySelect.addEventListener('change', function() {
        const selectedCountry = this.value;
        stateSelect.innerHTML = '<option value="">Select a state/province</option>';
        citySelect.innerHTML = '<option value="">Select a city</option>';
        stateSelect.disabled = !selectedCountry;
        citySelect.disabled = true;

        if (selectedCountry) {
            const statesOptions = states[selectedCountry] || [];
            statesOptions.forEach(state => {
                const option = document.createElement('option');
                option.value = state;
                option.textContent = state;
                stateSelect.appendChild(option);
            });
        }
    });


});

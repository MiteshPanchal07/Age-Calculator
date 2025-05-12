
document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', calculateAge);

    // Add Enter key support
    document.getElementById('dob').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            calculateAge();
        }
    });

    // Set max date to today
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;

    const formattedToday = yyyy + '-' + mm + '-' + dd;
    document.getElementById('dob').setAttribute('max', formattedToday);
});

function calculateAge() {
    const dobInput = document.getElementById('dob').value;

    if (!dobInput) {
        alert('Please enter your date of birth');
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        alert('Date of birth cannot be in the future');
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const ageResult = document.getElementById('ageResult');
    const ageDetail = document.getElementById('ageDetail');
    const yearValue = document.getElementById('yearValue');
    const monthValue = document.getElementById('monthValue');
    const dayValue = document.getElementById('dayValue');

    ageResult.textContent = `${years} years, ${months} months, ${days} days`;
    ageResult.classList.add('highlight');

    yearValue.textContent = years;
    monthValue.textContent = months;
    dayValue.textContent = days;

    ageDetail.classList.add('show');

    setTimeout(() => {
        ageResult.classList.remove('highlight');
    }, 1500);
}

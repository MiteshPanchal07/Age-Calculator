function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - dob;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    const age = Math.floor(ageInYears);

    currentDate.setFullYear(currentDate.getFullYear() - age);
    const monthDiff = currentDate.getMonth() - dob.getMonth();

    let months = monthDiff;
    if (currentDate.getDate() < dob.getDate()) {
        months--;
    }

    let days = currentDate.getDate() - dob.getDate();
    if (days < 0) {
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days = lastDayOfMonth - dob.getDate() + currentDate.getDate();
    }

    document.getElementById('ageResult').textContent = `${age} years, ${months} months, ${days} days`;
}
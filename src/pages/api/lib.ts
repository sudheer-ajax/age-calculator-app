
type Age = {
    years: number,
    months: number,
    days: number
}

const _isValid = function (dateString: string): boolean {
    return !isNaN(Date.parse(dateString));
}

const _isBefore = function (birthDate: string): boolean {
    const currentDay = Date.now();
    const birthDay = new Date(birthDate);
    return birthDay <= currentDay;
};

export const validate = function (birthDate: string) {
    if (!_isValid(birthDate)) {
        throw new Error('Invalid date format');
    }
    if (!_isBefore(birthDate)) {
        throw new Error('Invalid date');
    }
};


export const calculate = function (birthDate: string): Age {
    const currentDay = new Date();
    const birthDay = new Date(birthDate);
    const yearsDiff = currentDay.getFullYear() - birthDay.getFullYear();
    const monthsDiff = currentDay.getMonth() - birthDay.getMonth();
    const daysDiff = currentDay.getDate() - birthDay.getDate();
    let years = yearsDiff;
    let months = monthsDiff;
    let days = daysDiff;
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        years--;
        months += 12;
    }
    if (daysDiff < 0) {
        const lastMonthDays = new Date(currentDay.getFullYear(), currentDay.getMonth(), 0).getDate();
        months--;
        days += lastMonthDays;
    }
    return {
        'years': years,
        'months': months,
        'days': days
    };
};

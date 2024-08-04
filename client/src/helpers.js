const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

/**
 * Converts the date in the form of Month DD, YYYY.
 * 
 * @param {Date} date the date 
 * @returns the date in the format of Month DD, YYYY.
 */
const getDateOnly = (date) => {
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

/**
 * There are two types of projects that I work on, technical projects (applications),
 * and side projects (other interesting stuff).
 */
const ProjectType = Object.freeze({
    TECHNICAL: "technical",
    SIDE: "side"
});

export { getDateOnly, ProjectType }
const getArgument = (arg) => {
    const argArray = arg.split('-');
    const hour = argArray[0] * 3600 * 1000;
    const day = argArray[1] * 24 * 3600 * 1000;
    const month = argArray[2] * 30 * 24 * 3600 * 1000; 
    const year = argArray[3] * 12 * 30 * 24 * 3600 * 1000;

    return new Date(Date.parse(new Date()) + (year + month + day + hour));
}

function getTimeRemaining(time) {
    const t = Date.parse(time) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24) % 30);
    const months = Math.floor(t / (1000 * 3600 * 24 * 30) % 12);
    const years = Math.floor(t / (1000 * 3600 * 24 * 30 * 12) % 365);

    return {
      'total': t,
      'years': years,
      'months': months,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    };
}

module.exports = { getArgument, getTimeRemaining };
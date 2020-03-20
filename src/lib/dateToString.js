export default date => {
  if (!date) return '';
  const [year, month, day, hour, minute] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
  ];
  const padWithZero = string => `${string}`.padStart(2, 0);
  return `${year}-${padWithZero(month)}-${padWithZero(day)} ${padWithZero(
    hour,
  )}:${padWithZero(minute)}`;
};

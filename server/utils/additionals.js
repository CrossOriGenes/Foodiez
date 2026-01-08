const crypto = require("crypto");

const buildTimeRange = (dateStr, timeStr, durationMin = 30) => {
  const [DD, MM, YYYY] = dateStr.split("-");
  const [hh, mm] = timeStr.split(":");
  const start = new Date(
    Date.UTC(Number(YYYY), Number(MM) - 1, Number(DD), Number(hh), Number(mm))
  );
  const end = new Date(start.getTime() + durationMin * 60 * 1000);
  return { start, end };
};

const generateId = () => {
  return crypto.randomBytes(6).toString("hex");
};


module.exports = {
  buildTimeRange,
  generateId,
};

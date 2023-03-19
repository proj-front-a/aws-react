export const getNewCapacity = (target, time) => {
    switch (time) {
      case "9:00-12:00":
        return {
          ...target,
          // 例）9:00-12:00の場合、capacity0912の値を-1する。
          capacity0912: target.capacity0912 - 1,
        };
      case "13:00-15:00":
        return {
          ...target,
          capacity1315: target.capacity1315 - 1,
        };
      case "15:00-17:00":
        return {
          ...target,
          capacity1517: target.capacity1517 - 1,
        };
      case "17:00-19:00":
        return {
          ...target,
          capacity1719: target.capacity1719 - 1,
        };
      default:
    }
  };
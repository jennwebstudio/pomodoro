const WORK_TIME = 2,
      BREAK_TIME = 1,
      RELAX_TIME = 3;

export const state = {
  work: WORK_TIME,
  break: BREAK_TIME,
  relax: RELAX_TIME,
  status: 'work',
  count: 4,
  timeLeft: WORK_TIME * 60,
  isActive: false,
  timerId: 0,
};
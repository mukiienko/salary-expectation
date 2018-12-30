const salaryData = {
  'Germany': {
    taxes: 37,
    software: {
      junior: [
        {experience: 23, salary: 18000},
        {experience: 10, salary: 13000},
      ],
      middle: [
        {experience: 10, salary: 33000},
        {experience: 12, salary: 44000},
        {experience: 13, salary: 47500},
      ],
      senior: [
        {experience: 5, salary: 55000},
        {experience: 12, salary: 60000},
        {experience: 30, salary: 80000},
        {experience: 32, salary: 90000},
      ],
    },
    devops: {
      junior: [
        {experience: 2, salary: 13000},
        {experience: 23, salary: 18000},
      ],
      middle: [
        {experience: 20, salary: 31000},
        {experience: 3, salary: 28000},
        {experience: 12, salary: 29000},
      ],
      senior: [
        {experience: 24, salary: 65000},
        {experience: 10, salary: 50000},
      ],
    },
    recruiter: {
      junior: [
        {experience: 10, salary: 13000},
        {experience: 12, salary: 14000},
      ],
      middle: [
        {experience: 15, salary: 30000},
        {experience: 7, salary: 26000},
        {experience: 36, salary: 36000},
      ],
      senior: [
        {experience: 20, salary: 42200},
        {experience: 32, salary: 55000},
        {experience: 3, salary: 30000},
      ],
    },
    qa: {
      junior: [
        {experience: 11, salary: 16000},
        {experience: 4, salary: 12000},
      ],
      middle: [
        {experience: 32, salary: 35000},
        {experience: 12, salary: 20000},
      ],
      senior: [
        {experience: 34, salary: 47000},
        {experience: 25, salary: 42000},
      ],
    },
  },
  'Netherlands': {
    taxes: 34,
    software: {
      junior: [
        {experience: 23, salary: 13000},
        {experience: 10, salary: 12000},
      ],
      middle: [
        {experience: 10, salary: 31000},
        {experience: 12, salary: 40000},
        {experience: 13, salary: 42500},
      ],
      senior: [
        {experience: 5, salary: 53000},
        {experience: 12, salary: 57000},
        {experience: 30, salary: 76000},
        {experience: 32, salary: 85000},
      ],
    },
    devops: {
      junior: [
        {experience: 2, salary: 11000},
        {experience: 23, salary: 17000},
      ],
      middle: [
        {experience: 20, salary: 30000},
        {experience: 3, salary: 25000},
        {experience: 12, salary: 27000},
      ],
      senior: [
        {experience: 24, salary: 63000},
        {experience: 10, salary: 49000},
      ],
    },
    recruiter: {
      junior: [
        {experience: 10, salary: 11000},
        {experience: 12, salary: 13000},
      ],
      middle: [
        {experience: 15, salary: 28000},
        {experience: 7, salary: 24000},
        {experience: 36, salary: 34000},
      ],
      senior: [
        {experience: 20, salary: 41200},
        {experience: 32, salary: 53000},
        {experience: 3, salary: 29000},
      ],
    },
    qa: {
      junior: [
        {experience: 11, salary: 14000},
        {experience: 4, salary: 11000},
      ],
      middle: [
        {experience: 32, salary: 33000},
        {experience: 12, salary: 19000},
      ],
      senior: [
        {experience: 34, salary: 46000},
        {experience: 25, salary: 41000},
      ],
    },
  },
  'UEA': {
    taxes: 2,
    software: {
      junior: [
        {experience: 23, salary: 13000},
        {experience: 10, salary: 10000},
      ],
      middle: [
        {experience: 10, salary: 28000},
        {experience: 12, salary: 30000},
        {experience: 13, salary: 35000},
      ],
      senior: [
        {experience: 5, salary: 48000},
        {experience: 12, salary: 52000},
        {experience: 30, salary: 60000},
        {experience: 32, salary: 61000},
      ],
    },
    devops: {
      junior: [
        {experience: 2, salary: 12000},
        {experience: 23, salary: 13000},
      ],
      middle: [
        {experience: 20, salary: 24000},
        {experience: 3, salary: 20000},
        {experience: 12, salary: 23000},
      ],
      senior: [
        {experience: 24, salary: 50000},
        {experience: 10, salary: 40000},
      ],
    },
    recruiter: {
      junior: [
        {experience: 10, salary: 13400},
        {experience: 12, salary: 14000},
      ],
      middle: [
        {experience: 15, salary: 28000},
        {experience: 7, salary: 23000},
        {experience: 36, salary: 29000},
      ],
      senior: [
        {experience: 20, salary: 43200},
        {experience: 32, salary: 44000},
        {experience: 3, salary: 35000},
      ],
    },
    qa: {
      junior: [
        {experience: 11, salary: 10000},
        {experience: 4, salary: 9000},
      ],
      middle: [
        {experience: 32, salary: 24000},
        {experience: 12, salary: 20000},
      ],
      senior: [
        {experience: 34, salary: 46000},
        {experience: 25, salary: 38000},
      ],
    },
  },
  'Poland': {
    taxes: 27,
    software: {
      junior: [
        {experience: 2, salary: 12000},
        {experience: 10, salary: 14000},
      ],
      middle: [
        {experience: 10, salary: 20000},
        {experience: 12, salary: 24000},
        {experience: 30, salary: 30000},
      ],
      senior: [
        {experience: 5, salary: 30000},
        {experience: 12, salary: 30400},
        {experience: 30, salary: 43000},
        {experience: 32, salary: 50000},
      ],
    },
    devops: {
      junior: [
        {experience: 2, salary: 10000},
        {experience: 23, salary: 13000},
      ],
      middle: [
        {experience: 20, salary: 19200},
        {experience: 3, salary: 17000},
        {experience: 12, salary: 18000},
      ],
      senior: [
        {experience: 24, salary: 34000},
        {experience: 10, salary: 30000},
      ],
    },
    recruiter: {
      junior: [
        {experience: 10, salary: 11000},
        {experience: 12, salary: 12000},
      ],
      middle: [
        {experience: 15, salary: 17200},
        {experience: 7, salary: 15000},
        {experience: 36, salary: 19500},
      ],
      senior: [
        {experience: 20, salary: 30000},
        {experience: 32, salary: 31000},
        {experience: 3, salary: 25000},
      ],
    },
    qa: {
      junior: [
        {experience: 11, salary: 10000},
        {experience: 4, salary: 7400},
      ],
      middle: [
        {experience: 12, salary: 15000},
        {experience: 13, salary: 20000},
      ],
      senior: [
        {experience: 34, salary: 35000},
        {experience: 25, salary: 28000},
      ],
    },
  },
  'Ukraine': {
    taxes: 5,
    software: {
      junior: [
        {experience: 2, salary: 6800},
        {experience: 10, salary: 11000},
      ],
      middle: [
        {experience: 10, salary: 12500},
        {experience: 12, salary: 16000},
        {experience: 30, salary: 23200},
      ],
      senior: [
        {experience: 5, salary: 23400},
        {experience: 12, salary: 30400},
        {experience: 30, salary: 43000},
        {experience: 26, salary: 38000},
      ],
    },
    devops: {
      junior: [
        {experience: 2, salary: 4200},
        {experience: 23, salary: 5000},
      ],
      middle: [
        {experience: 20, salary: 15800},
        {experience: 3, salary: 12000},
        {experience: 12, salary: 14000},
      ],
      senior: [
        {experience: 24, salary: 23200},
        {experience: 10, salary: 18000},
        {experience: 32, salary: 24000},
      ],
    },
    recruiter: {
      junior: [
        {experience: 10, salary: 5800},
        {experience: 12, salary: 6300},
      ],
      middle: [
        {experience: 14, salary: 10560},
        {experience: 7, salary: 72000},
        {experience: 36, salary: 80000},
      ],
      senior: [
        {experience: 20, salary: 15000},
        {experience: 32, salary: 16000},
        {experience: 3, salary: 14000},
      ],
    },
    qa: {
      junior: [
        {experience: 12, salary: 5200},
        {experience: 4, salary: 4800},
      ],
      middle: [
        {experience: 12, salary: 40000},
        {experience: 12, salary: 60000},
      ],
      senior: [
        {experience: 12, salary: 11000},
        {experience: 24, salary: 14000},
      ],
    },
  },
  'Thailand': {
    taxes: 18,
    software: {
      junior: [
        {experience: 2, salary: 6900},
        {experience: 10, salary: 12000},
      ],
      middle: [
        {experience: 10, salary: 13500},
        {experience: 12, salary: 15000},
        {experience: 30, salary: 21200},
      ],
      senior: [
        {experience: 5, salary: 23400},
        {experience: 12, salary: 30400},
        {experience: 30, salary: 360000},
        {experience: 26, salary: 35000},
      ],
    },
    devops: {
      junior: [
        {experience: 2, salary: 4100},
        {experience: 23, salary: 48000},
      ],
      middle: [
        {experience: 20, salary: 15400},
        {experience: 3, salary: 12100},
        {experience: 12, salary: 13000},
      ],
      senior: [
        {experience: 24, salary: 23300},
        {experience: 10, salary: 19000},
        {experience: 32, salary: 23000},
      ],
    },
    recruiter: {
      junior: [
        {experience: 10, salary: 5000},
        {experience: 12, salary: 6000},
      ],
      middle: [
        {experience: 14, salary: 9560},
        {experience: 7, salary: 82000},
        {experience: 36, salary: 70000},
      ],
      senior: [
        {experience: 20, salary: 12000},
        {experience: 32, salary: 14000},
        {experience: 3, salary: 10000},
      ],
    },
    qa: {
      junior: [
        {experience: 12, salary: 5200},
        {experience: 4, salary: 4800},
      ],
      middle: [
        {experience: 12, salary: 40000},
        {experience: 12, salary: 60000},
      ],
      senior: [
        {experience: 12, salary: 11000},
        {experience: 24, salary: 14000},
      ],
    },
  },
};

export default salaryData;

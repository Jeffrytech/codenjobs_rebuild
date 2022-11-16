const charactersLeft = (maxLength: number, field?: any) => {
  let currentLegnth;
  if (!field) {
    currentLegnth = 0;
  } else {
    currentLegnth = field.length;
  }

  const payload = (maxLength - currentLegnth);

  if (payload <= 1) {
    return `${payload} Character left`;
  } else {
    return `${payload} Characters left`;
  }
};

const charactersUsedPercent = (maxLength: number, field?: any) => {
  let currentLegnth;
  if (!field) {
    currentLegnth = 0;
  } else {
    currentLegnth = field.length;
  }

  if (currentLegnth > 10000) {
    const payload = (currentLegnth / maxLength) * 100;
    return `${payload.toString().slice(0, 5)}% used`;
  }
};

// blog etc later
const tagsLeft = (maxSkillsLength: number, currentNumberOfSkills: number) => {
  const payload = (maxSkillsLength - currentNumberOfSkills).toString().slice(0, 4);

  // if (payload <= 1) {
  //   return `${payload} Skill left`;
  // } else {
  //   return `${payload} Skills left`;
  // }

  return `${payload} left`;
};

// job, profile
const skillsLeft = (maxSkillsLength: number, currentNumberOfSkills: number) => {
  const payload = (maxSkillsLength - currentNumberOfSkills).toString().slice(0, 4);

  // if (payload <= 1) {
  //   return `${payload} Skill left`;
  // } else {
  //   return `${payload} Skills left`;
  // }

  return `${payload} left`;
};

export {
  charactersLeft,
  charactersUsedPercent,

  skillsLeft,
  tagsLeft,
};
export const IS_ACTIVE = 'IS_ACTIVE';

export const isActive = (name) => ({
  type: IS_ACTIVE,
  name
});

export const playersIsActive = () => ({
  type: IS_ACTIVE,
  name: 'players'
});

export const dateIsActive = () => ({
  type: IS_ACTIVE,
  name: 'date'
});



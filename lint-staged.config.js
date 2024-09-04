module.exports = {
  '*.{js?(x),ts?(x)}': ['eslint --cache --fix', 'prettier --write'],
  '*.{graphql?(s),json,md?(x),y?(a)ml}': 'prettier --write',
}

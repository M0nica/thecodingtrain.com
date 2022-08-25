const slugify = require('slugify');

const toSlug = (path) =>
  slugify(path, { lower: true, trim: true }).replace('.', '-');

const normalizedLanguages = (language) => {

  const lowercasedLanguage = language.toLowerCase()
  const languages = {
    "javascript": "JavaScript",
    "processing": "Processing"
  }

  return languages[lowercasedLanguage] ? languages[lowercasedLanguage] : lowercasedLanguage
}

module.exports = {
  toSlug,
  normalizedLanguages
};

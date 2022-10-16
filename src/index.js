const suma2text = require('@herbsjs/suma2text')({
  useDefault: 'ts-ME',
  languages: [{
    name: 'ts-ME',
    definitions: {
      types: [
        { key: 'Number', translation: 'Numeric' },
        { key: 'String', translation: 'Characters' }
      ],
      codes: [
        { key: 'cantBeEmpty', translation: 'Wont should be empty' },
        { key: 'wrongType', translation: 'Please the value correct is {0}' }
      ]
    }
  },
  {
    name: 'en-US',
    definitions: {
      types: [
        { key: 'Number', translation: 'Digit' },
        { key: 'String', translation: 'Char Array' }
      ],
      codes: [
        { key: 'cantBeEmpty', translation: 'Wont should be empty' },
        { key: 'wrongType', translation: 'The value correct is {0}' }
      ]
    }
  }
  ]
})

export const herbsValidationResolver = (entity) => (values, _context, { names }) => {
  debugger
  let errors = {}
  const instance = entity.fromJSON(values)

  if (instance.isValid()) return { values , errors}
  const instanceErrors = suma2text.errorsToText(instance.errors)

  if (names) {
    const invalidKeys = names.filter(key => Object.keys(instanceErrors).includes(key))
    errors = invalidKeys.reduce((err, key) => ({
      ...err,
      [key]: {
        type: `min-length`,
        message: instanceErrors[key][0]
      }
    }), {})
  }
  else {
    errors = Object.keys(instanceErrors).reduce((err, key) => ({
      ...err,
      [key]: {
        type: `min-length`,
        message: instanceErrors[key][0]
      }
    }), {})
  }

  return { values, errors }
}
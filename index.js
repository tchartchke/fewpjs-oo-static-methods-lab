class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){
    let words = string.split(' ')
    words = words.map(word => {
      const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      return exceptions.includes(word) ? word : Formatter.capitalize(word)
    })
    return Formatter.capitalize(words.join(' '))
  }
}
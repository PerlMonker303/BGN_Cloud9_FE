export const startsWithCapital = (word) => {
    return word.charAt(0) === word.charAt(0).toUpperCase()
}

export const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}
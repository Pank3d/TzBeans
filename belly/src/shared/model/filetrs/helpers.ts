export const  encodeSpaces = (input: string): string => {
    return input.replace(/ /g, '%20');
}
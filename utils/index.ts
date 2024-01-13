export const getFirstLetter = (string: string) => {
    return string.charAt(0)
}

export const hideCardNumber = (value: number | string, type?: "full" | "partial", variant?: "dots" | "stars") => {
    const separator = variant === "dots" ? "••••" : "****"
    const string = String(value)
    if (type === "full") {
        return `${separator}${string.slice(12)}`
    } else {
        return `${string.slice(0, 4)} ${separator} ${separator} ${string.slice(12)}`
    }
}

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

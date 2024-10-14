export const relativeToAbsoluteUrls = (htmlString = "") => {
    console.log('----------------relativeToAbsoluteUrls = ', htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join(""));
    return htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join("");
}
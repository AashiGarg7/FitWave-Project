export const getTokenFromCookies = () => {
    const cookies = localStorage.getItem("token");
    if (cookies) {
        return true;
    }
    return false;
};
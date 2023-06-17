export const getFirstLatters = (userName: string): string =>{
    return userName.split(' ').map(word => word[0]).join('');
};

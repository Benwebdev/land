/**
 * This will allow you to merge two objects together
 * @param a 
 * @param b 
 * @returns obj
 */
export const mergeObjectsSmaller = (a, b) => {
    try {
        for (let i in b) {
            if (b.hasOwnProperty(i)){
                a[i] = b[i]
            }            
        }
        return a; 
    } catch (error) {
        return error.message;
    }
}

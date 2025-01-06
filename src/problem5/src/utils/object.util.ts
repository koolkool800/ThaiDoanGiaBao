export class ObjectUtil {
    /**
     * Removes undefined fields from an object
     * @param obj The object to clean
     * @returns A new object with only defined values
     */
    static removeUndefinedFields(obj: any) {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined));
    }
}

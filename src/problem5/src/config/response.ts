export class SuccessResponse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static call(data: null | any = null, message = 'Successfully') {
        return {
            result: true,
            message,
            data,
        };
    }
}

export class PaginatedResponse<T, Y = null> {
    public items: Array<T>;
    public pageIndex: number;
    public pageSize: number;
    public totalItems: number;
    public hasNextPage: boolean;
    public hasPrevPage: boolean;
    public totalPages: number;
    public additionalInfo: Y | null;

    constructor(data: { items: T[]; pageIndex: number; pageSize: number; totalItems: number; additionalInfo?: Y }) {
        this.items = data.items;
        this.pageSize = data.pageSize;
        this.pageIndex = data.pageIndex;
        this.totalItems = data.totalItems;

        this.totalPages = Math.ceil(this.totalItems / this.pageSize) || 0;
        this.hasPrevPage = this.pageIndex > 1;
        this.hasNextPage = this.pageIndex < this.totalPages;

        this.additionalInfo = data.additionalInfo ?? null;
    }
}

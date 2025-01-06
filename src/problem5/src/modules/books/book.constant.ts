enum BOOK_ERROR_CODE {
    NOT_FOUND = 'BOOK_NOT_FOUND|404',
}

enum BOOK_FIELDS {
    ID = 'id',
    TITLE = 'title',
    AUTHOR = 'author',
    DESCRIPTION = 'description',
    PRICE = 'price',
}

enum BOOK_SORTABLE_FIELDS {
    PRICE = 'price',
    CREATED_AT = 'createdAt',
    UPDATED_AT = 'updatedAt',
    ID = 'id',
    TITLE = 'title',
    AUTHOR = 'author',
}

export { BOOK_ERROR_CODE, BOOK_FIELDS, BOOK_SORTABLE_FIELDS };

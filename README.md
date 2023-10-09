## Book Catalog Api's

Api documentation - [Postman Documentation](https://documenter.getpostman.com/view/16082702/2s9YJgTfzF)

### User

| UseCase          | Method     | Path                    |
|------------------|------------|-------------------------|
| Signup           | ``POST``   | ``/api/v1/auth/signup`` |
| Signin           | ``POST``   | ``/api/v1/auth/signin`` |
| Get All Users    | ``GET``    | ``/api/v1/users``       |
| Get Single User  | ``GET``    | ``/api/v1/users/:id``   |
| Update User      | ``PATCH``  | ``/api/v1/users/:id``   |
| Delete User      | ``DELETE`` | ``/api/v1/users/:id``   |
| Get User Profile | ``GET``    | ``/api/v1/profile``     |

### Category

| UseCase             | Method     | Path                                   |
|---------------------|------------|----------------------------------------|
| Create Category     | ``POST``   | ``/api/v1/categories/create-category`` |
| Get All Categories  | ``GET``    | ``/api/v1/categories``                 |
| Get Single Category | ``GET``    | ``/api/v1/categories/:id``             |
| Update Category     | ``PATCH``  | ``/api/v1/categories/:id``             |
| Delete Category     | ``DELETE`` | ``/api/v1/categories/:id``             |

### Books

| UseCase               | Method     | Path                                   |
|-----------------------|------------|----------------------------------------|
| Create Book           | ``POST``   | ``/api/v1/books/create-book``          |
| Get All Books         | ``GET``    | ``/api/v1/books``                      |
| Get Books by Category | ``GET``    | ``/api/v1/books/:categoryId/category`` |
| Get Single Book       | ``GET``    | ``/api/v1/books/:id``                  |
| Update Book           | ``PATCH``  | ``/api/v1/books/:id``                  |
| Delete Book           | ``DELETE`` | ``/api/v1/books/:id``                  |

### Orders

| UseCase          | Method   | Path                            |
|------------------|----------|---------------------------------|
| Create Order     | ``POST`` | ``/api/v1/orders/create-order`` |
| Get All Orders   | ``GET``  | ``/api/v1/orders``              |
| Get Single Order | ``GET``  | ``/api/v1/orders/:orderId``     |



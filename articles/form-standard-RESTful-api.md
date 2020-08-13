## Methods for RESTful APIs

| Name    | Description |
| ------- |:-----------:|
| POST    | create a new resource |
| GET     | retrive an existing resource |
| PUT     | replace an existing resource |
| PATCH   | update information for an existing resource |
| DELETE  | delete a resource |


## Some Headers to be Considered

#### `Accept`

Specify the data type that client end needs

#### `If-Modified-Since` `If-Unmodified-Since` `If-Match` `If-None-Match` 

when client end satisfy such conditions then the back end can provide the corresponding data, otherwise return 412(precondition failed). For `If-Modified-Since`, if we have time based cache, we can use this header to return 304(not modified) when cache is still valid so that we don't have to do the extra work on the backend.

#### `ETag`

We can use it to validate the version of the resource and prevent wrongfully update.

##### Note

* We can specify a private header to prevent some web crawlers, if any requests without the private header, we can return 400(Bad Request) so that the backend don't have to do addtional work.

* If Request URI or Request body has illegal or addtional information, return 400(Bad Request) to prevent potential attacks.

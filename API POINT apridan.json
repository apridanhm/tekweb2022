### Users

#### Menampilkan data user


GET: /users

response:
[
    {
        "id"            : "",
        "nama"          : "",
        "foto"          : "",
        "des"           : "",
    },
    ...
]


#### Menampilkan data user dengan `id` tertentu


GET: /users/[id]

reponse:
{
    "id"            : "",
    "nama"          : "",
    "foto"          : "",
    "des"           : "",
}


#### Menambahkan data pengguna


POST: /users

data:
{
    "id"            : "",
    "nama"          : "",
    "foto"          : "",
    "des"           : "",
}

response:
true    // if success
false   // if failure


#### Edit data pengguna


PUT: /users

data:
{
    "id"            : "",
    "nama"          : "",
    "foto"          : "",
    "des"           : "",
}

response:
true    // if success
false   // if failure



#### Menghapus data anggota


DELETE: /users/[id]

response:
true    // if success
false   // if failure


### Artikel

#### Menampilkan data semua artikel


GET: /articles

response:
[
    {
        "id"            : "",
        "namaartikel"   : "",
        "des"           : "",
        "foto"          : "",
    }
]


#### Menampilkan data artikel dengan id  tertentu


GET: /articles/[id]

response:
{
    "id"            : "",
    "namaartikel"   : "",
    "des"           : "",
    "foto"          : "",
}


#### Menambahkan artikel


POST: /artikel

data:
{       
    "id"            : "",
    "namaartikel"   : "",
    "des"           : "",
    "foto"          : "",
}

response:
true    // if success
false   // if failure


#### Memperbarui artikel


PUT: /articles

data:
{      
    "id"            : "",
    "namaartikel"   : "",
    "des"           : "",
    "foto"          : "",
}

response:
true    // if success
false   // if failure


#### Menghapus artikel


DELETE: /articles/[id]

response:
true    // if success
false   // if failure



### Portofolio

#### Menampilkan data semua portofolio


GET: /portofolio

response:
[
    {
        "id"            : "",
        "namaporto"     : "",
        "des"           : "",
        "foto"          : "",
    }
]


#### Menampilkan data portofilio dengan id  tertentu


GET: /portofolio/[id]

response:
{
    "id"            : "",
    "namaporto"     : "",
    "des"           : "",
    "foto"          : "",
}


#### Menambahkan portofolio


POST: /portofolio

data:
{       
    "id"            : "",
    "namaporto"     : "",
    "des"           : "",
    "foto"          : "",
}

response:
true    // if success
false   // if failure


#### Memperbarui portofolio


PUT: /portofolio

data:
{      
    "id"            : "",
    "namaporto"     : "",
    "des"           : "",
    "foto"          : "",
}

response:
true    // if success
false   // if failure


#### Menghapus portofolio


DELETE: /portofolio/[id]

response:
true    // if success
false   // if failure



### Teman

#### Menampilkan data Teman


GET: /teman

response:
[
    {
        "id"            : "",
        "nama"          : "",
        "ig"          : "",
        "ig_url"           : "",
        "foto"           : "",
    },
    ...
]


#### Menampilkan data user dengan `id` tertentu


GET: /teman/[id]

reponse:
{
        "id"            : "",
        "nama"          : "",
        "ig"          : "",
        "ig_url"           : "",
        "foto"           : "",
}


#### Menambahkan data pengguna


POST: /teman

data:
{
        "id"            : "",
        "nama"          : "",
        "ig"          : "",
        "ig_url"           : "",
        "foto"           : "",
}

response:
true    // if success
false   // if failure


#### Edit data teman


PUT: /teman

data:
{
        "id"            : "",
        "nama"          : "",
        "ig"          : "",
        "ig_url"           : "",
        "foto"           : "",
}

response:
true    // if success
false   // if failure



#### Menghapus data teman


DELETE: /teman/[id]

response:
true    // if success
false   // if failure






## Desain Database

Desain database untuk menyediakan API Points adalah sebagai berikut:

mermaid
classDiagram
    class Users{
        # id: int
        + nama: string
        + des: string
        + ig: string
        + github: string
        + yt: string
        + foto: string
        + getAllUser()
        + getUserById()
        + updateUser()
        + createUser()
        + deleteUser()
    },
    class Portfolio{
        # id: int;
        + namaporto: string
        + foto: string
        + des: string
        + getAllPortfolio()
        + getPortfolioById()
        + getPortfoliosByAuthor()
        + updatePortfolio()
        + createPortfolio()
        + deletePortfolio()
    },
    class Artikel{
        # id: int,
        + namaartikel: string
        + des: string
        + foto: string
        + getAllArticle()
        + getArticleById()
        + getArticlesByAuthor()
        + updateArticle()
        + createArticle()
        + deleteArticle()
    },
    class Teman{
        # id: int,
        + nama: string
        + ig: string
        + ig_url: string
        + foto: string
        + getAllTeman()
        + getTemanById()
        + getTemanByAuthor()
        + updateTeman()
        + createTeman()
        + deleteTeman()
    },

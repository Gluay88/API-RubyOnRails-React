\*\* Gee's short notes for fetching API from Rails to React

`rails new bookstore --api`
only generate the api (note view or anything)

- in bookstore
- Gemfile
  `gem 'rack-cors'`

- run bundle to install gem

- Api-RubyOnRails-React/bookstore/config/initializers/cors.rb
  config -> initializers -> cors.rb
  uncomment these lines..

```
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http:://localhost:3001"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

add origin to http:://localhost:3001

- generate scaffold

```
rails g scaffold book title:string body:text
```

- rails db:migrate

- create route for it
  Api-RubyOnRails-React/bookstore/config/routes.rb
  config -> routes.rb

```
namespace :api do
    namespace :v1 do
      resources :books
    end
  end
```

api/v1/books

in app folder
create a folder api and inside api create v1 folder and move books_controller.rb in there
add this Api::V1::

```
class Api::V1::BooksController < ApplicationController
```

--

\*\* Frontend React

- npx create-react-app allbooks
- npm start

\*\* Add data into backend

- rails c
  Book.create!(title: "My very first book", body: "Please read my book")

```
#<Book:0x000000011c74a870
 id: 1,
 title: "My very first book",
 body: "Please read my book",
```

```
#<Book:0x000000011f840e48
 id: 2,
 title: "My very second book",
 body: "You all need to read it",
```

```
#<Book:0x000000011c7dbde8
id: 3,
title: "My third book",
body: "You all need to read them all.",
```

- exit and start rails s agian you will get this array object

```
[{"id":1,"title":"My very first book","body":"Please read my book","created_at":"2023-05-29T20:06:53.071Z","updated_at":"2023-05-29T20:06:53.071Z"},{"id":2,"title":"My very second book","body":"You all need to read it","created_at":"2023-05-29T20:07:46.660Z","updated_at":"2023-05-29T20:07:46.660Z"},{"id":3,"title":"My third book","body":"You all need to read them all.","created_at":"2023-05-29T20:08:17.126Z","updated_at":"2023-05-29T20:08:17.126Z"}]
```

\*\* Back to Frontend
src -> App.js

for api request..

- npm i axios

```
import axios from "axios";
```

I changed cors.rb to origin \*
the actual localhost:3000 didn't workout

```
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

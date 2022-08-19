const API = "https://api.themoviedb.org/3"

export function get(paht){
    return fetch(API + paht,{
      headers:{ Authorization: 
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNkYWY0NzRmYWY3NTg0YjU3YWRjZmIyZjk4YTdhYyIsInN1YiI6IjYyZTcxZGNhZmM1ZjA2MDA1OWMzNzMyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q6mIhWOun9IAqSVO63TGSGvqvXCyWy5g-QqsdxedaZM",
      "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((result) => result.json())
}
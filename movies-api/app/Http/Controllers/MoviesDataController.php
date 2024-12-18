<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MoviesDataController extends Controller
{
    public function index()
    {
        // Hardcoded data for movies
        $movies = [
            [
                'id' => 1,
                'title' => 'The Shawshank Redemption',
                'release_year' => 1994,
                'genre' => 'Drama',
                'rating' => 9.3,
                'director' => 'Frank Darabont',
                'description' => 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
                'image' => asset('images/shawshank_redemption.jpg')
            ],
            [
                'id' => 2,
                'title' => 'The Dark Knight',
                'release_year' => 2008,
                'genre' => 'Action, Crime, Drama',
                'rating' => 9.0,
                'director' => 'Christopher Nolan',
                'description' => 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
                'image' => asset('images/dark_knight.jpg')
            ],
            [
                'id' => 3,
                'title' => 'Inception',
                'release_year' => 2010,
                'genre' => 'Action, Adventure, Sci-Fi',
                'rating' => 8.8,
                'director' => 'Christopher Nolan',
                'description' => 'A thief who steals corporate secrets through the use of dream-sharing technology is given the task of planting an idea into the mind of a CEO.',
                'image' => asset('images/inception.jpg')
            ],
            [
                'id' => 4,
                'title' => 'The Godfather',
                'release_year' => 1972,
                'genre' => 'Crime, Drama',
                'rating' => 9.2,
                'director' => 'Francis Ford Coppola',
                'description' => 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
                'image' => asset('images/godfather.jpg')
            ],
            [
                'id' => 5,
                'title' => 'The Matrix',
                'release_year' => 1999,
                'genre' => 'Action, Sci-Fi',
                'rating' => 8.7,
                'director' => 'Lana Wachowski, Lilly Wachowski',
                'description' => 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
                'image' => asset('images/matrix.jpg')
            ],
            [
                'id' => 6,
                'title' => 'The Lord of the Rings: The Fellowship of the Ring',
                'release_year' => 2001,
                'genre' => 'Action, Adventure, Drama',
                'rating' => 8.8,
                'director' => 'Peter Jackson',
                'description' => 'A young hobbit, Frodo, is tasked with the mission to destroy a powerful artifact, the One Ring, to save Middle-earth.',
                'image' => asset('images/lord_of_the_rings.jpg')
            ],
            [
                'id' => 7,
                'title' => 'Forrest Gump',
                'release_year' => 1994,
                'genre' => 'Drama, Romance',
                'rating' => 8.8,
                'director' => 'Robert Zemeckis',
                'description' => 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an extraordinary life story.',
                'image' => asset('images/forrest_gump.jpg')
            ],
            [
                'id' => 8,
                'title' => 'Pulp Fiction',
                'release_year' => 1994,
                'genre' => 'Crime, Drama',
                'rating' => 8.9,
                'director' => 'Quentin Tarantino',
                'description' => 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
                'image' => asset('images/pulp_fiction.jpg')
            ],
            [
                'id' => 9,
                'title' => 'Interstellar',
                'release_year' => 2014,
                'genre' => 'Adventure, Drama, Sci-Fi',
                'rating' => 8.6,
                'director' => 'Christopher Nolan',
                'description' => 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
                'image' => asset('images/interstellar.jpg')
            ],
            [
                'id' => 10,
                'title' => 'The Lion King',
                'release_year' => 1994,
                'genre' => 'Animation, Adventure, Drama',
                'rating' => 8.5,
                'director' => 'Roger Allers, Rob Minkoff',
                'description' => 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
                'image' => asset('images/lion_king.jpg')
            ],
            [
                'id' => 11,
                'title' => 'Gladiator',
                'release_year' => 2000,
                'genre' => 'Action, Adventure, Drama',
                'rating' => 8.5,
                'director' => 'Ridley Scott',
                'description' => 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
                'image' => asset('images/gladiator.jpg')
            ],
            [
                'id' => 12,
                'title' => 'The Prestige',
                'release_year' => 2006,
                'genre' => 'Drama, Mystery, Sci-Fi',
                'rating' => 8.5,
                'director' => 'Christopher Nolan',
                'description' => 'Two magicians engage in a bitter rivalry, attempting to best each other with illusions while sacrificing everything they have to create the ultimate illusion.',
                'image' => asset('images/prestige.jpg')
            ]
        ];

        return response()->json($movies);
    }
}
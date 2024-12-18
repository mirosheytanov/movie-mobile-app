import { useState, useEffect } from 'react'
import { Platform } from 'react-native'

interface MoviesData {
  id: number
  title: string
  release_year: number
  genre: string
  rating: number
  director: string
  description: string
  image: string
}

const BASE_URL = Platform.OS === 'android' ? 'http://192.168.0.5:8000' : 'http://localhost:8000';

const useMoviesData = () => {
  const [data, setData] = useState<MoviesData[]>()

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchData = await fetch(`${BASE_URL}/api/movies-data`)
      const response = await fetchData.json()
      setData(response)
    }

    fetchMovies()
  }, [])

  return data 
} 

export default useMoviesData
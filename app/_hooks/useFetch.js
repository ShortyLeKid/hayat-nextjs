import { useState, useEffect } from "react"


const useFetch = (url) => {
    
    const [allAlbums, setAllAlbums] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const fetchAlbums = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setAllAlbums(data)
            setIsLoading(false)
        }
        catch (error) {
            console.log("Error fetching tasks:", error)
        }
    }
    
    useEffect(() => {
        fetchAlbums()
    }, [])

    return [allAlbums, isLoading]
}

export default useFetch
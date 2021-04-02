import { getMenu } from "@services/api/ApiClient";
import { useEffect, useState } from "react";

export default function loadMenu() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        try {
            setLoading(true)
            getMenu().then(result => {
                setData(result.data)
                setLoading(false)
            })
        } catch(e) {
            setError(e.message)
            setLoading(false)
        }
    }, [])

    return {
        data,
        loading,
        error
    }
}
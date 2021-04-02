import axios from "axios"

export default function makeRequest<T>(action: () => T): T { 
    try {
        return action()
    } catch(e) {
        if(axios.isAxiosError(e)) {
            throw Error("Woops")
        }
    }
}
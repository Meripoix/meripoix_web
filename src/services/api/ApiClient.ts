
import ApiService from "@services/api/ApiService";
import makeRequest from "@services/utils/ErrorHandler";

export function getMenu() {
    return makeRequest(() => ApiService.get<any[]>("/menu"))
}
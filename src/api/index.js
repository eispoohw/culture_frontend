import instance from "@/api/instance"
import CultureAPI from "@/api/culture"

const cultureAPI = new CultureAPI(instance)

export {
    cultureAPI
}
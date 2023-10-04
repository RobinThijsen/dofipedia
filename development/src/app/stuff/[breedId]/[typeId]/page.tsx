import axios from "axios"

export default async function Page(param: { breedId: string; typeId: string }) {
    const stuff = await fetch(`/api/stuff?breedId=${ param.breedId }&typeId=${ param.typeId }`)
    console.log(stuff)
}
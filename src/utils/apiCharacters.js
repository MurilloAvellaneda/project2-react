import axios from "axios";

class apiCharacters {

  constructor () {
    this.api = axios.create({
      baseURL: "http://gateway.marvel.com/v1/public"
    })
  }

  getAllCharacters = async () => {
    try {
      const { data } = await this.api.get("/characters?ts=thesoer&apikey=ea4d1cda2484c944b881e713d5ffff12&hash=4fbc26cf582a1f796fbcb150356b839a")
      return data
    } catch (error) {
     console.log(error)
      throw new Error('Cannot Fetch Data')
    }
  }

  getOneCharacter = async (id) => {
    try {
      const { data } = await this.api.get(`/${id}`)
      return data
    } catch (error) {
      throw new Error('Cannot Fetch Data')
    }
  }

}

export default new apiCharacters()
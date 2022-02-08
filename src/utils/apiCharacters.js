import axios from "axios";

class apiCharacters {

  constructor () {
    this.api = axios.create({
      baseURL: `http://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=4fbc26cf582a1f796fbcb150356b839a`
    })
  }

  getAllCharacters = async () => {
    try {
      const { data } = await this.api.get('/')
      return data
    } catch (error) {
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
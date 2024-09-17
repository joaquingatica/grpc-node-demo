import { ulid } from 'ulid'

import { Character } from '../proto/gatica/middleearth/v1/character'
import { People } from '../proto/gatica/middleearth/v1/people'

const characters: Character[] = []

export const charactersData = {
  get: () => characters.map((character) => ({ ...character })),

  create: ({ name, people, alive }: { name: string; people: People; alive: boolean }) => {
    const character = {
      id: ulid(),
      name,
      people,
      alive,
      createdAtTime: new Date(),
    }
    characters.push(character)
    return { ...character }
  },

  delete: (id: string) => {
    const index = characters.findIndex((character) => character.id === id)
    if (index !== -1) {
      const [character] = characters.splice(index, 1)
      return character ? { ...character } : null
    }
  },
}

// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: gatica/middleearth/v1/character_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from '@bufbuild/protobuf/wire'
import { type CallContext, type CallOptions } from 'nice-grpc-common'
import { Character } from './character'
import { People, peopleFromJSON, peopleToJSON } from './people'

export const protobufPackage = 'gatica.middleearth.v1'

export interface CharactersFilters {
  people?: People | undefined
}

export interface GetCharactersRequest {
  filters: CharactersFilters | undefined
}

export interface GetCharactersResponse {
  characters: Character[]
}

export interface CreateCharacterRequest {
  name: string
  people: People
  alive: boolean
}

export interface CreateCharacterResponse {
  character: Character | undefined
}

export interface UpdateCharacterRequest {
  id: string
  name: string
  people: People
  alive: boolean
}

export interface UpdateCharacterResponse {
  character: Character | undefined
}

export interface DeleteCharacterRequest {
  id: string
}

export interface DeleteCharacterResponse {
  id: string
}

function createBaseCharactersFilters(): CharactersFilters {
  return { people: undefined }
}

export const CharactersFilters: MessageFns<CharactersFilters> = {
  encode(message: CharactersFilters, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.people !== undefined) {
      writer.uint32(8).int32(message.people)
    }
    return writer
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CharactersFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCharactersFilters()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.people = reader.int32() as any
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): CharactersFilters {
    return { people: isSet(object.people) ? peopleFromJSON(object.people) : undefined }
  },

  toJSON(message: CharactersFilters): unknown {
    const obj: any = {}
    if (message.people !== undefined) {
      obj.people = peopleToJSON(message.people)
    }
    return obj
  },

  create(base?: DeepPartial<CharactersFilters>): CharactersFilters {
    return CharactersFilters.fromPartial(base ?? {})
  },
  fromPartial(object: DeepPartial<CharactersFilters>): CharactersFilters {
    const message = createBaseCharactersFilters()
    message.people = object.people ?? undefined
    return message
  },
}

function createBaseGetCharactersRequest(): GetCharactersRequest {
  return { filters: undefined }
}

export const GetCharactersRequest: MessageFns<GetCharactersRequest> = {
  encode(message: GetCharactersRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.filters !== undefined) {
      CharactersFilters.encode(message.filters, writer.uint32(10).fork()).join()
    }
    return writer
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetCharactersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGetCharactersRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.filters = CharactersFilters.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): GetCharactersRequest {
    return {
      filters: isSet(object.filters) ? CharactersFilters.fromJSON(object.filters) : undefined,
    }
  },

  toJSON(message: GetCharactersRequest): unknown {
    const obj: any = {}
    if (message.filters !== undefined) {
      obj.filters = CharactersFilters.toJSON(message.filters)
    }
    return obj
  },

  create(base?: DeepPartial<GetCharactersRequest>): GetCharactersRequest {
    return GetCharactersRequest.fromPartial(base ?? {})
  },
  fromPartial(object: DeepPartial<GetCharactersRequest>): GetCharactersRequest {
    const message = createBaseGetCharactersRequest()
    message.filters =
      object.filters !== undefined && object.filters !== null
        ? CharactersFilters.fromPartial(object.filters)
        : undefined
    return message
  },
}

function createBaseGetCharactersResponse(): GetCharactersResponse {
  return { characters: [] }
}

export const GetCharactersResponse: MessageFns<GetCharactersResponse> = {
  encode(message: GetCharactersResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.characters) {
      Character.encode(v!, writer.uint32(10).fork()).join()
    }
    return writer
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetCharactersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGetCharactersResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.characters.push(Character.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): GetCharactersResponse {
    return {
      characters: globalThis.Array.isArray(object?.characters)
        ? object.characters.map((e: any) => Character.fromJSON(e))
        : [],
    }
  },

  toJSON(message: GetCharactersResponse): unknown {
    const obj: any = {}
    if (message.characters?.length) {
      obj.characters = message.characters.map((e) => Character.toJSON(e))
    }
    return obj
  },

  create(base?: DeepPartial<GetCharactersResponse>): GetCharactersResponse {
    return GetCharactersResponse.fromPartial(base ?? {})
  },
  fromPartial(object: DeepPartial<GetCharactersResponse>): GetCharactersResponse {
    const message = createBaseGetCharactersResponse()
    message.characters = object.characters?.map((e) => Character.fromPartial(e)) || []
    return message
  },
}

function createBaseCreateCharacterRequest(): CreateCharacterRequest {
  return { name: '', people: 0, alive: false }
}

export const CreateCharacterRequest: MessageFns<CreateCharacterRequest> = {
  encode(message: CreateCharacterRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.people !== 0) {
      writer.uint32(16).int32(message.people)
    }
    if (message.alive !== false) {
      writer.uint32(24).bool(message.alive)
    }
    return writer
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateCharacterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreateCharacterRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.name = reader.string()
          continue
        case 2:
          if (tag !== 16) {
            break
          }

          message.people = reader.int32() as any
          continue
        case 3:
          if (tag !== 24) {
            break
          }

          message.alive = reader.bool()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): CreateCharacterRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      people: isSet(object.people) ? peopleFromJSON(object.people) : 0,
      alive: isSet(object.alive) ? globalThis.Boolean(object.alive) : false,
    }
  },

  toJSON(message: CreateCharacterRequest): unknown {
    const obj: any = {}
    if (message.name !== '') {
      obj.name = message.name
    }
    if (message.people !== 0) {
      obj.people = peopleToJSON(message.people)
    }
    if (message.alive !== false) {
      obj.alive = message.alive
    }
    return obj
  },

  create(base?: DeepPartial<CreateCharacterRequest>): CreateCharacterRequest {
    return CreateCharacterRequest.fromPartial(base ?? {})
  },
  fromPartial(object: DeepPartial<CreateCharacterRequest>): CreateCharacterRequest {
    const message = createBaseCreateCharacterRequest()
    message.name = object.name ?? ''
    message.people = object.people ?? 0
    message.alive = object.alive ?? false
    return message
  },
}

function createBaseCreateCharacterResponse(): CreateCharacterResponse {
  return { character: undefined }
}

export const CreateCharacterResponse: MessageFns<CreateCharacterResponse> = {
  encode(
    message: CreateCharacterResponse,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.character !== undefined) {
      Character.encode(message.character, writer.uint32(10).fork()).join()
    }
    return writer
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateCharacterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreateCharacterResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.character = Character.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): CreateCharacterResponse {
    return { character: isSet(object.character) ? Character.fromJSON(object.character) : undefined }
  },

  toJSON(message: CreateCharacterResponse): unknown {
    const obj: any = {}
    if (message.character !== undefined) {
      obj.character = Character.toJSON(message.character)
    }
    return obj
  },

  create(base?: DeepPartial<CreateCharacterResponse>): CreateCharacterResponse {
    return CreateCharacterResponse.fromPartial(base ?? {})
  },
  fromPartial(object: DeepPartial<CreateCharacterResponse>): CreateCharacterResponse {
    const message = createBaseCreateCharacterResponse()
    message.character =
      object.character !== undefined && object.character !== null
        ? Character.fromPartial(object.character)
        : undefined
    return message
  },
}

function createBaseUpdateCharacterRequest(): UpdateCharacterRequest {
  return { id: '', name: '', people: 0, alive: false }
}

export const UpdateCharacterRequest: MessageFns<UpdateCharacterRequest> = {
  encode(message: UpdateCharacterRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.people !== 0) {
      writer.uint32(24).int32(message.people)
    }
    if (message.alive !== false) {
      writer.uint32(32).bool(message.alive)
    }
    return writer
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateCharacterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUpdateCharacterRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.id = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.name = reader.string()
          continue
        case 3:
          if (tag !== 24) {
            break
          }

          message.people = reader.int32() as any
          continue
        case 4:
          if (tag !== 32) {
            break
          }

          message.alive = reader.bool()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): UpdateCharacterRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      people: isSet(object.people) ? peopleFromJSON(object.people) : 0,
      alive: isSet(object.alive) ? globalThis.Boolean(object.alive) : false,
    }
  },

  toJSON(message: UpdateCharacterRequest): unknown {
    const obj: any = {}
    if (message.id !== '') {
      obj.id = message.id
    }
    if (message.name !== '') {
      obj.name = message.name
    }
    if (message.people !== 0) {
      obj.people = peopleToJSON(message.people)
    }
    if (message.alive !== false) {
      obj.alive = message.alive
    }
    return obj
  },

  create(base?: DeepPartial<UpdateCharacterRequest>): UpdateCharacterRequest {
    return UpdateCharacterRequest.fromPartial(base ?? {})
  },
  fromPartial(object: DeepPartial<UpdateCharacterRequest>): UpdateCharacterRequest {
    const message = createBaseUpdateCharacterRequest()
    message.id = object.id ?? ''
    message.name = object.name ?? ''
    message.people = object.people ?? 0
    message.alive = object.alive ?? false
    return message
  },
}

function createBaseUpdateCharacterResponse(): UpdateCharacterResponse {
  return { character: undefined }
}

export const UpdateCharacterResponse: MessageFns<UpdateCharacterResponse> = {
  encode(
    message: UpdateCharacterResponse,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.character !== undefined) {
      Character.encode(message.character, writer.uint32(10).fork()).join()
    }
    return writer
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateCharacterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseUpdateCharacterResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.character = Character.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): UpdateCharacterResponse {
    return { character: isSet(object.character) ? Character.fromJSON(object.character) : undefined }
  },

  toJSON(message: UpdateCharacterResponse): unknown {
    const obj: any = {}
    if (message.character !== undefined) {
      obj.character = Character.toJSON(message.character)
    }
    return obj
  },

  create(base?: DeepPartial<UpdateCharacterResponse>): UpdateCharacterResponse {
    return UpdateCharacterResponse.fromPartial(base ?? {})
  },
  fromPartial(object: DeepPartial<UpdateCharacterResponse>): UpdateCharacterResponse {
    const message = createBaseUpdateCharacterResponse()
    message.character =
      object.character !== undefined && object.character !== null
        ? Character.fromPartial(object.character)
        : undefined
    return message
  },
}

function createBaseDeleteCharacterRequest(): DeleteCharacterRequest {
  return { id: '' }
}

export const DeleteCharacterRequest: MessageFns<DeleteCharacterRequest> = {
  encode(message: DeleteCharacterRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    return writer
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteCharacterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeleteCharacterRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.id = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): DeleteCharacterRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' }
  },

  toJSON(message: DeleteCharacterRequest): unknown {
    const obj: any = {}
    if (message.id !== '') {
      obj.id = message.id
    }
    return obj
  },

  create(base?: DeepPartial<DeleteCharacterRequest>): DeleteCharacterRequest {
    return DeleteCharacterRequest.fromPartial(base ?? {})
  },
  fromPartial(object: DeepPartial<DeleteCharacterRequest>): DeleteCharacterRequest {
    const message = createBaseDeleteCharacterRequest()
    message.id = object.id ?? ''
    return message
  },
}

function createBaseDeleteCharacterResponse(): DeleteCharacterResponse {
  return { id: '' }
}

export const DeleteCharacterResponse: MessageFns<DeleteCharacterResponse> = {
  encode(
    message: DeleteCharacterResponse,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    return writer
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteCharacterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDeleteCharacterResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.id = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): DeleteCharacterResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' }
  },

  toJSON(message: DeleteCharacterResponse): unknown {
    const obj: any = {}
    if (message.id !== '') {
      obj.id = message.id
    }
    return obj
  },

  create(base?: DeepPartial<DeleteCharacterResponse>): DeleteCharacterResponse {
    return DeleteCharacterResponse.fromPartial(base ?? {})
  },
  fromPartial(object: DeepPartial<DeleteCharacterResponse>): DeleteCharacterResponse {
    const message = createBaseDeleteCharacterResponse()
    message.id = object.id ?? ''
    return message
  },
}

export type CharacterServiceDefinition = typeof CharacterServiceDefinition
export const CharacterServiceDefinition = {
  name: 'CharacterService',
  fullName: 'gatica.middleearth.v1.CharacterService',
  methods: {
    getCharacters: {
      name: 'GetCharacters',
      requestType: GetCharactersRequest,
      requestStream: false,
      responseType: GetCharactersResponse,
      responseStream: false,
      options: { idempotencyLevel: 'NO_SIDE_EFFECTS' },
    },
    createCharacter: {
      name: 'CreateCharacter',
      requestType: CreateCharacterRequest,
      requestStream: false,
      responseType: CreateCharacterResponse,
      responseStream: false,
      options: {},
    },
    updateCharacter: {
      name: 'UpdateCharacter',
      requestType: UpdateCharacterRequest,
      requestStream: false,
      responseType: UpdateCharacterResponse,
      responseStream: false,
      options: {},
    },
    deleteCharacter: {
      name: 'DeleteCharacter',
      requestType: DeleteCharacterRequest,
      requestStream: false,
      responseType: DeleteCharacterResponse,
      responseStream: false,
      options: { idempotencyLevel: 'IDEMPOTENT' },
    },
  },
} as const

export interface CharacterServiceImplementation<CallContextExt = {}> {
  getCharacters(
    request: GetCharactersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetCharactersResponse>>
  createCharacter(
    request: CreateCharacterRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateCharacterResponse>>
  updateCharacter(
    request: UpdateCharacterRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UpdateCharacterResponse>>
  deleteCharacter(
    request: DeleteCharacterRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<DeleteCharacterResponse>>
}

export interface CharacterServiceClient<CallOptionsExt = {}> {
  getCharacters(
    request: DeepPartial<GetCharactersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetCharactersResponse>
  createCharacter(
    request: DeepPartial<CreateCharacterRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateCharacterResponse>
  updateCharacter(
    request: DeepPartial<UpdateCharacterRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UpdateCharacterResponse>
  deleteCharacter(
    request: DeepPartial<DeleteCharacterRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<DeleteCharacterResponse>
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
    ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends {}
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter
  decode(input: BinaryReader | Uint8Array, length?: number): T
  fromJSON(object: any): T
  toJSON(message: T): unknown
  create(base?: DeepPartial<T>): T
  fromPartial(object: DeepPartial<T>): T
}

import conversation from './conversation'

const Init = {
  name: '',
  messageList: [],
  conversationList: [],
  loading: false,
  error: null
}

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));

beforeEach(() => {
  console.log('beforeEach 111')
})

afterEach(() => {
  console.log('afterEach 111')
})


describe('test initial reducer', () => {
  beforeEach(() => {
    console.log('beforeEach 222')
  })
  
  afterEach(() => {
    console.log('afterEach 222')
  })
  test('test initial states', () => {
    const action = {
      type: 'test'
    }
    expect(conversation(Init, action).loading).toBeFalsy()
  })
  test('test initial states', () => {
    const action = {
      type: 'test'
    }
    expect(conversation(Init, action).error).toBeNull()
  })
})


test('test SAVE_USERNAME', () => {
  const action = {
    type: 'SAVE_USERNAME',
    payload: 'zahra'
  }
  expect(conversation(Init, action).name).toBe('zahra')
})


async function () {
  let token = await localStorage.getItem('token')
  fetchData(token)
}

function fetchData(token) {
  console.log(token)
}
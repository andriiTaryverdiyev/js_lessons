import {} from "./index"
it('shoud return null if array is empty', () => {
    const result = sendMessage('Anna')

    expect(result).toEqual('Hello, Anna! Just learn it! This message was sent by Gromcode')
})
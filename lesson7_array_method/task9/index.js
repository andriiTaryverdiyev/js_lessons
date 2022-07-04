const withdraw = (clients, balances, client, amount) => {
    let i = (clients.indexOf(client))
    console.log(balances[i] > amount ? balances[i] -= amount : -1)
}

//example 1:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
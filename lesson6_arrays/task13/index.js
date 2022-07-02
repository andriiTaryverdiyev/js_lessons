function widthdraw(clients,balances,client,amount){
    for(let i=0;i<clients.length;i++){
        if(clients[i]===client){
            console.log(clients[i])
            if(balances[i]>=amount){
                balances[i]-= amount
                return balances[i]
            }
            else {
                return -1
            }
            
        }
    }
}
widthdraw(['Jhon','Gaspar','Pederast'],[1500,20,2000],'Gaspar',50)

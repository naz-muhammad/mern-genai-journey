function printTable(table,tableEnd){
    for(let i = 1; i<=tableEnd; i++){
        console.log(`${table} x ${i} = ${table * i}`)
    }
}

printTable(9,10)


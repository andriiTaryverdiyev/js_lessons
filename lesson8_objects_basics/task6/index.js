const pickProps = (obj, props) => {
    let ob = {}
    for (let key in obj) {
        if (props.includes(key)) {
            ob[key] = obj[key]
        }
    }
    console.log(ob)
};

// examples
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }
const Person = ({name, age}) => {
    let name_arr = name.split('');
    const msg = age >= 18 ? <h3>please go vote!</h3> : <h3>you must be 18</h3>
    const new_name = name_arr.length > 8 ? name_arr.splice(0, 6) : name
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {new_name}</p>
            <p>Age: {age}</p>
            <p>{msg}</p>
        </div>
    );
};
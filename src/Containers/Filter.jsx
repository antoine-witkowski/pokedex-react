const Filter = () => {

    //const [filter, setFilter] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // this.setState((prev) => ({
        //     list: [...prev.list, {content: event.target[0].value, done: false}]
        // }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="filter">Enter a pokemon type : </label>
            <input type="text" placeholder="water" name="filter"/>
        </form>
    )

}

export default Filter;

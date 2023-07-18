const Notification = () => {
    return (
        Array.from({ length: 100 }).map((val, id) => {
            return (
                <div key={id}>Hi {id + 1} </div>
            )
        })

    )
};
export default Notification;

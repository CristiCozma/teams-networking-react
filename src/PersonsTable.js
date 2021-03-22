function getValues() {
    const firstName = document.querySelector("input[name=firstName]").value;
    const lastName = document.querySelector("input[name=lastName]").value;
    const gitHub = document.querySelector("input[name=gitHub]").value;

    const person = {
        firstName,
        lastName,
        gitHub
    };
    return person;
}

export const PersonsTable = ({ teams, border, onSubmit }) => (
    <form onSubmit={e => {
        e.preventDefault();
        const values = getValues();
        onSubmit(values);
    }}>
        <table border={border}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Link</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team, index) => (
                    <tr key={index}>
                        <td>{team.firstName}</td >
                        <td>{team.lastName}</td>
                        <td><a target="_blank" href={team.gitHub}>Github</a></td>
                        <td>
                            <a href="#" className="delete-row" data-id="{person.id}">&#10006;</a>
                            <a href="#" className="edit-row" data-id="{person.id}">&#9998;</a>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td><input type="text" placeholder="Enter first name" required name="firstName" /></td>
                    <td><input type="text" placeholder="Enter last name" required name="lastName" /></td>
                    <td><input type="text" placeholder="GitHub account" required name="gitHub" /></td>
                    <td><button type="submit">Save</button></td>
                </tr>
            </tfoot>
        </table>
    </form>
);
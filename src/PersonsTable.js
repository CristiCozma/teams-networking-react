export const PersonsTable = (props) => (
    <table border="1">

        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Link</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {props.teams.map((team, index) => (
                <tr key={index}>
                    <td>{team.firstName}</td >
                    <td>{team.lastName}</td>
                    <td><a target="_blank" href={team.gitHub}>Github</a></td>
                    <td>
                        <a href="#" class="delete-row" data-id="{person.id}">&#10006;</a>
                        <a href="#" class="edit-row" data-id="{person.id}">&#9998;</a>
                    </td>
                </tr>
            ))}
        </tbody>
        <tfoot>
            <tr>
                <td><input type="text" placeholder="Enter first name" name="firstName" /></td>
                <td><input type="text" placeholder="Enter last name" name="lastName" /></td>
                <td><input type="text" placeholder="GitHub account" name="gitHub" /></td>
                <td><button>Save</button></td>
            </tr>
        </tfoot>
    </table>
);
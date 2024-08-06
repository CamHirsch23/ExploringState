import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Alex',
            hobbies: ['Reading', 'Gaming', 'Cooking'],
            isEditing: false
        };
        this.changeName = this.changeName.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    changeName() {
        this.setState({ name: 'Charlie' });
    }

    toggleEditMode() {
        this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
    }

    render() {
        const { name, hobbies, isEditing } = this.state;

        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {name}</p>
                <button onClick={this.changeName}>Change Name</button>
                <button onClick={this.toggleEditMode}>
                    {isEditing ? 'View' : 'Edit'}
                </button>
                {isEditing ? (
                    <div>
                        <h2>Edit Mode</h2>
                        {/* Add form elements for editing user details here */}
                    </div>
                ) : (
                    <div>
                        <h2>Hobbies</h2>
                        <ul>
                            {hobbies.map((hobby, index) => (
                                <li key={index}>{hobby}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default UserProfile;
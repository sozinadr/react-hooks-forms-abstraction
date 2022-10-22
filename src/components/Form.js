import React, { useState } from "react";

function Form() {


    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
        const [formData, setFormData] = useState({
            firstName: "John",
            middleInitial: "B",
            lastName: "Henry",
            admin: false,
        });



        function handleChange(event) {
            const name = event.target.name;
            let value = event.target.value;

            console.log(name)
            console.log(value)


            if (event.target.type === "checkbox") {
                value = event.target.checked;
            }

            setFormData({...formData, [name]: value, })
        }

        function handleLastNameChange(event) {
            setLastName(event.target.value);

            function handleSubmit(event) {
                event.preventDefault();
                console.log(formData);
            }

            return ( <

                form onSubmit = { handleSubmit } >
                <
                input type = "text"
                name = "firstName"
                onChange = { handleChange }
                value = { formData.firstName }
                /> <
                input type = "text"
                name = "middleInitial"
                onChange = { handleChange }
                value = { formData.middleInitial }
                /> <
                input type = "text"
                name = "lastName"
                onChange = { handleChange }
                value = { formData.lastName }
                /> <
                input type = "checkbox"
                name = "admin"
                onChange = { handleChange }
                checked = { formData.admin }
                /> <
                button type = "submit" > Submit < /button> < /
                form >
            );
        }
        export default Form;
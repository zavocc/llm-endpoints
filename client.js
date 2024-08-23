document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sendbutton').addEventListener('click', function() {
        const input = document.getElementById("chatinput").value;
        if (input == "/help") {
            const chatbox = document.getElementById("chatbox");
            const responseElement = document.createElement("p");
            responseElement.innerHTML = "Hi";

            // set class attribute
            responseElement.setAttribute("class", "box");

            // append to chatbox
            chatbox.appendChild(responseElement);
        }
    })
})

 function highlight() {
            //Write your code here
            const strongElements = document.getElementsByTagName('strong');
            for (let i = 0; i < strongElements.length; i++) {
                strongElements[i].style.backgroundColor = 'yellow';

            }
        }

        function return_normal() {
            //Write your code here

            const strongElements = document.getElementsByTagName('strong');
            for (let i = 0; i < strongElements.length; i++) {
                strongElements[i].style.backgroundColor = 'transparent';
            }
        }
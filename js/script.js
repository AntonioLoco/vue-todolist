/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/

const { createApp } = Vue;

createApp({
    data(){
        return{
            newTodo: {
                text: "",
                done: false
            },
            isError: null,
            toDoList: [
                {
                    text: "Fare colazione",
                    done: false
                },
                {
                    text: "Fare esercizio",
                    done: false
                }
            ]
        }
    },
    methods: {
        removeToDo(indexOfTodo){
            this.toDoList.splice(indexOfTodo, 1);
        },
        addTodoUser(){
            if(this.newTodo.text.length < 5){
                this.isError = true;
            } else {
                this.toDoList.push({...this.newTodo});
                this.newTodo.text = "";
                this.isError = false;
            }
        }
    }
}).mount("#app");
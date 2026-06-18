let form = document.querySelector('form')
const userManager = {
    users: [],
    init: function (){
        form.addEventListener("submit", this.submitForm.bind(this))
    },
    submitForm: function (elem) {
        elem.prevantDefault()
        console.log("helo");
        
    },
    addUser: function () {},
    removeUser: function () {},

}


userManager.init();
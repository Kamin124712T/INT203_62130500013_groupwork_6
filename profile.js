const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
        },        
    },
    chosenCountry: {
        presence: true
    }
}

const app =Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            email: null,
            phone: null,
            chosenCountry: null,
            country_lists: [{country_id: 1, country_name:'Thai'},
                            {country_id: 2, country_name: 'USA'},
                            {country_id: 3, country_name: 'UK'},
                            {country_id: 4, country_name: 'UAE'}],
            errors: [],
        }
    },
    methods: {
        checkForm(e){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    email: this.email,
                                    phone: this.phone,
                                    chosenCountry: this.chosenCountry},
                                    constraints)
            console.log(this.errors)
            if(!this.errors){
                this.errors = []
                setTimeout(() => {
                    alert("Save Changes successfully.")
                  }, 500)
            }
        },
        clear(){
            this.firstname = null,
            this.lastname = null,
            this.email = null,
            this.phone = null,
            this.chosenCountry=  null
        }
    }
})

app.mount('#app')



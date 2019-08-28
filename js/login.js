let app = new Vue({
    el: '.form-signin',
    data: {
        errorMessage: "",
        hasError: false,
        userName: "",
        password: ""
    },
    methods: {
        login: function () {
            app.hasError = false;
            let randomUrl = Math.round(Math.random()) === 1 ?
                "data/login-failure.json" :
                "data/login-success.json";

            qwest.setDefaultOptions({cache: true});

            qwest.get(
                randomUrl, {user: app.userName, pswd: app.password}
            ).then(
                function (xhr, msg) {
                    if (msg.success) {
                        document.location = "home.html";
                    }
                    else {
                        app.hasError = true;
                        app.errorMessage = msg.message;
                    }
                }
            );
        }
    }
});
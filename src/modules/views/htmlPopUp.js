export function getSignForm() {
    return `
    <div class="wrapper">

        <div class="form-wrapper sign-up" id="sign-up">
            <form action="#">
                <h2 class="sign__title">SignUp</h2>
                <div class="sign__inputBox">
                    <input type="email" name="email" required>
                    <label for="">Email</label>
                </div>
                <div class="sign__inputBox">
                    <input type="password" name="password" autocomplete="new-password" required>
                    <label>Password</label>
                </div>
                <div class="sign__inputBox">
                    <input type="password" name="password" autocomplete="new-password" required>
                    <label>Password</label>
                </div>
                <button type="submit" class="sign__submit btn">Registr</button>
                <div class="sign__link">
                    <p>Already have an account?
                        <a href="#" class="signIn-link">Sign In</a>
                    </p>
                </div>
            </form>
        </div>

        <div class="form-wrapper sign-in" id="sign-in">
            <form action="#" name="signin">
                <h2 class="sign__title">Login</h2>
                <div class="sign__inputBox">
                    <input type="email" name="email" required>
                    <label for="">email</label>
                </div>
                <div class="sign__inputBox">
                    <input type="password" name="password" required>
                    <label>Enter password</label>
                </div>
                <div class="sign__forgot_pass">
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" class="sign__submit btn">Login</button>
                <div class="sign__link">
                    <p>Don't have an account?
                        <a href="#" class="signUp-link">SignUp</a>
                    </p>
                </div>
            </form>
        </div>

    </div>
`;
}

export function getAddTaskForm() {
    return `<div class="wrapper">
    <div class="form">
        <div class="form-wrapper taskAdd" id="taskAdd">
            <form action="">
                <h2 class="taskAdd__title">Add descriptions task</h2>
                <div class="taskAdd__inputBox">
                    <input type="text" name="title" required />
                    <label for="title">Title</label>
                </div>
                <div class="taskAdd__inputBox">
                    <input type="text" name="description" required />
                    <label for="description">Description</label>
                </div>
                <div class="taskAdd__inputBox">
                    <input type="date" name="lead_time" required />
                </div>
                <div class="taskAdd__inputBox">
                    <input type="text" name="project" required />
                    <label for="project">project</label>
                </div>
                <div class="taskAdd__inputBox">
                    <input type="text" name="status" required />
                    <label for="status">status</label>
                </div>
                <div class="taskAdd__inputBox">
                    <input type="text" name="user" required />
                    <label for="user">user</label>
                </div>
                <button type="submit" class="taskAdd__submit btn">
                    Login
                </button>
            </form>
        </div>
    </div>
</div>`;
}

export function getRegErr() {
    return `
    <div class="regReq err">
        <h3 class="regReq__title">
            Пользователь с таким email уже существует. Введите другой
            email и попробуйте снова.
        </h3>
    </div>`;
}

export function getRegSucc() {
    return `
    <div class="regReq succ">
        <h3 class="regReq__title">
            Вы успешно зарегистрировались. Теперь можете авторизоваться.
        </h3>
    </div>`;
}

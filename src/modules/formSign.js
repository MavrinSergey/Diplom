export function getEntryForm() {
    
  return `
    <div class="wrapper">

        <div class="form-wrapper sign-up" id="sign-up">
            <form action="#">
                <h2 class="sign__title">SignUp</h2>
                <div class="sign__inputBox">
                    <input type="text" name="user-name" required>
                    <label for="">Username</label>
                </div>
                <div class="sign__inputBox">
                    <input type="email" name="email" required>
                    <label for="">Email</label>
                </div>
                <div class="sign__inputBox">
                    <input type="password" name="password" required>
                    <label>Password</label>
                </div>
                <button type="submit" class="sign__submit btn">Login</button>
                <div class="sign__link">
                    <p>Already have an acount?
                        <a href="#" class="signIn-link">Sign In</a>
                    </p>
                </div>
            </form>
        </div>

        <div class="form-wrapper sign-in" id="sign-in">
            <form action="#" name="signin">
                <h2 class="sign__title">Login</h2>
                <div class="sign__inputBox">
                    <input type="text" name="username" required>
                    <label for="">Username</label>
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
                    <p>Don't have an acount?
                        <a href="#" class="signUp-link">SignUp</a>
                    </p>
                </div>
            </form>
        </div>

    </div>
`
}
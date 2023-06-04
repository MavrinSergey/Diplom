export function getEntryForm() {
    return `
  <div class="form__entry-header">
    <span class="form__title">Вход</span>
    <picture id="form-entry-close" class="form__entry-close">
      <img src="./img/close.png" alt="Close">
    </picture>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">
      Логин
    </label>
    <input 
      type="email" 
      class="form-control" 
      id="email" 
      aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">
      Пароль
    </label>
    <input 
      type="password" 
      class="form-control" 
      id="password"/>
  </div>
  <div class="mb-3 form-check">
  <input 
    type="checkbox" 
    class="form-check-input" 
    id="exampleCheck1"/>
  <label class="form-check-label" for="exampleCheck1">
    Запомнить меня
  </label>
  </div>
  <button type="submit" class="btn btn-primary">Войти</button>
  `
}

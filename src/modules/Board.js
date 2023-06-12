export function Name(params) {
    console.log(params)
}

export function getScrumBoard() {
    return `
    <main class="main">
        <div class="main__title">
            <h1>ScrumBoard</h1>
        </div>

        <section class="board row">

            <div class="column col-sm-3">
                <div class="board-column-header" draggable>В работу</div>
                <div class="board-column-content-wrapper">
                ****
                </div>
            </div>

            <div class="column col-sm-3">
                <div class="board-column-header" draggable>В работе</div>
                <div class="board-column-content-wrapper"></div>
            </div>
            
            <div class="column col-sm-3">
                <div class="board-column-header" draggable>На согласовании</div>
                <div class="board-column-content-wrapper"></div>
            </div>

            <div class="column col-sm-3">
                <div class="board-column-header" draggable>Завершено</div>
                <div class="board-column-content-wrapper"></div>
            </div>
        </section>
    </main>
  `
}
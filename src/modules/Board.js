export function getScrumBoard() {
    return `
    <div class="column col-sm-3">
        <div class="board-column-header">В работу</div>
        <div class="board-column-content-wrapper" id="to-work"></div>
    </div>

    <div class="column col-sm-3">
        <div class="board-column-header">В работе</div>
        <div class="board-column-content-wrapper"  id="in-work"></div>
    </div>
    
    <div class="column col-sm-3">
        <div class="board-column-header">На согласовании</div>
        <div class="board-column-content-wrapper" id="agreement"></div>
    </div>

    <div class="column col-sm-3">
        <div class="board-column-header">Завершено</div>
        <div class="board-column-content-wrapper" id="completed"></div>
    </div>
  `
}

export function getItemScrumBoard(title = null, dateCreation = null, updateDate = null, leadTime = null) {
    return `
    <div class="board-item__content">
    <div class="board-item__content-header">
        <h4>${title}</h4>
    </div>
    <div class="board-item__content-date">
        <div class="board-item__content-date-row">Дата создания: <span>${dateCreation}</span></div>
        <div class="board-item__content-date-row">Дата обнавления: <span>${updateDate}</span></div>
        <div class="board-item__content-date-row">Дата завершения: <span>${leadTime}</span></div>
    </div>
  `
}